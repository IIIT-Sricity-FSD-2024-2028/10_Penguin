// ═══════════════════════════════════════════════════════════════
// INTEGRATION BRIDGE — EventFlow
// Connects AppState (local) with the NestJS backend (http://localhost:3002)
// All CRUD ops call the backend FIRST, then update AppState for instant UI.
// Falls back to local state if backend is offline.
// ═══════════════════════════════════════════════════════════════

const API_BASE = 'http://localhost:3002/api';
let _backendOnline = null; // null = unknown, true/false = checked

// ─── Role helpers ─────────────────────────────────────────────
function _getRole() {
  try {
    const u = JSON.parse(sessionStorage.getItem('ef_cu') || 'null');
    if (!u) return 'super_admin'; // default for demo
    const r = (u.role || u.userRole || '').toLowerCase();
    const map = {
      superuser: 'super_admin', super_admin: 'super_admin', admin: 'super_admin',
      organizer: 'event_organizer', event_organizer: 'event_organizer',
      staff: 'event_staff', event_staff: 'event_staff',
      client: 'client', attendee: 'attendee',
    };
    return map[r] || r || 'super_admin';
  } catch (e) { return 'super_admin'; }
}

function _getUserId() {
  try {
    const u = JSON.parse(sessionStorage.getItem('ef_cu') || 'null');
    return u ? (u.userId || u.id || '') : '';
  } catch (e) { return ''; }
}

// ─── Core HTTP helper ────────────────────────────────────────
async function _apiFetch(path, opts = {}) {
  const role = opts._role || _getRole();
  const userId = opts._userId || _getUserId();
  const { _role, _userId, ...rest } = opts;

  const res = await fetch(`${API_BASE}${path}`, {
    ...rest,
    headers: {
      'Content-Type': 'application/json',
      'x-role': role,
      ...(userId ? { 'x-user-id': String(userId) } : {}),
      ...(rest.headers || {}),
    },
  });

  const ct = res.headers.get('content-type') || '';
  const data = ct.includes('application/json') ? await res.json() : { message: await res.text() };
  if (!res.ok) throw new Error(Array.isArray(data?.message) ? data.message.join(', ') : (data?.message || `HTTP ${res.status}`));
  return data;
}

// ─── Check if backend is online (cached for 30s) ─────────────
async function _isBackendOnline() {
  if (_backendOnline !== null) return _backendOnline;
  try {
    await fetch(`${API_BASE}/events?_t=${Date.now()}`, {
      headers: { 'x-role': 'super_admin' }, signal: AbortSignal.timeout(3000),
    });
    _backendOnline = true;
  } catch { _backendOnline = false; }
  setTimeout(() => { _backendOnline = null; }, 30000);
  return _backendOnline;
}

// ─── Toast notification ───────────────────────────────────────
function _toast(msg, type = 'info') {
  if (typeof toast === 'function') { toast(msg, type); return; }
  // Fallback mini-toast
  const t = document.createElement('div');
  const colors = { success: '#22d3a5', error: '#f56565', info: '#4299e1', warning: '#f6c90e' };
  Object.assign(t.style, {
    position: 'fixed', bottom: '24px', right: '24px', zIndex: '9999',
    background: colors[type] || colors.info, color: type === 'warning' ? '#1a1400' : '#fff',
    padding: '12px 20px', borderRadius: '10px', fontFamily: 'DM Sans,sans-serif',
    fontSize: '14px', boxShadow: '0 4px 20px rgba(0,0,0,.5)', transition: 'opacity .3s',
  });
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; setTimeout(() => t.remove(), 300); }, 3000);
}

// ═══════════════════ EVENTS CRUD ═══════════════════

/**
 * Load events from backend into AppState, then re-render.
 * Uses /api/events/admin (all events) for admin role, /api/events for others.
 */
async function loadEventsFromBackend() {
  try {
    const role = _getRole();
    const path = (role === 'super_admin' || role === 'event_organizer') ? '/events/admin' : '/events';
    const data = await _apiFetch(path);
    const events = Array.isArray(data) ? data : [];
    // Merge into AppState (backend is source of truth)
    AppState.events = events;
    window.AppState = AppState;
    return events;
  } catch (err) {
    console.warn('[Integration] Could not load events from backend:', err.message);
    return AppState.events || [];
  }
}

/**
 * Create event via API, then push into AppState + update UI.
 */
async function apiCreateEventIntegrated(eventData) {
  const payload = {
    name: eventData.title || eventData.name,
    title: eventData.title || eventData.name,
    category: eventData.category || 'General',
    date: eventData.date,
    time: eventData.time || '09:00 AM',
    location: eventData.location || eventData.city || '',
    city: eventData.city || '',
    capacity: Number(eventData.capacity) || 100,
    ticketPrice: Number(eventData.price ?? eventData.ticketPrice ?? 0),
    price: Number(eventData.price ?? eventData.ticketPrice ?? 0),
    description: eventData.description || '',
    _role: 'event_organizer',
  };

  try {
    const created = await _apiFetch('/events', {
      method: 'POST',
      body: JSON.stringify(payload),
      _role: 'event_organizer',
    });
    AppState.events.push(created);
    window.AppState = AppState;
    saveState();
    _toast(`Event "${created.title || created.name}" created ✓`, 'success');
    _refreshEventDisplays();
    return created;
  } catch (err) {
    _toast(`Backend error: ${err.message}. Saved locally.`, 'warning');
    // Fallback to local
    return createEvent(eventData);
  }
}

/**
 * Update event via API, then patch AppState + update UI.
 */
async function apiUpdateEventIntegrated(eventId, updates) {
  const resolvedId = eventId.startsWith('evt-') ? eventId : _resolveEventId(eventId);
  try {
    const updated = await _apiFetch(`/events/${resolvedId}`, {
      method: 'PUT',
      body: JSON.stringify({ ...updates, _role: undefined }),
      _role: 'super_admin',
    });
    const idx = AppState.events.findIndex(e => e.eventId === resolvedId || e.id === resolvedId);
    if (idx > -1) AppState.events[idx] = updated;
    window.AppState = AppState;
    saveState();
    _toast(`Event updated ✓`, 'success');
    _refreshEventDisplays();
    return updated;
  } catch (err) {
    _toast(`Backend error: ${err.message}. Updated locally.`, 'warning');
    return updateEvent(eventId, updates);
  }
}

/**
 * Delete event via API, then remove from AppState + update UI.
 */
async function apiDeleteEventIntegrated(eventId) {
  const resolvedId = _resolveEventId(eventId);
  try {
    await _apiFetch(`/events/${resolvedId}`, { method: 'DELETE', _role: 'super_admin' });
    AppState.events = AppState.events.filter(e => e.eventId !== resolvedId && e.id !== resolvedId);
    AppState.registrations = AppState.registrations.filter(r => r.eventId !== resolvedId);
    window.AppState = AppState;
    saveState();
    _toast('Event deleted ✓', 'info');
    _refreshEventDisplays();
    return true;
  } catch (err) {
    _toast(`Backend error: ${err.message}. Deleted locally.`, 'warning');
    return deleteEvent(eventId);
  }
}

// ═══════════════════ ATTENDEES CRUD ═══════════════════

/**
 * Load attendees from backend into AppState.
 */
async function loadAttendeesFromBackend() {
  try {
    const data = await _apiFetch('/attendees', { _role: 'super_admin' });
    AppState._attendees = Array.isArray(data) ? data : [];
    window.AppState = AppState;
    return AppState._attendees;
  } catch (err) {
    console.warn('[Integration] Could not load attendees:', err.message);
    return AppState._attendees || [];
  }
}

/**
 * Create attendee via API.
 */
async function apiCreateAttendeeIntegrated(attendeeData) {
  try {
    const created = await _apiFetch('/attendees', {
      method: 'POST',
      body: JSON.stringify({
        name: attendeeData.name,
        email: attendeeData.email,
        phone: attendeeData.phone || '',
        password: attendeeData.password || 'Attendee@123',
      }),
      _role: 'super_admin',
    });
    if (!AppState._attendees) AppState._attendees = [];
    AppState._attendees.push(created);
    window.AppState = AppState;
    _toast(`Attendee "${created.name}" added ✓`, 'success');
    _refreshAttendeeDisplays();
    return created;
  } catch (err) {
    _toast(`Error: ${err.message}`, 'error');
    throw err;
  }
}

/**
 * Update attendee via API.
 */
async function apiUpdateAttendeeIntegrated(attendeeId, updates) {
  try {
    const updated = await _apiFetch(`/attendees/${attendeeId}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
      _role: 'super_admin',
    });
    if (AppState._attendees) {
      const idx = AppState._attendees.findIndex(a => a.attendeeId === attendeeId || a.id === attendeeId);
      if (idx > -1) AppState._attendees[idx] = updated;
    }
    window.AppState = AppState;
    _toast('Attendee updated ✓', 'success');
    _refreshAttendeeDisplays();
    return updated;
  } catch (err) {
    _toast(`Error: ${err.message}`, 'error');
    throw err;
  }
}

/**
 * Delete attendee via API.
 */
async function apiDeleteAttendeeIntegrated(attendeeId) {
  try {
    await _apiFetch(`/attendees/${attendeeId}`, { method: 'DELETE', _role: 'super_admin' });
    if (AppState._attendees) {
      AppState._attendees = AppState._attendees.filter(a => a.attendeeId !== attendeeId && a.id !== attendeeId);
    }
    window.AppState = AppState;
    _toast('Attendee deleted ✓', 'info');
    _refreshAttendeeDisplays();
    return true;
  } catch (err) {
    _toast(`Error: ${err.message}`, 'error');
    throw err;
  }
}

// ═══════════════════ INTERNAL HELPERS ═══════════════════

function _resolveEventId(frontendId) {
  // Try to find the actual eventId (backend format) from AppState
  const ev = AppState.events.find(e => e.id === frontendId || e.eventId === frontendId);
  return ev ? (ev.eventId || ev.id) : frontendId;
}

function _refreshEventDisplays() {
  try { if (typeof renderEventsTable === 'function') renderEventsTable('eventsTableContainer', AppState.events); } catch (_) {}
  try { if (typeof renderEventCards === 'function') {
    const cu = AppState.currentUser;
    renderEventCards('eventsContainer', AppState.events, cu?.role === 'attendee');
  }} catch (_) {}
  try { if (typeof updateAllTables === 'function') updateAllTables(); } catch (_) {}
}

function _refreshAttendeeDisplays() {
  try {
    if (typeof renderAttendeesTable === 'function') renderAttendeesTable('attendeesTableContainer', AppState._attendees);
  } catch (_) {}
  try { if (typeof updateAllTables === 'function') updateAllTables(); } catch (_) {}
}

// ═══════════════════ BOOT — load on page ready ═══════════════════

async function integrateWithBackend() {
  const online = await _isBackendOnline();
  if (!online) {
    console.warn('[Integration] Backend offline — using local demo data');
    return;
  }
  console.log('[Integration] Backend online — loading live data');

  // Load events first (most critical)
  await loadEventsFromBackend();
  _refreshEventDisplays();

  // Load attendees for admin views
  const role = _getRole();
  if (role === 'super_admin' || role === 'event_organizer') {
    await loadAttendeesFromBackend();
    _refreshAttendeeDisplays();
  }
}

// Run integration after DOM + existing scripts load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => setTimeout(integrateWithBackend, 300));
} else {
  setTimeout(integrateWithBackend, 300);
}

// ─── Expose globals ───────────────────────────────────────────
window.loadEventsFromBackend      = loadEventsFromBackend;
window.loadAttendeesFromBackend   = loadAttendeesFromBackend;
window.apiCreateEventIntegrated   = apiCreateEventIntegrated;
window.apiUpdateEventIntegrated   = apiUpdateEventIntegrated;
window.apiDeleteEventIntegrated   = apiDeleteEventIntegrated;
window.apiCreateAttendeeIntegrated = apiCreateAttendeeIntegrated;
window.apiUpdateAttendeeIntegrated = apiUpdateAttendeeIntegrated;
window.apiDeleteAttendeeIntegrated = apiDeleteAttendeeIntegrated;
window.integrateWithBackend       = integrateWithBackend;

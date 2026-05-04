// ═══════════════════════════════════════════════════════════════
// CENTRAL API UTILITY — EventFlow Backend Integration
// All backend calls are routed through this file.
// Backend: http://localhost:3002/api
// ═══════════════════════════════════════════════════════════════

const API_BASE_URL = 'http://localhost:3002/api';
const SESSION_KEY = 'ef_cu';

// ─── Role Normalisation ─────────────────────────────────────────
// Maps frontend role strings → backend x-role header values
const ROLE_MAP = {
  superuser:       'super_admin',
  super_admin:     'super_admin',
  'super-user':    'super_admin',
  admin:           'super_admin',
  organizer:       'event_organizer',
  event_organizer: 'event_organizer',
  'event-organizer': 'event_organizer',
  client:          'client',
  staff:           'event_staff',
  event_staff:     'event_staff',
  'event-staff':   'event_staff',
  attendee:        'attendee',
};

function normalizeRole(role) {
  return ROLE_MAP[(role || '').toLowerCase()] || (role || '').toLowerCase();
}

// ─── Session Helpers ─────────────────────────────────────────────
function getCurrentUser() {
  try {
    const s = sessionStorage.getItem(SESSION_KEY);
    return s ? JSON.parse(s) : null;
  } catch (e) { return null; }
}

function setCurrentUser(user) {
  try { sessionStorage.setItem(SESSION_KEY, JSON.stringify(user)); } catch (e) {}
}

function clearCurrentUser() {
  try { sessionStorage.removeItem(SESSION_KEY); } catch (e) {}
}

// ─── Header Helpers ──────────────────────────────────────────────
function getRoleHeader() {
  const u = getCurrentUser();
  return u ? normalizeRole(u.role || u.userRole || '') : '';
}

function getUserIdHeader() {
  const u = getCurrentUser();
  return u ? (u.userId || u.id || '') : '';
}

// ─── Core Fetch Wrapper ──────────────────────────────────────────
async function apiRequest(endpoint, options = {}) {
  const role = options._role || getRoleHeader();
  const userId = options._userId || getUserIdHeader();

  const headers = {
    'Content-Type': 'application/json',
    ...(role ? { 'x-role': role } : {}),
    ...(userId ? { 'x-user-id': String(userId) } : {}),
    ...(options.headers || {}),
  };

  // Remove internal private keys
  const { _role, _userId, ...fetchOptions } = options;

  try {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...fetchOptions,
      headers,
    });

    let data = null;
    const ct = res.headers.get('content-type') || '';
    if (ct.includes('application/json')) {
      data = await res.json();
    } else {
      data = { message: await res.text() };
    }

    if (!res.ok) {
      const msg = Array.isArray(data?.message)
        ? data.message.join(', ')
        : (data?.message || `HTTP ${res.status}`);
      throw new ApiError(msg, res.status, data);
    }

    return data;
  } catch (e) {
    if (e instanceof ApiError) throw e;
    // Network error (backend offline)
    if (e.message && e.message.toLowerCase().includes('fetch')) {
      throw new ApiError('Backend server is offline. Please start the NestJS server on port 3001.', 0);
    }
    throw new ApiError(e.message || 'Unknown error', 0);
  }
}

// ─── API Error Class ─────────────────────────────────────────────
class ApiError extends Error {
  constructor(message, status, data = null) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

// ─── AUTH ────────────────────────────────────────────────────────
async function apiLogin(email, password) {
  const data = await apiRequest('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    _role: 'attendee', // public endpoint — any role header works
  });
  // Backend returns { success, message, data: { userId, name, email, userRole, status } }
  // Unwrap the envelope so the caller gets the flat user object
  if (data && data.data) return data.data;
  return data;
}

// ─── USERS ───────────────────────────────────────────────────────
async function apiGetUsers() {
  return apiRequest('/users', { _role: 'super_admin' });
}

async function apiCreateUser(userData) {
  return apiRequest('/users', {
    method: 'POST',
    body: JSON.stringify(userData),
    _role: 'super_admin',
  });
}

async function apiUpdateUser(userId, updates) {
  return apiRequest(`/users/${userId}`, {
    method: 'PATCH',
    body: JSON.stringify(updates),
    _role: 'super_admin',
    _userId: userId,
  });
}

async function apiDeleteUser(userId) {
  return apiRequest(`/users/${userId}`, {
    method: 'DELETE',
    _role: 'super_admin',
    _userId: userId,
  });
}

// ─── EVENTS ──────────────────────────────────────────────────
async function apiGetEvents() {
  return apiRequest('/events', { _role: getRoleHeader() || 'attendee' });
}

async function apiGetEventsAdmin(search, status) {
  const params = new URLSearchParams();
  if (search) params.set('search', search);
  if (status) params.set('status', status);
  const qs = params.toString() ? '?' + params.toString() : '';
  return apiRequest(`/events/admin${qs}`, { _role: 'super_admin' });
}

async function apiCreateEvent(eventData) {
  return apiRequest('/events', {
    method: 'POST',
    body: JSON.stringify(eventData),
    _role: 'event_organizer',
  });
}

async function apiUpdateEvent(eventId, updates) {
  return apiRequest(`/events/${eventId}`, {
    method: 'PUT',
    body: JSON.stringify(updates),
    _role: 'super_admin',
  });
}

async function apiDeleteEvent(eventId) {
  return apiRequest(`/events/${eventId}`, {
    method: 'DELETE',
    _role: 'super_admin',
  });
}

// ─── ATTENDEES ────────────────────────────────────────────────
async function apiGetAttendees(search) {
  const qs = search ? `?search=${encodeURIComponent(search)}` : '';
  return apiRequest(`/attendees${qs}`, { _role: 'super_admin' });
}

async function apiGetAttendee(attendeeId) {
  return apiRequest(`/attendees/${attendeeId}`, { _role: 'super_admin' });
}

async function apiCreateAttendee(data) {
  return apiRequest('/attendees', {
    method: 'POST',
    body: JSON.stringify(data),
    _role: 'super_admin',
  });
}

async function apiUpdateAttendee(attendeeId, updates) {
  return apiRequest(`/attendees/${attendeeId}`, {
    method: 'PUT',
    body: JSON.stringify(updates),
    _role: 'super_admin',
  });
}

async function apiDeleteAttendee(attendeeId) {
  return apiRequest(`/attendees/${attendeeId}`, {
    method: 'DELETE',
    _role: 'super_admin',
  });
}

async function apiGetAttendeesByEvent(eventId) {
  return apiRequest(`/attendees/event/${eventId}`, { _role: 'super_admin' });
}

// ─── ANALYTICS ───────────────────────────────────────────────────
async function apiGetDashboard() {
  return apiRequest('/analytics/dashboard', { _role: 'super_admin' });
}

async function apiGetOrganizerDashboard(organizerId) {
  return apiRequest('/analytics/organizer-dashboard', {
    _role: 'event_organizer',
    _userId: organizerId,
  });
}

// ─── EVENT REQUESTS ──────────────────────────────────────────────
async function apiGetEventRequests() {
  return apiRequest('/event-requests', { _role: getRoleHeader() });
}

async function apiGetClientRequests(clientId) {
  return apiRequest(`/event-requests/client/${clientId}`, {
    _role: 'client',
    _userId: clientId,
  });
}

async function apiGetOrganizerRequests(organizerId) {
  return apiRequest(`/event-requests/organizer/${organizerId}`, {
    _role: 'event_organizer',
    _userId: organizerId,
  });
}

async function apiCreateEventRequest(reqData) {
  return apiRequest('/event-requests', {
    method: 'POST',
    body: JSON.stringify(reqData),
    _role: 'client',
  });
}

async function apiUpdateRequestStatus(requestId, status) {
  return apiRequest(`/event-requests/${requestId}/status`, {
    method: 'PATCH',
    body: JSON.stringify({ status }),
    _role: 'event_organizer',
  });
}

// ─── EVENT PLANS ─────────────────────────────────────────────────
async function apiCreateEventPlan(planData) {
  return apiRequest('/event-plans', {
    method: 'POST',
    body: JSON.stringify(planData),
    _role: 'event_organizer',
  });
}

async function apiApproveEventPlan(planId, approvalStatus) {
  return apiRequest(`/event-plans/${planId}/approval`, {
    method: 'PATCH',
    body: JSON.stringify({ approvalStatus }),
    _role: 'client',
  });
}

// ─── REGISTRATIONS ───────────────────────────────────────────────
async function apiGetAttendeeRegistrations(attendeeId) {
  return apiRequest(`/registrations/attendee/${attendeeId}`, {
    _role: 'attendee',
    _userId: attendeeId,
  });
}

async function apiRegisterForEvent(regData) {
  return apiRequest('/registrations', {
    method: 'POST',
    body: JSON.stringify(regData),
    _role: 'attendee',
  });
}

// ─── PAYMENTS ────────────────────────────────────────────────────
async function apiMakePayment(paymentData) {
  return apiRequest('/payments', {
    method: 'POST',
    body: JSON.stringify(paymentData),
    _role: 'attendee',
  });
}

// ─── STAFF ASSIGNMENTS ───────────────────────────────────────────
async function apiGetStaffAssignments(staffId) {
  return apiRequest(`/staff-assignments/staff/${staffId}`, {
    _role: 'event_staff',
    _userId: staffId,
  });
}

async function apiCreateStaffAssignment(data) {
  return apiRequest('/staff-assignments', {
    method: 'POST',
    body: JSON.stringify(data),
    _role: 'event_organizer',
  });
}

async function apiUpdateAssignmentStatus(assignmentId, status) {
  return apiRequest(`/staff-assignments/${assignmentId}/status`, {
    method: 'PATCH',
    body: JSON.stringify({ status }),
    _role: 'event_staff',
  });
}

// ─── ATTENDANCE ──────────────────────────────────────────────────
async function apiVerifyAttendance(verifyData) {
  return apiRequest('/attendance/verify', {
    method: 'POST',
    body: JSON.stringify(verifyData),
    _role: 'event_staff',
  });
}

// ─── NOTIFICATIONS ───────────────────────────────────────────────
async function apiGetNotifications(userId) {
  return apiRequest(`/notifications/user/${userId}`, {
    _role: getRoleHeader(),
    _userId: userId,
  });
}

async function apiMarkAllNotificationsRead() {
  return apiRequest('/notifications/read-all', {
    method: 'PATCH',
    _role: getRoleHeader(),
  });
}

// ─── REPORTS ─────────────────────────────────────────────────────
async function apiCreateStaffReport(reportData) {
  return apiRequest('/reports/staff', {
    method: 'POST',
    body: JSON.stringify(reportData),
    _role: 'event_staff',
  });
}

async function apiCreateEventReport(reportData) {
  return apiRequest('/reports/event', {
    method: 'POST',
    body: JSON.stringify(reportData),
    _role: 'event_organizer',
  });
}

// ─── REVIEWS ─────────────────────────────────────────────────────
async function apiSubmitEventReview(reviewData) {
  return apiRequest('/reviews/event', {
    method: 'POST',
    body: JSON.stringify(reviewData),
    _role: 'attendee',
  });
}

// ─── ERROR DISPLAY ───────────────────────────────────────────────
function showApiError(message) {
  if (typeof toast === 'function') {
    toast(message, 'error');
  } else {
    console.error('[API Error]', message);
  }
}

function showApiSuccess(message) {
  if (typeof toast === 'function') {
    toast(message, 'success');
  } else {
    console.log('[API Success]', message);
  }
}

// ─── Export globals ──────────────────────────────────────────────
window.API_BASE_URL = API_BASE_URL;
window.normalizeRole = normalizeRole;
window.getCurrentUser = getCurrentUser;
window.setCurrentUser = setCurrentUser;
window.clearCurrentUser = clearCurrentUser;
window.getRoleHeader = getRoleHeader;
window.getUserIdHeader = getUserIdHeader;
window.apiRequest = apiRequest;
window.ApiError = ApiError;
window.apiLogin = apiLogin;
window.apiGetUsers = apiGetUsers;
window.apiCreateUser = apiCreateUser;
window.apiUpdateUser = apiUpdateUser;
window.apiDeleteUser = apiDeleteUser;
window.apiGetEvents = apiGetEvents;
window.apiGetEventsAdmin = apiGetEventsAdmin;
window.apiCreateEvent = apiCreateEvent;
window.apiUpdateEvent = apiUpdateEvent;
window.apiDeleteEvent = apiDeleteEvent;
window.apiGetAttendees = apiGetAttendees;
window.apiGetAttendee = apiGetAttendee;
window.apiCreateAttendee = apiCreateAttendee;
window.apiUpdateAttendee = apiUpdateAttendee;
window.apiDeleteAttendee = apiDeleteAttendee;
window.apiGetAttendeesByEvent = apiGetAttendeesByEvent;
window.apiGetDashboard = apiGetDashboard;
window.apiGetOrganizerDashboard = apiGetOrganizerDashboard;
window.apiGetEventRequests = apiGetEventRequests;
window.apiGetClientRequests = apiGetClientRequests;
window.apiGetOrganizerRequests = apiGetOrganizerRequests;
window.apiCreateEventRequest = apiCreateEventRequest;
window.apiUpdateRequestStatus = apiUpdateRequestStatus;
window.apiCreateEventPlan = apiCreateEventPlan;
window.apiApproveEventPlan = apiApproveEventPlan;
window.apiGetAttendeeRegistrations = apiGetAttendeeRegistrations;
window.apiRegisterForEvent = apiRegisterForEvent;
window.apiMakePayment = apiMakePayment;
window.apiGetStaffAssignments = apiGetStaffAssignments;
window.apiCreateStaffAssignment = apiCreateStaffAssignment;
window.apiUpdateAssignmentStatus = apiUpdateAssignmentStatus;
window.apiVerifyAttendance = apiVerifyAttendance;
window.apiGetNotifications = apiGetNotifications;
window.apiMarkAllNotificationsRead = apiMarkAllNotificationsRead;
window.apiCreateStaffReport = apiCreateStaffReport;
window.apiCreateEventReport = apiCreateEventReport;
window.apiSubmitEventReview = apiSubmitEventReview;
window.showApiError = showApiError;
window.showApiSuccess = showApiSuccess;

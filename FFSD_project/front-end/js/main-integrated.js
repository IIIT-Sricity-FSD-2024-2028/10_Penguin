/**
 * Main Event Manager with Frontend Integration
 * Replaces mock data with real API calls
 */

// Initialize API Service
const api = new ApiService('http://localhost:3002');

// ==================== UI STATE ====================

let currentUser = {
  role: localStorage.getItem('userRole') || 'attendee',
};

let appState = {
  events: [],
  attendees: [],
  staff: [],
  isLoading: false,
  error: null,
};

// ==================== INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', () => {
  initializeUI();
  loadEventsFromAPI();
  setupRoleListener();
});

/**
 * Initialize the UI based on user role
 */
function initializeUI() {
  updateRoleDisplay();
  applyRoleBasedUI();
  setupEventListeners();
}

/**
 * Setup all event listeners
 */
function setupEventListeners() {
  const roleSelect = document.getElementById('roleSelect');
  if (roleSelect) {
    roleSelect.addEventListener('change', (e) => {
      switchRole(e.target.value);
    });
  }

  const createEventBtn = document.getElementById('createEventBtn');
  if (createEventBtn) {
    createEventBtn.addEventListener('click', openCreateEventModal);
  }

  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      filterEvents(e.target.value);
    });
  }
}

/**
 * Switch user role
 */
function switchRole(role) {
  if (!['superuser', 'admin', 'attendee'].includes(role)) {
    return;
  }

  currentUser.role = role;
  api.setRole(role);
  localStorage.setItem('userRole', role);

  updateRoleDisplay();
  applyRoleBasedUI();
  loadEventsFromAPI();

  showNotification(`Switched to ${role} role`, 'success');
}

/**
 * Update role display in UI
 */
function updateRoleDisplay() {
  const roleDisplay = document.getElementById('currentRole');
  if (roleDisplay) {
    roleDisplay.textContent = `Current Role: ${currentUser.role.toUpperCase()}`;
    roleDisplay.className = `role-badge role-${currentUser.role}`;
  }

  const roleSelect = document.getElementById('roleSelect');
  if (roleSelect) {
    roleSelect.value = currentUser.role;
  }
}

/**
 * Apply role-based UI restrictions
 */
function applyRoleBasedUI() {
  const createEventBtn = document.getElementById('createEventBtn');
  const deleteButtons = document.querySelectorAll('.delete-event-btn');
  const updateButtons = document.querySelectorAll('.edit-event-btn');

  if (currentUser.role === 'attendee') {
    // Hide create button for attendees
    if (createEventBtn) createEventBtn.style.display = 'none';
    // Hide delete buttons for attendees
    deleteButtons.forEach((btn) => (btn.style.display = 'none'));
    // Hide edit buttons for attendees
    updateButtons.forEach((btn) => (btn.style.display = 'none'));
  } else {
    // Show for admin and superuser
    if (createEventBtn) createEventBtn.style.display = 'block';
    if (currentUser.role === 'superuser') {
      deleteButtons.forEach((btn) => (btn.style.display = 'block'));
    }
    updateButtons.forEach((btn) => (btn.style.display = 'block'));
  }

  // Apply to event list
  const eventList = document.getElementById('eventList');
  if (eventList) {
    eventList.innerHTML = '';
    loadEventsFromAPI();
  }
}

// ==================== API CALLS ====================

/**
 * Load events from backend API
 */
async function loadEventsFromAPI(search = '', status = '') {
  try {
    showLoading(true);
    appState.error = null;

    const events = await api.getEvents(search, status);
    appState.events = Array.isArray(events) ? events : [];

    displayEvents(appState.events);
    showLoading(false);
  } catch (error) {
    appState.error = error.message;
    showError(error.message);
    showLoading(false);
  }
}

/**
 * Filter events based on search
 */
function filterEvents(searchTerm) {
  loadEventsFromAPI(searchTerm);
}

/**
 * Create new event
 */
async function createEventFromForm() {
  const form = document.getElementById('createEventForm');
  if (!form) return;

  try {
    const eventData = {
      name: document.getElementById('eventName')?.value || '',
      description: document.getElementById('eventDescription')?.value || '',
      date: document.getElementById('eventDate')?.value || '',
      location: document.getElementById('eventLocation')?.value || '',
      capacity: parseInt(document.getElementById('eventCapacity')?.value || '100'),
      organizerId: 'staff-001', // You can make this dynamic
    };

    if (!eventData.name || !eventData.date) {
      showError('Event name and date are required');
      return;
    }

    showLoading(true);
    const newEvent = await api.createEvent(eventData);

    showNotification('Event created successfully!', 'success');
    form.reset();

    // Close modal if exists
    const modal = document.getElementById('createEventModal');
    if (modal) {
      modal.style.display = 'none';
    }

    // Reload events
    await loadEventsFromAPI();
  } catch (error) {
    showError(`Failed to create event: ${error.message}`);
  } finally {
    showLoading(false);
  }
}

/**
 * Update an event
 */
async function updateEvent(eventId) {
  try {
    const updateData = {
      name: prompt('New event name:'),
      status: prompt('New status (upcoming/ongoing/completed/cancelled):'),
    };

    if (!updateData.name) return;

    showLoading(true);
    await api.updateEvent(eventId, updateData);

    showNotification('Event updated successfully!', 'success');
    await loadEventsFromAPI();
  } catch (error) {
    showError(`Failed to update event: ${error.message}`);
  } finally {
    showLoading(false);
  }
}

/**
 * Delete an event
 */
async function deleteEvent(eventId) {
  if (!confirm('Are you sure you want to delete this event?')) return;

  try {
    showLoading(true);
    await api.deleteEvent(eventId);

    showNotification('Event deleted successfully!', 'success');
    await loadEventsFromAPI();
  } catch (error) {
    showError(`Failed to delete event: ${error.message}`);
  } finally {
    showLoading(false);
  }
}

/**
 * Register attendee for an event
 */
async function registerForEvent(eventId) {
  try {
    // For now, using a mock attendee ID. In real app, use current user's ID
    const attendeeId = 'att-001';

    showLoading(true);
    await api.addAttendeeToEvent(eventId, attendeeId);

    showNotification('Successfully registered for event!', 'success');
    await loadEventsFromAPI();
  } catch (error) {
    showError(`Failed to register: ${error.message}`);
  } finally {
    showLoading(false);
  }
}

// ==================== UI RENDERING ====================

/**
 * Display events in the UI
 */
function displayEvents(events) {
  const eventList = document.getElementById('eventList');
  if (!eventList) return;

  if (events.length === 0) {
    eventList.innerHTML = '<p class="no-events">No events found</p>';
    return;
  }

  eventList.innerHTML = events
    .map(
      (event) => `
    <div class="event-card">
      <div class="event-header">
        <h3>${event.name}</h3>
        <span class="event-status status-${event.status}">${event.status}</span>
      </div>
      <div class="event-body">
        <p><strong>Date:</strong> ${event.date}</p>
        <p><strong>Location:</strong> ${event.location}</p>
        <p><strong>Description:</strong> ${event.description}</p>
        <p><strong>Attendees:</strong> ${event.attendees.length} / ${event.capacity}</p>
      </div>
      <div class="event-actions">
        ${
          currentUser.role !== 'attendee'
            ? `
          <button class="btn btn-edit edit-event-btn" onclick="updateEvent('${event.id}')">
            Edit
          </button>
        `
            : ''
        }
        ${
          currentUser.role === 'superuser'
            ? `
          <button class="btn btn-delete delete-event-btn" onclick="deleteEvent('${event.id}')">
            Delete
          </button>
        `
            : ''
        }
        <button class="btn btn-primary" onclick="registerForEvent('${event.id}')">
          Register
        </button>
      </div>
    </div>
  `,
    )
    .join('');
}

/**
 * Open create event modal
 */
function openCreateEventModal() {
  const modal = document.getElementById('createEventModal');
  if (modal) {
    modal.style.display = 'block';
  }
}

/**
 * Close create event modal
 */
function closeCreateEventModal() {
  const modal = document.getElementById('createEventModal');
  if (modal) {
    modal.style.display = 'none';
  }
}

// ==================== NOTIFICATIONS ====================

/**
 * Show loading state
 */
function showLoading(isLoading) {
  appState.isLoading = isLoading;
  const loader = document.getElementById('loader');
  if (loader) {
    loader.style.display = isLoading ? 'flex' : 'none';
  }
}

/**
 * Show error notification
 */
function showError(message) {
  console.error(message);
  const errorDiv = document.getElementById('errorMessage');
  if (errorDiv) {
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    setTimeout(() => {
      errorDiv.style.display = 'none';
    }, 5000);
  } else {
    alert(`Error: ${message}`);
  }
}

/**
 * Show success notification
 */
function showNotification(message, type = 'info') {
  console.log(message);
  const notification = document.getElementById('notification');
  if (notification) {
    notification.textContent = message;
    notification.className = `notification notification-${type}`;
    notification.style.display = 'block';
    setTimeout(() => {
      notification.style.display = 'none';
    }, 3000);
  } else {
    alert(message);
  }
}

/**
 * Setup role listener for external changes
 */
function setupRoleListener() {
  window.addEventListener('storage', (e) => {
    if (e.key === 'userRole') {
      currentUser.role = e.newValue;
      api.setRole(e.newValue);
      updateRoleDisplay();
      applyRoleBasedUI();
    }
  });
}

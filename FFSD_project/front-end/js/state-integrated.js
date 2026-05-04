/**
 * STATE MANAGEMENT - Updated for Backend Integration
 * Fetches data from backend API instead of using mock data
 * Maintains compatibility with existing frontend code
 */

const STATE_VERSION = "3.0";
const STATE_KEY = "eventflow_state_v3";

// Central state object - now synced with backend
let AppState = {
  events: [],
  attendees: [],
  staff: [],
  activityLogs: [],
  registrations: [],
  notifications: [],
  currentUser: null,
  isLoading: false,
  error: null,
  version: STATE_VERSION
};

// ═══════════════════ INITIALIZATION ═══════════════════

document.addEventListener("DOMContentLoaded", async () => {
  initializeWithBackend();
});

/**
 * Initialize app with backend data
 */
async function initializeWithBackend() {
  try {
    AppState.isLoading = true;
    
    // Set user role from localStorage
    const role = localStorage.getItem('userRole') || 'attendee';
    apiService.setRole(role);
    
    // Fetch all data from backend
    await loadAllDataFromBackend();
    
    AppState.isLoading = false;
  } catch (error) {
    console.error('Failed to initialize:', error);
    AppState.error = error.message;
    AppState.isLoading = false;
    showNotification('Error loading data from backend', 'error');
  }
}

/**
 * Load all data from backend
 */
async function loadAllDataFromBackend() {
  try {
    // Parallel requests for better performance
    const [eventsData, attendeesData, staffData, logsData] = await Promise.all([
      apiService.getEvents().catch(() => []),
      apiService.getAttendees().catch(() => []),
      apiService.getStaff().catch(() => []),
      apiService.getActivityLogs().catch(() => []),
    ]);

    AppState.events = Array.isArray(eventsData) ? eventsData : [];
    AppState.attendees = Array.isArray(attendeesData) ? attendeesData : [];
    AppState.staff = Array.isArray(staffData) ? staffData : [];
    AppState.activityLogs = Array.isArray(logsData) ? logsData : [];

    console.log('Data loaded from backend:', {
      events: AppState.events.length,
      attendees: AppState.attendees.length,
      staff: AppState.staff.length,
      logs: AppState.activityLogs.length,
    });

    saveState();
  } catch (error) {
    console.error('Error loading data from backend:', error);
    throw error;
  }
}

// ═══════════════════ PERSISTENCE ═══════════════════

function saveState() {
  try {
    // Only save non-sensitive data to localStorage
    const stateToSave = {
      events: AppState.events,
      attendees: AppState.attendees,
      staff: AppState.staff,
      version: STATE_VERSION
    };
    localStorage.setItem(STATE_KEY, JSON.stringify(stateToSave));
  } catch (e) {
    console.error("Failed to save state:", e);
  }
}

function loadState() {
  try {
    const saved = localStorage.getItem(STATE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      AppState = { ...AppState, ...parsed };
    }
  } catch (e) {
    console.error("Failed to load state:", e);
  }
}

// ═══════════════════ CRUD: EVENTS ═══════════════════

async function createEvent(eventData) {
  try {
    AppState.isLoading = true;
    const newEvent = await apiService.createEvent(eventData);
    
    AppState.events.push(newEvent);
    saveState();
    AppState.isLoading = false;
    
    addNotification(null, `Event "${newEvent.title}" created successfully`, "success");
    return newEvent;
  } catch (error) {
    AppState.isLoading = false;
    AppState.error = error.message;
    console.error('Error creating event:', error);
    addNotification(null, `Failed to create event: ${error.message}`, "error");
    throw error;
  }
}

async function updateEvent(eventId, updates) {
  try {
    AppState.isLoading = true;
    const updatedEvent = await apiService.updateEvent(eventId, updates);
    
    const index = AppState.events.findIndex(e => e.id === eventId);
    if (index >= 0) {
      AppState.events[index] = updatedEvent;
    }
    saveState();
    AppState.isLoading = false;
    
    addNotification(null, `Event "${updatedEvent.title}" updated`, "success");
    return updatedEvent;
  } catch (error) {
    AppState.isLoading = false;
    AppState.error = error.message;
    console.error('Error updating event:', error);
    addNotification(null, `Failed to update event: ${error.message}`, "error");
    throw error;
  }
}

async function deleteEvent(eventId) {
  try {
    AppState.isLoading = true;
    await apiService.deleteEvent(eventId);
    
    AppState.events = AppState.events.filter(e => e.id !== eventId);
    saveState();
    AppState.isLoading = false;
    
    addNotification(null, 'Event deleted successfully', "success");
    return true;
  } catch (error) {
    AppState.isLoading = false;
    AppState.error = error.message;
    console.error('Error deleting event:', error);
    addNotification(null, `Failed to delete event: ${error.message}`, "error");
    throw error;
  }
}

// ═══════════════════ CRUD: ATTENDEES ═══════════════════

async function createAttendee(attendeeData) {
  try {
    AppState.isLoading = true;
    const newAttendee = await apiService.createAttendee(attendeeData);
    
    AppState.attendees.push(newAttendee);
    saveState();
    AppState.isLoading = false;
    
    addNotification(null, `Attendee "${newAttendee.name}" created successfully`, "success");
    return newAttendee;
  } catch (error) {
    AppState.isLoading = false;
    AppState.error = error.message;
    console.error('Error creating attendee:', error);
    addNotification(null, `Failed to create attendee: ${error.message}`, "error");
    throw error;
  }
}

async function updateAttendee(attendeeId, updates) {
  try {
    AppState.isLoading = true;
    const updatedAttendee = await apiService.updateAttendee(attendeeId, updates);
    
    const index = AppState.attendees.findIndex(a => a.id === attendeeId);
    if (index >= 0) {
      AppState.attendees[index] = updatedAttendee;
    }
    saveState();
    AppState.isLoading = false;
    
    addNotification(null, `Attendee "${updatedAttendee.name}" updated`, "success");
    return updatedAttendee;
  } catch (error) {
    AppState.isLoading = false;
    AppState.error = error.message;
    console.error('Error updating attendee:', error);
    addNotification(null, `Failed to update attendee: ${error.message}`, "error");
    throw error;
  }
}

async function deleteAttendee(attendeeId) {
  try {
    AppState.isLoading = true;
    await apiService.deleteAttendee(attendeeId);
    
    AppState.attendees = AppState.attendees.filter(a => a.id !== attendeeId);
    saveState();
    AppState.isLoading = false;
    
    addNotification(null, 'Attendee deleted successfully', "success");
    return true;
  } catch (error) {
    AppState.isLoading = false;
    AppState.error = error.message;
    console.error('Error deleting attendee:', error);
    addNotification(null, `Failed to delete attendee: ${error.message}`, "error");
    throw error;
  }
}

// ═══════════════════ CRUD: STAFF ═══════════════════

async function createStaff(staffData) {
  try {
    AppState.isLoading = true;
    const newStaff = await apiService.createStaff(staffData);
    
    AppState.staff.push(newStaff);
    saveState();
    AppState.isLoading = false;
    
    addNotification(null, `Staff "${newStaff.name}" created successfully`, "success");
    return newStaff;
  } catch (error) {
    AppState.isLoading = false;
    AppState.error = error.message;
    console.error('Error creating staff:', error);
    addNotification(null, `Failed to create staff: ${error.message}`, "error");
    throw error;
  }
}

async function updateStaff(staffId, updates) {
  try {
    AppState.isLoading = true;
    const updatedStaff = await apiService.updateStaff(staffId, updates);
    
    const index = AppState.staff.findIndex(s => s.id === staffId);
    if (index >= 0) {
      AppState.staff[index] = updatedStaff;
    }
    saveState();
    AppState.isLoading = false;
    
    addNotification(null, `Staff "${updatedStaff.name}" updated`, "success");
    return updatedStaff;
  } catch (error) {
    AppState.isLoading = false;
    AppState.error = error.message;
    console.error('Error updating staff:', error);
    addNotification(null, `Failed to update staff: ${error.message}`, "error");
    throw error;
  }
}

async function deleteStaff(staffId) {
  try {
    AppState.isLoading = true;
    await apiService.deleteStaff(staffId);
    
    AppState.staff = AppState.staff.filter(s => s.id !== staffId);
    saveState();
    AppState.isLoading = false;
    
    addNotification(null, 'Staff deleted successfully', "success");
    return true;
  } catch (error) {
    AppState.isLoading = false;
    AppState.error = error.message;
    console.error('Error deleting staff:', error);
    addNotification(null, `Failed to delete staff: ${error.message}`, "error");
    throw error;
  }
}

// ═══════════════════ SEARCH & FILTER ═══════════════════

async function searchEvents(query) {
  try {
    const results = await apiService.getEvents(query);
    return results;
  } catch (error) {
    console.error('Error searching events:', error);
    return [];
  }
}

async function filterEventsByStatus(status) {
  try {
    const results = await apiService.getEvents('', status);
    return results;
  } catch (error) {
    console.error('Error filtering events:', error);
    return [];
  }
}

async function searchAttendees(query) {
  try {
    const results = await apiService.getAttendees(query);
    return results;
  } catch (error) {
    console.error('Error searching attendees:', error);
    return [];
  }
}

// ═══════════════════ NOTIFICATIONS ═══════════════════

function addNotification(userId, message, type = "info") {
  const notification = {
    id: "n" + Date.now(),
    userId: userId,
    message: message,
    type: type,
    read: false,
    createdAt: new Date().toISOString()
  };
  
  AppState.notifications.push(notification);
  
  // Auto-remove after 5 seconds
  setTimeout(() => {
    AppState.notifications = AppState.notifications.filter(n => n.id !== notification.id);
  }, 5000);
  
  return notification;
}

// ═══════════════════ SYNC WITH BACKEND ═══════════════════

/**
 * Refresh data from backend
 */
async function refreshDataFromBackend() {
  try {
    await loadAllDataFromBackend();
    addNotification(null, 'Data refreshed from backend', 'success');
  } catch (error) {
    console.error('Error refreshing data:', error);
    addNotification(null, 'Error refreshing data', 'error');
  }
}

/**
 * Sync local state with backend (resolves conflicts)
 */
async function syncWithBackend() {
  try {
    AppState.isLoading = true;
    await loadAllDataFromBackend();
    AppState.isLoading = false;
    addNotification(null, 'Synced with backend', 'success');
  } catch (error) {
    AppState.isLoading = false;
    console.error('Error syncing with backend:', error);
    addNotification(null, 'Error syncing with backend', 'error');
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    AppState,
    loadAllDataFromBackend,
    createEvent,
    updateEvent,
    deleteEvent,
    createAttendee,
    updateAttendee,
    deleteAttendee,
    createStaff,
    updateStaff,
    deleteStaff,
    searchEvents,
    filterEventsByStatus,
    searchAttendees,
    addNotification,
    refreshDataFromBackend,
    syncWithBackend
  };
}

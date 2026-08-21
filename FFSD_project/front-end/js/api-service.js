/**
 * API Service Layer
 * Handles all backend communication
 * Usage: Import this service in your main.js or other files
 */

class ApiService {
  constructor(baseURL = 'http://localhost:3002') {
    this.baseURL = baseURL;
    this.role = localStorage.getItem('userRole') || 'attendee';
  }

  /**
   * Set the user role (superuser, admin, attendee)
   */
  setRole(role) {
    if (!['superuser', 'admin', 'attendee'].includes(role)) {
      throw new Error('Invalid role. Use: superuser, admin, or attendee');
    }
    this.role = role;
    localStorage.setItem('userRole', role);
  }

  /**
   * Helper method for API requests
   */
  async request(method, endpoint, body = null) {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        role: this.role,
      },
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, options);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || `HTTP Error: ${response.status}`,
        );
      }

      return await response.json();
    } catch (error) {
      console.error(`API Error [${method} ${endpoint}]:`, error);
      throw error;
    }
  }

  // ==================== EVENTS ====================

  /**
   * Get all events with optional filters
   */
  async getEvents(search = '', status = '') {
    let url = '/events';
    const params = [];
    if (search) params.push(`search=${encodeURIComponent(search)}`);
    if (status) params.push(`status=${encodeURIComponent(status)}`);
    if (params.length) url += '?' + params.join('&');

    return this.request('GET', url);
  }

  /**
   * Get event by ID
   */
  async getEventById(eventId) {
    return this.request('GET', `/events/${eventId}`);
  }

  /**
   * Create a new event
   */
  async createEvent(eventData) {
    return this.request('POST', '/events', eventData);
  }

  /**
   * Update an event
   */
  async updateEvent(eventId, eventData) {
    return this.request('PUT', `/events/${eventId}`, eventData);
  }

  /**
   * Delete an event
   */
  async deleteEvent(eventId) {
    return this.request('DELETE', `/events/${eventId}`);
  }

  /**
   * Add attendee to event
   */
  async addAttendeeToEvent(eventId, attendeeId) {
    return this.request(
      'POST',
      `/events/${eventId}/attendees/${attendeeId}`,
    );
  }

  /**
   * Remove attendee from event
   */
  async removeAttendeeFromEvent(eventId, attendeeId) {
    return this.request(
      'DELETE',
      `/events/${eventId}/attendees/${attendeeId}`,
    );
  }

  /**
   * Get event statistics
   */
  async getEventStatistics() {
    return this.request('GET', '/events/statistics');
  }

  // ==================== ATTENDEES ====================

  /**
   * Get all attendees with optional search
   */
  async getAttendees(search = '') {
    let url = '/attendees';
    if (search) url += `?search=${encodeURIComponent(search)}`;
    return this.request('GET', url);
  }

  /**
   * Get attendee by ID
   */
  async getAttendeeById(attendeeId) {
    return this.request('GET', `/attendees/${attendeeId}`);
  }

  /**
   * Create a new attendee
   */
  async createAttendee(attendeeData) {
    return this.request('POST', '/attendees', attendeeData);
  }

  /**
   * Update an attendee
   */
  async updateAttendee(attendeeId, attendeeData) {
    return this.request('PUT', `/attendees/${attendeeId}`, attendeeData);
  }

  /**
   * Delete an attendee
   */
  async deleteAttendee(attendeeId) {
    return this.request('DELETE', `/attendees/${attendeeId}`);
  }

  /**
   * Get attendee statistics
   */
  async getAttendeeStatistics() {
    return this.request('GET', '/attendees/statistics');
  }

  // ==================== STAFF ====================

  /**
   * Get all staff with optional search
   */
  async getStaff(search = '') {
    let url = '/staff';
    if (search) url += `?search=${encodeURIComponent(search)}`;
    return this.request('GET', url);
  }

  /**
   * Get staff by ID
   */
  async getStaffById(staffId) {
    return this.request('GET', `/staff/${staffId}`);
  }

  /**
   * Create a new staff member
   */
  async createStaff(staffData) {
    return this.request('POST', '/staff', staffData);
  }

  /**
   * Update a staff member
   */
  async updateStaff(staffId, staffData) {
    return this.request('PUT', `/staff/${staffId}`, staffData);
  }

  /**
   * Delete a staff member
   */
  async deleteStaff(staffId) {
    return this.request('DELETE', `/staff/${staffId}`);
  }

  /**
   * Assign event to staff
   */
  async assignEventToStaff(staffId, eventId) {
    return this.request('POST', `/staff/${staffId}/events/${eventId}`);
  }

  /**
   * Get staff statistics
   */
  async getStaffStatistics() {
    return this.request('GET', '/staff/statistics');
  }

  // ==================== ACTIVITY LOGS ====================

  /**
   * Get all activity logs with pagination
   */
  async getActivityLogs(limit = 100, offset = 0) {
    return this.request('GET', `/activity-logs?limit=${limit}&offset=${offset}`);
  }

  /**
   * Get activity logs by role
   */
  async getActivityLogsByRole(role) {
    return this.request('GET', `/activity-logs/by-role/${role}`);
  }

  /**
   * Get activity log statistics
   */
  async getActivityLogStatistics() {
    return this.request('GET', '/activity-logs/statistics');
  }

  /**
   * Clear all activity logs
   */
  async clearActivityLogs() {
    return this.request('DELETE', '/activity-logs');
  }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ApiService;
}

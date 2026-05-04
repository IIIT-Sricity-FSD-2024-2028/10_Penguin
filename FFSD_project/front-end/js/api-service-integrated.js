/**
 * API Service Layer with Data Mapping
 * Handles all backend communication with data transformation
 * Converts backend responses to frontend-compatible format
 */

class ApiServiceIntegrated {
  constructor(baseURL = 'http://localhost:3002') {
    this.baseURL = baseURL;
    this.role = localStorage.getItem('userRole') || 'attendee';
  }

  setRole(role) {
    if (!['superuser', 'admin', 'attendee'].includes(role)) {
      throw new Error('Invalid role. Use: superuser, admin, or attendee');
    }
    this.role = role;
    localStorage.setItem('userRole', role);
  }

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
        const errorData = await response.json().catch(() => ({}));
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

  // ==================== DATA TRANSFORMATION ====================

  /**
   * Transform backend Event to frontend format
   * Backend: {id, name, description, date, location, organizerId, attendees, capacity, status, createdAt, updatedAt}
   * Frontend: {id, title, description, date, city, capacity, registered, price, status, organizer}
   */
  transformEvent(backendEvent) {
    return {
      id: backendEvent.id,
      title: backendEvent.name, // Map name to title
      description: backendEvent.description || '',
      date: backendEvent.date,
      time: '10:00', // Default time
      city: backendEvent.location || 'Not specified', // Map location to city
      location: backendEvent.location || '',
      capacity: backendEvent.capacity || 100,
      registered: Array.isArray(backendEvent.attendees)
        ? backendEvent.attendees.length
        : 0, // Map attendees.length to registered
      price: 0, // Default price (not in backend)
      status: backendEvent.status || 'upcoming',
      organizer: backendEvent.organizerId || 'N/A',
      category: 'Event', // Default category
      attendees: backendEvent.attendees || [],
      organizerId: backendEvent.organizerId,
      createdAt: backendEvent.createdAt,
      updatedAt: backendEvent.updatedAt,
    };
  }

  /**
   * Transform frontend Event to backend format for API
   */
  untransformEvent(frontendEvent) {
    return {
      name: frontendEvent.title || frontendEvent.name, // Use title if available
      description: frontendEvent.description || '',
      date: frontendEvent.date,
      location: frontendEvent.city || frontendEvent.location || '',
      organizerId: frontendEvent.organizerId || frontendEvent.organizer || '',
      capacity: frontendEvent.capacity || 100,
      attendees: frontendEvent.attendees || [],
      status: frontendEvent.status || 'upcoming',
    };
  }

  /**
   * Transform backend Attendee to frontend format
   */
  transformAttendee(backendAttendee) {
    return {
      id: backendAttendee.id,
      name: backendAttendee.name,
      email: backendAttendee.email,
      phone: backendAttendee.phone || '',
      status: backendAttendee.status || 'active',
      registeredEvents: backendAttendee.registeredEvents || [],
      joinDate: backendAttendee.joinDate || new Date().toISOString(),
      createdAt: backendAttendee.createdAt,
      updatedAt: backendAttendee.updatedAt,
    };
  }

  /**
   * Transform backend Staff to frontend format
   */
  transformStaff(backendStaff) {
    return {
      id: backendStaff.id,
      name: backendStaff.name,
      email: backendStaff.email,
      role: backendStaff.role,
      phone: backendStaff.phone || '',
      status: backendStaff.status || 'active',
      availability: backendStaff.availability || [],
      assignedEvents: backendStaff.assignedEvents || [],
      createdAt: backendStaff.createdAt,
      updatedAt: backendStaff.updatedAt,
    };
  }

  // ==================== EVENTS ====================

  /**
   * Get all events with optional filters
   */
  async getEvents(search = '', status = '') {
    try {
      let url = '/events';
      const params = [];
      if (search) params.push(`search=${encodeURIComponent(search)}`);
      if (status) params.push(`status=${encodeURIComponent(status)}`);
      if (params.length) url += '?' + params.join('&');

      const data = await this.request('GET', url);
      
      // Transform array of events
      if (Array.isArray(data)) {
        return data.map(event => this.transformEvent(event));
      }
      return data;
    } catch (error) {
      console.error('Error fetching events:', error);
      throw error;
    }
  }

  /**
   * Get event by ID
   */
  async getEventById(eventId) {
    try {
      const data = await this.request('GET', `/events/${eventId}`);
      return this.transformEvent(data);
    } catch (error) {
      console.error('Error fetching event:', error);
      throw error;
    }
  }

  /**
   * Create a new event
   */
  async createEvent(eventData) {
    try {
      const backendData = this.untransformEvent(eventData);
      const data = await this.request('POST', '/events', backendData);
      return this.transformEvent(data);
    } catch (error) {
      console.error('Error creating event:', error);
      throw error;
    }
  }

  /**
   * Update an event
   */
  async updateEvent(eventId, eventData) {
    try {
      const backendData = this.untransformEvent(eventData);
      const data = await this.request('PUT', `/events/${eventId}`, backendData);
      return this.transformEvent(data);
    } catch (error) {
      console.error('Error updating event:', error);
      throw error;
    }
  }

  /**
   * Delete an event
   */
  async deleteEvent(eventId) {
    try {
      return await this.request('DELETE', `/events/${eventId}`);
    } catch (error) {
      console.error('Error deleting event:', error);
      throw error;
    }
  }

  /**
   * Add attendee to event
   */
  async addAttendeeToEvent(eventId, attendeeId) {
    try {
      const data = await this.request(
        'POST',
        `/events/${eventId}/attendees/${attendeeId}`,
      );
      return this.transformEvent(data);
    } catch (error) {
      console.error('Error adding attendee to event:', error);
      throw error;
    }
  }

  /**
   * Remove attendee from event
   */
  async removeAttendeeFromEvent(eventId, attendeeId) {
    try {
      const data = await this.request(
        'DELETE',
        `/events/${eventId}/attendees/${attendeeId}`,
      );
      return this.transformEvent(data);
    } catch (error) {
      console.error('Error removing attendee from event:', error);
      throw error;
    }
  }

  /**
   * Get event statistics
   */
  async getEventStatistics() {
    try {
      return await this.request('GET', '/events/statistics');
    } catch (error) {
      console.error('Error fetching event statistics:', error);
      throw error;
    }
  }

  // ==================== ATTENDEES ====================

  /**
   * Get all attendees with optional search
   */
  async getAttendees(search = '') {
    try {
      let url = '/attendees';
      if (search) url += `?search=${encodeURIComponent(search)}`;
      const data = await this.request('GET', url);
      
      if (Array.isArray(data)) {
        return data.map(attendee => this.transformAttendee(attendee));
      }
      return data;
    } catch (error) {
      console.error('Error fetching attendees:', error);
      throw error;
    }
  }

  /**
   * Get attendee by ID
   */
  async getAttendeeById(attendeeId) {
    try {
      const data = await this.request('GET', `/attendees/${attendeeId}`);
      return this.transformAttendee(data);
    } catch (error) {
      console.error('Error fetching attendee:', error);
      throw error;
    }
  }

  /**
   * Create a new attendee
   */
  async createAttendee(attendeeData) {
    try {
      const data = await this.request('POST', '/attendees', attendeeData);
      return this.transformAttendee(data);
    } catch (error) {
      console.error('Error creating attendee:', error);
      throw error;
    }
  }

  /**
   * Update an attendee
   */
  async updateAttendee(attendeeId, attendeeData) {
    try {
      const data = await this.request(
        'PUT',
        `/attendees/${attendeeId}`,
        attendeeData,
      );
      return this.transformAttendee(data);
    } catch (error) {
      console.error('Error updating attendee:', error);
      throw error;
    }
  }

  /**
   * Delete an attendee
   */
  async deleteAttendee(attendeeId) {
    try {
      return await this.request('DELETE', `/attendees/${attendeeId}`);
    } catch (error) {
      console.error('Error deleting attendee:', error);
      throw error;
    }
  }

  /**
   * Get attendee statistics
   */
  async getAttendeeStatistics() {
    try {
      return await this.request('GET', '/attendees/statistics');
    } catch (error) {
      console.error('Error fetching attendee statistics:', error);
      throw error;
    }
  }

  // ==================== STAFF ====================

  /**
   * Get all staff with optional search
   */
  async getStaff(search = '') {
    try {
      let url = '/staff';
      if (search) url += `?search=${encodeURIComponent(search)}`;
      const data = await this.request('GET', url);
      
      if (Array.isArray(data)) {
        return data.map(staff => this.transformStaff(staff));
      }
      return data;
    } catch (error) {
      console.error('Error fetching staff:', error);
      throw error;
    }
  }

  /**
   * Get staff by ID
   */
  async getStaffById(staffId) {
    try {
      const data = await this.request('GET', `/staff/${staffId}`);
      return this.transformStaff(data);
    } catch (error) {
      console.error('Error fetching staff:', error);
      throw error;
    }
  }

  /**
   * Create a new staff member
   */
  async createStaff(staffData) {
    try {
      const data = await this.request('POST', '/staff', staffData);
      return this.transformStaff(data);
    } catch (error) {
      console.error('Error creating staff:', error);
      throw error;
    }
  }

  /**
   * Update a staff member
   */
  async updateStaff(staffId, staffData) {
    try {
      const data = await this.request(
        'PUT',
        `/staff/${staffId}`,
        staffData,
      );
      return this.transformStaff(data);
    } catch (error) {
      console.error('Error updating staff:', error);
      throw error;
    }
  }

  /**
   * Delete a staff member
   */
  async deleteStaff(staffId) {
    try {
      return await this.request('DELETE', `/staff/${staffId}`);
    } catch (error) {
      console.error('Error deleting staff:', error);
      throw error;
    }
  }

  /**
   * Get staff statistics
   */
  async getStaffStatistics() {
    try {
      return await this.request('GET', '/staff/statistics');
    } catch (error) {
      console.error('Error fetching staff statistics:', error);
      throw error;
    }
  }

  // ==================== ACTIVITY LOGS ====================

  /**
   * Get activity logs
   */
  async getActivityLogs() {
    try {
      return await this.request('GET', '/activity-logs');
    } catch (error) {
      console.error('Error fetching activity logs:', error);
      throw error;
    }
  }

  /**
   * Get activity logs by role
   */
  async getActivityLogsByRole(role) {
    try {
      return await this.request('GET', `/activity-logs/by-role/${role}`);
    } catch (error) {
      console.error('Error fetching activity logs by role:', error);
      throw error;
    }
  }

  /**
   * Get activity log statistics
   */
  async getActivityLogStatistics() {
    try {
      return await this.request('GET', '/activity-logs/statistics');
    } catch (error) {
      console.error('Error fetching activity log statistics:', error);
      throw error;
    }
  }
}

// Create global instance
const apiService = new ApiServiceIntegrated('http://localhost:3002');

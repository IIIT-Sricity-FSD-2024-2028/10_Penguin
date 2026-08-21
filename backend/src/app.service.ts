import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getWelcome() {
    return {
      message: '🎉 Welcome to Event Management & Coordination System API',
      version: '1.0.0',
      endpoints: {
        events: '/events',
        attendees: '/attendees',
        staff: '/staff',
        'activity-logs': '/activity-logs',
        'api-docs': '/api',
      },
      docs: 'Visit http://localhost:3001/api for Swagger documentation',
      roles: ['superuser', 'admin', 'attendee'],
      'pass-role-header': 'Add header: role: superuser|admin|attendee',
    };
  }

  getHealth() {
    return {
      status: 'OK',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    };
  }
}

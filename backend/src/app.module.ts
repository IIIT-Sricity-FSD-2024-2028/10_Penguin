import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Existing modules
import { EventsModule } from './modules/events/events.module';
import { AttendeesModule } from './modules/attendees/attendees.module';
import { StaffModule } from './modules/staff/staff.module';
import { ActivityLogModule } from './modules/activity-log/activity-log.module';

// New modules — Review-4 complete backend
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { EventRequestsModule } from './modules/event-requests/event-requests.module';
import { EventPlansModule } from './modules/event-plans/event-plans.module';
import { RegistrationsModule } from './modules/registrations/registrations.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { AttendanceModule } from './modules/attendance/attendance.module';
import { StaffAssignmentsModule } from './modules/staff-assignments/staff-assignments.module';
import { ReportsModule } from './modules/reports/reports.module';
import { ReviewsModule } from './modules/reviews/reviews.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { AnalyticsModule } from './modules/analytics/analytics.module';

@Module({
  imports: [
    // Existing
    EventsModule,
    AttendeesModule,
    StaffModule,
    ActivityLogModule,
    // New
    AuthModule,
    UsersModule,
    EventRequestsModule,
    EventPlansModule,
    RegistrationsModule,
    PaymentsModule,
    AttendanceModule,
    StaffAssignmentsModule,
    ReportsModule,
    ReviewsModule,
    NotificationsModule,
    AnalyticsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

"use strict";
/**
 * In-memory data store for the application
 * Simulates a database without actual persistence
 * Includes all entities from the ER diagram
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataStore = void 0;
const constants_1 = require("./constants");
// ==================== DATA STORE CLASS ====================
class DataStore {
    constructor() {
        // User entities
        this.users = [];
        this.superAdmins = [];
        this.clients = [];
        this.organizers = [];
        this.staffProfiles = [];
        this.attendees = [];
        // Event entities
        this.events = [];
        this.eventRequests = [];
        this.eventPlans = [];
        // Registration & Payment
        this.registrations = [];
        this.payments = [];
        // Attendance & Assignments
        this.attendance = [];
        this.staffAssignments = [];
        // Reports & Reviews
        this.eventReports = [];
        this.staffReports = [];
        this.eventReviews = [];
        this.staffReviews = [];
        // Notifications
        this.notifications = [];
        // Activity logs
        this.activityLogs = [];
        this.initializeSeedData();
    }
    static getInstance() {
        if (!DataStore.instance) {
            DataStore.instance = new DataStore();
        }
        return DataStore.instance;
    }
    initializeSeedData() {
        // ==================== DEMO USERS ====================
        this.users = [
            {
                userId: 'usr-admin-001',
                name: 'Alex Johnson',
                email: 'superadmin@example.com',
                password: 'Admin@123',
                userRole: constants_1.UserRole.SUPER_ADMIN,
                status: 'active',
                phoneNo: '9876543210',
                createdAt: new Date('2024-01-01'),
                updatedAt: new Date('2024-01-01'),
            },
            {
                userId: 'usr-client-001',
                name: 'Michael Torres',
                email: 'client@example.com',
                password: 'Client@123',
                userRole: constants_1.UserRole.CLIENT,
                status: 'active',
                phoneNo: '8765432109',
                address: '123 Tech Park, Bangalore',
                createdAt: new Date('2024-01-05'),
                updatedAt: new Date('2024-01-05'),
            },
            {
                userId: 'usr-org-001',
                name: 'Sarah Chen',
                email: 'organizer@example.com',
                password: 'Organizer@123',
                userRole: constants_1.UserRole.EVENT_ORGANIZER,
                status: 'active',
                phoneNo: '6543210987',
                createdAt: new Date('2024-01-10'),
                updatedAt: new Date('2024-01-10'),
            },
            {
                userId: 'usr-staff-001',
                name: 'James Wilson',
                email: 'staff@example.com',
                password: 'Staff@123',
                userRole: constants_1.UserRole.EVENT_STAFF,
                status: 'active',
                phoneNo: '7345678902',
                createdAt: new Date('2024-01-15'),
                updatedAt: new Date('2024-01-15'),
            },
            {
                userId: 'usr-attendee-001',
                name: 'Priya Patel',
                email: 'attendee@example.com',
                password: 'Attendee@123',
                userRole: constants_1.UserRole.ATTENDEE,
                status: 'active',
                phoneNo: '8678901235',
                createdAt: new Date('2024-02-01'),
                updatedAt: new Date('2024-02-01'),
            },
        ];
        // ==================== ROLE-SPECIFIC PROFILES ====================
        this.superAdmins = [
            {
                superAdminId: 'sa-001',
                userId: 'usr-admin-001',
                email: 'superadmin@example.com',
                phoneNo: '9876543210',
                createdAt: new Date('2024-01-01'),
            },
        ];
        this.clients = [
            {
                clientId: 'cli-001',
                userId: 'usr-client-001',
                companyName: 'Torres Tech Solutions',
                createdAt: new Date('2024-01-05'),
            },
        ];
        this.organizers = [
            {
                organizerId: 'org-001',
                userId: 'usr-org-001',
                businessName: 'Chen Elite Events',
                rating: 4.9,
                createdAt: new Date('2024-01-10'),
            },
        ];
        this.staffProfiles = [
            {
                staffId: 'staff-001',
                userId: 'usr-staff-001',
                availableDates: ['2026-06-15', '2026-07-20', '2026-08-01'],
                rating: 4.8,
                status: 'available',
                createdAt: new Date('2024-01-15'),
            },
        ];
        this.attendees = [
            {
                attendeeId: 'att-001',
                userId: 'usr-attendee-001',
                createdAt: new Date('2024-02-01'),
            },
        ];
        // ==================== EVENTS (Managed by Sarah Chen) ====================
        this.events = [
            {
                eventId: 'evt-001',
                organizerId: 'org-001',
                clientId: 'cli-001',
                name: 'Global AI Summit 2026',
                category: 'Technology',
                date: '2026-06-15',
                time: '09:00 AM',
                location: 'Grand Ballroom, Chennai',
                capacity: 500,
                ticketPrice: 1500,
                status: 'published',
                createdAt: new Date('2024-01-20'),
                updatedAt: new Date('2024-01-20'),
                description: 'Join Sarah Chen for the biggest AI summit of the year. Featuring speakers from Google, Meta, and OpenAI.',
                city: 'Chennai',
            },
            {
                eventId: 'evt-002',
                organizerId: 'org-001',
                name: 'Yoga & Wellness Retreat',
                category: 'Health',
                date: '2026-07-20',
                time: '07:00 AM',
                location: 'Zen Gardens, Bangalore',
                capacity: 100,
                ticketPrice: 500,
                status: 'published',
                createdAt: new Date('2024-01-21'),
                updatedAt: new Date('2024-01-21'),
                description: 'A relaxing weekend retreat focusing on mental health and physical well-being.',
                city: 'Bangalore',
            },
            {
                eventId: 'evt-003',
                organizerId: 'org-001',
                name: 'Future of Fintech',
                category: 'Finance',
                date: '2026-08-10',
                time: '10:00 AM',
                location: 'ITC Gardenia, Bangalore',
                capacity: 250,
                ticketPrice: 1200,
                status: 'draft',
                createdAt: new Date('2024-02-15'),
                updatedAt: new Date('2024-02-15'),
                description: 'Exploring the intersection of technology and finance in the modern era.',
                city: 'Bangalore',
            },
        ];
        // ==================== EVENT REQUESTS (Michael Torres -> Sarah Chen) ====================
        this.eventRequests = [
            {
                requestId: 'req-001',
                clientId: 'cli-001',
                organizerId: 'org-001',
                eventName: 'Tech Product Launch',
                eventDate: '2026-09-05',
                budget: 75000,
                capacity: 300,
                requirements: 'Need premium stage setup, 4K streaming, and high-end catering for 300 guests.',
                status: 'pending',
                createdAt: new Date('2024-03-01'),
                updatedAt: new Date('2024-03-01'),
            },
            {
                requestId: 'req-002',
                clientId: 'cli-001',
                organizerId: 'org-001',
                eventName: 'Corporate Anniversary',
                eventDate: '2026-10-15',
                budget: 50000,
                capacity: 200,
                requirements: 'Elegant gala dinner with live jazz band and awards ceremony.',
                status: 'approved',
                createdAt: new Date('2024-02-10'),
                updatedAt: new Date('2024-02-12'),
            },
        ];
        // ==================== EVENT PLANS ====================
        this.eventPlans = [
            {
                eventPlanId: 'plan-001',
                eventId: 'evt-001',
                clientId: 'cli-001',
                organizerId: 'org-001',
                title: 'Global AI Summit - Detailed Execution Plan',
                description: 'Comprehensive logistics, speaker lineup, and marketing strategy.',
                budget: 100000,
                capacity: 500,
                status: 'approved',
                approvalStatus: 'approved',
                createdAt: new Date('2024-01-25'),
                updatedAt: new Date('2024-01-27'),
            },
        ];
        // ==================== REGISTRATIONS (Priya Patel -> Global AI Summit) ====================
        this.registrations = [
            {
                registrationId: 'reg-001',
                attendeeId: 'att-001',
                eventId: 'evt-001',
                registrationDate: '2024-02-10',
                status: 'registered',
                ticketType: 'VIP Pass',
                qrCode: 'QR-PRIYA-AI-SUMMIT',
                verificationId: 'V-PRIYA-001',
                createdAt: new Date('2024-02-10'),
                updatedAt: new Date('2024-02-10'),
            },
        ];
        // ==================== PAYMENTS ====================
        this.payments = [
            {
                paymentId: 'pay-001',
                registrationId: 'reg-001',
                amount: 1500,
                status: 'completed',
                paymentDate: '2024-02-10',
                paymentMethod: 'UPI',
                createdAt: new Date('2024-02-10'),
                updatedAt: new Date('2024-02-10'),
            },
        ];
        // ==================== STAFF ASSIGNMENTS (Sarah Chen -> James Wilson) ====================
        this.staffAssignments = [
            {
                assignmentId: 'asgn-001',
                eventId: 'evt-001',
                organizerId: 'org-001',
                staffId: 'staff-001',
                status: 'accepted',
                assignedAt: new Date('2024-02-01'),
                updatedAt: new Date('2024-02-02'),
            },
            {
                assignmentId: 'asgn-002',
                eventId: 'evt-002',
                organizerId: 'org-001',
                staffId: 'staff-001',
                status: 'pending',
                assignedAt: new Date('2024-03-10'),
                updatedAt: new Date('2024-03-10'),
            },
        ];
        // ==================== NOTIFICATIONS ====================
        this.notifications = [
            {
                notificationId: 'notif-001',
                userId: 'usr-org-001', // Sarah Chen
                message: 'New event request from Michael Torres for "Tech Product Launch".',
                type: 'request',
                read: false,
                dateTime: new Date(),
                createdAt: new Date(),
            },
            {
                notificationId: 'notif-002',
                userId: 'usr-staff-001', // James Wilson
                message: 'You have been assigned to "Yoga & Wellness Retreat" by Sarah Chen.',
                type: 'assignment',
                read: false,
                dateTime: new Date(),
                createdAt: new Date(),
            },
            {
                notificationId: 'notif-003',
                userId: 'usr-client-001', // Michael Torres
                message: 'Your event request for "Corporate Anniversary" has been approved by Sarah Chen.',
                type: 'approval',
                read: true,
                dateTime: new Date('2024-02-12'),
                createdAt: new Date('2024-02-12'),
            },
        ];
        // ==================== ATTENDANCE ====================
        this.attendance = [
            {
                attendanceId: 'atnd-001',
                attendeeId: 'att-001',
                eventId: 'evt-001',
                staffId: 'staff-001',
                checkInTime: '09:15 AM',
                status: 'checked-in',
                verificationId: 'VER-001-001',
                createdAt: new Date('2024-06-15'),
                updatedAt: new Date('2024-06-15'),
            },
            {
                attendanceId: 'atnd-002',
                attendeeId: 'att-002',
                eventId: 'evt-001',
                staffId: 'staff-001',
                checkInTime: '09:30 AM',
                status: 'checked-in',
                verificationId: 'VER-002-001',
                createdAt: new Date('2024-06-15'),
                updatedAt: new Date('2024-06-15'),
            },
        ];
        // ==================== REPORTS ====================
        this.eventReports = [
            {
                eventReportId: 'rpt-evt-001',
                organizerId: 'org-001',
                eventId: 'evt-001',
                clientId: 'cli-001',
                reportTitle: 'Tech Conference 2024 - Final Report',
                reportDetails: 'Event was successful with 450 attendees. All sponsors satisfied.',
                submissionDate: '2024-06-20',
                status: 'submitted',
                createdAt: new Date('2024-06-20'),
                updatedAt: new Date('2024-06-20'),
            },
        ];
        this.staffReports = [
            {
                staffReportId: 'rpt-staff-001',
                staffId: 'staff-001',
                organizerId: 'org-001',
                eventId: 'evt-001',
                reportText: 'Event ran smoothly. Check-in process was efficient. Attendees were satisfied.',
                status: 'submitted',
                createdAt: new Date('2024-06-20'),
                updatedAt: new Date('2024-06-20'),
            },
        ];
        // ==================== REVIEWS ====================
        this.eventReviews = [
            {
                reviewId: 'rev-evt-001',
                reviewerId: 'att-001',
                eventId: 'evt-001',
                rating: 5,
                comment: 'Excellent event! Great speakers and networking opportunities.',
                date: '2024-06-21',
                createdAt: new Date('2024-06-21'),
            },
            {
                reviewId: 'rev-evt-002',
                reviewerId: 'att-002',
                eventId: 'evt-001',
                rating: 4,
                comment: 'Good event overall. Could improve on timing.',
                date: '2024-06-21',
                createdAt: new Date('2024-06-21'),
            },
        ];
        this.staffReviews = [
            {
                reviewId: 'rev-staff-001',
                reviewerId: 'org-001',
                staffId: 'staff-001',
                eventId: 'evt-001',
                rating: 5,
                comment: 'Frank did an excellent job. Very professional and efficient.',
                reviewDate: '2024-06-22',
                createdAt: new Date('2024-06-22'),
            },
        ];
    }
    // ==================== UTILITY METHODS ====================
    generateId(prefix) {
        return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }
    clearAllData() {
        this.users = [];
        this.superAdmins = [];
        this.clients = [];
        this.organizers = [];
        this.staffProfiles = [];
        this.attendees = [];
        this.events = [];
        this.eventRequests = [];
        this.eventPlans = [];
        this.registrations = [];
        this.payments = [];
        this.attendance = [];
        this.staffAssignments = [];
        this.eventReports = [];
        this.staffReports = [];
        this.eventReviews = [];
        this.staffReviews = [];
        this.notifications = [];
        this.activityLogs = [];
        this.initializeSeedData();
    }
    // User lookup utilities
    findUserByEmail(email) {
        return this.users.find(u => u.email.toLowerCase() === email.toLowerCase());
    }
    findUserById(userId) {
        return this.users.find(u => u.userId === userId);
    }
}
exports.DataStore = DataStore;
//# sourceMappingURL=data-store.js.map
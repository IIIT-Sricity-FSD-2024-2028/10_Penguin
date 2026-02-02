# Event Management and Coordination Platform

## 1. Overview

The Event Management and Coordination Platform is a software-based information system designed to support the planning, approval, coordination, and execution of events. The system enables structured event registration, approval workflows, staff coordination, attendee registration, and real-time attendee verification in a consistent and centralized manner.

This document presents a formal requirements-level description of the system by identifying the interacting actors and describing their planned features, which collectively define the functional scope of the platform.

---

## 2. Problem Definition

Event organization involves multiple stakeholders such as clients, event organizers, staff members, and attendees. In the absence of a centralized event management system, event processes are often handled manually or through disconnected tools. This results in delayed approvals, miscommunication, inefficient staff allocation, and poor attendee management.

The problem addressed by this project is the need for a centralized event management and coordination system that supports the complete event lifecycle while enabling real-time operational control during event execution.

---

## 3. Identification of System Actors

Actors represent external roles that interact with the system to achieve specific objectives. Actor identification follows UML use-case modeling principles and focuses on roles rather than internal system components or implementation details.

---

## 4. Primary Actors and Planned Features

### 4.1 Client

**Description**  
The Client is an end user who initiates event requests and approves event plans.

**Planned Features**
- Register and authenticate into the system  
- Initiate event registration requests  
- Provide event requirements and preferences  
- Select an event organizer  
- Review proposed event plans  
- Approve event plans or request revisions  
- Receive final event reports  

---

### 4.2 Event Organizer

**Description**  
The Event Organizer is responsible for planning, coordinating, and executing events based on client requirements.

**Planned Features**
- Receive event requests from clients  
- Analyze event requirements  
- Prepare detailed event plans  
- Select staff based on availability and budget  
- Submit plans for client approval  
- Modify plans based on feedback  
- Manage attendee eligibility criteria  
- Generate post-event reports  

---

### 4.3 Event Staff

**Description**  
Event Staff are operational users responsible for on-ground execution and service delivery during events.

**Planned Features**
- Register and log in as staff  
- Provide service details  
- Set pricing and availability  
- Activate staff profile  
- Receive event participation requests  
- Accept or decline requests  
- Update availability status  
- Participate in assigned events  

---

### 4.4 Attendee

**Description**  
The Attendee is an end user who registers for and participates in events.

**Planned Features**
- Authenticate into the system  
- Browse event categories  
- Check event availability  
- Register for public or private events  
- Make payments if required  
- Receive registration confirmation  
- Verify entry during event attendance  

---

### 4.5 System Administrator

**Description**  
The System Administrator is responsible for platform maintenance and access control.

**Planned Features**
- Manage user accounts and roles  
- Monitor system operations  
- Maintain platform availability  

---

## 5. External Systems

The system interacts with the following external systems, which remain outside the system boundary but support core event workflows:

- Payment Gateway – Processes event-related payments securely  
- Notification Service – Sends confirmations, reminders, and updates  
- Verification Service – Supports ticket or QR-based attendee verification  

---

## 6. Summary of Planned Features by Actor

| Actor | Planned Features |
|------|------------------|
| Client | Initiate events, review and approve plans, receive reports |
| Event Organizer | Plan events, manage staff, coordinate execution |
| Event Staff | Manage availability, accept tasks, deliver services |
| Attendee | Register for events, receive confirmation, attend events |
| System Administrator | Platform maintenance and access control |
| External Systems | Payments, notifications, verification |

---

## 7. Conclusion

The Event Management and Coordination Platform addresses operational challenges in event planning and execution by providing a structured set of planned features aligned with clearly identified actors. By expressing system functionality in terms of planned features rather than implementation details, this document establishes a strong foundation for subsequent UML modeling and detailed system design.

This document serves as a formal requirements-level description of the system.

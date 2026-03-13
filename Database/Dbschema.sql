CREATE DATABASE Event_Management;
USE Event_Management;

CREATE TABLE Client(
Client_ID INT PRIMARY KEY,
Name VARCHAR(100),
Email VARCHAR(100) UNIQUE,
Phone_No VARCHAR(15),
Password VARCHAR(100),
Address VARCHAR(255)
);

CREATE TABLE Event_Organizer(
Organizer_ID INT PRIMARY KEY,
Name VARCHAR(100),
Email VARCHAR(100) UNIQUE,
Phone_No VARCHAR(15),
Password VARCHAR(100)
);

CREATE TABLE Event(
Event_ID INT PRIMARY KEY,
Organizer_ID INT,
Client_ID INT,
Name VARCHAR(200),
Event_Type VARCHAR(100),
Date DATE,
Location VARCHAR(200),
Capacity INT,
Status VARCHAR(50),
FOREIGN KEY(Organizer_ID) REFERENCES Event_Organizer(Organizer_ID),
FOREIGN KEY(Client_ID) REFERENCES Client(Client_ID)
);

CREATE TABLE Event_Plan(
EventPlan_ID INT PRIMARY KEY,
Event_ID INT,
Client_ID INT,
Organizer_ID INT,
Status VARCHAR(50),
Approval_Status VARCHAR(50),
FOREIGN KEY(Event_ID) REFERENCES Event(Event_ID),
FOREIGN KEY(Client_ID) REFERENCES Client(Client_ID),
FOREIGN KEY(Organizer_ID) REFERENCES Event_Organizer(Organizer_ID)
);

CREATE TABLE Event_Report(
EventReport_ID INT PRIMARY KEY,
Organizer_ID INT,
Event_ID INT,
Client_ID INT,
Submission_Date DATE,
FOREIGN KEY(Organizer_ID) REFERENCES Event_Organizer(Organizer_ID),
FOREIGN KEY(Event_ID) REFERENCES Event(Event_ID),
FOREIGN KEY(Client_ID) REFERENCES Client(Client_ID)
);

CREATE TABLE Attendee(
Attendee_ID INT PRIMARY KEY,
Name VARCHAR(100),
Email VARCHAR(100) UNIQUE,
Phone_No VARCHAR(15),
Password VARCHAR(100),
Address VARCHAR(255),
Bio VARCHAR(255)
);

CREATE TABLE Registration(
Registration_ID INT PRIMARY KEY,
Attendee_ID INT,
Event_ID INT,
Registration_Date DATE,
Status VARCHAR(50),
Additional_Info VARCHAR(255),
Ticket_Type VARCHAR(50),
FOREIGN KEY(Attendee_ID) REFERENCES Attendee(Attendee_ID),
FOREIGN KEY(Event_ID) REFERENCES Event(Event_ID)
);

CREATE TABLE Payment(
Payment_ID INT PRIMARY KEY,
Registration_ID INT,
Amount DECIMAL(10,2),
Status VARCHAR(50),
Payment_Date DATE,
Payment_Method VARCHAR(50),
FOREIGN KEY(Registration_ID) REFERENCES Registration(Registration_ID)
);

CREATE TABLE Staff(
Staff_ID INT PRIMARY KEY,
Name VARCHAR(100),
Phone_No VARCHAR(15),
Additional_Info VARCHAR(255),
Rating FLOAT,
Address VARCHAR(255),
Email VARCHAR(100),
Available_Dates VARCHAR(255)
);

CREATE TABLE Event_Staff(
Event_ID INT,
Organizer_ID INT,
Staff_ID INT,
Status VARCHAR(50),
PRIMARY KEY(Event_ID,Staff_ID),
FOREIGN KEY(Event_ID) REFERENCES Event(Event_ID),
FOREIGN KEY(Organizer_ID) REFERENCES Event_Organizer(Organizer_ID),
FOREIGN KEY(Staff_ID) REFERENCES Staff(Staff_ID)
);

CREATE TABLE Attendance(
Attendance_ID INT PRIMARY KEY,
Attendee_ID INT,
Event_ID INT,
Staff_ID INT,
CheckInTime DATETIME,
Status VARCHAR(50),
FOREIGN KEY(Attendee_ID) REFERENCES Attendee(Attendee_ID),
FOREIGN KEY(Event_ID) REFERENCES Event(Event_ID),
FOREIGN KEY(Staff_ID) REFERENCES Staff(Staff_ID)
);

CREATE TABLE Notification(
Notification_ID INT PRIMARY KEY,
Registration_ID INT,
Attendee_ID INT,
Payment_ID INT,
Message VARCHAR(255),
Date_Time DATETIME,
FOREIGN KEY(Registration_ID) REFERENCES Registration(Registration_ID),
FOREIGN KEY(Attendee_ID) REFERENCES Attendee(Attendee_ID),
FOREIGN KEY(Payment_ID) REFERENCES Payment(Payment_ID)
);

CREATE TABLE Event_Review(
Attendee_ID INT,
Event_ID INT,
Client_ID INT,
Rating INT,
Comment VARCHAR(255),
Date DATE,
PRIMARY KEY(Attendee_ID,Event_ID),
FOREIGN KEY(Attendee_ID) REFERENCES Attendee(Attendee_ID),
FOREIGN KEY(Event_ID) REFERENCES Event(Event_ID),
FOREIGN KEY(Client_ID) REFERENCES Client(Client_ID)
);

CREATE TABLE StaffReview(
Organizer_ID INT,
Staff_ID INT,
Event_ID INT,
Rating FLOAT,
Comment VARCHAR(255),
ReviewDate DATE,
PRIMARY KEY(Organizer_ID,Staff_ID,Event_ID),
FOREIGN KEY(Organizer_ID) REFERENCES Event_Organizer(Organizer_ID),
FOREIGN KEY(Staff_ID) REFERENCES Staff(Staff_ID),
FOREIGN KEY(Event_ID) REFERENCES Event(Event_ID)
);

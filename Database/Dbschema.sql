CREATE DATABASE event_management;
USE event_management;

CREATE TABLE Client (
    Client_ID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    Phone_No VARCHAR(20) UNIQUE NOT NULL,
    Password VARCHAR(255) NOT NULL,
    Address VARCHAR(255),
    Additional_Info VARCHAR(255)
);

CREATE TABLE Event_Organizer (
    Organizer_ID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    Phone_No VARCHAR(20) UNIQUE NOT NULL,
    Password VARCHAR(255) NOT NULL
);


CREATE TABLE Attendee (
    Attendee_ID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    Phone_No VARCHAR(20) UNIQUE NOT NULL,
    Password VARCHAR(255) NOT NULL,
    Address VARCHAR(255),
    Bio VARCHAR(255)
);


CREATE TABLE Staff (
    Staff_ID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Phone_No VARCHAR(20) UNIQUE NOT NULL,
    Additional_Info VARCHAR(255),
    Rating FLOAT DEFAULT 0,
    Address VARCHAR(255),
    Email VARCHAR(100) UNIQUE
);


CREATE TABLE Event (
    Event_ID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(200) NOT NULL,
    Event_Type VARCHAR(100),
    Date DATE,
    Location VARCHAR(200),
    Capacity INT,
    Status VARCHAR(50),
    Client_ID INT,
    Organizer_ID INT,

    FOREIGN KEY (Client_ID) REFERENCES Client(Client_ID)
    ON DELETE CASCADE,

    FOREIGN KEY (Organizer_ID) REFERENCES Event_Organizer(Organizer_ID)
    ON DELETE CASCADE
);


CREATE TABLE Event_Plan (
    EventPlan_ID INT AUTO_INCREMENT PRIMARY KEY,
    Status VARCHAR(50),
    Organizer_ID INT,
    Event_ID INT,
    Approval_Status VARCHAR(50),

    FOREIGN KEY (Organizer_ID) REFERENCES Event_Organizer(Organizer_ID),
    FOREIGN KEY (Event_ID) REFERENCES Event(Event_ID)
);


CREATE TABLE Event_Report (
    EventReport_ID INT AUTO_INCREMENT PRIMARY KEY,
    Submission_Date DATE,
    Organizer_ID INT,
    Event_ID INT,

    FOREIGN KEY (Organizer_ID) REFERENCES Event_Organizer(Organizer_ID),
    FOREIGN KEY (Event_ID) REFERENCES Event(Event_ID)
);



CREATE TABLE Event_Notification (
    Event_Notification_ID INT AUTO_INCREMENT PRIMARY KEY,
    Organizer_ID INT,
    Client_ID INT,
    Event_ID INT,
    Message TEXT,
    Date_Time DATETIME,

    FOREIGN KEY (Organizer_ID) REFERENCES Event_Organizer(Organizer_ID),
    FOREIGN KEY (Client_ID) REFERENCES Client(Client_ID),
    FOREIGN KEY (Event_ID) REFERENCES Event(Event_ID)
);



CREATE TABLE Registration (
    Registration_ID INT AUTO_INCREMENT PRIMARY KEY,
    Attendee_ID INT,
    Event_ID INT,
    Registration_Date DATE,
    Status VARCHAR(50),
    Additional_Info VARCHAR(255),

    FOREIGN KEY (Attendee_ID) REFERENCES Attendee(Attendee_ID)
    ON DELETE CASCADE,

    FOREIGN KEY (Event_ID) REFERENCES Event(Event_ID)
    ON DELETE CASCADE
);


CREATE TABLE Ticket (
    Ticket_ID INT AUTO_INCREMENT PRIMARY KEY,
    Registration_ID INT,
    Type VARCHAR(50),

    FOREIGN KEY (Registration_ID)
    REFERENCES Registration(Registration_ID)
);

CREATE TABLE Payment (
    Payment_ID INT AUTO_INCREMENT PRIMARY KEY,
    Registration_ID INT,
    Amount DECIMAL(10,2),
    Status VARCHAR(50),
    Payment_Date DATE,
    Payment_Method VARCHAR(50),

    FOREIGN KEY (Registration_ID)
    REFERENCES Registration(Registration_ID)
);


CREATE TABLE Event_Staff (
    Event_ID INT,
    Staff_ID INT,
    Status VARCHAR(50),

    PRIMARY KEY (Event_ID, Staff_ID),

    FOREIGN KEY (Event_ID)
    REFERENCES Event(Event_ID)
    ON DELETE CASCADE,

    FOREIGN KEY (Staff_ID)
    REFERENCES Staff(Staff_ID)
    ON DELETE CASCADE
);


CREATE TABLE Attendance (
    Attendee_ID INT,
    Event_ID INT,
    Staff_ID INT,
    CheckInTime DATETIME,
    Status VARCHAR(50),

    PRIMARY KEY (Attendee_ID, Event_ID),

    FOREIGN KEY (Attendee_ID)
    REFERENCES Attendee(Attendee_ID),

    FOREIGN KEY (Event_ID)
    REFERENCES Event(Event_ID),

    FOREIGN KEY (Staff_ID)
    REFERENCES Staff(Staff_ID)
);



CREATE TABLE Notification (
    Notification_ID INT AUTO_INCREMENT PRIMARY KEY,
    Attendee_ID INT,
    Status VARCHAR(50),
    Message TEXT,
    Date_Time DATETIME,

    FOREIGN KEY (Attendee_ID)
    REFERENCES Attendee(Attendee_ID)
);



CREATE TABLE Event_Review (
    Attendee_ID INT,
    Event_ID INT,
    Rating INT,
    Comment TEXT,
    Date DATE,

    PRIMARY KEY (Attendee_ID, Event_ID),

    FOREIGN KEY (Attendee_ID)
    REFERENCES Attendee(Attendee_ID),

    FOREIGN KEY (Event_ID)
    REFERENCES Event(Event_ID)
);


CREATE TABLE StaffReview (
    Organizer_ID INT,
    Staff_ID INT,
    Event_ID INT,
    Rating INT,
    Comment TEXT,
    ReviewDate DATE,

    PRIMARY KEY (Organizer_ID, Staff_ID, Event_ID),

    FOREIGN KEY (Organizer_ID)
    REFERENCES Event_Organizer(Organizer_ID),

    FOREIGN KEY (Staff_ID)
    REFERENCES Staff(Staff_ID),

    FOREIGN KEY (Event_ID)
    REFERENCES Event(Event_ID)
);


CREATE TABLE Staff_Report (
    Report_ID INT AUTO_INCREMENT PRIMARY KEY,
    Staff_ID INT,
    Event_ID INT,

    FOREIGN KEY (Staff_ID)
    REFERENCES Staff(Staff_ID),

    FOREIGN KEY (Event_ID)
    REFERENCES Event(Event_ID)
);



CREATE TABLE Staff_Availability (
    Availability_ID INT AUTO_INCREMENT PRIMARY KEY,
    Staff_ID INT,
    Availability_Date DATE,

    FOREIGN KEY (Staff_ID)
    REFERENCES Staff(Staff_ID)
);


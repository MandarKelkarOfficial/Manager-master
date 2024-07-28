# DataHive Student Leaving Certificate Generation and Management System

## Overview

**DataHive** is an advanced system designed to collect student data, process it, and generate leaving certificates efficiently. The system consists of multiple integrated modules to ensure a streamlined workflow from data collection to certificate generation. This project was developed as part of my final year diploma, incorporating comprehensive functionalities and robust security measures.

## Key Modules

1. **Data Collection Module**: Gathers student data from various sources such as registration forms, academic records, and attendance records.
2. **Data Processing Module**: Processes the collected data, including calculating grades, attendance, and other relevant information necessary for generating leaving certificates.
3. **Certificate Generation Module**: Designs and generates the leaving certificates using the processed data, ensuring they are in the desired format.
4. **User Management Module**: Manages user access and permissions, including authentication, roles, and activity logging.
5. **Reporting Module**: Generates reports on student data and certificate generation, with capabilities for custom reports, exports, and automated scheduling.

## Features

- **User-Friendly Interface**: Intuitive and simple UI with clear navigation and instructions.
- **Scalability**: Capable of handling large volumes of student data and simultaneous certificate generation.
- **High Availability and Security**: Hosted on a cloud-based infrastructure with redundant backups and disaster recovery mechanisms.
- **Comprehensive Reporting**: Customizable reports for detailed insights into student performance and certificate generation.

## System Design Description

### Preliminary Design

The system includes a user interface for inputting student information, such as personal details, academic performance, and attendance records, which is stored in a database. The processing modules calculate grades and attendance, generating report cards and leaving certificates based on predefined criteria. Security features ensure data protection and authorized access, with backup and recovery mechanisms in place.

### Technology Used

- **Programming Language**: Python
- **Web Framework**: Flask
- **Database Management System**: Sqlite
- **ORM Tool**: SQLAlchemy
- **Front-End Technologies**: HTML, CSS, JavaScript
- **Security Technologies**: Encryption, password protection, and secure authentication mechanisms

### Architectural Strategies

The architecture includes the following modules:

1. **Data Collection Module**: Collects student data.
2. **Data Storage Module**: Stores data securely.
3. **Data Processing Module**: Processes data to generate certificates.
4. **User Management Module**: Manages user access and permissions.
5. **Reporting Module**: Generates detailed reports.
6. **Backup and Recovery Module**: Ensures data backup and recovery.
7. **Security Module**: Implements security measures.
8. **Leaving Certificate Generation Module**: Collects data from the database to generate certificates.

## Setup

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/MandarKelkarOfficial/Manager-master.git
   cd datahive
   ```

2. **Create a Virtual Environment**:

   ```bash
   python -m virtualenv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install Dependencies**:

   ```bash
   pip install -r requirements.txt
   ```

4. **Set Up the Database**:

   ```bash
   flask db init
   flask db migrate -m "Initial migration."
   flask db upgrade
   ```

5. **Run the Application**:
   ```bash
   flask run
   ```

## Screenshots

![Dashboard](/static/img/dashboard.png)
_Figure 1: Dashboard_

![Student Information Form](/static/img/stdEntry.png)
_Figure 2: Student Information Form_

![Certificate Generation](/static/img/stdLeaving.png)
_Figure 3: Certificate Generation_

![Reports](/static/img/std_display.png)
_Figure 4: Information Display Page_

![Reports](/static/img/demo.png)
_Figure 4: Genrated Certificate_

By leveraging modern web technologies, DataHive provides a reliable, scalable, and user-friendly solution for managing student data and generating leaving certificates, ensuring both efficiency and security.

---

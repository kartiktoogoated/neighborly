# Neighborly

This project is a society management system aimed at providing a comprehensive solution for managing society-related activities, such as user registration, role-based management, action logging, and more. It will also feature an AI-powered bot for license plate recognition.

## Features

- **User Management**: Admins can manage users with roles (e.g., Admin, Member, etc.).
- **Role-based Access Control**: Different actions based on user roles (Admins can perform special actions).
- **Admin Action Logging**: Admin actions are logged for auditing and accountability.
- **AI-Powered Plate Recognition**: The system will use AI to recognize and log vehicle license plates for security and management purposes.
- **Database**: All information is stored and managed through MongoDB for scalability and reliability.

## Tech Stack

- **Frontend**: React.js 
- **Backend**: Node.js with Express
- **Database**: MongoDB for storing user data and logs
- **Authentication**: JWT (JSON Web Token) for securing routes
- **AI**: Custom AI model for license plate recognition

## Setup

### Prerequisites

- Node.js
- MongoDB (local or cloud-based)
- NPM or Yarn (for managing dependencies)

### Getting Started

#### 1. Clone the Repository
```bash
git clone https://github.com/kartiktoogoated/neighborly.git
cd neighborly

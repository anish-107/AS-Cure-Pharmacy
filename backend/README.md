<!-- README.md
@author Dibyasmita
@date 18-1-2026
@description This file contains the backend documentation for the AS Cure Pharma website.
@returns Markdown Page
-->

# AS Cure Pharma Backend

**Official Backend API Repository**

---

## Table of Contents

1. Overview  
2. Technology Stack  
3. Project Architecture  
4. API Features  
5. Local Development Setup  
6. File Locations  
7. Build & Deployment  
8. Changes Guidelines  

---

# 1. Overview

This repository contains the **backend service** for the **AS Cure Pharma official website**.

The backend is responsible for:

* Handling contact form submissions
* Sending automated email notifications
* Saving contact messages to the database
* Protecting the API from spam using rate limiting

The backend exposes a **REST API** that is consumed by the **React frontend application**.

The project is designed to be:

* Lightweight
* Secure
* Easy to deploy
* Compatible with serverless environments

---

# 2. Technology Stack

The backend application is built using the following technologies:

| Technology | Purpose |
|-----------|--------|
| **FastAPI** | High-performance Python API framework |
| **PostgreSQL** | Database for storing contact form submissions |
| **Supabase** | Hosted PostgreSQL database service |
| **Pydantic** | Data validation and request schemas |
| **Uvicorn** | ASGI server for running FastAPI |
| **Gmail SMTP** | Email delivery service |

---

# 3. Project Architecture

The backend follows a **modular architecture** to keep responsibilities separated.

```plaintext
backend/
│
├── app/
│   │
│   ├── api/                 # API route definitions
│   │   └── contact.py       # Contact form endpoint
│   │
│   ├── core/                # Core configuration and utilities
│   │   ├── config.py        # Environment variable configuration
│   │   └── limiter.py       # Rate limiting configuration
│   │
│   ├── db/                  # Database layer
│   │   ├── database.py      # Database connection setup
│   │   └── models.py        # SQLAlchemy models
│   │
│   ├── schemas/             # Request and response schemas
│   │   └── contact.py       # Contact form validation schema
│   │
│   ├── services/            # Business logic layer
│   │   └── email.py         # Email sending service
│   │
│   ├── main.py              # FastAPI application entry point
│   └── __init__.py
│
├── .env                     # Environment variables
├── requirements.txt         # Python dependencies
├── pyproject.toml           # Project configuration
├── vercel.json              # Vercel deployment configuration
└── README.md                # Backend documentation
````

This architecture ensures:

* Clear separation of API, database, and services
* Easy debugging
* Maintainable codebase
* Scalable structure for future features

---

# 4. API Features

The backend currently supports the following functionality.

## Contact Form API

The API receives contact form submissions from the frontend.

After receiving the form data, the backend will:

1. Validate the request
2. Save the message to the database
3. Send two emails

### Emails Sent

**Admin Notification Email**

Sent to the company administrator containing:

* Name
* Email
* Subject
* Message

**User Confirmation Email**

Sent to the user confirming that their message was received.

---

## Spam Protection

To protect the server and email system from abuse, the API includes **IP-based rate limiting**.

Example limits:

| Endpoint     | Limit                      |
| ------------ | -------------------------- |
| Contact Form | 3 requests per hour per IP |

---

# 5. Local Development Setup

## Prerequisites

You must have the following installed:

* Python 3.10+
* `uv` package manager
* PostgreSQL database

---

## Installation

Clone the repository and navigate into the backend folder.

```bash
git clone https://github.com/<your-username>/as-cure-pharma.git
cd backend
```

Install dependencies:

```bash
uv sync
```

---

## Start Development Server

```bash
uv run fastapi dev app/main.py
```

The API will run at:

```
http://127.0.0.1:8000
```

---

## API Documentation

FastAPI automatically generates interactive API documentation.

Open the following URL:

```
http://127.0.0.1:8000/docs
```

You can test all endpoints directly from this interface.

---

# 6. Environment Variables

Create a `.env` file in the project root.

Example configuration:

```env
# Database
DATABASE_URL=postgresql://postgres:[PASSWORD]@db.[PROJECT_REF].supabase.co:5432/postgres

# Email Configuration
MAIL_USERNAME=your_email@gmail.com
MAIL_PASSWORD=your_16_digit_app_password
MAIL_FROM=your_email@gmail.com
MAIL_PORT=465
MAIL_SERVER=smtp.gmail.com

# Admin Email
MAIN_EMAIL_TO=admin_email@example.com
```

Important:

* Do **not commit the `.env` file to GitHub**
* Always use **environment variables in production**

---

# 7. Build & Deployment

This backend is configured for **Vercel serverless deployment**.

Deployment files included:

```
vercel.json
requirements.txt
```

When deploying to Vercel:

1. Add environment variables in the **Vercel dashboard**
2. Use the **database connection pooler URL** if using Supabase
3. Ensure the correct Python runtime is detected

---

# 8. Changes Guidelines

When modifying the backend:

* Follow the existing folder structure
* Keep API routes inside `/api`
* Place business logic inside `/services`
* Validate all request data using **Pydantic schemas**
* Avoid placing logic inside route files

Always test the API using:

```
/docs
```

before deploying.

---

# License

This project is proprietary and owned by **AS Cure Pharma**.

Unauthorized distribution or reuse is not permitted.

```
<!-- backend.md
@author Dibyasmita
@date 20-02-2026
@description Simple explanation of how the backend works and how to configure it.
@returns Markdown Page
-->

# Backend Guide

This document explains **how the backend of the website works** and how to make simple changes if required.

The backend is responsible for:

- Handling the **contact form**
- Sending **emails**
- Saving contact form messages in the **database**

The backend is built using **Python and FastAPI**.

---

# 1. Backend Location

The backend code is located in the following folder:

```

/backend

```

Inside this folder you will find the main backend application.

---

# 2. Backend Folder Structure

Important folders inside the backend:

```

backend/app

```


### API Routes

```

backend/app/api

```

Contains the API endpoints used by the website.

Example:

```

contact.py

```

This file handles the **contact form submissions** from the website.

---

### Database

```

backend/app/db

```

This folder contains the database configuration.

Files:

```

database.py
models.py

```

- `database.py` → connects the backend to the database
- `models.py` → defines the structure of stored data

---

### Schemas

```

backend/app/schemas

```

Defines the **data format expected from the frontend**.

Example:

```

contact.py

```

This file ensures the contact form contains:

- Name
- Email
- Subject
- Message

---

### Email Service

```

backend/app/services

```

Contains the logic that sends emails.

Example:

```

email.py

```

When someone submits the contact form:

1. The backend receives the form
2. It saves the data
3. It sends two emails

---

# 3. Contact Form Workflow

When a user fills the contact form:

```

User submits contact form
↓
Frontend sends data to backend API
↓
Backend saves message in database
↓
Backend sends email to admin
↓
Backend sends confirmation email to user

```

---

# 4. API Endpoint

The contact form uses the following API endpoint:

```

POST /api/contact

````

Example data sent to the backend:

```json
{
  "form_name": "John Doe",
  "form_email": "john@email.com",
  "form_subject": "Product Inquiry",
  "form_content": "I would like more information."
}
````

---

# 5. Environment Variables

The backend uses a `.env` file for configuration.

Location:

```
backend/.env
```

Example variables:

```
DATABASE_URL=
MAIL_USERNAME=
MAIL_PASSWORD=
MAIL_FROM=
MAIL_SERVER=
MAIL_PORT=
MAIN_EMAIL_TO=
FRONTEND_URL=
```

Explanation:

| Variable      | Purpose                                    |
| ------------- | ------------------------------------------ |
| DATABASE_URL  | Database connection                        |
| MAIL_USERNAME | Email account used to send emails          |
| MAIL_PASSWORD | Email password or app password             |
| MAIL_FROM     | Email address used to send messages        |
| MAIL_SERVER   | SMTP server                                |
| MAIL_PORT     | Email server port                          |
| MAIN_EMAIL_TO | Email where contact form messages are sent |
| FRONTEND_URL  | Website domain                             |

---

# 6. Running the Backend

To run the backend locally:

Open the backend folder and run:

```
uv run fastapi dev app/main.py
```

The API will start at:

```
http://127.0.0.1:8000
```

API documentation is available at:

```
http://127.0.0.1:8000/docs
```

---

# 7. Database

The backend uses a **PostgreSQL database**.

The database stores:

* Contact form messages
* Submission time

Recommended database service:

* **Supabase**

---

# 8. Security

The backend includes **rate limiting**.

This prevents spam by limiting how many times a user can submit the contact form.

Example:

```
3 contact requests per hour per user
```

---

# 9. Deployment

The backend can be deployed using services such as:

* Vercel
* VPS server
* Docker container
* Cloud platforms

The backend should always be deployed together with the frontend.

---

# Developer

Backend developed by:

**Dibyasmita Hati**

```

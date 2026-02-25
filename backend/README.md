# Departmental Website Backend

This is a lightweight and fast backend API built with Python and FastAPI. It is designed to connect to a React frontend and handle two main tasks: managing user reviews and processing a contact form with automated email routing.

## Features

* **Review Management:** Allows the frontend to submit new reviews and fetch the top 10 most recent reviews from the database.
* **Contact Form & Emails:** Receives contact form submissions, saves them to the database, and automatically sends two emails: a notification to the department administrator and a confirmation reply to the user.
* **Spam Protection:** Includes IP-based rate limiting to prevent bots from overwhelming the database or the email server.
* **Serverless Ready:** Configured to be deployed easily on Vercel using a database connection pooler.

## Prerequisites

Before running this project, you will need:
* Python installed on your machine.
* `uv` (Python package manager) installed.
* A PostgreSQL database (Supabase is recommended).
* A Gmail account with a generated 16-digit "App Password" to send emails.

## Environment Variables

Create a file named `.env` in the root directory of the project. Do not share this file or upload it to GitHub. Add the following variables:

```env
# Database Connection
DATABASE_URL=postgresql://postgres:[PASSWORD]@db.[PROJECT_REF].supabase.co:5432/postgres

# Email Configuration
MAIL_USERNAME=your_bot_email@gmail.com
MAIL_PASSWORD=your_16_digit_app_password
MAIL_FROM=your_bot_email@gmail.com
MAIL_PORT=465
MAIL_SERVER=smtp.gmail.com
MAIN_EMAIL_TO=admin_receiving_inbox@college.edu

```

## Local Development Setup

1. **Initialize the project and install dependencies:**
Open your terminal in the project folder and run:
```bash
uv sync

```


2. **Start the development server:**
```bash
uv run fastapi dev app/main.py

```


3. **View the interactive documentation:**
Once the server is running, open your web browser and go to `http://127.0.0.1:8000/docs` to test the API endpoints directly.

## API Endpoints

### Reviews

* `GET /api/reviews/` - Fetches the top 10 most recent reviews. (Limit: 30 requests per minute per IP).
* `POST /api/reviews/` - Submits a new review to the database. Requires name, email, star rating (1-5), and text. (Limit: 5 requests per minute per IP).

### Contact

* `POST /api/contact/` - Submits a new contact form, saves it, and triggers the automated emails. (Limit: 3 requests per hour per IP).

## Deployment Notes (Vercel)

This project is configured for Vercel deployment.

1. Ensure the `vercel.json` and `requirements.txt` files are present in the root directory.
2. If adding new packages, update the requirements file by running: `uv export > requirements.txt`.
3. When setting your environment variables in the Vercel dashboard, make sure to use your database's **Connection Pooler URL** (typically using port 6543) instead of the standard database URL to prevent connection exhaustion.

---

**Authors:** Dibyasmita

**Date:** February 2026

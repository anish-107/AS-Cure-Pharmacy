'''email.py
@authors Anish, Dibyasmita
@date 25 - 02 - 2026
@description Handles formatting and sending asynchronous emails for the contact form.
'''

# Imports
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig, MessageType
from app.core.config import settings
from app.schemas.contact import ContactFormCreate


# Configure the SMTP connection using environment variables
conf = ConnectionConfig(
    MAIL_USERNAME=settings.MAIL_USERNAME,
    MAIL_PASSWORD=settings.MAIL_PASSWORD, #type: ignore
    MAIL_FROM=settings.MAIL_FROM,
    MAIL_PORT=settings.MAIL_PORT,
    MAIL_SERVER=settings.MAIL_SERVER,
    MAIL_STARTTLS=False,
    MAIL_SSL_TLS=True,
    USE_CREDENTIALS=True,
    VALIDATE_CERTS=True
)


# Initialize the FastMail instance with the provided configuration
fast_mail = FastMail(conf)


# Asynchronous function to dispatch both admin notification and user confirmation emails
async def send_contact_emails(contact_data: ContactFormCreate):
    
    # Construct the HTML payload for the admin notification
    admin_body = f"""
    <h3>New Departmental Inquiry</h3>
    <p><strong>Name:</strong> {contact_data.form_name}</p>
    <p><strong>Email:</strong> {contact_data.form_email}</p>
    <p><strong>Subject:</strong> {contact_data.form_subject}</p>
    <p><strong>Message:</strong><br>{contact_data.form_content}</p>
    """
    
    # Assemble the MessageSchema for the admin email routing
    admin_message = MessageSchema(
        subject=f"New Inquiry: {contact_data.form_subject}",
        recipients=[settings.MAIN_EMAIL_TO], # type: ignore
        body=admin_body,
        subtype=MessageType.html
    )

    # Construct the HTML payload for the user's auto-reply confirmation
    user_body = f"""
    <h3>Thank you for reaching out, {contact_data.form_name}!</h3>
    <p>We have received your message regarding "{contact_data.form_subject}" and will get back to you shortly.</p>
    <hr>
    <p><em>Your original message:</em><br>{contact_data.form_content}</p>
    """
    
    # Assemble the MessageSchema for the user email routing
    user_message = MessageSchema(
        subject="We received your message!",
        recipients=[contact_data.form_email], # type: ignore
        body=user_body,
        subtype=MessageType.html
    )

    # Dispatch both emails via the SMTP server
    await fast_mail.send_message(admin_message)
    await fast_mail.send_message(user_message)
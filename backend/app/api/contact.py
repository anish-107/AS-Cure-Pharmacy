''' contact.py
@authors Dibyasmita
@date 20 - 02 - 2026
@description Handles contact form submissions.
'''

# Imports
from fastapi import APIRouter, Depends, Request
from sqlalchemy.orm import Session
from app.db.database import get_db
from app.db import models
from app.schemas import contact
from app.services.email import send_contact_emails
from app.core.limiter import limiter

# Router
router = APIRouter()

# Routes
@router.post("/")
@limiter.limit("3/hour")
async def submit_contact_form(
    request: Request,
    form_data: contact.ContactFormCreate,
    db: Session = Depends(get_db)
):

    db_contact = models.ContactForm(**form_data.model_dump())

    db.add(db_contact)
    db.commit()
    db.refresh(db_contact)

    await send_contact_emails(form_data)

    return {"message": "Contact form submitted successfully"}
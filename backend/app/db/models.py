'''models.py
@authors Anish, Dibyasmita
@date 25 - 02 - 2026
@description Defines the SQLAlchemy database models for storing reviews and contact form submissions.
'''


# Standard and third-party imports for database column types and UTC timestamp generation
from sqlalchemy import Column, Integer, String, Text, DateTime
from datetime import datetime, timezone
from app.db.database import Base


# SQLAlchemy model representing the 'reviews' table in the PostgreSQL database
class Review(Base):
    __tablename__ = "reviews"

    # Primary key and indexed ID for fast database lookups
    review_id = Column(Integer, primary_key=True, index=True)
    
    # Standard string and text columns for user details, rating, and review content
    user_name = Column(String)
    email = Column(String)
    stars = Column(Integer)
    review = Column(Text) 
    
    # Automatically generates a UTC timestamp when a new review is inserted
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))


# SQLAlchemy model representing the 'contact_form' table for storing incoming inquiries
class ContactForm(Base):
    __tablename__ = "contact_form"

    # Primary key and indexed ID for the contact submissions
    contact_form_id = Column(Integer, primary_key=True, index=True)
    
    # Columns to store the sender's details, subject, and the actual message content
    form_name = Column(String)
    form_email = Column(String)
    form_subject = Column(Text)
    form_content = Column(Text)
    
    # Automatically records the exact UTC time the message was received in the database
    received_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
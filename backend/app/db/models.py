'''models.py
@authors Dibyasmita
@date 20 - 02 - 2026
@description SQLAlchemy models.
'''

# Imports
from sqlalchemy import Column, Integer, String, Text, DateTime
from sqlalchemy.sql import func
from app.db.database import Base


# Table
class ContactForm(Base):
    __tablename__ = "contact_forms"

    id = Column(Integer, primary_key=True, index=True)

    form_name = Column(String, nullable=False)
    form_email = Column(String, nullable=False)
    form_subject = Column(String, nullable=False)
    form_content = Column(Text, nullable=False)

    created_at = Column(DateTime(timezone=True), server_default=func.now())
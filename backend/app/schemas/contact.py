'''contact.py
@authors Anish, Dibyasmita
@date 25 - 02 - 2026
@description Defines the Pydantic schema for validating incoming contact form submissions.
'''


# Third-party imports for base data modeling and strict email string validation
from pydantic import BaseModel, EmailStr


# Schema outlining the required fields and types expected from the frontend contact form
class ContactFormCreate(BaseModel):
    form_name: str
    form_email: EmailStr
    form_subject: str
    form_content: str
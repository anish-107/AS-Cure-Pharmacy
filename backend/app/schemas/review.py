'''review.py
@authors Anish, Dibyasmita
@date 25 - 02 - 2026
@description Defines the Pydantic schemas for validating and serializing review data.
'''


# Standard and third-party imports for data validation, email checking, and timestamps
from pydantic import BaseModel, EmailStr, Field
from datetime import datetime


# Schema defining the exact structure and validation rules for an incoming review
class ReviewCreate(BaseModel):
    user_name: str
    email: EmailStr
    stars: int = Field(ge=1, le=5) # Restricts the rating to be strictly between 1 and 5
    review: str


# Schema defining the structure of the data that FastAPI will send back to the frontend
class ReviewResponse(BaseModel):
    review_id: int
    user_name: str
    stars: int
    review: str
    created_at: datetime


    # Internal configuration to allow Pydantic to read directly from SQLAlchemy ORM models
    class Config:
        from_attributes = True
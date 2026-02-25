''' reviews.py
@authors Dibyasmita
@date 20 - 02 - 2026
@description Handles review submissions and fetching of reviews.
'''


# Imports
from fastapi import APIRouter, Depends, Request
from sqlalchemy.orm import Session
from typing import List
from app.db.database import get_db
from app.db import models
from app.schemas import review
from app.core.limiter import limiter


# Router Object
router = APIRouter()


# Router Method : Create Review
@router.post("/", response_model=review.ReviewResponse)
@limiter.limit("5/minute") # limit to prevent spam (currently 5 per minute)
def create_review(request: Request, review_data: review.ReviewCreate, db: Session = Depends(get_db)):
    db_review = models.Review(**review_data.model_dump())
    db.add(db_review)
    db.commit()
    db.refresh(db_review)
    return db_review


# Router Method : Get Recent Reviews
@router.get("/", response_model=List[review.ReviewResponse])
@limiter.limit("30/minute")  
def get_top_reviews(request: Request, db: Session = Depends(get_db)):
    reviews = db.query(models.Review).order_by(models.Review.created_at.desc()).limit(10).all()
    return reviews
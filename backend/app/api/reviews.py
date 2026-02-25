''' reviews.py
@authors Dibyasmita
@date 20 - 02 - 2026
@description Handles review submissions and fetching of reviews.
'''


# Imports
from fastapi import APIRouter, Depends, Request, Query
from sqlalchemy.orm import Session
from typing import List, Optional
from app.db.database import get_db
from app.db import models
from app.schemas import review
from app.core.limiter import limiter


# Router Object
router = APIRouter()


# Router Method : Create Review
@router.post("/", response_model=review.ReviewResponse)
@limiter.limit("5/minute")
def create_review(request: Request, review_data: review.ReviewCreate, db: Session = Depends(get_db)):
    # Save a new review to the database
    db_review = models.Review(**review_data.model_dump())
    db.add(db_review)
    db.commit()
    db.refresh(db_review)
    return db_review


# Router Method : Get Recent Reviews
@router.get("/", response_model=List[review.ReviewResponse])
@limiter.limit("30/minute") 
def get_top_reviews(
    request: Request, 
    min_stars: Optional[int] = Query(None, ge=1, le=5, description="Filter by minimum star rating"),
    db: Session = Depends(get_db)
):
    # Start the base query
    query = db.query(models.Review)
    
    # If the frontend asks for a minimum star rating (like ?min_stars=4), apply the filter
    if min_stars is not None:
        query = query.filter(models.Review.stars >= min_stars)
        
    # Order by highest stars first, and then by newest date, limited to 10
    reviews = query.order_by(models.Review.stars.desc(), models.Review.created_at.desc()).limit(10).all()
    
    return reviews
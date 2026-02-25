'''main.py
@authors Anish, Dibyasmita
@date 25 - 02 - 2026
@description Main entry point for the FastAPI backend, handling initialization, middleware, and routing.
'''

# Standard and third-party imports for API routing, rate limiting, and database connection
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from slowapi import _rate_limit_exceeded_handler
from slowapi.errors import RateLimitExceeded
from app.core.limiter import limiter
from app.db.database import engine
from app.db import models
from app.api import reviews, contact


# Generate database tables automatically based on defined SQLAlchemy models
models.Base.metadata.create_all(bind=engine)


# Initialize the core FastAPI application instance
app = FastAPI(title="AS Cure Pharmacy")


# Attach the IP-based rate limiter to the application state and handle 429 errors
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler) #type: ignore


# Configure Cross-Origin Resource Sharing (CORS) to allow requests from the React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Register individual API route modules with their respective URL prefixes
app.include_router(reviews.router, prefix="/api/reviews", tags=["Reviews"])
app.include_router(contact.router, prefix="/api/contact", tags=["Contact"])


# Define the root endpoint for basic server health checks
@app.get("/")
def root():
    return {"message": "API is running securely!"}
'''main.py
@authors Anish, Dibyasmita
@date 25 - 02 - 2026
@description Main entry point for the FastAPI backend.
'''

# Imports
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from slowapi import _rate_limit_exceeded_handler
from slowapi.errors import RateLimitExceeded
from app.core.limiter import limiter
from app.core.config import settings
from app.db.database import engine
from app.db import models
from app.api import contact


# Create database tables
models.Base.metadata.create_all(bind=engine)


# Initialize FastAPI app
app = FastAPI(title="AS Cure Pharmacy Backend")


# Attach limiter
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)  #type: ignore


# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.FRONTEND_URL],
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)


# Register routers
app.include_router(contact.router, prefix="/api/contact", tags=["Contact"])


# Health check endpoint
@app.get("/health")
def health():
    return {"message": "API running successfully"}
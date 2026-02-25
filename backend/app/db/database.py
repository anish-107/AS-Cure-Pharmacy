'''database.py
@authors Anish, Dibyasmita
@date 25 - 02 - 2026
@description Sets up the SQLAlchemy database engine, session management, and base declarative class.
'''


# Third-party and local imports for SQLAlchemy connection handling and environment settings
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from app.core.config import settings


# Create the core SQLAlchemy engine to connect to the PostgreSQL database URL
engine = create_engine(settings.DATABASE_URL)


# Set up a session factory to manage database transactions without auto-committing
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


# Base class that all database models will inherit from to map to actual database tables
Base = declarative_base()


# Dependency generator to provide an independent database session per request and safely close it afterward
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
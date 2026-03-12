'''database.py
@authors Dibyasmita
@date 20 - 02 - 2026
@description Database connection configuration.
'''

# Imports
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from app.core.config import settings

# DB URL
DATABASE_URL = settings.DATABASE_URL

# DB Engine
engine = create_engine(DATABASE_URL)

# Session Config
SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

# Base Declaration
Base = declarative_base()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
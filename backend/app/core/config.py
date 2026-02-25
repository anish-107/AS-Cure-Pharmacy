''' config.py
@authors Dibyasmita
@date 20 - 02 - 2026
@description Configuration settings for the application.
'''


# Imports
from pydantic_settings import BaseSettings, SettingsConfigDict


# Configurations Settings
class Settings(BaseSettings):
    DATABASE_URL: str
    MAIL_USERNAME: str
    MAIL_PASSWORD: str
    MAIL_FROM: str
    MAIL_PORT: int
    MAIL_SERVER: str
    MAIN_EMAIL_TO: str
    FRONTEND_URL: str
    
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")


# Initialize Settings
settings = Settings() # type: ignore
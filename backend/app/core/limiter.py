''' limiter.py
@authors Dibyasmita
@date 20 - 02 - 2026
@description Manages rate limiting for API endpoints.
'''


# Imports
from slowapi import Limiter
from slowapi.util import get_remote_address


# Track the user's IP address to limit their request count
limiter = Limiter(key_func=get_remote_address)
from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

MONGO_URI = os.getenv("MONGO_URI", "mongodb://siddhantdamre11:<db_password>@<hostname>/?ssl=true&replicaSet=atlas-oisgwq-shard-0&authSource=admin&retryWrites=true&w=majority&appName=studyAI")
DB_NAME = "video_storage"

# Initialize MongoDB Client
client = AsyncIOMotorClient(MONGO_URI)
database = client[DB_NAME]
videos_collection = database["videos"]

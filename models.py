from pydantic import BaseModel
from datetime import datetime

# Video Metadata Schema for MongoDB
class VideoModel(BaseModel):
    filename: str
    file_path: str
    upload_time: datetime
    status: str  # "pending", "processed"

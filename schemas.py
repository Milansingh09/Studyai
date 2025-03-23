from pydantic import BaseModel

# Response Schema for Uploaded Video
class VideoResponse(BaseModel):
    id: str
    filename: str
    file_path: str
    upload_time: str
    status: str

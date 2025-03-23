from fastapi import FastAPI, File, UploadFile, HTTPException
import shutil
import os

app = FastAPI()

UPLOAD_DIR = "uploaded_videos"  # Make sure this folder exists

@app.post("/upload/")
async def upload_video(file: UploadFile = File(...)):
    try:
        # Ensure the upload directory exists
        os.makedirs(UPLOAD_DIR, exist_ok=True)
        
        # Save the file
        file_path = os.path.join(UPLOAD_DIR, file.filename)
        print(f"📂 Saving file to: {file_path}")  # Debugging log

        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        print("✅ File saved successfully!")  # Debugging log
        return {"filename": file.filename, "message": "File uploaded successfully!"}

    except Exception as e:
        print(f"❌ ERROR: {e}")  # Debugging log
        raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")
    
from fastapi import FastAPI
from fastapi.responses import FileResponse
import os

app = FastAPI()

UPLOAD_DIR = "uploaded_videos"

@app.get("/videos/{filename}")
async def get_uploaded_video(filename: str):
    file_path = os.path.join(UPLOAD_DIR, filename)

    file_path = file_path.replace("%20", " ").replace("%28", "(").replace("%29", ")")
    
    if os.path.exists(file_path):
        return FileResponse(file_path, media_type="video/mp4")
    return {"error": "File not found"}

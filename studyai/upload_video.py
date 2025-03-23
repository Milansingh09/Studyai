import requests

# ✅ Change this URL to match your FastAPI server
API_URL = "http://127.0.0.1:8000/upload/"

# ✅ Change this to your video file path
VIDEO_FILE_PATH = r"C:\Users\siddh\Downloads\l (1) (1).mp4"

# ✅ Open the file in binary mode
with open(VIDEO_FILE_PATH, "rb") as video_file:
    files = {"file": (VIDEO_FILE_PATH, video_file, "video/mp4")}
    
    # ✅ Send the POST request
    response = requests.post(API_URL, files=files)

# ✅ Print the response from the server
print(response.json())

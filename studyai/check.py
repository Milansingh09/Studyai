import os

UPLOAD_DIR = "uploaded_videos"  # Replace with your actual upload folder

if os.path.exists(UPLOAD_DIR):
    files = os.listdir(UPLOAD_DIR)
    print("📂 Uploaded Files:", files)
else:
    print("❌ No uploaded files found. Check if the directory exists.")

# Add this to your existing .ipynb file

# Import necessary libraries
import cv2
import mediapipe as mp
import numpy as np
import ipywidgets as widgets
from IPython.display import display, Audio
import threading
import time
import requests
import json
import os
import base64
import io
import sys
from PIL import Image
import pyttsx3

# Initialize MediaPipe pose detection
mp_pose = mp.solutions.pose
pose = mp_pose.Pose(min_detection_confidence=0.5, min_tracking_confidence=0.5)
mp_drawing = mp.solutions.drawing_utils

# Initialize text-to-speech engine
tts_engine = pyttsx3.init()

# Global variables
camera_active = True
groq_analysis_active = False
groq_api_key = os.environ.get('GROQ_API_KEY', '')
exercise_id = 'default'  # Can be set by the user
feedback_queue = []
last_analysis_time = 0
analysis_interval = 10  # seconds between analyses

# Create button widgets
stop_button = widgets.Button(
    description='Stop Camera',
    button_style='danger',
    icon='stop'
)

toggle_analysis_button = widgets.Button(
    description='Start Voice Analysis',
    button_style='info',
    icon='microphone'
)

exercise_dropdown = widgets.Dropdown(
    options=['squat', 'pushup', 'plank', 'lunges'],
    value='squat',
    description='Exercise:',
)

# Function to handle button clicks
def on_stop_button_clicked(b):
    global camera_active
    camera_active = False
    print("Camera stopped. Run the cell again to restart.")

def on_toggle_analysis_clicked(b):
    global groq_analysis_active
    groq_analysis_active = not groq_analysis_active
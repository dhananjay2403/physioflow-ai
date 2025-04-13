![github-submission-banner](https://github.com/user-attachments/assets/a1493b84-e4e2-456e-a791-ce35ee2bcf2f)

# 🚀 PhysioFlow

> AI-driven Physiotherapy Assistant

---

## 📌 Problem Statement

<!-- Select the problem statement number and title from the official list given in Participant Manual. -->
**Problem Statement 1 - Weave AI magic with Groq**


---

## 🎯 Objective

<!-- What problem does your project solve, and who does it serve?  
Briefly describe the real-world use case and the value it provides. -->

PhysioFlow AI addresses the accessibility gap in physiotherapy by providing an AI-powered assistant that guides users through exercises with real-time analysis and feedback. It serves:

- Physiotherapy patients who need supervised rehabilitation but have limited access to in-person sessions
- Elderly individuals requiring mobility exercises with proper guidance
- Athletes recovering from injuries who need precise movement tracking
- Healthcare providers looking to extend remote care capabilities
- Anyone seeking to improve physical health with professional-grade guidance

By combining computer vision, multimodal AI and real-time analysis, PhysioFlow AI makes professional physiotherapy guidance accessible to everyone, everywhere, at any time.

---

## 🧠 Team & Approach

### Team Name:  
The Bois

### Team Members:
- Dhananjay Tiwari (https://github.com/dhananjay2403) - Frontend + Computer Vision
- Siddharth Kumar (https://github.com/siddharth23k) - Backend + ML
- Lisha Angral (https://github.com/lishaangral) - UI design + Frontend
- Anshul Dhoptey (https://github.com/Spectre-anshul) - Computer Vision

### Your Approach:  
<!-- Why we chose this problem -->
Our team recognized a critical gap in healthcare accessibility: while physiotherapy is essential for recovery, many patients struggle with limited access to professionals, high costs, and difficulty maintaining proper form without supervision. As healthcare increasingly moves toward digital solutions, we saw an opportunity to leverage AI to democratize access to quality rehabilitation.

<!-- Key challenges addressed -->
- Creating accurate real-time pose detection that works across various body types and lighting conditions
- Developing intelligent form analysis that provides actionable feedback
- Building a responsive design that optimizes experience based on device capabilities
- Integrating multimodal AI to understand both visual movements and voice commands
- Ensuring the system provides personalized guidance similar to a human physiotherapist

<!-- Pivots and breakthroughs -->
- Initially planned only for mobile, but pivoted to device-responsive design when we realized desktop users needed access to progress tracking
- Breakthrough in using MediaPipe's pose detection combined with rule-based analysis, significantly simplifying our approach while maintaining accuracy
- Discovered Groq's multimodal capabilities could enhance our feedback system beyond basic computer vision analysis

---

## 🛠️ Tech Stack

### Core Technologies Used:
- <u>Frontend:</u> <br/>
        React.js for component-based UI <br/>
        Tailwind CSS for responsive design <br/>
        TensorFlow.js and MediaPipe for client-side pose detection <br/>
        React Router for navigation <br/>
        Axios for API communication <br/>

- </u>Backend:</u>  
        Flask for API development  <br/>
        Python for computer vision processing  <br/>
        Scikit-learn for machine learning models  <br/>
        JWT for authentication  <br/>
        Swagger for API documentation  <br/>

- </u>Database:</u>  <br/> 
        MongoDB for user data, exercise library, and progress tracking <br/>
        Redis for caching frequent queries and session management <br/>

- </u>APIs:</u>  <br/> 
        Groq API for multimodal AI guidance <br/>
        MediaPipe Pose for skeletal tracking <br/>
        Web Speech API for voice recognition <br/>

- </u>Hosting:</u>  
        Vercel for frontend deployment  <br/>
        Heroku for backend services  <br/>
        MongoDB Atlas for database hosting  <br/>

### Sponsor Technologies Used:
<!-- [ ] **Groq:** _How you used Groq_  *(Mark with ✅ if completed)* -->

- ✅ Groq: Used Groq's multimodal AI to analyze user movements captured via camera and provide intelligent, context-aware feedback on exercise form. The Groq API powers our virtual physiotherapist assistant, enabling it to understand both visual movements and voice commands, generating personalized exercise plans, and delivering natural language feedback on technique corrections.
---

## ✨ Key Features

<!-- Highlight the most important features of your project:
Add images, GIFs, or screenshots if helpful! -->

- ✅ Real-time Movement Analysis: Using MediaPipe and custom algorithms to track body movements and provide instant feedback on exercise form.
- ✅ Multimodal AI Guidance: Groq-powered assistant that understands both visual input and voice commands to provide personalized coaching.
- ✅ Responsive Design: Optimized experience for mobile (camera functionality) and desktop (progress tracking and visualization).
- ✅ Comprehensive Progress Tracking: Visual reports and metrics showing improvement over time and generating personalized exercise plans.
- ✅ Exercise Library: Curated collection of physiotherapy and yoga exercises with detailed instructions and visual guides.


---

## 📽️ Demo & Deliverables

- **Demo Video Link:** [Paste YouTube or Loom link here]  
- **Pitch Deck / PPT Link:** [Paste Google Slides / PDF link here]  

---

## ✅ Tasks & Bonus Checklist

- [ ] **All members of the team completed the mandatory task - Followed at least 2 of our social channels and filled the form** (Details in Participant Manual)  
- [ ] **All members of the team completed Bonus Task 1 - Sharing of Badges and filled the form (2 points)**  (Details in Participant Manual)
- [ ] **All members of the team completed Bonus Task 2 - Signing up for Sprint.dev and filled the form (3 points)**  (Details in Participant Manual)

*(Mark with ✅ if completed)*

---

## 🧪 How to Run the Project

### Requirements:
- Node.js v16+ for frontend
- Python 3.8+ for backend
- MongoDB database
- Groq API key (sign up at groq.com)
- Camera access (for exercise tracking functionality)

### Local Setup:
<!-- ```bash
# Clone the repo
git clone https://github.com/your-team/project-name

# Install dependencies
cd project-name
npm install

# Start development server
npm run dev
``` 

Provide any backend/frontend split or environment setup notes here.
-->

<!-- Create a .env file in the frontend directory: -->
REACT_APP_API_URL=http://localhost:5000

<!-- Create a .env file in the backend directory: -->
GROQ_API_KEY=your_groq_api_key
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

<!-- Local Setup -->
# Clone the repo
git clone [https://github.com/your-team/physioflow-ai](https://github.com/your-team/physioflow-ai)

# Backend setup
cd physioflow-ai/backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py

# Frontend setup (in a new terminal)
cd physioflow-ai/frontend
npm install
npm start


The application will be available at http://localhost:3000


---

## 🧬 Future Scope

<!-- List improvements, extensions, or follow-up features:

- 📈 More integrations  
- 🛡️ Security enhancements  
- 🌐 Localization / broader accessibility   -->

- Yoga Pose Analyzer: Extend our movement detection system to recognize & guide through yoga poses with proper alignment feedback
- Strength Training Analysis: Add support for analyzing weight lifting form and providing safety guidance
- Healthcare Provider Dashboard: Create an interface for physiotherapists to monitor patient progress remotely
- Enhanced Voice Interaction: Develop more sophisticated voice command recognition for hands-free operation
- Mobile App Development: Native mobile applications for improved performance and offline capabilities
- Integration with Wearables: Connect with fitness trackers and smartwatches for more precise movement data
- Multilingual Support: Localization for global accessibility and cultural-specific exercise routines

---

## 📎 Resources / Credits

<!-- - APIs or datasets used  
- Open source libraries or tools referenced  
- Acknowledgements   -->

APIs & Libraries:
- MediaPipe for pose detection
- Groq API for multimodal AI capabilities
- TensorFlow.js for machine learning in the browser
- React and Tailwind CSS for frontend
- Flask for backend 

Datasets:
- PhysioNet for reference physiotherapy movements
- Open source yoga and exercise databases for pose references

Research Papers:
- "Computer Vision-Based Systems for Physical Rehabilitation: A Review" (2021)
- "Deep Learning for Human Movement Understanding" (2023)

---

## 🏁 Final Words

<!-- Share your hackathon journey — challenges, learnings, fun moments, or shout-outs! -->

PhysioFlow AI represents our vision for making healthcare more accessible through technology. Throughout this hackathon, our team faced numerous challenges—from fine-tuning pose detection accuracy to creating an intuitive user experience—but each obstacle taught us valuable lessons about healthcare applications and AI integration.

Our biggest learning was the importance of simplicity and accessibility; while we were tempted to add complex features, we focused on core functionality that delivers real value to users. We're proud of building a solution that could genuinely help people recover better and faster from injuries and mobility issues.

We'd like to thank the hackathon organizers and sponsors, especially Groq for providing the multimodal AI capabilities that power our virtual physiotherapist. This journey has only strengthened our belief that AI can transform healthcare for the better.

---

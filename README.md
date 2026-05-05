# drowsiness-detection-
# 🚗 Drowsiness Detection Frontend System

## 📌 Project Overview

The *Drowsiness Detection Frontend System* is a React-based web application designed to monitor and display the driver's alertness level in real-time. It provides visual feedback, alerts, and post-driving analytics to enhance road safety and reduce accidents caused by driver fatigue.

This frontend works alongside a backend (eye detection / ML model) to present meaningful insights such as drowsiness score, alerts, and trip history.

---

## 🎯 Key Features

### 🔹 Real-Time Dashboard

* Displays *live drowsiness score*
* Visual indicators:

  * 🟢 Green → Alert
  * 🟡 Yellow → Warning
  * 🔴 Red → Critical
* Supports tier-based alert system:

  * Tier 1 → Soft alert
  * Tier 2 → Warning alert
  * Tier 3 → Critical alert (sound + visual)

---

### 🔹 Multi-Modal Alert System

* Audio alerts using beep.mp3
* Visual warning messages
* Dynamic UI updates based on fatigue level

---

### 🔹 Analytics Page

* Shows historical alert data
* Helps understand driver fatigue patterns
* Can be extended with charts and graphs

---

### 🔹 About Section

* Describes project idea, objectives, and impact
* Useful for presentations (SIH / academic submission)

---

## 🗂️ Folder Structure


drowsiness-frontend/
│
├── node_modules/           # Project dependencies
│
├── public/                # Static files
│   ├── index.html
│   ├── beep.mp3
│   └── Safe pilots.jpeg
│
├── src/                   # Main source code
│   │
│   ├── pages/             # All page components
│   │   ├── About.js
│   │   ├── Analytics.js
│   │   ├── Home.js
│   │   └── LiveDashboard.js
│   │
│   ├── App.js             # Main app component
│   ├── index.js           # Entry point
│   └── index.css          # Global styles
│
├── .eslintrc.json         # ESLint configuration
├── package.json           # Project metadata & dependencies
├── package-lock.json      # Dependency lock file
├── README.md              # Project documentation


---

## ⚙️ Installation & Setup

### Step 1: Clone or Download Project

bash
git clone <your-repo-link>
cd drowsiness-frontend


---

### Step 2: Install Dependencies

bash
npm install


---

### Step 3: Run the Application

bash
npm start


---

### Step 4: Open in Browser


http://localhost:3000


---

## 🧠 How It Works

1. The system receives input (simulated or from backend).
2. Calculates a *drowsiness score (0–100)*.
3. Based on the score:

   * Generates alerts
   * Updates UI dynamically
4. Stores or displays analytics for later review.

---

## 🚧 Future Enhancements

* Integration with real-time *OpenCV / ML backend*
* Face & eye detection using camera
* Improved graphs using chart libraries
* Mobile responsiveness
* Cloud-based data storage

---

## ⚠️ Challenges

* Real-time processing latency
* Handling low-light conditions
* Avoiding false alerts
* Ensuring user privacy

---

## 🎓 Use Case

* Smart vehicles
* Driver safety systems
* Fleet monitoring
* SIH (Smart India Hackathon) projects

---

## 👨‍💻 Tech Stack

* React.js
* JavaScript
* HTML & CSS
* Tailwind CSS (optional)
* Recharts (for analytics)

---

## 📢 Conclusion

This project demonstrates how *real-time monitoring + intelligent alerts* can significantly improve road safety. With further backend integration, it can be deployed in real-world driving environments.

---

---
## 🙌 Author
**Parv Jain**
B.TECH (IOT STUDENT)
[LinkedIn](https://www.linkedin.com/in/parv-jain-3b21b5333/) | [GitHub](https://github.com/parvjain7278)

---

## 🎥 Project Demo Video

You can watch the working demo of the Drowsiness Detection System here:

🔗 *Demo Video Link:*
https://docs.google.com/videos/d/15dassGWby2LGihHq9REWwP6hJU6_BL5npeyEAmTRl9Q/edit?usp=drive_link
> Replace the above link with your Google Drive / YouTube video link.

---

## 📸 Screenshots

### 🏠 Home Page


<img width="1600" height="853" alt="WhatsApp Image 2026-05-05 at 18 59 01 (1)" src="https://github.com/user-attachments/assets/48fb674f-8257-400b-9c18-30bded7acd56" />
<img width="1600" height="848" alt="WhatsApp Image 2026-05-05 at 18 59 01" src="https://github.com/user-attachments/assets/27e2c3b8-87f9-4c35-99c6-7a90e88c9927" />

---

### 📊 Live Dashboard (Real-Time Monitoring)
<img width="1906" height="768" alt="Screenshot 2026-05-05 190144" src="https://github.com/user-attachments/assets/a313a780-c48c-4b2a-bcb0-2ca0462ea45e" />


---

### ⚠️ Alert System (Warning Stage)


<img width="1600" height="900" alt="WhatsApp Image 2026-05-05 at 19 07 24" src="https://github.com/user-attachments/assets/0ac7a468-a8ee-4362-a884-015fadd782ea" />

---

### 📈 ABOUT Page

<img width="1600" height="810" alt="WhatsApp Image 2026-05-05 at 19 08 49" src="https://github.com/user-attachments/assets/244654d3-d0f8-4825-92c9-d50c5b3429b8" />

---

## 📁 Screenshots Folder Structure

Make sure you create a folder like this inside your project:


drowsiness-frontend/
│
├── screenshots/
│   ├── home.png
│   ├── dashboard.png
│   ├── alert.png
│   └── analytics.png


---

## 💡 Tips for Screenshots

* Take screenshots using:

  * Win + Shift + S (Windows Snipping Tool)
* Capture:

  * Dashboard with score changing
  * Alert (red warning screen)
  * Analytics graph


---

## 🎬 How to Record Demo Video

You can record using:

* OBS Studio (best)
* Windows Screen Recorder (Win + Alt + R)

### Include in Video:

1. Open app
2. Show dashboard changing
3. Trigger alert (Tier 3)
4. Show analytics page
5. Explain briefly (optional voice)

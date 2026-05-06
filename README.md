# 🚗 Drowsiness Detection Frontend System

## 📌 Project Overview

The **Drowsiness Detection Frontend System** is a React-based web application designed to monitor and display the driver's alertness level in real-time. It provides visual feedback, alerts, and post-driving analytics to enhance road safety and reduce accidents caused by driver fatigue.

This frontend works alongside a backend (eye detection / ML model) to present meaningful insights such as drowsiness score, alerts, and trip history.

---

## 🎯 Key Features

### 🔹 Real-Time Dashboard

* Displays **live drowsiness score**
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

* Audio alerts using `beep.mp3`
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

```
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
```

---

## ⚙️ Installation & Setup

### Step 1: Clone or Download Project

```bash
git clone <your-repo-link>
cd drowsiness-frontend
```

---

### Step 2: Install Dependencies

```bash
npm install
```

---

### Step 3: Run the Application

```bash
npm start
```

---

### Step 4: Open in Browser

```
http://localhost:3000
```

---

## 🧠 How It Works

1. The system receives input (simulated or from backend).
2. Calculates a **drowsiness score (0–100)**.
3. Based on the score:

   * Generates alerts
   * Updates UI dynamically
4. Stores or displays analytics for later review.

---

## 🚧 Future Enhancements

* Integration with real-time **OpenCV / ML backend**
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

This project demonstrates how **real-time monitoring + intelligent alerts** can significantly improve road safety. With further backend integration, it can be deployed in real-world driving environments.

---

## 🙌 Author

Parv Jain | GGITS
CSE (IOT) 2026IS231045 

---

## 🎥 Project Demo Video

You can watch the working demo of the Drowsiness Detection System here:

🔗 **Demo Video Link:**
https://drive.google.com/file/d/1uwKMQvSw_gIWrbjO-j7U-5dwyu3sgROH/view?usp=drive_link

> Replace the above link with your Google Drive / YouTube video link.

---

## 📸 Screenshots

### 🏠 Home Page
<img width="1600" height="853" alt="dash boad 2" src="https://github.com/user-attachments/assets/66a3b1e2-eff0-4532-861c-3192abb6ee54" />
<img width="1600" height="848" alt="home dashboard" src="https://github.com/user-attachments/assets/3363b00f-4cf8-4358-bf04-595b07cdca66" />



---

### 📊 Live Dashboard (Real-Time Monitoring)
<img width="1920" height="1080" alt="Screenshot (409)" src="https://github.com/user-attachments/assets/ef05f6e1-ebf5-441c-bd45-8dad6344d9d6" />



---

### ⚠️ Alert System (Warning Stage)


<img width="1906" height="768" alt="Screenshot 2026-05-05 190144" src="https://github.com/user-attachments/assets/ab70d946-f0a6-44aa-b963-9a899820ba0b" />


---

### 📈 About Page

<img width="1600" height="900" alt="analyastis" src="https://github.com/user-attachments/assets/617c9bdd-af3e-4119-a878-18d60841050f" />
<img width="1600" height="810" alt="about" src="https://github.com/user-attachments/assets/fa951d93-e28b-4db4-9767-0d0b27cff0ae" />



---

## 📁 Screenshots Folder Structure

Make sure you create a folder like this inside your project:

```
drowsiness-frontend/
│
├── screenshots/
│   ├── home.png
│   ├── dashboard.png
│   ├── alert.png
│   └── analytics.png
```

---

## 💡 Tips for Screenshots

* Take screenshots using:

  * `Win + Shift + S` (Windows Snipping Tool)
* Capture:

  * Dashboard with score changing
  * Alert (red warning screen)
  * Analytics graph


---

## 🎬 How to Record Demo Video

You can record using:

* OBS Studio (best)
* Windows Screen Recorder (`Win + Alt + R`)

### Include in Video:

1. Open app
2. Show dashboard changing
3. Trigger alert (Tier 3)
4. Show analytics page
5. Explain briefly (optional voice)

---

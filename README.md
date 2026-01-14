# 🕰️ Time Machine

A full-stack application that transforms modern photos into historical memories. This project demonstrates a **decoupled architecture**, using GitHub Pages for the user interface and Vercel for serverless computation.

**[🚀 View Live Demo](https://ashlerick.github.io/time-machine/)**

---

## 📖 About the Project
This tool provides a seamless way to process images using Python-based logic in a web environment. The core of this project is the integration between a static frontend and a high-performance **serverless backend API**.

### 🛡️ Architecture & Logic
To handle image processing efficiently and securely, this project utilizes a decoupled architecture:
* **Frontend:** Hosted on GitHub Pages for fast, static content delivery.
* **Serverless Backend (Vercel):** I used **Vercel Serverless Functions** to run Python logic.
* **API Communication:** The frontend communicates with the backend via asynchronous API calls, ensuring that heavy image manipulation is offloaded to the server side rather than straining the user's browser.

## 🛠️ Tech Stack & Tools
* **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
* **Backend:** [Python](https://www.python.org/) (Serverless Functions on Vercel)
* **Hosting:** Vercel (API) & GitHub Pages (UI)
* **Version Control:** Git & GitHub

## 📂 Project Structure

### 🌐 Frontend (GitHub Pages)
```text
├── index.html          # Main Application UI
├── script.js           # API logic and UI interaction
└── style.css           # Application styling

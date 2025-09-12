# Lets_See 🎨

AI web app for Text-to-Image Generation
Lets_See is a full-stack AI SaaS web application that generates images from text prompts.
It provides a simple interface where users can type what they imagine, and the system uses an AI model (ClipDrop) to generate unique images.

The project is designed as a starter SaaS app — meaning it has the right structure to grow into a full subscription-based product. You can extend it with features like user authentication, credits system, payment integration, image history, and cloud deployment.

With a React.js frontend and a Node.js/Express backend, the app is easy to set up, customize, and deploy on platforms like Vercel, Render, or AWS.

## 🚀 Features
🖼️ Generate images from text prompts

🌐 Full-stack setup (Frontend + Backend)

⚡ Fast API calls for AI image generation

💳 SaaS-ready structure (can integrate credits, payments, authentication)

## 🛠️ Tech Stack
Frontend: React.js, Axios, TailwindCSS (for UI styling),React-Router, Context API, Motion

Backend: Node.js, Express.js, Toastify(notification)

AI Model/API: ClipDrop AI API

Database: MongoDB, Mongoose

Password Hashing: Bcrypt


## ⚙️ Installation

### 1️⃣ Clone the repository

git clone https://github.com/priyansh1002/Lets_See.git

cd Lets_See

### 2️⃣ Backend Setup

cd server

npm install


Create a .env file in the server/ folder with:

PORT=5000

AI_API_KEY=your_api_key_here


Run the backend:

npm start

### 3️⃣ Frontend Setup

cd ../frontend

npm install

npm start

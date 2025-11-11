# 🚀 Personal Portfolio (V2) - Front-End Developer

This is my personal portfolio, built entirely from scratch using React, Vite, and Tailwind CSS.

This project is not just a static display page; it is a fully interactive web application showcasing my skills in:
1.  **State Management:** Using React Context API for a complete Dark Mode implementation.
2.  **Backend Handling:** Building a Serverless Function (on Netlify) to securely communicate with the Google Gemini API.
3.  **Accessibility (a11y):** Ensuring the site is accessible to keyboard users and screen readers.

---

## 🚀 Live Demo

You can view and interact with the project live here:

**[https://your-portfolio-link.netlify.app](https://your-portfolio-link.netlify.app)**


---

## 🌟 Key Features

* **Fully Responsive Design:**
    * The UI (Landing, About, Projects, Contact) was built to be 100% responsive on all devices (mobile, tablet, and desktop).
* **Dark/Light Mode:**
    * Implemented using **React Context API** to manage the theme globally.
    * The user's preference is saved and persisted in **`localStorage`**.
* **AI Chatbot:**
    * Built an interactive chatbot (styled as a "code editor") to answer visitor questions.
    * **100% Secure:** The bot uses a **Netlify Function** (serverless backend) as a proxy to hide the secret API Key.
    * **Smart:** The bot is powered by the **Google Gemini API** (Flash model).
    * **Grounded:** The bot is "grounded" with detailed info about my skills, projects, and price estimates, with strict rules to prevent off-topic answers.
* **Accessibility :**
    *  a11y standards were applied (using semantic `<button>`/`<Link>`, adding clear `focus:ring` states, and proper `alt` text).
* **Contact Form:**
    * The form is connected to **EmailJS** to send messages directly to my inbox.

---

## 🖼️ Screenshots







---

## 🛠️ Technologies Used

* **React.js** (For building the UI and components)
* **Vite** (As the build tool)
* **Tailwind CSS** (For styling and responsiveness)
* **React Context API** (For theme management)
* **Netlify Functions** (For the Serverless Backend - Chatbot)
* **@google/generative-ai** (Gemini API library)
* **EmailJS** (For the contact form)

---

## 📂 How to Run This Project Locally

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/ola-a11y/your-portfolio-repo.git](https://github.com/ola-a11y/your-portfolio-repo.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd your-portfolio-repo
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **(Important) Run the Function:**
    * To run the backend (chatbot) with the front-end, use this command:
    ```bash
    netlify dev
    ```
    *(Or `npm run dev` if you only want to run the front-end)*

---

## 👩‍💻 Author

* **Ola Mohammed** - [ola-a11y (GitHub)](https://github.com/ola-a11y)

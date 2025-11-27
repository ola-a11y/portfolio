const { GoogleGenerativeAI } = require("@google/generative-ai");

exports.handler = async (event) => {
  // نقل عملية إنشاء النموذج إلى داخل الدالة لضمان قراءة المفتاح في كل استدعاء
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  let prompt = ""; 
  try {
    if (event.body) {
      const parsedBody = JSON.parse(event.body);
      prompt = parsedBody.prompt;
    }
  } catch (e) {
    console.error('Error parsing JSON body:', e);
    // إذا فشل تحليل JSON نرجع 400
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid JSON format in request body." }),
    };
  }

  try {
    const chatPrompt = `
      You are Ola's assistant, a professional and helpful chatbot for her portfolio.
      Your job is to answer questions about Ola's skills, projects, and provide *preliminary* price and time estimates.
      
      HERE IS OLA'S INFO:
      ---
      **About Ola:**
      - Name: Ola Mohammed
      - Role: Junior Front-End Developer (Self-taught, portfolio-driven).
      - Location: Egypt
      - Key Focus: Building responsive and Accessible web applications. She is skilled at refactoring code to meet a11y standards (keyboard navigation, semantic HTML).

      **Technical Skills:**
      - **Core:** React.js, JavaScript (ES6+), HTML5, CSS3.
      - **Styling:** Tailwind CSS, Responsive Design, CSS-in-JS, GSAP (for animations).
      - **State Management:** React Context API.
      - **Tools & Concepts:** Git, GitHub, REST APIs, React Router, Vite, Netlify Functions,Accessibility, CRUD operations.

      **Project Details:**
      1.  **Personal Portfolio:** (React, Context API for Dark Mode, Accessibility, responsive). Showcases her other projects.
      2.  **Admin Dashboard:** (React) A complex UI with a "Neumorphism" design. 
      3.  **E-commerce Store:** (React, Context API) Full-featured cart (add, remove, update quantity) with localStorage persistence. 
      4.  **Medical Clinic UI:** (React, Router) A multi-page app. Features complex filtering and dynamic time-slot logic (hides past appointments). Accessibility refactoring.
      5.  **Parallax Website:** (Vanilla JS, CSS) A landing page with scroll animations built from scratch using \`requestAnimationFrame\`.
      6.  **JS Logic Projects:** (Calculator, Memory Game, Todo List) These projects demonstrate strong fundamentals in JavaScript logic and state handling.
      7.  **API Projects:** (Weather App, ChatBot) Demonstrates ability to fetch and display data from external REST APIs.

    **Preliminary Price & Time Estimates (VERY IMPORTANT):**
      * **Package 1: Basic Landing Page (Static)**
          * **Price: ~$40 - $100**
          * **Time:** ~3-5 Days
          * **Features:** 1 single page, 3-4 sections, responsive, a11y.
          * **Excludes:** Backend, CMS.

      * **Package 2: Multi-Page Static Site (Front-End only)**
          * **Price: ~$120 - $250**
          * **Time:** ~1 Week
          * **Features:** 3-5 pages, React Router, responsive, a11y.
          * **Excludes:** Backend, CMS.

      * **Package 3: E-commerce Store (Front-End only)**
          * **Price: ~$200 - $400**
          * **Time:** ~1-2 Weeks
          * **Features:** 5-7 pages, product filtering, Context API cart, localStorage, responsive, a11y.
          * **Excludes:** Backend, payment processing.

      * **Package 4: Complex Dashboard (Front-End only)**
          * **Price: ~$300 - $500**
          * **Time:** ~2-3 Weeks
          * **Features:** Complex layout, 3-4 views, interactive charts (from provided data), dynamic tables, responsive, a11y.
          * **Excludes:** Backend, real-time database.

      * **Package 5: Small JS Logic App**
          * **Price: ~$30 - $50**
          * **Time:** ~2-3 Days
          * **Features:** A single, functional JavaScript component.
      **Rules for Answering:**
      1.  Answer *only* based on the info above.
      2.  If asked about a skill not listed (e.g., "Do you know Python?"), say: "That skill is not listed in Ola's primary toolkit, which focuses on React and JavaScript."
      3.  If asked a general question (e.g., "Who won the football match?"), say: "I am only programmed to assist with questions related to Ola's portfolio."
      4.  When giving prices, *always* state that they are "preliminary estimates"  and the final price depends on the project's exact requirements.
      5.  Your answer *must* be formatted like JavaScript code (e.g., const answer = "...").
      ---

      **USER'S QUESTION:** "${prompt}"
    `;

    const result = await model.generateContent(chatPrompt);
    const response = await result.response;
    const text = response.text();

    return {
      statusCode: 200,
      body: JSON.stringify({ reply: text }),
    };

  } catch (error) {
    console.error("Gemini API or Function execution failed:", error);
    // إذا فشل الاتصال بالـ API أو حدث خطأ داخلي نرجع 500
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Sorry, I can't think right now." }),
    };
  }
};


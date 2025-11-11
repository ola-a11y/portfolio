import React, { useState, useEffect, useRef } from 'react';

const SendIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
  </svg>
);

const CodeChatbot = ({ onClose }) => {

  const [messages, setMessages] = useState([
    { 
      sender: 'bot', 
      text: `const ola_bot = {\n  skills: ["Answering", "Estimating prices"],\n  getPurpose: () => {\n    return "// Ask me about Ola's portfolio...";\n  }\n};`
    },
  ]);
  
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false); 
  const chatEndRef = useRef(null); 

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userPrompt = input.trim();
    if (!userPrompt || isLoading) return;

    setIsLoading(true);
    setMessages(prev => [...prev, { sender: 'user', text: `// ${userPrompt}` }]); 
    setInput('');

    try {
      const response = await fetch("/.netlify/functions/askGemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userPrompt }) 
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const data = await response.json();
      const botReply = data.reply || "Sorry, I couldn't get a response.";

      setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
      
    } catch (error) {
      setMessages(prev => [...prev, { sender: 'bot', text: "// Sorry, an error occurred. Please try again later." }]);
    }
    
    setIsLoading(false); 
  };
  
  return (
    <div className="w-full max-w-lg mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700">
      
      <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-t-lg flex items-center justify-between gap-2">

        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>

        <button 
          onClick={onClose} 
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
          aria-label="Close chat"
        >
          <i className="fa-solid fa-circle-xmark"></i>
        </button> 
      </div>


      <div className="h-80 overflow-y-auto p-4">
        <pre className="text-sm">
          <code>
            {messages.map((msg, index) => (
              <div key={index} className="mb-2 whitespace-pre-wrap">
                {msg.sender === 'user' ? (
                  <span className="text-gray-500 dark:text-gray-400">{msg.text}</span>
                ) : (
                  <span className="text-purple-600 dark:text-purple-400">{msg.text}</span>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="text-purple-400 animate-pulse">
                // thinking...
              </div>
            )}
            <div ref={chatEndRef} />
          </code>
        </pre>
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 dark:border-gray-700 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="// Type your question here..."
          className="flex-1 p-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
                     rounded-md border border-gray-300 dark:border-gray-600 
                     focus:outline-none focus:ring-2 focus:ring-purple-500"
          disabled={isLoading} 
        />
        <button
          type="submit"
          className="p-2 bg-purple-600 text-white rounded-md 
                     hover:bg-purple-700 
                     focus:outline-none focus:ring-2 focus:ring-purple-500
                     disabled:bg-purple-300"
          disabled={isLoading}
          aria-label="Send message"
        >
          <SendIcon />
        </button>
      </form>
    </div>
  );
};

export default CodeChatbot;
import './App.css';
import Landing from'./components/Landing.jsx';
import About from "./components/About.jsx";
import Book from "./components/Book.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";
import CodeChatbot from "./components/Chatbot.jsx";
import Folder from "./components/Folder.jsx";
import { useState } from 'react';

function App() {

  const [isChatbotVisible, setIsChatbotVisible] = useState(false);

  const handleBotClick = (paperIndex) => {
    if (paperIndex === 2) {

      setIsChatbotVisible(true); 
    }
  };

  const closeChatbot = () => {
    setIsChatbotVisible(false);
  };

  return (
    <div className='relative dark:text-white'>
      <Landing/>  
      <About/>
      <Book/>
      <Contact/>
      <Footer/>

      <Folder 
        className="text-[50px] fixed bottom-5 right-5 z-40"
        closedIcon="fa-solid fa-address-book"
        onPaperClick={handleBotClick} 
      />

      {isChatbotVisible && (
        <div className="fixed bottom-24 right-5 z-50 animate-fade-in"> 
          <CodeChatbot onClose={closeChatbot} /> 
        </div>
      )}

    </div>
  )
}

export default App



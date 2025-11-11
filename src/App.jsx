import './App.css';
import Landing from'./components/Landing.jsx';
import About from "./components/About.jsx";
import Book from "./components/Book.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";

function App() {


  return (
    <div className='dark:text-white'>
      <Landing/>  
      <About/>
      <Book/>
      <Contact/>
      <Footer/>
      <a href='https://wa.me/201100173142'>
      <i className="fa-brands fa-whatsapp text-green-700 rounded-full text-[50px] fixed bottom-5 right-5"></i>
      </a>
      
    </div>
  )
}

export default App

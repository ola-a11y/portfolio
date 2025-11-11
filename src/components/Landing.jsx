import { useTheme } from '../context/ThemeContext';


export default function Landing() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div
      className="w-full bg-gradient-to-b from-gray-100 to-white min-h-screen flex flex-col dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-900"
    >
      

      <div className="relative flex flex-col sm:flex-row items-center justify-between h-auto sm:h-9 px-4 sm:px-7 pt-3 pb-2 sm:pb-0"> 
        
       
        <div className={`p-2 flex items-center gap-1 w-full sm:w-auto justify-center sm:justify-start`}> 
          <i className="fa-solid fa-angle-left font-semibold text-[#059473] text-[19px]"></i>
          <span className="flex items-center gap-1 font-semibold z-10 whitespace-nowrap overflow-hidden text-ellipsis"> 
            Ola Mohammed
            <span className="text-[20px] text-[#059473] font-semibold">\</span>
          </span>
          <i className="fa-solid fa-angle-right font-semibold text-[#059473] text-[19px]"></i>
        </div>


        <div className={`p-2 flex items-center gap-2 scroll-smooth w-full sm:w-auto justify-center sm:justify-end`}> 
          <a href="#contact-form">
            <p className="transition-all ease-in-out rounded px-3 py-3 hover:bg-gradient-to-r duration-300 hidden md:inline-block hover:-translate-y-1 hover:shadow-lg">
              <i className="fas fa-phone-volume fa-fw text-[#059473]"></i>
              Contact Me
            </p>
          </a>
          
          <h2
            className="text-yellow-500 text-2xl cursor-pointer"
            onClick={toggleTheme}
          >
            <i
              className={
                isDarkMode
                  ? "fa-solid fa-moon text-white animate-pulse"
                  : "fa-solid fa-sun animate-pulse"
              }
            ></i>
          </h2>
        </div>
      </div>

  
      <div className="flex gap-3 items-center justify-center mt-2 sm:mt-4"> 
        <a href="https://github.com/ola-a11y">
          <i className="fa-brands fa-github text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white duration-200 cursor-pointer text-xl" aria-label="github"></i>
        </a>
        <a href="https://www.linkedin.com/in/ola-mohammed-786287326">
          <i className="fa-brands fa-linkedin text-[#0a66c2] hover:text-blue-800 dark:text-[#90caf9] dark:hover:text-blue-400 duration-200 cursor-pointer text-xl" aria-label="linkedin"></i>
        </a>
        <a href="mailto:ola8717396@gmail.com"> <i className="fa-solid fa-envelope text-gray-600 hover:text-gray-800 duration-200 dark:text-[#f5c78a] dark:hover:text-yellow-400 cursor-pointer text-xl" aria-label="email"></i>
        </a>
        <a href="CV.pdf" target="_blank" rel="noopener noreferrer"> <i className="fa-solid fa-file text-purple-600 hover:text-purple-700 dark:text-[#b19cd9] dark:hover:text-purple-400 duration-200 cursor-pointer text-xl" aria-label="CV"></i>
        </a>
      </div>

      <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-around px-4 mt-4 lg:px-16 relative flex-grow "> 
                
        <div className="px-2 sm:px-0 text-center lg:text-left lg:pr-20"> 
          <h1 className="text-[38px] sm:text-[47px] font-semibold leading-tight">Salam Alaikum👋</h1> 
          <h2 className="text-[32px] sm:text-[39px] font-semibold leading-tight"> 
            I am a <span className="text-[#059473]">Front-End Developer</span>
          </h2>
          <p className="text-[17px] sm:text-[20px] font-normal max-w-[650px]"> 
            specializing in transforming complex ideas into seamless, interactive web experiences.
            Using React, Tailwind CSS, and JavaScript, I build responsive and user-centric interfaces.
            I am committed to continuously improving my skills by building practical projects,
            and my goal is to deliver the best possible user experience in every project.
          </p>
          <div className="text-xl sm:text-2xl h-9 w-fit hover:shadow-md mt-5 hover:-translate-y-1 mx-auto lg:mx-0"> {/* <--- سنترنا في الموبايل */}
            <span className="text-blue-500"><i className="fa-solid fa-heart text-red-500"></i> Building an </span>
            <span className="text-purple-500">Accessible</span>
            <span className="text-blue-500"> Web for Everyone <i className="fa-solid fa-heart text-red-500"></i></span>
          </div>
        </div>
        
 
        <div className="relative cursor-pointer mt-8 sm:mt-4"> 
           <img
            src="Programming-amico.png"
             alt="Portfolio"
             className="max-w-[340px]  md:max-w-[470px] lg:max-w-[450px] xl:max-w-[500px]"
           />
           <a href="CV.pdf" target="_blank" rel="noopener noreferrer">
             <h2
               className="absolute top-1/3 left-0 px-2 py-2 font-semibold text-white rounded-lg bg-gradient-to-r from-green-500 to-teal-500 before:content-['']
                  before:absolute before:inset-0 before:-z-10 before:rounded-lg before:bg-gradient-to-r before:from-transparent before:via-green-400 before:to-transparent
                  before:animation-effect3 transition-all duration-300 shadow-md hover:shadow-lg"
             >
               CV <i className="fa-regular fa-file pl-1" aria-label="CV"></i>
             </h2>
           </a>
           <h2
             className="absolute top-1/2 right-0 px-2 py-2 font-semibold text-white rounded-lg bg-gradient-to-r from-green-500 to-teal-500 
                  before:absolute before:inset-0 before:-z-10 before:rounded-lg before:bg-gradient-to-r before:from-transparent before:via-green-400 before:to-transparent
                  before:animation-effect3 transition-all duration-300 shadow-md hover:shadow-lg"
           >
             <i className="fa-solid fa-code"></i>
           </h2> 
        </div>
      </div>
    </div>
  );
}

import { useRef, useState } from "react";

function Book() {  
    const scrollRef = useRef(null);
    const [activeTab, setActiveTab] = useState("projects");

    // دالة التحكم في التمرير
    const scroll = (direction) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === "left" ? -300 : 300,
                behavior: "smooth",
            });
        }
    };

    const projects = [
      {
        live: 'https://booking-system-abf5f.web.app/',
        title: "Booking Appointment",
        img: "image14.png",
        github: "https://github.com/ola-a11y/Book-Appointment",
        lang1: "#Html",
        lang2: "#Tailwind",
        lang3: "#React"
      },
      {
        live: 'https://store-24316.web.app/',
        title: "Store",
        img: "image1.png",
        github: "",
        lang1: "#Html",
        lang2: "#Css",
        lang3: "#Java Script"
      },
      {
        live: '#',
        title: "store",
        img: "image3.png",
        github: "https://github.com/ola-a11y/store-project",
        lang1: "#Html",
        lang2: "#Tailwind",
        lang3: "#React"
      },
      {
        live: "https://parallax-magic-scroll.netlify.app/",
        title: "parallax scroll",
        img: "image4.png",
        github: "https://github.com/ola-a11y/Scrolling-Website",
        lang1: "#Html",
        lang2: "#Tailwind",
        lang3: "#React"
      },
      {
        live: "https://accio-f7b42.web.app",
        title: "Platform",
        img: "image12.png",
        github: "",
        lang1: "#Html",
        lang2: "#Tailwind",
        lang3: "#React"
      },
      {
        live: 'https://template2-c824c.web.app',       
        title: "template",
        img: "image2.png", 
        github: "https://github.com/ola-a11y/HTML-CSS-Template",
        lang1: "#Html",
        lang2: "#Css",
        lang3: "#",
      },      
      {
        live: 'https://portfolio2-50bf2.web.app',
        title: "Portfolio",
        img: "image9.png",
        github: "",
        lang1: "#Html",
        lang2: "#CSS",
        lang3: "#Java Script"
      },
      {
        live: 'https://dashboard-e8df4.web.app',
        title: "Dashboard",
        img: "image11.png",
        github: "https://github.com/ola-a11y/dashboard",
        lang1: "#Html",
        lang2: "#Tailwind",
        lang3: "#React"
      },
      
      
    ];

    const files = [
        {
          live:'https://crud-93c15.web.app',
          title: "System Crud",
          img: "image6.png", 
          github: "https://github.com/ola-a11y/cruds-system",
          lang1: "#Html",
          lang2: "#Css",
          lang3: "#Java Script"
        },
        {
          live:'https://tictactoe-a594e.web.app',
          title: "Tic Tac Toe",
          img: "image7.png",
          github: "https://github.com/ola-a11y/TicTacToe",
          lang1: "#Html",
          lang2: "#Css",
          lang3: "#Java Script"
        },
        {
          live:'#',
          title: "Weather",
          img: "image15.png",
          github: "https://github.com/ola-a11y/Weather-App",
          lang1: "#Html",
          lang2: "#Css",
          lang3: "#Java Script"
        },
        {
          live:'https://classic-card-match.netlify.app/',
          title: "Memory Game",
          img: "image16.png",
          github: "https://github.com/ola-a11y/Memory-Game",
          lang1: "#Html",
          lang2: "#Css",
          lang3: "#Java Script"
        },
        {
          live:'https://chat-636ff.web.app',
          title: "Chat",
          img: "image8.png",
          github: "#",
          lang1: "#Html",
          lang2: "#Tailwind",
          lang3: "#React"
        },
        {
          live:'https://todolist-538ab.web.app',
          title: "To Do List",
          img: "image10.png",
          github: "https://github.com/ola-a11y/todo-list-app",
          lang1: "#Html",
          lang2: "#Css",
          lang3: "#Java Script"
        },
        {
          live:'https://calculator-803cd.web.app',
          title: "Calculator",
          img: "image5.png",
          github: "https://github.com/ola-a11y/calculator",
          lang1: "#Html",
          lang2: "#Css",
          lang3: "#Java Script"
        },
       
        
      ];

    return (
        <div className="flex flex-col items-center dark:bg-gray-900 pb-7 relative backdrop-blur-md bg-center bg-cover"> 
            <h2 className="text-2xl font-semibold text-[#059473] my-4">
                My Projects
                <span className="w-32 h-[2px] block bg-emerald-600  my-2 mx-auto"></span> 
            </h2>

            
            <div className="flex space-x-4 mb-4">
                
                <button 
                    onClick={() => setActiveTab("projects")} 
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      activeTab === "projects" 
                      ? "bg-emerald-600 text-white" 
                      : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-white"
                    }`}>Website</button>
                <button 
                    onClick={() => setActiveTab("files")} 
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      activeTab === "files" 
                      ? "bg-emerald-600 text-white" 
                      : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-white"
                    }`}>Web Application</button>
            </div>

            <div className="flex justify-between w-full max-w-4xl mb-2 px-4"> 

                <button onClick={() => scroll("left")} className="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-white px-3 py-2 rounded-full shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600"><i className="fa-solid fa-left-long"></i></button>
                <button onClick={() => scroll("right")} className="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-white px-3 py-2 rounded-full shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600"><i className="fa-solid fa-right-long"></i></button>
            </div>

            {/* حاوية التمرير */}
            <div 
                ref={scrollRef}
                className="flex space-x-4 overflow-x-auto scroll-smooth no-scrollbar p-4 max-w-6xl w-full"
                style={{ scrollBehavior: "smooth", scrollbarWidth: "none" }}
            >
                {(activeTab === "projects" ? projects : files).map((item, index) => (
        
                    <div key={index} className="bg-gray-100 dark:bg-slate-800 p-4 w-[300px] sm:w-[310px] rounded-3xl flex-shrink-0">
                        <div className="relative overflow-hidden rounded-xl bg-white dark:bg-gray-900 shadow-xl dark:shadow-gray-950 hover:shadow-emerald-500 hover:-translate-y-3 transition-all duration-300 group">
                            
                            <div className="relative overflow-hidden rounded-lg">
                                <img src={item.img} alt={item.title} className="w-full h-40  object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all"></div>
                            </div>
                            
                            <div className="p-4">
                
                                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h2>
                                <div className="mt-3 flex flex-wrap gap-2">
             
                                    <span className="px-2 py-1 text-xs sm:text-sm font-medium bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300 rounded">{item.lang1}</span>
                                    <span className="px-2 py-1 text-xs sm:text-sm font-medium bg-blue-100 text-blue-500 dark:bg-blue-900 dark:text-blue-300 rounded">{item.lang2}</span>
                                   
                    
                                    {item.lang3 && (
                                      <span className="px-2 py-1 text-xs sm:text-sm font-medium bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300 rounded">
                                        {item.lang3}
                                      </span>
                                    )}
                                </div>
                                <div className="mt-4 flex justify-between items-center">
        
                                    <a href={item.github} target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white transition duration-200">
                                        <i className="fa-brands fa-github text-2xl"></i>
                                    </a>
                                    {item.live && (
                                        <a href={item.live} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-500 transition-all">
                                            View Website
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Book;







    


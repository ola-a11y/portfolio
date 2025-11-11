const techs = [
    { name: "HTML", img: "https://cdn-icons-png.flaticon.com/128/888/888859.png" },
    { name: "CSS", img: "https://cdn-icons-png.flaticon.com/128/888/888847.png" },
    { name: "JavaScript", img: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png" },
    { name: "React", img: "https://cdn-icons-png.flaticon.com/128/1126/1126012.png" },
    { name: "Node.js", img: "https://cdn-icons-png.flaticon.com/128/919/919825.png" },
   
    { name: "Bootstrap", img: "https://cdn-icons-png.flaticon.com/128/5968/5968672.png" },
    { name: "Tailwind", img: "./tailwind.svg" },
    { name: "Git", img: "https://cdn-icons-png.flaticon.com/128/919/919847.png" },
    { name: "TypeScript", img: "https://cdn-icons-png.flaticon.com/128/5968/5968381.png" },
    { name: "GitHub", img: "https://cdn-icons-png.flaticon.com/128/733/733553.png" }, 
    { name: "Figma", img: "./figma.svg" }, 
   
  ];
  
  function TechBalls() {
    return (
      <div className="max-w-[700px] mx-auto p-6">
        <div className="flex flex-wrap justify-center gap-6">
          {techs.map((tech, index) => (
            <div key={index} className="relative group">
              {/* الكورة */}
              <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center 
                              shadow-xl dark:shadow-gray-900 transition-transform duration-[3s] group-hover:rotate-[360deg]">
                <img src={tech.img} alt={tech.name} className="w-12 h-12" />
              </div>
              {/* اسم التقنية */}
              <p className="text-center text-gray-700 dark:text-white  mt-2 font-medium">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default TechBalls;
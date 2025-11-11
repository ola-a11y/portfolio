import TechSpheres from "./TechSphreres.jsx"; 

function About() {
  return (
    <div className='lg:px-7 px-4 py-16 bg-transparent dark:bg-gray-900'>
      
      <div className="text-center text-[40px] font-bold text-[#059473] pb-10">About Me</div>
           
      <div className="flex flex-col lg:flex-row items-center justify-around gap-12">
    
        <div className="flex flex-col gap-8 max-w-[550px] text-center lg:text-left"> 
          
          {/* My Journey */}
          <div className="break-words">
            <h2 className="text-[#059473] font-semibold text-[35px]">My Journey</h2>
            <p className="dark:text-gray-300">
              My journey began with a strong interest in creating visually appealing, user-friendly interfaces. 
              This passion quickly grew as I delved deeper into building interactive and dynamic web applications.
              I view every project as an opportunity to refine my skills, experiment with new techniques, and enhance 
              both performance and usability. I thrive on solving complex design and functionality challenges, 
              aiming to create smooth and engaging user experiences.
            </p>
          </div>

        </div> 

        <div className="min-w-[350px] ">
            <TechSpheres />
        </div>
        
      </div>
    </div>
  )
}

export default About;










function Footer() {
  return (
   
    <div className='p-6 bg-gray-200 dark:bg-black'>
           
      <div className="flex  items-center justify-center flex-wrap">
        
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Developed By
          <span 
            className="font-semibold text-emerald-600 dark:text-emerald-400 
                       transition-all duration-300 hover:-translate-y-1 hover:shadow-md
                       inline-block cursor-pointer mx-1.5 p-1 rounded-md"
          >
            Ola
          </span>
        </p>
  
        <p className="text-sm text-gray-600 dark:text-gray-300">
          All Rights Reserved &copy; 2025
        </p>

       </div>
       <p className="text-center text-gray-700 dark:text-gray-300">Built with
        <span className="text-blue-500 "> #Tailwind</span> 
        <span className="text-green-600">#React</span></p>
     </div>
  );
} 

       

export default Footer;

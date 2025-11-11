import { useState } from "react";
import emailjs from "@emailjs/browser";


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_rmqef7j",  // Service ID
        "template_uxvrphe",  // Template ID
        formData,
        "V7EXtA5GVrAwqxVcs"  // Public Key
      )
      .then(() => {
        setSent(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    
  <div className="pb-20 bg-gray-200 dark:bg-gray-900" id="contact-form">
    <div className="px-4 pt-10">
           
      <div className="flex items-center justify-center">
        
        
        <form onSubmit={handleSubmit} className="w-full md:w-3/4 
          bg-gray-100 dark:bg-gray-800  
          rounded-lg   dark:border-emerald-700 
          shadow-lg  dark:shadow-emerald-800/50 p-10"
        >
          <h1 className="text-gray-900 dark:text-white text-4xl font-bold mb-7">Contact Me</h1>

          {sent && <p className="text-emerald-600 mb-4">Message sent successfully! ✅</p>}

          <div className="mb-4">
   
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
     
              className="mt-1 p-2 block w-full rounded-md 
                         bg-white dark:bg-gray-700 
                         text-gray-900 dark:text-white
                         border-gray-300 dark:border-gray-600 
                         shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md 
                         bg-white dark:bg-gray-700 
                         text-gray-900 dark:text-white
                         border-gray-300 dark:border-gray-600 
                         shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
            <textarea
              id="message"
              placeholder="Enter Your Message"
              value={formData.message}
              onChange={handleChange}
              className="h-32 mt-1 p-2 block w-full rounded-md 
                         bg-white dark:bg-gray-700 
                         text-gray-900 dark:text-white
                         border-gray-300 dark:border-gray-600 
                         shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            ></textarea>
          </div>

          <button type="submit" className="bg-emerald-500 hover:bg-emerald-600 transition-colors text-white px-3 py-2 rounded-lg">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
 

);
}

export default Contact; 

import React, { useState } from 'react';
import homeImage from "../assets/hero-image.png";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const Home = () => {

  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {

    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address!");
      return;
    }

    toast.success(`Thank you for subscribing, ${email}!`);
    
    setEmail('');
  };

  return (
    <section id='home' className='w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-44 pb-6 px-4 sm:px-6 lg:px-8'>
      
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className='w-full md:w-1/2 space-y-8'>
        
        <div className='flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group'>
          <span className='text-blue-600 group-hover:text-amber-300 group-hover:scale-110 transition-transform'>★</span>
          <span className='text-sm font-medium'>start your growth with us</span>
        </div>

        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>We boost the growth for<span className='text-blue-600 relative inline-block'>startup to fortune 50<span className='absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/60'></span>
          </span>Companies
          <span className='inline-block ml-2 animate-pulse'>🚀</span>
        </h1>

        <p className='text-gray-600 text-lg md:text-xl max-w-xl'>
          Get the most accurate leads, sales people training and conversions, 
          tools and more - all within the same one billing.
        </p>

        <form onSubmit={handleSubscribe} className='flex flex-col sm:flex-row gap-3 max-w-md w-full'>
          <input 
            type="email" 
            placeholder='Email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='flex-1 px-6 py-4 border border-gray-200 rounded-xl 
                       focus:outline-none focus:border-blue-600 focus:ring-2 
                       focus:ring-blue-100 transition-all'
          />

          <button type="submit" className='bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-800 cursor-pointer transition-all hover:shadow-lg hover:drop-shadow-blue-300'>→</button>
        </form>
      </div>

      <div className='w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12'>
        <div className='relative'>
          <img src={homeImage} alt="home image" className='rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300 max-w-sm mx-auto'/>
        </div>
      </div>

    </section>
  )
}

export default Home;
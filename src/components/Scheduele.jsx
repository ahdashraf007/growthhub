import React from 'react'
import scheduleImage from "../assets/stats.webp"
import { FaArrowRightLong } from "react-icons/fa6";

const Scheduele = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24'>

            <div className='md:w-1/2 w-full'>
                <img src={scheduleImage} alt="stat image" className='w-full h-auto'/>
            </div>

            <div className='md:w-1/2 w-full'>
                <p className='text-orange-500 font-semibold'>SCHEDUELE</p>
                <h2 className='text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6'>streamline your business <br /> with smart scheduling solutions</h2>
                <p className='text-gray-600 mb-8'>Take control of your time and boost productivity with our intelligent schedueling system.
                    Automate appointments, manage team availability, and deliver excptional customer experiences
                    through seamless calender managment.</p>
                <a href="https://www.forbes.com/advisor/l/top-project-management-software-en-2/?utm_source=google&utm_medium=cpc&utm_campaign=22886838399&accountid=1972375894&utm_content=182193770325&utm_term=kwd-102907268&network=g&device=c&placement=&location_physical=1005394&device_model=&creative=769207978054&gad_source=1&gad_campaignid=22886838399&gbraid=0AAAAAqOv-fzUjnZy6FOFawS5inAB5rrR0&gclid=Cj0KCQjw8KrFBhDUARIsAMvIApbhwY5WRyQInF1EWTPRbiDWZEXrwyw8zJ8-LkNVbrpUBUtHBzpT-F8aAt3JEALw_wcB" 
                 target="_blank" className='text-blue-500 font-semibold flex items-center gap-2 hover:gap-4'>
                    explore schedeuling features
                    <FaArrowRightLong className='size-8'/> 
                </a>    
            </div>
        </div>
      
    </section>
  )
}

export default Scheduele

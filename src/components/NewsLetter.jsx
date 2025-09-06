import React, { useState } from 'react'
import { HiArrowRight } from 'react-icons/hi'

const NewsLetter = () => {
    const [email, setEmail] = useState('');
    const [notification, setNotification] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isValidEmail(email)) {
            setNotification('Thank you!');
            setIsSuccess(true);
            setEmail('');
        } else {
            setNotification('No email sent!');
            setIsSuccess(false);
        }

        setTimeout(() => {
            setNotification('');
        }, 3000);
    };

    return (
        <section className='container mx-auto px-4 sm:px-6 lg:px-8 py-16'>
            <div className='bg-blue-600 rounded-2xl overflow-hidden'>
                <div className='relative md:px-16 py-16 px-6 md:py-24'>
                    <div className='absolute top-0 right-0 w-1/2 h-full bg-blue-700 clip-path-slant hidden md:block'></div>
                    <div className='relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12'>
                        <div className='text-white max-w-lg text-center md:text-left'>
                            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-medium mb-4'>Subscribe Newsletter</h2>
                            <p className='text-blue-100 text-sm sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, hic.</p>
                        </div>

                        <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row gap-4 sm:gap-0'>
                            <input
                                type="email"
                                placeholder='Enter your email address!'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='w-full bg-white sm:w-auto md:w-80 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-l-xl
                                sm:rounded-r-none focus:outline-none'
                            />
                            <button
                                type="submit"
                                className='w-full sm:w-auto cursor-pointer bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4
                                rounded-xl sm:rounded-l-none sm:rounded-r-lg flex items-center gap-2'>
                                <span>Discover</span>
                                <HiArrowRight className='size-5'/>
                            </button>
                        </form>
                    </div>

                    {notification && (
                        <div
                            className={`mt-6 text-center text-sm md:text-base font-medium transition-all duration-300 ${
                                isSuccess ? 'text-green-300' : 'text-red-300'
                            }`}
                        >
                            {notification}
                        </div>
                    )}
                </div>
            </div>

            <style>
                {
                    `.clip-path-slant{
                        clip-path:polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)
                    }`
                }
            </style>
        </section>
    );
}

export default NewsLetter;
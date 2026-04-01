import React from 'react';

const Banner = () => {
    return (
        <div className="max-w-[1200px] mx-auto w-full px-4 mt-10 md:mt-16 lg:mt-20"> 

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12 items-center">

                <div className="space-y-5 md:space-y-6 text-center sm:text-left">


                    <div className="inline-flex items-center justify-center sm:justify-start gap-2 bg-purple-100 text-purple-600 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium">

                        <img src="https://i.ibb.co.com/5WVYGkMJ/Group-5.png" alt="icon" className="h-4 w-4 md:h-5 md:w-5"/>

                        New: AI-Powered Tools Available
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
                        Supercharge Your <br /> <span className='bg-gradient-to-r from-[#6C3BFF] to-[#A855F7] bg-clip-text text-transparent'>Digital Workflow</span>
                    </h1>

                    <p className="text-gray-500 text-sm md:text-lg leading-relaxed max-w-xl mx-auto sm:mx-0">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.

                        Explore Products
                    </p>


                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 md:gap-4">

                        <button className="w-full sm:w-auto px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#6C3BFF] to-[#A855F7] hover:opacity-90 transition">
                            Explore Products
                        </button>

                        <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-purple-500 text-purple-600 font-semibold hover:bg-purple-50 transition">
                            ▶ Watch Demo
                        </button>

                    </div>

                </div>

                <div className="flex justify-center">
                    <img
                        src="https://i.ibb.co.com/fd99KCm5/banner.png"
                        alt="banner"
                        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-2xl object-cover"
                    />
                </div>

            </div>

        </div>
    );
};

export default Banner;
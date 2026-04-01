import React from 'react';

const RatingSection = () => {
    return (
        <div className="w-full bg-gradient-to-r from-[#5B2EFF] to-[#C026D3] py-12 md:py-16 mt-16 md:mt-20">

            <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-30">

                <div className="flex flex-col sm:flex-row items-center justify-between text-center text-white gap-8 sm:gap-0">

                    <div className="space-y-2">
                        <h2 className="text-3xl md:text-5xl font-extrabold">50K+</h2>
                        <p className="text-white/80 text-sm md:text-lg">Active Users</p>
                    </div>

                    <div className="hidden sm:flex justify-center">
                        <div className="border-l border-white/30 h-12 md:h-16"></div>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-3xl md:text-5xl font-extrabold">200+</h2>
                        <p className="text-white/80 text-sm md:text-lg">Premium Tools</p>
                    </div>

                    <div className="hidden sm:flex justify-center">
                        <div className="border-l border-white/30 h-12 md:h-16"></div>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-3xl md:text-5xl font-extrabold">4.9</h2>
                        <p className="text-white/80 text-sm md:text-lg">Rating</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default RatingSection;
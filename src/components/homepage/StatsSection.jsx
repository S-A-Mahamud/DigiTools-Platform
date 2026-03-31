import React from 'react';

const StatsSection = () => {
    return (
        <div className="gradient-bg mb-30">
            <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between text-white py-15 px-6 gap-6 md:gap-0">

                <div class="flex flex-col items-center md:items-start gap-4">
                    <h2 class="text-4xl md:text-6xl font-extrabold">50K+</h2>
                    <p class="text-sm md:text-2xl opacity-80 tracking-wide">Active Users</p>
                </div>

                <div class="hidden md:block w-px h-20 bg-white/30"></div>

                <div class="flex flex-col items-center md:items-start gap-4">
                    <h2 class="text-4xl md:text-6xl font-extrabold">200+</h2>
                    <p class="text-sm md:text-2xl opacity-80 tracking-wide">Premium Tools</p>
                </div>

                <div class="hidden md:block w-px h-20 bg-white/30"></div>

                <div class="flex flex-col items-center md:items-start gap-4">
                    <h2 class="text-4xl md:text-6xl font-extrabold">4.9</h2>
                    <p class="text-sm md:text-2xl opacity-80 tracking-wide">Rating</p>
                </div>

            </div>
        </div>
    );
};

export default StatsSection;
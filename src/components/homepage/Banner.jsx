import React from 'react';
import { bannerImg, playImg } from '../../assets/Images/index';

const Banner = () => {
    return (
        <section className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-10 py-8 px-4 max-w-7xl mx-auto">
            <div className="space-y-3 md:space-y-6 flex-1">
                <div className="inline-flex items-center gap-2 bg-[#EAF0FF] px-5 py-2 rounded-full shadow-sm">
                    <div className="relative flex items-center justify-center w-5 h-5">
                        <span className="absolute inline-flex h-full w-full rounded-full gradient-bg animate-ping"></span>
                        <span className="relative inline-flex h-5 w-5 rounded-full bg-[#c8aadf]"></span>
                        <span className="absolute h-2.5 w-2.5 rounded-full gradient-bg"></span>
                    </div>

                    <span className="text-gradient-brand font-semibold text-sm sm:text-lg md:text-xl">
                        New: AI-Powered Tools Available
                    </span>
                </div>

                <h2 className="text-[#101727] font-extrabold text-xl sm:text-3xl  md:text-7xl">
                    Supercharge Your Digital Workflow
                </h2>

                <p className="text-gray-500 max-w-xl text-start">
                    Access premium AI tools, design assets, templates, and productivity
                    software—all in one place. Start creating faster today.
                </p>

                <div className="flex gap-4">
                    <button className="btn gradient-bg p-2 sm:p-4 md:p-6 rounded-full text-white cursor-pointer text-xs sm:text-sm md:text-base hover:scale-105 transition-transform duration-300 shadow-md">
                        Explore Products
                    </button>

                    <button className="btn border-gradient-r-to border-none rounded-full bg-white p-2 sm:p-4  md:p-6 cursor-pointer hover:scale-105 transition-transform duration-300">
                        <span className="flex items-center justify-center gap-2">
                            <span>
                                <img src={playImg} alt="Play" />
                            </span>
                            <span className="gradient-text">Watch Demo</span>
                        </span>
                    </button>
                </div>
            </div>

            <div className="">
                <img
                    src={bannerImg}
                    alt="Banner"
                    className="w-full max-w-125 h-auto"
                />
            </div>
        </section>

    );
};

export default Banner;
import React from 'react';
import { bannerImg, playImg } from '../../assets/Images/index';

const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 py-20 px-4 max-w-7xl mx-auto">
            <div className="space-y-6 flex-1">
                <div className="inline-flex items-center gap-3 bg-[#EAF0FF] border border-[#D7E1FF] px-5 py-2 rounded-full shadow-sm">
                    <div className="relative flex items-center justify-center w-5 h-5">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-[#4F39F6] animate-ping"></span>
                        {/* <span className="relative inline-flex h-5 w-5 rounded-full border-2 border-indigo-600"></span> */}
                        <span className="absolute h-2.5 w-2.5 rounded-full bg-[#9514FA]"></span>
                    </div>

                    <span className="text-gradient-brand font-semibold text-sm sm:text-base">
                        New: AI-Powered Tools Available
                    </span>
                </div>

                <h2 className="text-[#101727] font-extrabold text-2xl  md:text-7xl">
                    Supercharge Your Digital Workflow
                </h2>

                <p className="text-gray-500 max-w-xl text-start">
                    Access premium AI tools, design assets, templates, and productivity
                    software—all in one place. Start creating faster today.
                </p>

                <div className="flex gap-4">
                    <button className="gradient-bg p-4 rounded-full text-white cursor-pointer">
                        Explore Products
                    </button>

                    <button className="border-gradient-r-to rounded-full bg-white px-6 py-4 cursor-pointer">
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
        </div>

    );
};

export default Banner;
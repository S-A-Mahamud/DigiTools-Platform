import React from 'react';
import { bannerImg, playImg } from '../../assets/Images/index';

const Banner = () => {
    return (
        <div className="flex justify-between items-center gap-10 py-20 px-4 max-w-7xl mx-auto">
            <div className="space-y-6 flex-1">
                <span className="bg-[#E1E7FF] p-2 rounded-full inline-block">
                    <span className="p-2 rounded-full gradient-text">
                        New: AI-Powered Tools Available
                    </span>
                </span>

                <h2 className="text-[#101727] font-extrabold text-7xl">
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
                    className="w-full max-w-[500px] h-auto"
                />
            </div>
        </div>

    );
};

export default Banner;
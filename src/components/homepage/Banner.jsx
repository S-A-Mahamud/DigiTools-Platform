import React from 'react';

const Banner = () => {
    return (
        <div className="bg-black py-20 h-7/12 max-w-7xl mx-auto px-4 text-white text-center">
            <h1 className="text-5xl font-bold text-white mb-4">Welcome to DigiTools</h1>
            <p className="text-lg mb-8">Your one-stop platform for all your digital needs.</p>
            <a href="/get-started" className="btn btn-primary btn-lg">Get Started</a>
        </div>
    );
};

export default Banner;
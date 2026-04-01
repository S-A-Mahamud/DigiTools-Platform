import React from 'react';

const WorkflowSection = () => {
    return (
        <section className="gradient-bg">
            <div className='flex flex-col items-center text-center gap-6 py-8 md:py-30 px-4 max-w-3xl mx-auto rounded-lg text-white'>
                <h2 className='text-xl sm:text-3xl  md:text-4xl font-extrabold'>Ready to Transform Your Workflow?</h2>
                <p className='max-w-xl'>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
                <div className='flex flex-col items-center gap-4'>
                    <div className='flex gap-4 justify-center items-center'>
                        <button className='btn rounded-full text-xs sm:text-sm md:text-base p-2 sm:p-4 md:p-6'><span className='gradient-text'>Explore Products</span></button>
                        <button className='btn btn-ghost border-white rounded-full text-xs sm:text-sm md:text-base p-2 md:p-6'>View Pricing</button>
                    </div>
                    <p>14-day free trial • No credit card required • Cancel anytime</p>
                </div>
            </div>
        </section>
    );
};

export default WorkflowSection;
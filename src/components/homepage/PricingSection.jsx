import React from 'react';

const PricingSection = () => {
    return (
        <section className='max-w-7xl mx-auto my-25 px-4'>
            <h1 className="text-xl sm:text-3xl  md:text-5xl font-bold text-center">Simple, Transparent Pricing</h1>
            <p className="text-gray-500 text-center mt-2">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>

                {/* Card 1 */}
                <div className="card bg-base-100 shadow-sm h-full">
                    <div className="card-body flex flex-col h-full">
                        <div>
                            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold">Starter</h2>
                            <p>Perfect for getting started</p>
                        </div>

                        <h3 className="text-xl sm:text-3xl  md:text-4xl mt-4">
                            $0/<span className="text-xl">Month</span>
                        </h3>

                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Access to 10 free tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Basic templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Community support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>1 project per month</span>
                            </li>
                        </ul>

                        <div className="mt-auto pt-6">
                            <button className="btn gradient-bg rounded-full w-full text-white text-sm sm:text-xl"> Get Started Free </button>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="relative card gradient-bg shadow-sm h-full">
                    <div className="card-body text-white flex flex-col h-full">
                        <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 badge badge-xs badge-warning text-amber-700 rounded-full p-4">Most Popular</span>
                        <div className="">
                            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold">Pro</h2>
                            <p>Best for professionals</p>
                        </div>
                        <h3 className="text-xl sm:text-3xl  md:text-4xl">$29/<span className='text-xl'>Month</span></h3>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access to all premium tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Unlimited templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Priority support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Unlimited projects</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Cloud sync</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Advanced analytics</span>
                            </li>

                        </ul>
                        <div className="mt-6">
                            <div className='btn w-full rounded-full'>
                                <button className="btn border-none w-full gradient-text text-sm sm:text-xl">Start Pro Trial</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="card bg-base-100 shadow-sm h-full">
                    <div className="card-body flex flex-col h-full">
                        <div className="">
                            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold">Enterprise</h2>
                            <p>For teams and businesses</p>
                        </div>
                        <h3 className="text-xl sm:text-3xl  md:text-4xl">$99/<span className='text-xl'>Month</span></h3>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Everything in Pro</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Team collaboration</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Custom integrations</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Dedicated support</span>
                            </li>

                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>SLA guarantee</span>
                            </li>

                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Custom branding</span>
                            </li>

                        </ul>
                        <div className="mt-6">
                            <button className="btn gradient-bg rounded-full w-full text-white text-sm sm:text-xl">Contact Sales</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PricingSection;
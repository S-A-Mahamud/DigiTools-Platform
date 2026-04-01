import React from 'react';
import { TbBrandInstagramFilled } from "react-icons/tb";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
    return (

        <footer class="bg-[#0B1A2B] text-gray-300">
            <div class="max-w-7xl mx-auto py-10 md:py-16">


                <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 md:mb-10 px-4">
                    <div class="mb-4 col-span-2 lg:col-span-1">
                        <h2 class="text-white text-2xl font-bold mb-4">DigiTools</h2>
                        <p class="text-sm leading-relaxed opacity-80">
                            Premium digital tools for creators, professionals, and businesses.
                            Work smarter with our suite of powerful tools.
                        </p>
                    </div>

                    <div class="grid grid-cols-2 lg:grid-cols-4 gap-10 col-span-2 lg:col-span-3">

                        <div>
                            <h3 class="text-white font-semibold mb-4">Product</h3>
                            <ul class="space-y-2 text-sm">
                                <li><a href="#" class="hover:text-white">Features</a></li>
                                <li><a href="#" class="hover:text-white">Pricing</a></li>
                                <li><a href="#" class="hover:text-white">Templates</a></li>
                                <li><a href="#" class="hover:text-white">Integrations</a></li>
                            </ul>
                        </div>


                        <div className='md:pl-10 lg:pl-0'>
                            <h3 class="text-white font-semibold mb-4 ">Company</h3>
                            <ul class="space-y-2 text-sm">
                                <li><a href="#" class="hover:text-white">About</a></li>
                                <li><a href="#" class="hover:text-white">Blog</a></li>
                                <li><a href="#" class="hover:text-white">Careers</a></li>
                                <li><a href="#" class="hover:text-white">Press</a></li>
                            </ul>
                        </div>


                        <div>
                            <h3 class="text-white font-semibold mb-4">Resources</h3>
                            <ul class="space-y-2 text-sm mb-6">
                                <li><a href="#" class="hover:text-white">Documentation</a></li>
                                <li><a href="#" class="hover:text-white">Help Center</a></li>
                                <li><a href="#" class="hover:text-white">Community</a></li>
                                <li><a href="#" class="hover:text-white">Contact</a></li>
                            </ul>
                        </div>

                        <div className='md:pl-10 lg:pl-0'>
                            <h3 class="text-white font-semibold mb-3">Social Links</h3>
                            <div class="flex gap-2">
                                <button class="btn btn-circle btn-sm md:btn-md bg-white text-black hover:bg-gray-200">
                                    <TbBrandInstagramFilled className='w-8 h-8' />
                                </button>
                                <button class="btn btn-circle btn-sm md:btn-md bg-white text-black hover:bg-gray-200">
                                    <FaFacebookSquare className='w-6 h-6' />
                                </button>
                                <button class="btn btn-circle btn-sm md:btn-md bg-white text-black hover:bg-gray-200">
                                    <FaXTwitter className='w-6 h-6' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="border-t border-gray-700 my-4 md:my-10"></div>

                <div class="flex flex-col sm:flex-row justify-between items-center text-sm opacity-70 gap-2 px-2 md:px-4">
                    <p>© 2026 Digitools. All rights reserved.</p>

                    <div class="flex gap-6">
                        <a href="#" class="hover:text-white">Privacy Policy</a>
                        <a href="#" class="hover:text-white">Terms of Service</a>
                        <a href="#" class="hover:text-white">Cookies</a>
                    </div>
                </div>

            </div>
        </footer>

    );
};

export default Footer;
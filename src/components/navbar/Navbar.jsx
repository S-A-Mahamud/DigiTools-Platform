import React from 'react';
import { IoCartOutline, IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ productCart }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const navLinks = (
        <>
            <li><a className="hover:text-primary transition">Home</a></li>
            <li><a className="hover:text-primary transition">Tools</a></li>
            <li><a className="hover:text-primary transition">Pricing</a></li>
            <li><a className="hover:text-primary transition">About</a></li>
            <li><a className="hover:text-primary transition">Contact</a></li>
        </>
    );

    return (
        <nav className="w-full bg-base-100/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-base-200">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative">
                <div className="navbar px-0 min-h-19">

                    {/* Navbar Start */}
                    <div className="navbar-start gap-3">
                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-base-200 transition-all duration-300 text-2xl text-gray-600"
                        >
                            <span
                                className={`transform transition-transform duration-300 ${isMenuOpen ? "rotate-90 scale-110" : "rotate-0 scale-100"
                                    }`}
                            >
                                {isMenuOpen ? <IoClose /> : <GiHamburgerMenu />}
                            </span>
                        </button>

                        {/* Logo */}
                        <a
                            href="/"
                            className="text-gradient-brand text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight"
                        >
                            DigiTools
                        </a>
                    </div>

                    {/* Navbar Center (Desktop) */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-2  font-medium text-[15px]">
                            {navLinks}
                        </ul>
                    </div>

                    {/* Navbar End */}
                    <div className="navbar-end gap-2 sm:gap-4">
                        {/* Cart */}
                        <div className="relative hidden sm:flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300">
                            <div className="w-10 h-10 rounded-full hover:bg-base-200 flex items-center justify-center transition">
                                <IoCartOutline className="text-[28px] text-gray-600 hover:text-black transition" />
                            </div>

                            {productCart?.length > 0 && (
                                <span className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 bg-red-500 text-white text-[10px] font-bold min-w-4.5 h-4.5 px-1 rounded-full flex items-center justify-center shadow">
                                    {productCart.length}
                                </span>
                            )}
                        </div>

                        {/* Login */}
                        <a
                            href="/login"
                            className="hidden sm:inline-block font-medium text-gray-700 hover:text-black transition duration-300"
                        >
                            Login
                        </a>

                        {/* CTA Button */}
                        <a className="btn gradient-bg text-white rounded-full border-none px-4 sm:px-6 hover:scale-105 transition-transform duration-300 shadow-md">
                            Get Started
                        </a>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden absolute left-0 top-full w-full px-3 sm:px-4 transition-all duration-500 ease-in-out origin-top z-40 ${isMenuOpen
                            ? "opacity-100 translate-y-0 scale-y-100 pointer-events-auto"
                            : "opacity-0 -translate-y-3 scale-y-95 pointer-events-none"
                        }`}
                >
                    <div className="bg-base-100 rounded-2xl shadow-xl border border-base-200 p-4 mt-2 overflow-hidden">
                        <ul className="menu gap-2 font-medium text-[15px]">
                            {navLinks}


                            {/* Mobile Extra Actions */}
                            <li className="sm:hidden">
                                <a href="/login" className="hover:text-primary transition">
                                    Login
                                </a>
                            </li>

                            <li>
                                <div className="flex items-center justify-between px-2 py-2 rounded-lg hover:bg-base-200 transition-colors duration-300">
                                    <span className="font-medium"> Your Cart </span>

                                    <div className="relative flex items-center justify-center">
                                        <div className="w-10 h-10 rounded-full bg-base-200 flex items-center justify-center">
                                            <IoCartOutline className="text-[26px] text-gray-600" />
                                        </div>

                                        {productCart?.length > 0 && (
                                            <span className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 bg-red-500 text-white text-[10px] font-bold min-w-4.5 h-4.5 px-1 rounded-full flex items-center justify-center shadow">
                                                {productCart.length}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </li>

                            <li className="mt-3 w-full">
                                <a className="btn gradient-bg text-white rounded-full border-none  hover:scale-[1.02] transition-transform duration-300 shadow-md ">
                                    Get Started
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
import React from 'react';

const Navbar = ({ count }) => {
    return (

        <div className="navbar bg-base-100 shadow-sm w-full sticky top-0 z-50 h-20">

            <div className="max-w-[1200px] mx-auto w-full flex items-center justify-between px-6">

                <div>
                    <a className="text-3xl font-extrabold bg-gradient-to-b from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                        DigiTools
                    </a>
                </div>

                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal gap-6 text-base font-medium">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>

                <div className="flex items-center gap-6">

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                {
                                    count > 0 && (
                                        <span className="indicator-item bg-red-500 text-white text-sm font-bold h-6 min-w-[25px] flex items-center justify-center rounded-full px-1">
                                            {count}
                                        </span>
                                    )
                                }
                            </div>
                        </div>
                    </div>

                    <a className="text-lg font-medium cursor-pointer">Login</a>

                    <button className="btn rounded-full text-white font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] px-6 py-2">
                        Get Started
                    </button>

                </div>

            </div>
        </div>

    );
};

export default Navbar;
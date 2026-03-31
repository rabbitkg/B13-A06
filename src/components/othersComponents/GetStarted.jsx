import React from 'react';
import { FiUser, FiPackage, FiZap } from 'react-icons/fi';

const GetStarted = () => {
    return (
        <div className="">

            <div className=" px-6 py-25 bg-[#F9FAFC]">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-extrabold text-gray-900 mb-3">
                        Get Started In 3 Steps
                    </h2>
                    <p className="text-[#627382] text-lg max-w-md mx-auto">
                        Start using premium digital tools in minutes, not hours.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
                    
                    <div className="bg-white border-2 border-gray-100 rounded-3xl px-5 text-center hover:shadow-lg transition-all duration-300">


                        <div className="flex justify-end">
                            <div className="flex w-9 h-9 bg-gradient-to-br from-[#4F39F6] to-[#9514FA] text-white text-lg font-bold rounded-full items-center justify-center mb-7 mt-5">
                                01
                            </div>
                        </div>

                        <div className="w-25 h-24 mx-auto rounded-full flex items-center justify-center mb-6 bg-gradient-to-br from-[#4f39f627] to-[#9614fa1e]">
                            <img src="https://i.ibb.co.com/0pnbV1f7/user.png" alt="" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">Create Account</h3>
                        <p className="text-[#627382] leading-relaxed mb-15">
                            Sign up for free in seconds. No credit card required to get started.
                        </p>
                    </div>

                    <div className="bg-white border-2 border-gray-100 rounded-3xl px-5 text-center hover:shadow-lg transition-all duration-300">


                        <div className="flex justify-end">
                            <div className="flex w-9 h-9 bg-gradient-to-br from-[#4F39F6] to-[#9514FA] text-white text-lg font-bold rounded-full items-center justify-center mb-7 mt-5">
                                02
                            </div>
                        </div>

                        <div className="w-25 h-24 mx-auto rounded-full flex items-center justify-center mb-6 bg-gradient-to-br from-[#4f39f627] to-[#9614fa1e]">
                            <img src="https://i.ibb.co.com/9HR3GnSg/package.png" alt="" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">Choose Products</h3>
                        <p className="text-[#627382] leading-relaxed mb-15">
                            Browse our catalog and select the tools that fit your needs.
                        </p>
                    </div>

                    <div className="bg-white border-2 border-gray-100 rounded-3xl px-5 text-center hover:shadow-lg transition-all duration-300">


                        <div className="flex justify-end">
                            <div className="flex w-9 h-9 bg-gradient-to-br from-[#4F39F6] to-[#9514FA] text-white text-lg font-bold rounded-full items-center justify-center mb-7 mt-5">
                                03
                            </div>
                        </div>

                        <div className="w-25 h-24 mx-auto rounded-full flex items-center justify-center mb-6 bg-gradient-to-br from-[#4f39f627] to-[#9614fa1e]">
                            <img src="https://i.ibb.co.com/Gvq86xqN/rocket.png" alt="" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">Start Creating</h3>
                        <p className="text-[#627382] leading-relaxed mb-15">
                            Download and start using your premium tools immediately.
                        </p>
                    </div>
                </div>
            </div>



            <div className="max-w-[1200px] mx-auto px-6 pb-27 pt-25">
                <div className="text-center mb-15">
                    <h2 className="text-5xl font-extrabold text-gray-900 mb-3">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-[#627382]">
                        Choose the plan that fits your needs. Upgrade or downgrade anytime.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
              
                    <div className="bg-[#F9FAFC] border-2 border-gray-200 rounded-3xl p-8">
                        <h3 className="text-2xl font-bold mb-1">Starter</h3>
                        <p className="text-[#627382] mb-8">Perfect for getting started</p>

                        <div className="mb-10">
                            <span className="text-5xl font-bold">$0</span>
                            <span className="text-[#627382]">/Month</span>
                        </div>

                        <ul className="space-y-6 mb-20 text-sm">
                            <li className="flex items-start gap-3"><span className="text-green-500 mt-1">✓</span> Access to 10 free tools</li>
                            <li className="flex items-start gap-3"><span className="text-green-500 mt-1">✓</span> Basic templates</li>
                            <li className="flex items-start gap-3"><span className="text-green-500 mt-1">✓</span> Community support</li>
                            <li className="flex items-start gap-3"><span className="text-green-500 mt-1">✓</span> 1 project per month</li>
                        </ul>

                        <button className="w-full py-4 rounded-full border-2 bg-gradient-to-br from-[#4F39F6] to-[#9514FA] text-[#4F39F6] font-bold hover:brightness-110 text-white transition-all cursor-pointer">
                            Get Started Free
                        </button>
                    </div>

                    <div className="bg-gradient-to-br from-[#4f39f6] to-[#9614fa] text-white rounded-3xl p-8 relative scale-[1.04] shadow-2xl">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C6] text-[#BB4D00] text-sm font-bold px-8 py-1.5 rounded-full font-medium">
                            Most Popular
                        </div>

                        <h3 className="text-2xl font-semibold mb-1">Pro</h3>
                        <p className="text-white/80 mb-8">Best for professionals</p>

                        <div className="mb-10">
                            <span className="text-5xl font-bold">$29</span>
                            <span className="text-white/80">/Month</span>
                        </div>

                        <ul className="space-y-4 mb-12 text-sm">
                            <li className="flex items-start gap-3"><span>✓</span> Access to all premium tools</li>
                            <li className="flex items-start gap-3"><span>✓</span> Unlimited templates</li>
                            <li className="flex items-start gap-3"><span>✓</span> Priority support</li>
                            <li className="flex items-start gap-3"><span>✓</span> Unlimited projects</li>
                            <li className="flex items-start gap-3"><span>✓</span> Cloud sync</li>
                            <li className="flex items-start gap-3"><span>✓</span> Advanced analytics</li>
                        </ul>

                        <button className="w-full py-4 rounded-full bg-white text-[#4F39F6] font-bold hover:bg-gray-100 transition-all cursor-pointer">
                            <span className='bg-gradient-to-br from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-semibold'>Start Pro Trial</span>
                        </button>
                    </div>

                    <div className="bg-[#F9FAFC] border-2 border-gray-200 rounded-3xl p-8">
                        <h3 className="text-2xl font-bold mb-1">Enterprise</h3>
                        <p className="text-[#627382] mb-8">For teams and businesses</p>

                        <div className="mb-10">
                            <span className="text-5xl font-bold">$99</span>
                            <span className="text-[#627382]">/Month</span>
                        </div>

                        <ul className="space-y-4 mb-12 text-sm">
                            <li className="flex items-start gap-3"><span className="text-green-500 mt-1">✓</span> Everything in Pro</li>
                            <li className="flex items-start gap-3"><span className="text-green-500 mt-1">✓</span> Team collaboration</li>
                            <li className="flex items-start gap-3"><span className="text-green-500 mt-1">✓</span> Custom integrations</li>
                            <li className="flex items-start gap-3"><span className="text-green-500 mt-1">✓</span> Dedicated support</li>
                            <li className="flex items-start gap-3"><span className="text-green-500 mt-1">✓</span> SLA guarantee</li>
                            <li className="flex items-start gap-3"><span className="text-green-500 mt-1">✓</span> Custom branding</li>
                        </ul>

                        <button className="w-full py-4 rounded-full border-2 bg-gradient-to-br from-[#4F39F6] to-[#9514FA] text-[#4F39F6] font-bold hover:brightness-110 text-white transition-all cursor-pointer">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>




            <div className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-25 text-white">
                <div className="max-w-4xl mx-auto text-center px-6 ">
                    <h2 className="text-[40px] font-extrabold mb-4">
                        Ready To Transform Your Workflow?
                    </h2>
                    <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
                        Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <button className="px-12 py-4 bg-white font-bold rounded-full hover:bg-gray-100 transition cursor-pointer">
                            <span className='bg-gradient-to-br from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-semibold'>Explore Products</span>
                        </button>
                        <button className="px-12 py-4 border border-white/70 rounded-full hover:bg-white/10 transition cursor-po">
                            View Pricing
                        </button>
                    </div>

                    <p className="text-white/70 text-sm mt-5">
                        14-day free trial • No credit card required • Cancel anytime
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;
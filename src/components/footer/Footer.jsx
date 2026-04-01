import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";


const Footer = () => {
  return (
    <footer className=" bg-[#0A0F1C] text-gray-400 pt-27 pb-8 px-6 md:px-20">
      
      <div className="max-w-[1200px] mx-auto">

      <div className="grid md:grid-cols-6 gap-12 ">
        
        <div className="md:col-span-2">
          <h2 className="text-4xl font-extrabold text-white mb-4">DigiTools</h2>
          <p className="text-sm leading-6 max-w-sm">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>


        <div>
          <h3 className="text-white font-semibold text-[20px] mb-5">Product</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer transition">Features</li>
            <li className="hover:text-white cursor-pointer transition">Pricing</li>
            <li className="hover:text-white cursor-pointer transition">Templates</li>
            <li className="hover:text-white cursor-pointer transition">Integrations</li>
          </ul>
        </div>


        <div>
          <h3 className="text-white font-semibold text-[20px] mb-5">Company</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer transition">About</li>
            <li className="hover:text-white cursor-pointer transition">Blog</li>
            <li className="hover:text-white cursor-pointer transition">Careers</li>
            <li className="hover:text-white cursor-pointer transition">Press</li>
          </ul>
        </div>


        <div>
          <h3 className="text-white font-semibold text-[20px] mb-5">Resources</h3>
          <ul className="space-y-3 text-sm mb-6">
            <li className="hover:text-white cursor-pointer transition">Documentation</li>
            <li className="hover:text-white cursor-pointer transition">Help Center</li>
            <li className="hover:text-white cursor-pointer transition">Community</li>
            <li className="hover:text-white cursor-pointer transition">Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold text-[20px] mb-4">Social Links</h3>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-white/20 transition cursor-pointer">
              <RiInstagramFill className="text-black text-sm h-5 w-5"/>
            </div>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-white/20 transition cursor-pointer">
              <FaFacebookSquare className="text-black text-sm h-5 w-5"/>
            </div>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-white/20 transition cursor-pointer">
              <FaXTwitter className="text-black text-sm h-5 w-5" />
            </div>
          </div>
        </div>
      </div>


      <div className="border-t border-white/10 mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <p className="text-sm text-gray-500">
          © 2026 Digitools. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm">
          <span className="hover:text-white cursor-pointer transition">
            Privacy Policy
          </span>
          <span className="hover:text-white cursor-pointer transition">
            Terms of Service
          </span>
          <span className="hover:text-white cursor-pointer transition">
            Cookies
          </span>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
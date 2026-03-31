import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#0B1220] text-gray-300 px-8 md:px-20 py-16">
      <div className="grid md:grid-cols-5 gap-10">

        {/* Logo & Description */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-white mb-4">DigiTools</h2>
          <p className="text-sm leading-relaxed">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-white font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-sm">
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        {/* Resources + Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm mb-6">
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>

          <h3 className="text-white font-semibold mb-3">Social Links</h3>
          <div className="flex gap-3">
            <div className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 cursor-pointer">
              <FaYoutube />
            </div>
            <div className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 cursor-pointer">
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© 2026 Digitools. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="cursor-pointer hover:text-white">Privacy Policy</span>
          <span className="cursor-pointer hover:text-white">Terms of Service</span>
          <span className="cursor-pointer hover:text-white">Cookies</span>
        </div>
      </div>
    </footer>
    );
};

export default Footer;
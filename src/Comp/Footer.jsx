
import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

function Footer({darkMode}) {
  return (
    <footer className={`bg-gradient-to-b  from-[#070F2B] to-[#1B1A55] text-white pt-16 pb-8`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info - Same Logo as Navbar */}
          <div className="space-y-4 mx-auto text-center">
            <div className='mx-auto'>
              <Logo/>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Your one-stop destination for quality products and amazing shopping experience.
            </p>
            <div className="flex space-x-3 text-center justify-center items-center">
              <div className="bg-gray-800 p-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all duration-300 cursor-pointer transform hover:scale-110">
                <span className="text-white text-sm">📘</span>
              </div>
              <div className="bg-gray-800 p-2 rounded-lg hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 cursor-pointer transform hover:scale-110">
                <span className="text-white text-sm">📷</span>
              </div>
              <div className="bg-gray-800 p-2 rounded-lg hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-500 transition-all duration-300 cursor-pointer transform hover:scale-110">
                <span className="text-white text-sm">🐦</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 mx-auto text-center ">
            <h3 className="font-bold text-lg bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <div className="space-y-2 flex flex-row gap-x-2 mx-auto md:grid-cols-1 md:grid">
              <NavLink to="/" className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm">Home</NavLink>
              <NavLink to="/shop" className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm">Shop</NavLink>
              <NavLink to="/about" className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm">About</NavLink>
              <NavLink to="/contactform" className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm">Contact</NavLink>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4 text-center mx-auto">
            <h3 className="font-bold text-lg bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Customer Service
            </h3>
            <div className="space-y-2 flex flex-row gap-2 md:grid md:grid-cols-1">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm">FAQ</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm">Shipping</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm">Returns</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm">Privacy Policy</a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 mx-auto text-center">
            <h3 className="font-bold text-lg bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
              Contact Us
            </h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <p className="flex items-center space-x-2">
                <span>📧</span>
                <span>hello@shoplite.com</span>
              </p>
              <p className="flex items-center space-x-2">
                <span>📞</span>
                <span>+92315 9878075</span>
              </p>
              <p className="flex items-center space-x-2">
                <span>📍</span>
                <span>Abbottabad, PakhtunKhwa, Pakistan.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          
          <p className="text-gray-400 text-sm">
             ShopLite 2025
            © All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React from 'react'
import { NavLink } from 'react-router-dom';
import myShop from '../assets/Myshop.mp4'
import Contact from './ContactForm';
import FeaturedQuality from './FeaturedQuality';
import FeaturedPro from './FeaturedPro';

function Hero({addToCart, products}) {
  return (
    <section className='w-full min-h-screen flex flex-col pt-14 mb-12 overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'>

      {/* Video Hero Section - Modern Design */}
      <div className='w-full mx-auto relative min-h-[80vh] my-4 overflow-hidden shadow-2xl'>
        <video src={myShop} autoPlay loop muted 
          className='w-full h-full absolute top-0 left-0 object-cover z-0'
        />
        
        {/* Modern Overlay */}
        <div className='w-full min-h-[86vh] relative p-8 bg-gradient-to-br from-blue-900/40 to-purple-900/40 mx-auto flex flex-col items-center justify-center z-10 backdrop-blur-xs'>
          
          {/* Modern Text Design */}
          <h2 className='text-5xl md:text-6xl font-bold text-white mb-8 text-center animate-fade-in'>
            Welcome to
          </h2>
          
          {/* Exact Same Logo as Navbar - Bigger Size */}
          <NavLink to={'/'} className='w-auto cursor-pointer bg-transparent flex justify-center items-center mb-8 group transform hover:scale-105 transition-transform duration-500'>
            <p className='text-7xl md:text-8xl font-semibold bg-transparent text-[#fd366e]'>Shop</p> 
            <span className='text-white animate-bounce bg-transparent ml-[-52px] mb-4 text-4xl md:text-5xl group-hover:animate-none group-hover:scale-110 transition-all duration-300'>Lite</span>
          </NavLink>
          
          {/* Tagline */}
          <p className='text-xl md:text-2xl text-gray-200 mt-6 text-center max-w-2xl leading-relaxed animate-slide-up'>
            All you need is here, shop like it's yours.
          </p>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 mt-8 animate-slide-up' style={{animationDelay: '200ms'}}>
            <NavLink 
              to={'/shop'} 
              className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl text-center'
            >
              Start Shopping
            </NavLink>
            <NavLink 
              to={'/about'} 
              className='bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105 shadow-lg text-center'
            >
              Learn More
            </NavLink>
          </div>
        </div>
      </div>

      {/* About Section - Modern Design */}
      <section className="my-8 text-center w-full min-h-[60vh] py-16 px-6 bg-gradient-to-br from-white to-blue-50 rounded-2xl mx-4 border border-white/50 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
            About ShopLite
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            ShopLite is a demo e-commerce project developed as part of our{" "}
            <span className="font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">FullStack Development Course</span> under the guidance 
            of <span className="font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Sir SaifUllah Khan</span>. 
            This project was assigned to sharpen our skills in modern web technologies 
            such as React, Node.js, and databases while also learning to design 
            user-friendly shopping platforms.
          </p>
          
          <div className='my-12'>
            <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-8">
              Why ShopLite?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:border-blue-200">
                <h3 className="font-bold text-gray-800 text-lg mb-3">🚀 Simplicity</h3>
                <p className="text-gray-600">A clean and easy-to-use shopping experience with intuitive design.</p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 hover:border-purple-200">
                <h3 className="font-bold text-gray-800 text-lg mb-3">💻 Modern Tech Stack</h3>
                <p className="text-gray-600">Powered by React, Tailwind CSS, and backend technologies to mimic real-world apps.</p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300 hover:border-pink-200">
                <h3 className="font-bold text-gray-800 text-lg mb-3">👨‍🏫 Guided by Expertise</h3>
                <p className="text-gray-600">Developed under the supervision of an experienced instructor.</p>
              </div>
            </div>
          </div>
          
          <div className='w-full mt-10'>
            <NavLink 
              to={'/about'} 
              className='inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'
            >
              Read More About Us
            </NavLink>
          </div>
        </div>
      </section>
      
      {/* Other Sections */}
      <FeaturedPro addToCart={addToCart}/>
      <FeaturedQuality />
      <Contact/>
    </section>
  )
}

export default Hero
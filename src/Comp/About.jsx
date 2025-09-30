
import React from 'react';
import { NavLink } from 'react-router-dom';

function About() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with ShopLite Logo */}
        <div className="text-center mb-12">
          {/* ShopLite Logo */}
          <div className="flex justify-center items-center mb-8">
            <NavLink to={'/'} className='w-auto cursor-pointer bg-transparent flex justify-center items-center transform hover:scale-105 transition-transform duration-500'>
              <p className='text-6xl md:text-7xl font-semibold bg-transparent text-[#fd366e]'>Shop</p> 
              <span className='text-gray-800 animate-bounce bg-transparent ml-[-40px] mb-3 text-4xl md:text-5xl'>Lite</span>
            </NavLink>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">ShopLite</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We're passionate about bringing you the best shopping experience with quality products and exceptional service.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To provide customers with high-quality products at affordable prices while delivering exceptional shopping experience.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To become the most trusted and loved e-commerce platform for millions of customers worldwide.
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-2xl inline-block shadow-lg">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="font-bold text-gray-800">Fast & Reliable</h4>
                <p className="text-gray-600 text-sm">Quick delivery and reliable service</p>
              </div>
              
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-2xl inline-block shadow-lg">
                  <span className="text-2xl">💎</span>
                </div>
                <h4 className="font-bold text-gray-800">Quality First</h4>
                <p className="text-gray-600 text-sm">Premium quality products guaranteed</p>
              </div>
              
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-4 rounded-2xl inline-block shadow-lg">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h4 className="font-bold text-gray-800">Secure Shopping</h4>
                <p className="text-gray-600 text-sm">Safe and secure transactions</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl inline-block shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
            <p className="text-lg font-semibold">
              🎉 Join the ShopLite family today!
            </p>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="fixed top-20 left-10 w-16 h-16 bg-blue-200 rounded-full blur-2xl opacity-30 animate-float -z-10"></div>
      <div className="fixed bottom-20 right-10 w-12 h-12 bg-purple-200 rounded-full blur-2xl opacity-30 animate-float delay-1000 -z-10"></div>
    </section>
  );
}

export default About;
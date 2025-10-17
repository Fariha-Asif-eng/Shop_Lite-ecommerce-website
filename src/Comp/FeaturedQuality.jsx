
import React from "react";
import { FaShippingFast, FaLock, FaClipboardList, FaUndo } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const FeaturedQuality = () => {
  const { isDark } = useTheme();
  
  const features = [
    {
      icon: <FaShippingFast className="text-3xl" />,
      title: "Fast Delivery",
      desc: "Get your products delivered quickly and safely.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaLock className="text-3xl" />,
      title: "Smart & Secure Billing",
      desc: "Your payments are protected with advanced security.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaClipboardList className="text-3xl" />,
      title: "Order Tracking",
      desc: "Track your orders in real-time with ease.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaUndo className="text-3xl" />,
      title: "Refund Availability",
      desc: "Easy and transparent refund policy for your comfort.",
      color: "from-orange-500 to-red-500"
    },
  ];

  return (
    <section className={`py-16 my-12 rounded-2xl transition-all duration-500 ${
      isDark 
        ? 'bg-gradient-to-b  from-[#070F2B] to-[#1B1A55]' 
        : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Dark and Bold */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-black mb-6 ${
            isDark ? 'text-gray-100' : 'text-gray-800'
          }`}>
            Our Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Qualities</span>
          </h2>
          <p className={`text-xl mt-4 max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Experience the best shopping with our premium services and features
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border ${
                isDark 
                  ? 'bg-gray-800/90 border-gray-700 hover:border-gray-600' 
                  : 'bg-white/90 border-white/20 hover:border-transparent'
              }`}
            >
              {/* Background Gradient Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Animated Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}>
                <div className={`absolute inset-[2px] rounded-2xl ${
                  isDark ? 'bg-gray-800/90' : 'bg-white/90'
                }`}></div>
              </div>

              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Icon Container */}
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                  <div className={`bg-gradient-to-r ${feature.color} text-white p-4 rounded-2xl inline-block shadow-lg`}>
                    {feature.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500 ${
                  isDark ? 'text-gray-200' : 'text-gray-800'
                }`}>
                  {feature.title}
                </h3>

                {/* Description */}
                <p className={`leading-relaxed group-hover:${
                  isDark ? 'text-gray-400' : 'text-gray-700'
                } transition-colors duration-300 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {feature.desc}
                </p>

                {/* Hover Arrow */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <div className={`w-8 h-8 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto`}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Floating Particles */}
              <div className={`absolute top-3 right-3 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500 delay-300 ${
                feature.color.includes('blue') ? 'bg-blue-400' : 
                feature.color.includes('purple') ? 'bg-purple-400' :
                feature.color.includes('green') ? 'bg-green-400' : 'bg-orange-400'
              }`}></div>
              <div className={`absolute bottom-3 left-3 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500 delay-500 ${
                feature.color.includes('blue') ? 'bg-cyan-400' : 
                feature.color.includes('purple') ? 'bg-pink-400' :
                feature.color.includes('green') ? 'bg-emerald-400' : 'bg-red-400'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl inline-block shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
            <p className="text-lg font-semibold flex items-center justify-center gap-2">
              <span>🌟</span>
              Trusted by thousands of happy customers
              <span>🌟</span>
            </p>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className={`absolute top-10 left-10 w-20 h-20 rounded-full blur-2xl opacity-30 animate-float ${
        isDark ? 'bg-blue-600' : 'bg-blue-200'
      }`}></div>
      <div className={`absolute bottom-10 right-10 w-16 h-16 rounded-full blur-2xl opacity-30 animate-float delay-1000 ${
        isDark ? 'bg-purple-600' : 'bg-purple-200'
      }`}></div>
    </section>
  );
};

export default FeaturedQuality;
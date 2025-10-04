
import React from "react";
import { FaShippingFast, FaLock, FaClipboardList, FaUndo } from "react-icons/fa";
import H2Styles from "../MiniParts/H2Styles";

const FeaturedQuality = () => {
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
    <section className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 my-12 rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Dark and Bold */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-6">
            Our Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Qualities</span>
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            Experience the best shopping with our premium services and features
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/20 hover:border-transparent"
            >
              {/* Background Gradient Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Animated Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}>
                <div className="absolute inset-[2px] rounded-2xl bg-white/90"></div>
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
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
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
              <div className="absolute top-3 right-3 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500 delay-300"></div>
              <div className="absolute bottom-3 left-3 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500 delay-500"></div>
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
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full blur-2xl opacity-30 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-purple-200 rounded-full blur-2xl opacity-30 animate-float delay-1000"></div>
    </section>
  );
};

export default FeaturedQuality;
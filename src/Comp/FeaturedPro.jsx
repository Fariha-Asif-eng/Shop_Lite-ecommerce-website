
import React from 'react'
import ProBox from './ProBox';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useTheme } from '../context/ThemeContext';

function FeaturedPro({ addToCart }) {
  const { isDark } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const products = [
    {
      id: 1,
      title: "New luggage hand bag",
      price: 20,
      img: "/Images/bag.jpg",
      cate: 'All',
    },
    {
      id: 2,
      title: "Quality polo/sports cap",
      price: 35,
      img: "/Images/cap.jpg",
      cate: 'B',
    },
    {
      id: 3,
      title: "Table chairs set",
      price: 50,
      img: "/Images/chairs.jpg",
      cate: 'D',
    },
    {
      id: 4,
      title: "Study table lamp",
      price: 20,
      img: "/Images/lamp.jpg",
      cate: 'E',
    },
    {
      id: 5,
      title: "New arrived cloth",
      price: 35,
      img: "/Images/cloth.avif",
      cate: 'F',
    },
    {
      id: 6,
      title: "Quality polo/sports cap",
      price: 35,
      img: "/Images/cap.jpg",
      cate: 'B',
    },
  ];

  return (
    <section className={`min-h-[60vh] w-full p-4 my-6 flex flex-col items-center relative overflow-hidden transition-all duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
    }`}>
      
      {/* Animated Background */}
      <div className={`absolute inset-0 animate-gradient-x ${
        isDark 
          ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800' 
          : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
      }`}></div>

      {/* Animated Floating Elements */}
      <div className={`absolute top-10 left-8 w-6 h-6 rounded-r-4xl rounded-t-xl rounded-full animate-float ${
        isDark ? 'bg-blue-600' : 'bg-blue-400'
      }`}></div>
      <div className={`absolute top-20 right-10 w-4 h-4 rounded-l-2xl rounded-b-lg rounded-full animate-float delay-100 ${
        isDark ? 'bg-purple-600' : 'bg-purple-400'
      }`}></div>
      <div className={`absolute bottom-20 left-20 w-4 h-4 rounded-full animate-float delay-500 ${
        isDark ? 'bg-pink-500' : 'bg-pink-300'
      }`}></div>
      <div className={`absolute top-1/3 right-20 w-3 h-3 rounded-full animate-bounce-slow ${
        isDark ? 'bg-cyan-500' : 'bg-cyan-300'
      }`}></div>
      <div className={`absolute bottom-1/4 left-1/4 w-2 h-2 rounded-full animate-pulse-slow ${
        isDark ? 'bg-yellow-500' : 'bg-yellow-300'
      }`}></div>

      {/* Enhanced Header with Beautiful Styling */}
      <div className="relative mb-12 text-center z-10 animate-fade-in">
        <div className="inline-block relative">
          {/* Main Heading with Gradient */}
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
            Our Featured Products!
          </h2>

          {/* Decorative Underline */}
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full opacity-70"></div>
        </div>

        {/* Subtitle */}
        <p className={`mt-8 text-lg font-medium animate-slide-up ${
          isDark ? 'text-gray-300' : 'text-gray-700'
        }`} style={{ animationDelay: '200ms' }}>
          Discover the <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-bold">latest trends</span> and <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-bold">best sellers</span>
        </p>
      </div>

      {/* Products Grid using ProBox Component */}
      <motion.div 
        variants={containerVariants}
        initial='hidden'
        whileInView={'show'} 
        viewport={{ once: true, amount: 0.4 }}
        className='w-full max-w-7xl my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mx-auto relative z-10'
      >
        {products.map((product, index) => (
          <motion.div 
            key={product.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
            className="animate-fade-in"
            style={{
              animationDelay: `${index * 150}ms`
            }}
          >
            <ProBox 
              id={product.id}
              title={product.title}
              price={product.price}
              img={product.img}
              onAdd={() => addToCart(product)}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Enhanced CTA Button */}
      <div className="text-center mt-16 w-full relative z-10 animate-slide-up" style={{ animationDelay: '800ms' }}>
        <Link
          to="/shop"
          className="relative inline-flex items-center justify-center px-10 py-5 font-bold text-white rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-3xl group overflow-hidden animate-gradient-xy"
        >
          {/* Shimmer Effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000">
            <div className={`w-full h-full bg-gradient-to-r from-transparent via-${
              isDark ? 'gray-600/40' : 'white/40'
            } to-transparent transform -skew-x-12`}></div>
          </div>

          {/* Button Content */}
          <span className="relative z-10 flex items-center space-x-3 text-lg">
            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm animate-pulse">🔥</span>
            <span>Explore All Products</span>
            <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  )
}

export default FeaturedPro
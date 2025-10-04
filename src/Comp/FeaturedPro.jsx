import React from 'react'
import ProBox from './ProBox';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import H2Styles from '../MiniParts/H2Styles';
import { motion } from "framer-motion";

function FeaturedPro({ addToCart }) {

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const products = [
    {
      id: 1,
      title: "New luggage hand bag",
      price: 20,
      img: "/Images/bag.jpg",
      cate: 'All',
      rating: 4.5,
      reviews: 128,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: "Quality polo/sports cap",
      price: 35,
      img: "/Images/cap.jpg",
      cate: 'B',
      rating: 4.8,
      reviews: 89,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: "Table chairs set",
      price: 50,
      img: "/Images/chairs.jpg",
      cate: 'D',
      rating: 4.3,
      reviews: 156,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      title: "Study table lamp",
      price: 20,
      img: "/Images/lamp.jpg",
      cate: 'E',
      rating: 4.7,
      reviews: 203,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      title: "New arrived cloth",
      price: 35,
      img: "/Images/cloth.avif",
      cate: 'F',
      rating: 4.9,
      reviews: 167,
      color: 'from-indigo-500 to-blue-500'
    },
    {
      id: 6,
      title: "Quality polo/sports cap",
      price: 35,
      img: "/Images/cap.jpg",
      cate: 'B',
      rating: 4.6,
      reviews: 94,
      color: 'from-pink-500 to-rose-500'
    },
  ];

  // Star rating component
  const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, index) => (
          <span key={index} className="text-lg">
            {index < fullStars ? (
              <span className="text-yellow-400">★</span>
            ) : index === fullStars && hasHalfStar ? (
              <span className="text-yellow-400">★</span>
            ) : (
              <span className="text-gray-300">★</span>
            )}
          </span>
        ))}
        <span className="text-yellow-400 font-bold ml-1">{rating}</span>
      </div>
    );
  };

  let navigateTo = useNavigate()

  return (
    <section className='min-h-[60vh] w-full p-4 my-6 flex flex-col items-center relative overflow-hidden'>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 animate-gradient-x"></div>

      {/* Animated Floating Elements */}
      <div className="absolute top-10 left-8 w-6 h-6 rounded-r-4xl rounded-t-xl bg-blue-400 rounded-full animate-float"></div>
      <div className="absolute top-20 right-10 w-4 h-4 bg-purple-400 rounded-full rounded-l-2xl rounded-b-lg animate-float delay-100"></div>
      <div className="absolute bottom-20 left-20 w-4 h-4 bg-pink-300 rounded-full animate-float delay-500"></div>
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-cyan-300 rounded-full animate-bounce-slow"></div>
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-yellow-300 rounded-full animate-pulse-slow"></div>

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
        <p className="text-gray-700 mt-8 text-lg font-medium animate-slide-up" style={{ animationDelay: '200ms' }}>
          Discover the <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-bold">latest trends</span> and <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-bold">best sellers</span>
        </p>
      </div>

      {/* Enhanced Products Grid */}
      <motion.div variants={containerVariants}
        initial='hidden'
        whileInView={'show'} viewport={{ once: true, amount: 0.4 }}
        className='w-full max-w-7xl my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mx-auto relative z-10'>
        {products.map((each, index) => (
          <motion.div variants={itemVariants}
            key={each.id}
            className="group relative animate-fade-in"
            style={{
              animationDelay: `${index * 150}ms`
            }}
          >
            {/* Colorful Glow Effect */}
            <div className={`absolute -inset-2 bg-gradient-to-r ${each.color} rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500 animate-pulse-slow`}></div>

            {/* Main Card */}
            <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20 group-hover:border-white/40 transform group-hover:-translate-y-3 group-hover:scale-105">

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${each.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="p-5">
                  {/* Product Image */}
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <img
                      src={each.img}
                      alt={each.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700 rounded-xl"
                    />

                    {/* Rating Badge */}
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg">
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-500 text-sm">★</span>
                        <span className="text-gray-800 font-bold text-sm">{each.rating}</span>
                      </div>
                    </div>

                    {/* Quick Add Button */}
                    <button title='Add to cart'
                      onClick={() => addToCart(each)}
                      className="absolute top-3 right-3 cursor-pointer bg-white/90 backdrop-blur-sm text-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:scale-110"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </button>
                    <button title='See details'
                      onClick={() => navigateTo(`/itemdetails/${each.id}`)}
                      className="absolute bottom-3 p-1 right-3 cursor-pointer bg-white/90 backdrop-blur-sm text-gray-800  rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:scale-110"
                    >
                      <motion.svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                        whileHover={{ x: 3 }}   // 👈 Arrow slides slightly right on hover
    transition={{ type: "spring", stiffness: 300 }}
                      >
                        <path d="M5 12h14" /> //X-axis line
                        <path d="M12 5l7 7-7 7" />       //Arrow head
                      </motion.svg>

                    </button>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-3">
                    <div className="mb-8 py-4 flex justify-around w-full">
                      {/* Product Title and price*/}
                      <h2 className="font-bold absolute left-4 text-gray-800 mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500 leading-tight">
                        {each.title}
                      </h2>
                      <div className="lg:hidden absolute right-4 ">
                        <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          ${each.price}
                        </span>
                        <span className="text-sm text-gray-500 line-through opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          ${each.price + 15}
                        </span>
                      </div>
                    </div>
                    {/* Star Rating and Reviews */}
                    <div className="flex items-center justify-between">
                      <StarRating rating={each.rating} />
                      <span className="text-gray-500 text-sm">({each.reviews})</span>
                    </div>



                    {/* Bottom part */}
                    <div className="flex items-center justify-between mt-auto">
                      {/* Price Display */}
                      <div className="hidden lg:block">
                        <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          ${each.price}
                        </span>
                        <span className="text-sm text-gray-500 line-through opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          ${each.price + 15}
                        </span>
                      </div>

                      <button
                        onClick={() => navigateTo(`/itemdetails/${each.id}`)}
                        className="lg:hidden bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 cursor-pointer py-2.5 rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 font-semibold text-sm shadow-md hover:shadow-lg relative overflow-hidden group/btn"
                      >
                        <span>See details</span>
                        {/* <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                 </svg> */}
                      </button>
                      <button
                        onClick={() => navigateTo(`/orderdetails/${each.id}`)}
                        className={`bg-gradient-to-r ${each.color} text-white px-4 cursor-pointer py-2.5 rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 font-semibold text-sm shadow-md hover:shadow-lg relative overflow-hidden group/btn`}
                      >
                        <span className="relative z-10 flex items-center space-x-1">
                          <span>Buy Now</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      </button>
                    </div>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
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
            <div className="w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12"></div>
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
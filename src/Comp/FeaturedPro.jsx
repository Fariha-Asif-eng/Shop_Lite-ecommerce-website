import React from 'react'
import ProBox from './ProBox';
import { Link } from 'react-router-dom';
import H2Styles from '../MiniParts/H2Styles';

function FeaturedPro({addToCart}) {
  const products = [
    { 
      id: 1, 
      title: "New luggage hand bag", 
      price: 20, 
      img: "/Images/bag.jpg", 
      cate:'All',
      rating: 4.5,
      reviews: 128,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      id: 2, 
      title: "Quality polo/sports cap", 
      price: 35, 
      img: "/Images/cap.jpg", 
      cate:'B',
      rating: 4.8,
      reviews: 89,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      id: 3, 
      title: "Table chairs set", 
      price: 50, 
      img: "/Images/chairs.jpg", 
      cate:'D',
      rating: 4.3,
      reviews: 156,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      id: 4, 
      title: "Study table lamp", 
      price: 20, 
      img: "/Images/lamp.jpg", 
      cate:'E',
      rating: 4.7,
      reviews: 203,
      color: 'from-orange-500 to-red-500'
    },
    { 
      id: 5, 
      title: "New arrived cloth", 
      price: 35, 
      img: "/Images/cloth.avif", 
      cate:'F',
      rating: 4.9,
      reviews: 167,
      color: 'from-indigo-500 to-blue-500'
    },
    { 
      id: 6, 
      title: "Quality polo/sports cap", 
      price: 35, 
      img: "/Images/cap.jpg", 
      cate:'B',
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

  return (
    <section className='min-h-[60vh] w-full p-4 my-6 flex flex-col items-center relative overflow-hidden'>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 animate-gradient-x"></div>
      
      {/* Animated Floating Elements */}
      <div className="absolute top-10 left-5 w-3 h-3 bg-blue-400 rounded-full animate-float"></div>
      <div className="absolute top-20 right-10 w-2 h-2 bg-purple-400 rounded-full animate-float delay-1000"></div>
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
        <p className="text-gray-700 mt-8 text-lg font-medium animate-slide-up" style={{animationDelay: '200ms'}}>
          Discover the <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-bold">latest trends</span> and <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-bold">best sellers</span>
        </p>
      </div>
        
      {/* Enhanced Products Grid */}
      <div className='w-full max-w-7xl my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mx-auto relative z-10'>
        {products.map((each, index) => (
          <div 
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
                    <button
                      onClick={() => addToCart(each)}
                      className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:scale-110"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Product Info */}
                  <div className="space-y-3">
                    <h3 className="font-bold text-gray-800 line-clamp-2 group-hover:text-gray-900 transition-colors duration-300 text-lg leading-tight">
                      {each.title}
                    </h3>
                    
                    {/* Star Rating and Reviews */}
                    <div className="flex items-center justify-between">
                      <StarRating rating={each.rating} />
                      <span className="text-gray-500 text-sm">({each.reviews})</span>
                    </div>
                    
                    {/* Price and Add to Cart */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-baseline space-x-2">
                        <span className={`text-2xl font-black bg-gradient-to-r ${each.color} bg-clip-text text-transparent`}>
                          ${each.price}
                        </span>
                        <span className="text-sm text-gray-500 line-through opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          ${each.price + 15}
                        </span>
                      </div>
                      
                      {/* Add to Cart Button */}
                      <button
                        onClick={() => addToCart(each)}
                        className={`bg-gradient-to-r ${each.color} text-white px-4 py-2.5 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold text-sm shadow-md`}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
        
      {/* Enhanced CTA Button */}
      <div className="text-center mt-16 w-full relative z-10 animate-slide-up" style={{animationDelay: '800ms'}}>
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
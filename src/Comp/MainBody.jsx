
import React from "react";
import ProBox from "./ProBox";
import ItemDetails from "./ItemDetails";

function MainBody({ addToCart, products, seeDetailsBtn }) {


  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Products</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover amazing products with great deals and premium quality
          </p>
        </div>

        {/* Products Count */}
        <div className="flex justify-between items-center mb-6 px-2">
          <p className="text-gray-700 font-semibold">
            Showing <span className="text-blue-600">{products.length}</span> products
          </p>
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            🎯 Best Deals
          </div>
        </div>

        {/* Products Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.length > 0 ? (
            products.map((eachProduct) => (
              <div 
                key={eachProduct.id}
                className="animate-fade-in"
                style={{
                  animationDelay: `${products.indexOf(eachProduct) * 100}ms`
                }}
              >
                <ProBox
                  {...eachProduct}
                  onAdd={() => addToCart(eachProduct)} seeDetails={seeDetailsBtn}
                />
              </div>
            ))
          ) : (
            /* No Products Found State */
            <div className="col-span-full text-center py-16">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-lg border border-white/20 max-w-2xl mx-auto">
                <div className="text-8xl mb-6">🔍</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  No Products Found
                </h3>
                <p className="text-gray-600 text-lg mb-6">
                  We couldn't find any products matching your search. Try different keywords or browse our categories.
                </p>
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold inline-block shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Browse All Products
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Loading More Indicator (Optional) */}
        {products.length > 0 && (
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl inline-block shadow-2xl">
              <p className="font-semibold flex items-center justify-center gap-2">
                <span>✨</span>
                More amazing products coming soon!
                <span>✨</span>
              </p>
            </div>
          </div>
        )}

        {/* Background Elements */}
        <div className="fixed top-20 left-5 w-16 h-16 bg-blue-200 rounded-full blur-2xl opacity-30 animate-float -z-10"></div>
        <div className="fixed bottom-20 right-10 w-12 h-12 bg-purple-200 rounded-full blur-2xl opacity-30 animate-float delay-1000 -z-10"></div>
        <div className="fixed top-1/2 left-1/4 w-8 h-8 bg-pink-200 rounded-full blur-2xl opacity-30 animate-pulse-slow -z-10"></div>
      </div>
    </div>
  );
}

export default MainBody;
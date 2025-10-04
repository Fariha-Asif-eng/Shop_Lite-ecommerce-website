import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ItemDetails from "./ItemDetails";

function ProBox({ id, title, price, img, onAdd}) {
  //   // if (!id)=>{ return null;}

  // const [proId, setProID] = useState(null);
  let navigateTo = useNavigate('');
  return (

    <div >
       
    <div 
      key={id} 
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-transparent transform hover:-translate-y-2"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Quick Add Button Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 flex items-center justify-center gap-[2px]">
          <button
            onClick={()=> navigateTo(`/itemdetails/${id}`)}
            className="bg-white/90 backdrop-blur-sm text-gray-800 p-2 rounded-full cursor-pointer shadow-2xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:scale-110 font-semibold flex items-center space-x-2"
          >
            <span>See details</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
          <button
            onClick={onAdd}
            className="bg-white/90 backdrop-blur-sm text-gray-800 p-2 rounded-full cursor-pointer shadow-2xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:scale-110 font-semibold flex items-center space-x-2"
          >
            <span>Add to cart</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>

        {/* Price Tag */}
        <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1.5 rounded-full shadow-lg font-bold text-sm">
          ${price}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5">
      <div className="mb-8 py-4 flex justify-around w-full">
        {/* Product Title and price*/}
        <h2 className="font-bold absolute left-4 text-gray-800 mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500 leading-tight">
          {title}
        </h2>
        <div className="lg:hidden absolute right-4 ">
            <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ${price}
            </span>
            <span className="text-sm text-gray-500 line-through opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              ${price + 15}
            </span>
          </div>
          </div>
        
        {/* Bottom Part */}
        <div className="flex items-center justify-between mt-auto">
          {/* Price Display */}
          <div className=" hidden lg:block">
            <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ${price}
            </span>
            <span className="text-sm text-gray-500 line-through opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              ${price + 15}
            </span>
          </div>
          
          <button
            onClick={()=> navigateTo(`/itemdetails/${id}`)}
            className="lg:hidden bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 cursor-pointer py-2.5 rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 font-semibold text-sm shadow-md hover:shadow-lg relative overflow-hidden group/btn"
          >
            <span>See details</span>
            {/* <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg> */}
          </button>
          <NavLink
            to={`/orderdetails/${id}`}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 cursor-pointer py-2.5 rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 font-semibold text-sm shadow-md hover:shadow-lg relative overflow-hidden group/btn"
          >
            <span className="relative z-10 flex items-center space-x-1">
              <span>Buy Now</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
          </NavLink>
        </div>
      </div>

      {/* Hover Border Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-md"></div>
      <div className="absolute inset-[1px] rounded-2xl bg-white -z-10"></div>
    </div>
    
    </div>
    

  );
 
}

export default ProBox;
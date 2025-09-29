import React, { useState } from "react";
// import AddToCart from "./AddToCart";
// import ProductList from "./ProductList";


function CartBox({ productList, onRemove }) {
  const [quantity, setQuantity] = useState(1);


  // Update quantity
  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const totalPrice = (productList.price * quantity).toFixed(2);


  return (
    <div className="w-full border border-gray-300">
      {/* Product section */}
      <div className="flex items-center gap-4">
        <img
          src={productList.image}
          alt={productList.title}
          className="w-20 h-20 object-cover rounded"
        />
        <div className="flex-1">
          <h2 className="text-lg font-semibold">{productList.title}</h2>
          <p className="text-gray-600 text-sm">{productList.description}</p>
        </div>
      </div>

      {/* Quantity and Price */}
      <div className="flex items-center justify-between mt-4">
        {/* Quantity Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={decreaseQty}
            className="font-bold px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          > - </button>
          <span className="font-medium">{quantity}</span>
          <button
            onClick={increaseQty}
            className="font-bold px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          > + </button>
        </div>

        {/* Price */}
        <div className="text-right">
          <p className="text-sm text-gray-500">Price</p>
          <p className="text-lg font-bold">${totalPrice}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-4 ">

        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        onClick={()=> onRemove(productList.id)}
        >
          Remove
        </button>

        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>

      
    </div>
  );
}

export default CartBox;

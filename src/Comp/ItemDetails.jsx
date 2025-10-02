import React from "react";
import { useParams } from "react-router-dom";
import products from "./ProductList"; // import your product data

function ItemDetails({ addToCart, buyNow }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p className="text-center text-red-500">Product not found</p>;
  }

  return (
    <section className="w-full h-[80vh] mt-12 relative left-0 top-0 flex place-items-center p-6">
      <div className="flex gap-4  rounded-md w-full h-full mt-8">
        <img
          src={product.img}
          alt={product.title}
          className="w-[40%] rounded-md object-cover"
        />

        <div className="flex flex-col gap-y-12 w-full">
          <div>
            <h2 className="text-xl font-bold">{product.title}</h2>
          <h3 className="text-lg text-gray-700">${product.price}</h3>
          <p className="text-sm text-gray-600">{product.detail}</p>
          </div>
        <div className="flex justify-between gap-x-4 mx-auto w-[60%] relative bottom-0">
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-500 text-white cursor-pointer p-4 w-full rounded hover:bg-blue-600 transition-colors duration-200"
          >
            Add to cart
          </button>
          <button
            onClick={() => buyNow && buyNow(product)}
            className="bg-green-500 text-white cursor-pointer p-4 w-full rounded hover:bg-green-600 transition-colors duration-200"
          >
            Buy now
          </button>
        </div>
        </div>

      </div>
    </section>
  );
}

export default ItemDetails;

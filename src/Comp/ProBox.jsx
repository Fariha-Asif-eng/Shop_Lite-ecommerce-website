import React from "react";

function ProBox({ id, title, price, img, onAdd }) {
  return (
    <div key={id} className="shadow rounded flex flex-col bg-zinc-900 text-white">
      <img
        src={img}
        alt={title}
        className="rounded h-40 object-cover cursor-pointer hover:opacity-90 transition"
      />
      <h2 className="font-semibold m-2 ">{title}</h2>
      <div className="flex justify-between p-2 items-center mt-2  rounded">
        <span className="text-lg font-bold ">${price}</span>
        <button
          onClick={onAdd}
          className="bg-[#fd366e] text-white font-semibold p-2 rounded hover:bg-[#ed366e] cursor-pointer transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProBox;

import React from 'react'

function BOx({ clickAddBtn }) {
  const products = [
    { id: 1, title: "New leather multi-functional bag.", price: "Rs.3500", img: "/Images/bag.jpg" },
    { id: 2, title: "Casual shoes for boys", price: "Rs.1800", img: "/Images/shoes.jpg" },
    { id: 3, title: "Table lamp for night study", price: "Rs.2250", img: "/Images/lamp.jpg" },
    { id: 4, title: "Small meeting chairs setup for office", price: "Rs.12000", img: "/Images/chairs.jpg" },
    { id: 5, title: "New Rolex watch addition for men", price: "Rs.8500", img: "/Images/watch.jpg" },
    { id: 6, title: "White cap for sports boys", price: "Rs.800", img: "/Images/cap.jpg" },
  ];

  return (
    <div className="w-[100vw] h-[90vh] grid grid-cols-3 gap-4 rounded-lg p-2 bg-slate-500">
      {products.map((item) => (
        <div key={item.id} className="bg-amber-500 w-full grid items-center rounded-lg px-2">
          <div className="w-full flex justify-left gap-2">
            <img src={item.img} alt="altText" className="w-[120px] h-[120px] rounded-lg" />
            <div className="grid">
              <h2 className="font-semibold">{item.title}</h2>
              <p className="font-semibold">{item.price}</p>
            </div>
          </div>

          <div className="flex w-full justify-between gap-2 items-center">
            <button className="p-2 font-semibold rounded-lg cursor-pointer bg-green-600 text-white">
              Buy Now
            </button>
            <button
              className="p-2 font-semibold rounded-lg cursor-pointer bg-blue-500 text-white"
              onClick={() => clickAddBtn(item)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BOx

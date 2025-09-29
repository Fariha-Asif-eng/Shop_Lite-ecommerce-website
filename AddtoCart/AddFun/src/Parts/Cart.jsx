import React from 'react'

function Cart({ productListItems, removeBtn, updateQty }) {
  return (
    <div className="w-[500px] h-[90vh] flex flex-col justify-between overflow-y-auto rounded-lg p-2 bg-slate-500 gap-4">
      {productListItems.length === 0 ? (
        <p className="text-white text-center ">Cart is empty</p>
      ) : (
        productListItems.map((item) => (
          <div key={item.id} className="bg-amber-500 w-full grid items-center rounded-lg p-2">
            <div className="flex justify-left gap-2 w-full font-bold border-b pb-2">
              <img src={item.img} alt="altText" className="w-[80px] h-[80px] rounded-lg" />
              <div className="grid">
                <h2>{item.title}</h2>
                <p className=''>{item.price}</p>
              </div>
            </div>

            <div className="flex w-full justify-between items-center mt-2">
              <div className="flex items-center">
                <button className="p-2 font-semibold rounded-lg cursor-pointer bg-blue-500 text-white"
                  onClick={() => updateQty(item.id, -1)} > - </button>
                <h2 className="text-[18px] font-bold p-2">
                  {item.qty < 10 ? `0${item.qty}` : item.qty}
                </h2>
                <button className="p-2 font-semibold rounded-lg cursor-pointer bg-blue-500 text-white"
                  onClick={() => updateQty(item.id, 1)} > + </button>
              </div>
              <button className="p-2 font-semibold rounded-lg cursor-pointer bg-red-600 text-white"
                onClick={() => removeBtn(item.id)} > Remove </button>
            </div>
          </div>
        ))
      )
      
      }

      <footer className='w-full rounded-lg p-2 bg-blue-800 text-white font-semibold sticky bottom-0 py-4'>
        {<div className='flex justify-between items-center'>
          <h2>Total bill: </h2>
          <h2>
             00
          </h2>
        </div>}
      </footer>
    </div>
  )
}

export default Cart

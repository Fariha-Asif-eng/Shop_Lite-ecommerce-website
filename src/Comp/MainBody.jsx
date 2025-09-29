import React from "react";
import ProBox from "./ProBox";

function MainBody({ addToCart, products }) {


  return (
    <div className="w-full min-h-[100vh] grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4 overflow-y-auto  ">
      {
        products.length > 0 ? (
          products.map((eachProduct)=>
          <ProBox
          key={eachProduct.id}
          {...eachProduct}
          onAdd={()=>addToCart(eachProduct)}
          />
          )
        )
        : "Nothing found to this search!"
      }
    </div>
  );
}

export default MainBody;

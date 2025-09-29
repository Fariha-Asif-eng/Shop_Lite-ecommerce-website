import React from 'react'
import ProBox from './ProBox';
import { Link } from 'react-router-dom';
import H2Styles from '../MiniParts/H2Styles';

function FeaturedPro({addToCart}) {
  const products = [
    { id: 1, title: "New luggage hand bag", price: 20, img: "/Images/bag.jpg", cate:'All' },
    { id: 2, title: "Quality polo/sports cap", price: 35, img: "/Images/cap.jpg", cate:'B' },
    { id: 3, title: "Table chairs set", price: 50, img: "/Images/chairs.jpg", cate:'D' },
    { id: 4, title: "Study table lamp", price: 20, img: "/Images/lamp.jpg", cate:'E' },
    { id: 5, title: "New arrived cloth", price: 35, img: "/Images/cloth.avif", cate:'F' },
    { id: 6, title: "Quality polo/sports cap", price: 35, img: "/Images/cap.jpg", cate:'B' },
  ];

  return (
    <section className='min-h-[60vh] w-full p-4 my-6 flex flex-col items-center '>
        <H2Styles h2Texts={'Our Featured Products!'}/>
     <div className=' w-full my-8 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4  gap-2 grid mx-auto '>
         {
        products.map((each)=>(
            <ProBox key={each.id}
            {...each} onAdd={()=>addToCart(each)} />
        ))
      }
     </div>
        <div className="text-center mt-12 w-full ">
            <Link
            to="/shop" 
            className="p-4 font-semibold cursor-pointer text-center text-white rounded-md bg-blue-800 hover:text-blue-800 duration-300 hover:bg-blue-100 transition-colors "
            >
            View All Products
            </Link>
        </div>
    </section>
  )
}

export default FeaturedPro
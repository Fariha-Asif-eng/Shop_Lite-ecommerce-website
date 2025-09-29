import React from 'react'
import MainBody from './MainBody'
import Logo from './Logo'
import { NavLink } from 'react-router-dom';
import myShop from '../assets/Myshop.mp4'
import Contact from './ContactForm';
import FeaturedQuality from './FeaturedQuality';
import FeaturedPro from './FeaturedPro';

function Hero({addToCart, products}) {
  return (
    <section className='w-full min-h-screen flex flex-col mb-16 top-18 relative overflow-hidden'>

      <div className='w-full mx-auto relative min-h-[80vh] my-4'>
        <video src={myShop} autoPlay loop muted 
          className='w-full h-full absolute top-0 left-0 rounded-md object-cover z-0 '
         />
        <div className='w-full min-h-[86vh] relative rounded-md p-4 bg-zinc-700/70 mx-auto flex flex-col items-center justify-center  z-10'>
          
        <h2 className='text-4xl text-white my-4'>Welcome to</h2>
        <NavLink to={'/'} className='w-[120px] cursor-pointer bg-transparent flex justify-center items-center'>
      <p className='text-6xl font-semibold bg-transparent text-[#fd366e]'> Shop </p> <span className='text-white  animate-bounce bg-transparent ml-[-52px] mb-6 text-2xl'>Lite</span>
    </NavLink>
    <p className='text-white mt-4 '>All you need are here, shop like your's.</p>
        </div>

      </div>

      <section className="my-8 text-center w-full border-y border-zinc-700 min-h-[60vh] py-12 px-6 ">
          <h2 className="text-2xl text-amber-200 font-semibold mb-4 border-b border-zinc-700 inline-block pb-2">
            About ShopLite:
          </h2>
          <p className="text-lg leading-relaxed ">
            ShopLite is a demo e-commerce project developed as part of our{" "}
            <span className="font-semibold">FullStack Development Course</span> under the guidance 
            of <span className="font-semibold">Sir SaifUllah Khan</span>. 
            This project was assigned to sharpen our skills in modern web technologies 
            such as React, Node.js, and databases while also learning to design 
            user-friendly shopping platforms.
          </p>
          <div className='my-8'>
            <h2 className="text-2xl text-amber-200 font-semibold mb-4 border-b border-zinc-700 inline-block pb-2">
            Why ShopLite?
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg  ">
            <li>
              <span className="font-semibold">Simplicity:</span> A clean and easy-to-use 
              shopping experience.
            </li>
            
            <li>
              <span className="font-semibold">Modern Tech Stack:</span> Powered by React, 
              Tailwind CSS, and backend technologies to mimic real-world apps.
            </li>
            <li>
              <span className="font-semibold">Guided by Expertise:</span> Developed under 
              the supervision of an experienced instructor.
            </li>
          </ul>
          </div>
          <div className='w-full mt-10 '>
            <NavLink to={'/about'} className={' w-[80%] bg-blue-800 hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200 rounded-md cursor-pointer p-4 text-white font-semibold'}
            >
              Read more
            </NavLink>
          </div>
        </section>
      
      <FeaturedPro addToCart={addToCart}/>
      <FeaturedQuality />
      <Contact/>
    </section>
  )
}

export default Hero

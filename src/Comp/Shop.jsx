import React from 'react'
import MainBody from './MainBody'
import Contact from './ContactForm'


function Shop({onAdd, products, seeDetails}) {


  return (

    <section
    className='w-full min-h-screen pt-14'>
      <MainBody addToCart={onAdd} products={products} seeDetailsBtn={seeDetails} />

      <MainBody addToCart={onAdd} products={products} />

      <Contact />
    

    </section>
  )
}

export default Shop

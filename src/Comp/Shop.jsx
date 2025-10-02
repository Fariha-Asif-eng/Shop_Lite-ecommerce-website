import React from 'react'
import MainBody from './MainBody'
import Contact from './ContactForm'

function Shop({onAdd, products, seeDetails}) {
  return (
    <section className='w-full min-h-screen relative my-24 top-0 left-0'>
      <MainBody addToCart={onAdd} products={products} seeDetailsBtn={seeDetails} />
      <Contact />
    </section>
  )
}

export default Shop


import React from 'react'
import MainBody from './MainBody'
import Contact from './ContactForm'
import { useTheme } from '../context/ThemeContext'

function Shop({onAdd, products, seeDetails}) {
  const { isDark } = useTheme();

  return (
    <section className={`w-full min-h-screen pt-14 transition-all duration-500 ${
      isDark 
        ? 'bg-gradient-to-b from-blue-950/60 via-blue-800/20 to-blue-700/25' 
        : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
    }`}>
      <MainBody addToCart={onAdd} products={products} seeDetailsBtn={seeDetails} isDark={isDark} />
      
      <Contact />
    </section>
  )
}

export default Shop
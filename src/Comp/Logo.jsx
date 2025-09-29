import React from 'react'
import { NavLink } from 'react-router-dom'

function Logo() {
  return (
    <NavLink to={'/'} className='w-[120px] cursor-pointer bg-transparent flex justify-center items-center'>
      <p className='text-2xl font-semibold bg-transparent text-[#fd366e]'>Shop</p> <span className='text-white  animate-bounce bg-transparent ml-[-32px] mb-2'>Lite</span>
    </NavLink>
  )
}

export default Logo

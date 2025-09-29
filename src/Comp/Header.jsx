import React from 'react'
import Logo from './Logo';
import CartButton from './CartButton';
import { NavLink } from 'react-router-dom';
import { BsFilterCircleFill } from 'react-icons/bs';
import { useAuth } from '../Auth/AuthContext';

function Header({ontoggle, btnText, searching, searchItems, currentItems, setCateButton}) {
    const { user, logout, isAuthenticated } = useAuth();
    
    const onChange = (a)=>{
      searchItems(a.target.value)
      console.log(searchItems);
    }

    const handleLogout = () => {
      logout();
      window.location.href = '/';
    }

  return (
    
      <header className="fixed top-0 w-full bg-zinc-900 shadow-md rounded-md py-2 px-4 flex items-center justify-between z-20">
        <Logo />
        <div className="flex flex-col gap-y-4">
        <div className="flex gap-12 rounded-lg px-4 text-white">
          <NavLink to={'/'} className="font-bold cursor-pointer bg-transparent">Home</NavLink >
          <NavLink to={'/about'} className="cursor-pointer bg-transparent">About</NavLink >
          <NavLink to={'/shop'} className="cursor-pointer bg-transparent">Shop</NavLink >
          
          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <NavLink to={'/profilepage'} className="cursor-pointer bg-transparent">
                👋 {user?.name}
              </NavLink>
              <button 
                onClick={handleLogout}
                className="cursor-pointer bg-transparent text-red-400 hover:text-red-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <NavLink to={'/login'} className="cursor-pointer bg-transparent">Login</NavLink>
              <NavLink to={'/signup'} className="cursor-pointer bg-transparent text-green-400">Sign Up</NavLink>
            </div>
          )}
        </div>

        <div className='flex justify-center mx-auto gap-2'>
          <button title='Apply filter'
          onClick={setCateButton}
          className='bg-zinc-200 px-2 py-[2px] rounded-md cursor-pointer' >
            <BsFilterCircleFill className='text-[#fd366e] text-3xl' />
          </button>

          <input
            value={searching}
            onChange={onChange}
            type="text" 
            className='rounded-md flex-1 bg-zinc-200 px-2 py-[2px] w-1/2 mx-auto outline-0' 
            placeholder='Search items' 
          />
        </div>
        </div>
        
        <CartButton currentItems={currentItems} btnText={btnText} onToggle={ontoggle} />
      </header>
   
  )
}

export default Header
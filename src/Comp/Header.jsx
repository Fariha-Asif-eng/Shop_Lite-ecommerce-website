
import React from 'react'
import Logo from './Logo';
import CartButton from './CartButton';
import { NavLink } from 'react-router-dom';
import { BsFillMenuButtonFill, BsFillMenuButtonWideFill, BsFilterCircleFill } from 'react-icons/bs';
import { useAuth } from '../Auth/AuthContext';
import { TfiMenuAlt } from 'react-icons/tfi';

function Header({ontoggle, btnText, searching, searchItems, currentItems, setCateButton, AccountOptBtn, mobileMenu}) {
    const { user, logout, isAuthenticated } = useAuth();
    
    const onChange = (a)=>{
      searchItems(a.target.value)
      console.log(searchItems);
    }

    // const handleLogout = () => {
    //   logout();
    //   window.location.href = '/';
    // }

  return (
    
      <header className="fixed top-0 w-full bg-gradient-to-r from-gray-900 to-gray-800 backdrop-blur-sm shadow-2xl border-b border-gray-700 py-3 px-6 flex items-center justify-between z-50">
        {/* Logo - Dark background pe clear dikhega */}
        <div className="flex-shrink-0">
          <Logo />
        </div>
        
        {/* Navigation Links - Light text on dark background */}
        <div className=" md:items-center gap-4 hidden md:flex">
          <NavLink 
            to={'/'} 
            className={({ isActive }) => 
              `font-semibold cursor-pointer transition-all duration-300 px-3 py-2 rounded-lg text-sm ${
                isActive 
                  ? 'text-white bg-blue-600 border border-blue-400 shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`
            }
          >
            Home
          </NavLink >
          <NavLink 
            to={'/about'} 
            className={({ isActive }) => 
              `font-semibold cursor-pointer transition-all duration-300 px-3 py-2 rounded-lg text-sm ${
                isActive 
                  ? 'text-white bg-purple-600 border border-purple-400 shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`
            }
          >
            About
          </NavLink >
          <NavLink 
            to={'/shop'} 
            className={({ isActive }) => 
              `font-semibold cursor-pointer transition-all duration-300 px-3 py-2 rounded-lg text-sm ${
                isActive 
                  ? 'text-white bg-pink-600 border border-pink-400 shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`
            }
          >
            Shop
          </NavLink >
          <NavLink 
            to={'/contactform'} 
            className={({ isActive }) => 
              `font-semibold cursor-pointer transition-all duration-300 px-3 py-2 rounded-lg text-sm ${
                isActive 
                  ? 'text-white bg-green-600 border border-green-400 shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`
            }
          >
            Contact
          </NavLink >
        </div>

        {/* Search Bar - Dark theme compatible */}
        <div className="flex items-center gap-2 flex-1 max-w-xs">
          <div className="relative flex-1">
            <input
              value={searching}
              onChange={onChange}
              type="text" 
              className='w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none text-white placeholder-gray-400 text-sm' 
              placeholder='🔍 Search...' 
            />
          </div>
          
          <button 
            title='Apply filter'
            onClick={setCateButton}
            className='bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex-shrink-0 border border-blue-400' 
          >
            <BsFilterCircleFill className='text-white text-base' />
          </button>
        </div>

        {/* User Auth & Cart - Right Side */}
        <div className="md:flex items-center gap-3 hidden mx-2">
          {/* Authentication */}
          
          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              <button onClick={AccountOptBtn} 
                // to={'/profilepage'} 
                className="flex items-center gap-1 cursor-pointer bg-gradient-to-r from-emerald-500 to-green-500 text-white px-3 py-2 rounded-lg hover:from-emerald-600 hover:to-green-600 transition-all duration-300 text-sm font-semibold border border-emerald-400 shadow-lg"
              >
                <span>👋</span>
                <span className="max-w-16 truncate">{user?.name}</span>
              </button>
              {/* <button 
                onClick={handleLogout}
                className="cursor-pointer bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-2 rounded-lg hover:from-red-600 hover:to-pink-600 transition-all duration-300 text-sm font-semibold border border-red-400 shadow-lg"
              >
                Logout
              </button> */}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              {/* <NavLink 
                to={'/login'} 
                className="cursor-pointer text-gray-300 hover:text-white font-semibold transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-gray-700 text-sm border border-gray-600"
              >
                Login
              </NavLink> */}
              <NavLink 
                to={'/login'} 
                className="cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 text-sm font-semibold border border-blue-400 shadow-lg"
              >
                Sign in
              </NavLink>
            </div>
          )
          }
          
          
        </div>
        {/* Cart Button */}
          <div className="ml-1">
            <CartButton currentItems={currentItems} btnText={btnText} onToggle={ontoggle} />
          </div>
          <button onClick={mobileMenu} className='md:hidden' >
            <TfiMenuAlt className='w-10 h-10 rounded-full fill-amber-50 bg-purple-700 p-[4px] cursor-pointer hover:bg-purple-500 transition-colors duration-200'/>
          </button>
      </header>
   
  )
}

export default Header
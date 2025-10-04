import React from 'react'
import Logo from './Logo';
import CartButton from './CartButton';
import { NavLink } from 'react-router-dom';
import { BsFilterCircleFill, BsMenuApp, BsMenuButton, BsMenuButtonFill, BsMenuButtonWide } from 'react-icons/bs';
import { useAuth } from '../Auth/AuthContext';
import { TfiMenuAlt } from 'react-icons/tfi';
import { AiOutlineMenu } from 'react-icons/ai';

function Header({ontoggle, btnText, searching, searchItems, currentItems, setCateButton, AccountOptBtn, mobileMenu, toggleDarkMode, darkMode}) {
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
              placeholder='🔍Search...' 
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
          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors duration-300 text-gray-300 hover:text-white border border-gray-600 cursor-pointer"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? (
              // Sun icon for light mode
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              // Moon icon for dark mode
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Authentication */}
          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              <button 
                onClick={AccountOptBtn} 
                className="flex items-center gap-1 cursor-pointer bg-gradient-to-r from-emerald-500 to-green-500 text-white px-3 py-2 rounded-lg hover:from-emerald-600 hover:to-green-600 transition-all duration-300 text-sm font-semibold border border-emerald-400 shadow-lg"
              >
                <span>👋</span>
                <span className="max-w-16 truncate">{user?.name}</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <NavLink 
                to={'/login'} 
                className="cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 text-sm font-semibold border border-blue-400 shadow-lg"
              >
                Login
              </NavLink>
            </div>
          )}
          
          {/* Cart Button */}
          <div className="ml-1">
            <CartButton currentItems={currentItems} btnText={btnText} onToggle={ontoggle} />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          {/* Dark Mode Toggle - Mobile */}
          <button
            onClick={toggleDarkMode}
            className="hidden lg:block p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors duration-300 text-gray-300 hover:text-white border border-gray-600"
            title={darkMode ? "Light Mode" : "Dark Mode"}
          >
            {darkMode ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Cart Button - Mobile */}
          <div className="ml-1">
            <CartButton currentItems={currentItems} btnText={btnText} onToggle={ontoggle} />
          </div>

          {/* Mobile Menu Button */}
          <button onClick={mobileMenu}>
            
            <AiOutlineMenu className='w-10 h-10 rounded-md fill-amber-50 bg-purple-700 p-[4px] cursor-pointer hover:bg-purple-500 transition-colors duration-200'/>
          </button>
        </div>
      </header>
   
  )
}

export default Header
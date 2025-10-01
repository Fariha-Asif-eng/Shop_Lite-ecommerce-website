import React from 'react'
import { NavLink } from 'react-router-dom'
import { logout } from '../Auth/Config'

function AccountOptions({ setOpts, toggleMode }) {
  return (
    <div className="max-w-[20%] min-h-[16%] fixed right-14 top-20 
                    bg-gradient-to-b from-amber-500 to-amber-800 
                    // dark:bg-gradient-to-b
                    // dark:from-gray-800 dark:to-gray-900 
                    flex flex-col z-20 text-left rounded-md p-4">
      
      <NavLink
        to={'/profilepage'}
        onClick={() => setOpts(false)}
        className="cursor-pointer transition-all duration-200 rounded-md 
                   hover:bg-gradient-to-l from-amber-800 to-amber-400 
                  //  dark:hover:from-gray-700 dark:hover:to-gray-500 
                   p-2 hover:text-white"
      >
        My Account 
      </NavLink>

      <button
        onClick={() => {
          toggleMode();
          // setOpts(false);
        }}
        className="cursor-pointer transition-all duration-200 rounded-md 
                   hover:bg-gradient-to-l from-amber-800 to-amber-400 
                  //  dark:hover:from-gray-700 dark:hover:to-gray-500 
                   p-2 hover:text-white"
      >
        Change Mode
      </button>

      <button
        onClick={() => { logout(); setOpts(false); }}
        className="cursor-pointer transition-all duration-200 rounded-md 
                   hover:bg-gradient-to-l from-amber-800 to-amber-400 
                  //  dark:hover:from-gray-700 dark:hover:to-gray-500 
                   p-2 hover:text-white"
      >
        Logout
      </button>
    </div>
  )
}

export default AccountOptions

import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../Auth/AuthContext'
import { RiProfileLine } from 'react-icons/ri';
import { MdAccountCircle } from 'react-icons/md';
function MobileMenu({setOpts, AccountOptBtn, toggleMode}) {
    const { user, logout, isAuthenticated } = useAuth();
        
        // const onChange = (a)=>{
        //   searchItems(a.target.value)
        //   console.log(searchItems);
        // }
        //Commits
  return (
    <div className='min-w-1/3 min-h-[100vh] md:hidden fixed top-0 left-0 rounded-md p-4 flex flex-col gap-y-2 z-90 bg-gradient-to-r from-amber-900 to-amber-400/50'>
        <div className="flex items-center gap-3">
           {/* Authentication */}
           
           {isAuthenticated ? (
             <div className="flex items-center gap-2 w-full">
               <NavLink  onClick={()=>setOpts(false)}
                 to={'/profilepage'} 
                 className="flex items-center gap-1 cursor-pointer bg-gradient-to-r from-emerald-500 to-green-500 text-white px-2 py-2 rounded-lg hover:from-emerald-600 hover:to-green-600 transition-all duration-300 text-sm font-semibold border border-emerald-400 shadow-lg"
               >
                 <MdAccountCircle className='w-[28px] h-[28px]'/>
                 <span >My Account</span>
               </NavLink>
               
             </div>
           ) : (
             <div className="flex items-center gap-2">
              
               <NavLink onClick={()=> setOpts(false)}
                 to={'/login'} 
                 className="cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 text-sm font-semibold border border-blue-400 shadow-lg"
               >
                 Sign in
               </NavLink>
             </div>
           )
           }
    </div>

      <NavLink onClick={()=>setOpts(false)}
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
          <NavLink onClick={()=>setOpts(false)}
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
          <NavLink onClick={()=>setOpts(false)}
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
          <NavLink onClick={()=>setOpts(false)}
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
          {
            isAuthenticated && (
                <button onClick={()=>{setOpts(false); logout()}}
            to={'/'} 
            className={
              `font-semibold cursor-pointer transition-all duration-300 px-3 py-2 rounded-lg text-sm 
                  text-white shadow-lg 
                   hover:text-white hover:bg-gray-700
              }`
            }
          >
            Logout
          </button >
            )
          }
          
  

    </div>
  )
}

export default MobileMenu

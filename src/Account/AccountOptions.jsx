import React from 'react'
import { NavLink } from 'react-router-dom'
// import { logout } from '../Auth/Config'
import { useAuth } from '../Auth/AuthContext'

function AccountOptions({ setOpts }) {
  let {logout} = useAuth()
  return (
    <div className="fixed right-4 top-16 bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-4 z-50 min-w-[200px] animate-fade-in">
      
      {/* Header */}
      <div className="border-b border-gray-200 pb-3 mb-3">
        <h3 className="font-bold text-gray-800 text-lg">Account Menu</h3>
      </div>
      
      {/* My Account Option */}
      <NavLink
        to={'/profilepage'}
        onClick={() => setOpts(false)}
        className="flex items-center space-x-3 cursor-pointer transition-all duration-300 rounded-xl p-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 group mb-2"
      >
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
          👤
        </div>
        <span className="font-semibold text-gray-700 group-hover:text-blue-600">My Account</span>
      </NavLink>

      {/* Logout Option */}
      <button
        onClick={() => { logout(); setOpts(false); }}
        className="flex items-center space-x-3 cursor-pointer transition-all duration-300 rounded-xl p-3 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 hover:text-red-600 group w-full text-left"
      >
        <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
          🚪
        </div>
        <span className="font-semibold text-gray-700 group-hover:text-red-600">Logout</span>
      </button>

      {/* Footer */}
      <div className="border-t border-gray-200 pt-3 mt-3">
        <p className="text-xs text-gray-500 text-center">ShopLite Account</p>
      </div>
    </div>
  )
}

export default AccountOptions
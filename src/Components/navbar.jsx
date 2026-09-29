import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiShoppingCart, FiUser, FiMenu, FiX } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Cart Context
  const cartContext = useCart ? useCart() : null;
  const cartItems = cartContext?.cartItems || [];
  const totalItems = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);

  // Auth Context
  const authContext = useAuth ? useAuth() : null;
  const user = authContext?.user;

  return (
    <nav className="bg-[#fdf8f4] border-b border-[#f4e4d7] w-full sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" onClick={() => setIsOpen(false)} className="text-xl font-bold flex items-center gap-2">
          <span className="text-2xl">☕</span>
          <span className="text-[#e07a5f]">Asmaa</span>
          <span className="text-[#4a2a21]">Coffee Shop</span>
        </Link>

        {/* Navigation Links Desktop */}
        <div className="hidden md:flex items-center gap-8 font-semibold text-[#4a2a21]">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "text-[#e07a5f]" : "hover:text-[#e07a5f] transition-colors"}
          >
            Home
          </NavLink>
          
          <NavLink 
            to="/menu" 
            className={({ isActive }) => isActive ? "text-[#e07a5f]" : "hover:text-[#e07a5f] transition-colors"}
          >
            Menu
          </NavLink>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-5">
          
          {/* Cart Icon */}
          <Link to="/cart" className="relative p-1 text-[#4a2a21] hover:text-[#e07a5f] transition-colors">
            <FiShoppingCart size={24} />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-[#e07a5f] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Profile Circle Logo / Sign In Button */}
          {user ? (
            <Link to="/profile" className="block">
              {user.avatar || user.profileImage ? (
                <img 
                  src={user.avatar || user.profileImage} 
                  alt="Profile" 
                  className="w-9 h-9 rounded-full object-cover border-2 border-[#e07a5f] shadow-sm hover:scale-105 transition-transform"
                />
              ) : (
                <div className="w-9 h-9 rounded-full bg-[#e07a5f] text-white font-black text-sm flex items-center justify-center border-2 border-white shadow-sm hover:scale-105 transition-transform">
                  {user.name ? user.name[0].toUpperCase() : "A"}
                </div>
              )}
            </Link>
          ) : (
            <Link 
              to="/signup" 
              className="flex items-center gap-1.5 px-4 py-1.5 bg-[#e07a5f] text-white text-sm font-semibold rounded-xl hover:bg-[#c8654b] transition-colors shadow-sm"
            >
              <FiUser size={16} />
              <span>Sign Up</span>
            </Link>
          )}

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#4a2a21] p-1 focus:outline-none"
          >
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#fdf8f4] border-t border-[#f4e4d7] px-6 py-4 space-y-3 font-semibold text-[#4a2a21]">
          <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-[#e07a5f]">Home</Link>
          <Link to="/menu" onClick={() => setIsOpen(false)} className="block hover:text-[#e07a5f]">Menu</Link>
          {!user && (
            <Link to="/signup" onClick={() => setIsOpen(false)} className="block text-[#e07a5f]">Sign Up</Link>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import { FiCoffee, FiHome, FiArrowLeft } from 'react-icons/fi';

function NotFound() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center text-center p-6 bg-[#fcf8f5]">
      
      {/* Coffee Icon */}
      <div className="bg-[#f4ece6] p-6 rounded-full mb-6 shadow-md border border-[#e8d8ce]">
        <FiCoffee className="text-6xl text-[#6f4e37] animate-bounce" />
      </div>

      {/* 404 Title */}
      <h1 className="text-7xl font-extrabold text-[#3d2314] tracking-wider mb-2">
        404
      </h1>

      {/* Subtitle */}
      <h2 className="text-2xl font-bold text-[#6f4e37] mb-3">
        Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-600 max-w-md mb-8 leading-relaxed">
        Oops! The page or coffee you are looking for does not exist. Please head back to our menu to order.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-xs sm:max-w-none">
        
        {/* Back to Menu Button */}
        <Link
          to="/menu"
          className="w-full sm:w-auto px-6 py-3 bg-[#d9531e] hover:bg-[#b84315] text-white font-semibold rounded-xl shadow-md transition-all duration-200 flex items-center justify-center gap-2"
        >
          <FiArrowLeft /> Back to Menu
        </Link>

        {/* Back to Home Button */}
        <Link
          to="/"
          className="w-full sm:w-auto px-6 py-3 bg-[#6f4e37] hover:bg-[#533824] text-white font-semibold rounded-xl shadow-md transition-all duration-200 flex items-center justify-center gap-2"
        >
          <FiHome size={18} /> Back to Home
        </Link>

      </div>

    </div>
  );
}

export default NotFound;
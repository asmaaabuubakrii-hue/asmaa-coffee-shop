import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero.jpeg'; // .jpeg ta'uun isaa sirraa'eera

export default function Hero() {
  return (
    <section className="bg-[#fdf8f4] py-16 px-8 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
      {/* Bitaa: Text & Buttons */}
      <div className="md:w-1/2 space-y-6">
        <span className="px-4 py-1.5 bg-[#e07a5f] text-white text-xs font-bold rounded-full inline-block shadow-sm">
          Fresh, Fast Order
        </span>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#4a2a21] leading-tight">
          Fresh coffee from <br />
          <span className="text-[#e07a5f]">Asmaa</span> coffee shop
        </h1>

        <p className="text-[#8c6d62] text-base">
          Order your favorite coffee and snacks online.
        </p>

        <div className="flex gap-4 pt-2">
          <Link 
            to="/menu" 
            className="px-6 py-3 bg-[#e07a5f] text-white font-bold rounded-full hover:bg-[#c8654b] transition-colors shadow"
          >
            Explore Menu
          </Link>
          <Link 
            to="/cart" 
            className="px-6 py-3 border border-[#f4e4d7] text-[#4a2a21] font-bold rounded-full hover:bg-[#f4e4d7] transition-colors"
          >
            View Cart
          </Link>
        </div>
      </div>

      {/* Mirga: Local Asset Image (hero.jpeg) with Blend multiply */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img 
          src={heroImg} 
          alt="Asmaa Coffee Shop Hero" 
          className="w-full max-w-md object-contain mix-blend-multiply"
        />
      </div>
    </section>
  );
}
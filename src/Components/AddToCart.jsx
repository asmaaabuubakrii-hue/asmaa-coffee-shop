import React from 'react';
import { useCart } from '../context/CartContext.jsx';

function AddToCart({ product }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="px-3 py-1.5 bg-[#e07a5f] text-white text-xs rounded-full font-medium hover:bg-[#c86349] transition-colors"
    >
      Add to cart
    </button>
  );
}

export default AddToCart;
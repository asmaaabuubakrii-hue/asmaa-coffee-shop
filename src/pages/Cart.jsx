import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useCart()
  const total = cartItems.reduce((acc, i) => acc + Number(i.price || 0) * (i.quantity || 1), 0)
  const totalItems = cartItems.reduce((acc, i) => acc + (i.quantity || 1), 0)

  return (
    <div className="bg-[#fdf8f4] min-h-[70vh] py-10">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-[#e07a5f] mb-6">Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-3xl border border-[#f4e4d7] shadow-sm">
            <p className="text-gray-500 font-medium text-lg mb-4">Cart keessan duwwaa dha.</p>
            <Link to="/menu" className="py-2.5 px-6 bg-[#e07a5f] text-white font-bold rounded-xl inline-block hover:bg-[#c8654b] transition-colors">
              Gara Menu Deebi'i
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Item List Section */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item, index) => (
                <div key={item.id || index} className="flex items-center justify-between border border-[#f4e4d7] p-4 rounded-2xl bg-white shadow-sm">
                  <div className="flex items-center gap-4">
                    <img src={item.image} alt={item.title || item.name} className="w-16 h-16 object-cover rounded-xl" />
                    <div>
                      <h3 className="font-bold text-[#4a2a21] text-lg">{item.title || item.name}</h3>
                      <p className="text-gray-500 text-xs">{item.description}</p>
                      <p className="text-[#e07a5f] font-bold mt-1">${item.price}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button onClick={() => decreaseQuantity(item.id)} className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg text-lg font-bold hover:bg-gray-200">-</button>
                    <span className="font-semibold">{item.quantity || 1}</span>
                    <button onClick={() => increaseQuantity(item.id)} className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg text-lg font-bold hover:bg-gray-200">+</button>
                    <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-sm ml-2 font-medium hover:underline">Remove</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary Section */}
            <div className="border border-[#f4e4d7] p-6 rounded-3xl bg-white shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-[#4a2a21]">Order Summary</h2>
              
              <div className="space-y-2 text-gray-600 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal ({totalItems} Items)</span>
                  <span className="font-bold text-gray-800">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-bold text-green-600">Free</span>
                </div>
              </div>

              <hr className="border-gray-200 my-2" />

              <div className="flex justify-between font-bold text-lg text-[#4a2a21]">
                <span>Total</span>
                <span className="text-[#e07a5f]">${total.toFixed(2)}</span>
              </div>

              {/* Proceed to Checkout Button */}
              <Link 
                to="/checkout" 
                className="w-full block text-center py-3 bg-[#e07a5f] text-white font-bold rounded-xl hover:bg-[#c8654b] transition-colors shadow-sm mt-4"
              >
                Proceed to Checkout
              </Link>

              {/* Continue Shopping Button */}
              <Link 
                to="/menu" 
                className="w-full block text-center py-3 bg-[#fbebe6] text-[#e07a5f] font-bold rounded-xl hover:bg-[#f8ded6] transition-colors"
              >
                Continue Shopping
              </Link>
            </div>

          </div>
        )}
      </div>
    </div>
  )
}
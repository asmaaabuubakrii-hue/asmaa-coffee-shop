import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Checkout() {
  const { cartItems } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Form State React qofaatiin
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('+966592523149');

  // Calculation (Subtotal, Tax 15%, Total)
  const subtotal = cartItems.reduce((acc, i) => acc + Number(i.price || 0) * (i.quantity || 1), 0);
  const shipping = 0;
  const tax = subtotal * 0.15; // Tax 15%
  const total = subtotal + shipping + tax;

  // Form Submission & Validation Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // React State Validation
    if (!fullName.trim()) {
      setErrorMsg('Maaloo Maqaa keessan guutuu galchaa!');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      setErrorMsg('Maaloo teessoo Email sirrii ta\'e galchaa!');
      return;
    }

    // Success
    setErrorMsg('');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] bg-[#fdf8f4] flex items-center justify-center p-6 text-center">
        <div className="bg-white p-8 rounded-3xl border border-[#e07a5f] shadow-lg max-w-md w-full">
          <h2 className="text-3xl font-extrabold text-[#e07a5f] mb-4">Thank You! 🎉</h2>
          <p className="text-[#4a2a21] mb-6">Your order has been placed successfully.</p>
          <Link to="/" className="py-3 px-6 bg-[#e07a5f] text-white font-bold rounded-xl block hover:bg-[#c8654b] transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#fdf8f4] min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Bitaa: Shipping Details Form */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Item List Summary */}
          <div className="bg-white p-6 rounded-2xl border border-[#f4e4d7] shadow-sm space-y-4">
            {cartItems.map((item, index) => (
              <div key={item.id || index} className="flex items-center justify-between border-b border-[#f4e4d7] pb-4 last:border-b-0 last:pb-0">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name || item.title} className="w-14 h-14 object-cover rounded-xl" />
                  <div>
                    <h4 className="font-bold text-[#4a2a21]">{item.name || item.title}</h4>
                    <p className="text-sm text-[#8c6d62]">${item.price} x {item.quantity || 1}</p>
                  </div>
                </div>
                <span className="font-bold text-[#e07a5f]">${(Number(item.price) * (item.quantity || 1)).toFixed(2)}</span>
              </div>
            ))}
          </div>

          {/* Form inputs - Shipping Details */}
          <form id="checkout-form" onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl border border-[#f4e4d7] shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-[#e07a5f] flex items-center gap-2">
              📍 Shipping Details
            </h2>

            {/* Error Message Display */}
            {errorMsg && (
              <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-xl text-sm font-semibold">
                ⚠️ {errorMsg}
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-[#4a2a21] mb-1">Full Name</label>
              <input 
                type="text" 
                required 
                value={fullName}
                onChange={(e) => { setFullName(e.target.value); setErrorMsg(''); }}
                placeholder="Full Name" 
                className="w-full p-3 border border-[#f4e4d7] rounded-xl focus:outline-none focus:border-[#e07a5f] bg-[#fdf8f4] text-[#4a2a21] placeholder-[#b0968b]" 
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#4a2a21] mb-1">Shipping Address</label>
              <textarea 
                required 
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="123 Main Street, City, State 12345" 
                className="w-full p-3 border border-[#f4e4d7] rounded-xl focus:outline-none focus:border-[#e07a5f] bg-[#fdf8f4] text-[#4a2a21] placeholder-[#b0968b]"
                rows="3"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#4a2a21] mb-1">Email</label>
              <input 
                type="email" 
                required 
                value={email}
                onChange={(e) => { setEmail(e.target.value); setErrorMsg(''); }}
                placeholder="Email Address" 
                className="w-full p-3 border border-[#f4e4d7] rounded-xl focus:outline-none focus:border-[#e07a5f] bg-[#fdf8f4] text-[#4a2a21] placeholder-[#b0968b]" 
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#4a2a21] mb-1">Phone Number</label>
              <input 
                type="tel" 
                required 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+966592523149" 
                className="w-full p-3 border border-[#f4e4d7] rounded-xl focus:outline-none focus:border-[#e07a5f] bg-[#fdf8f4] text-[#4a2a21] placeholder-[#b0968b]" 
              />
            </div>
          </form>

        </div>

        {/* Mirga: Order Summary */}
        <div className="bg-white p-6 rounded-2xl border border-[#f4e4d7] shadow-sm space-y-4 h-fit">
          <h2 className="text-xl font-bold text-[#e07a5f]">Order Summary</h2>
          
          <div className="space-y-2 text-sm text-[#8c6d62]">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-semibold text-[#4a2a21]">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="font-semibold text-[#e07a5f]">Free</span>
            </div>
            <div className="flex justify-between">
              <span>Tax (15%)</span>
              <span className="font-semibold text-[#4a2a21]">${tax.toFixed(2)}</span>
            </div>
          </div>

          <hr className="border-[#f4e4d7]" />

          <div className="flex justify-between font-bold text-lg text-[#4a2a21]">
            <span>Total</span>
            <span className="text-[#e07a5f]">${total.toFixed(2)}</span>
          </div>

          <button 
            type="submit" 
            form="checkout-form"
            className="w-full py-3 bg-[#e07a5f] text-white font-bold rounded-xl hover:bg-[#c8654b] transition-colors shadow-sm"
          >
            Place Order
          </button>

          <Link 
            to="/cart" 
            className="w-full block text-center py-2.5 text-[#4a2a21] font-semibold hover:text-[#e07a5f] transition-colors"
          >
            Continue Shopping
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Checkout; 
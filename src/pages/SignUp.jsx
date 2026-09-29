import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';

function SignUp() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.password) {
      setError('Maaloo odeeffannoo guutuu galchaa!');
      return;
    }

    if (!formData.email.includes('@')) {
      setError('Maaloo Email sirrii galchaa!');
      return;
    }

    setError('');
    alert('Account created successfully! 🎉');
    navigate('/signin');
  };

  return (
    <div className="min-h-[75vh] bg-[#fdf8f4] flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-3xl border border-[#f4e4d7] shadow-md max-w-md w-full space-y-6">
        
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#e07a5f]">Create Account ☕</h2>
          <p className="text-[#8c6d62] text-sm mt-1">Join Asmaa Coffee Shop today!</p>
        </div>

        {error && (
          <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-xl text-sm font-semibold text-center">
            ⚠️ {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-[#4a2a21] mb-1">Full Name</label>
            <input 
              type="text" 
              name="fullName"
              value={formData.fullName} 
              onChange={handleChange} 
              placeholder="Asmaa Abuu Bakrii"
              className="w-full p-3 border border-[#f4e4d7] rounded-xl focus:outline-none focus:border-[#e07a5f] bg-[#fdf8f4] text-[#4a2a21] placeholder-[#b0968b]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#4a2a21] mb-1">Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email} 
              onChange={handleChange} 
              placeholder="asmaa@gmail.com"
              className="w-full p-3 border border-[#f4e4d7] rounded-xl focus:outline-none focus:border-[#e07a5f] bg-[#fdf8f4] text-[#4a2a21] placeholder-[#b0968b]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#4a2a21] mb-1">Password</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                name="password"
                value={formData.password} 
                onChange={handleChange} 
                placeholder="••••••••"
                className="w-full p-3 border border-[#f4e4d7] rounded-xl focus:outline-none focus:border-[#e07a5f] bg-[#fdf8f4] text-[#4a2a21] placeholder-[#b0968b] pr-10"
                required
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 text-[#8c6d62] hover:text-[#e07a5f]"
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full py-3 bg-[#e07a5f] text-white font-bold rounded-xl hover:bg-[#c8654b] transition-colors shadow-sm mt-2"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-[#8c6d62]">
          Already have an account? <Link to="/signin" className="text-[#e07a5f] font-bold hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
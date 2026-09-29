import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const { signin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    const res = signin(email, password);

    if (res.success) {
      navigate(from, { replace: true });
    } else {
      setErrorMsg(res.error || 'Sign in failed');
    }
  };

  return (
    <div className="min-h-[80vh] bg-[#fdf8f4] flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-3xl border border-[#f4e4d7] shadow-lg max-w-md w-full space-y-6">
        
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold text-[#e07a5f]">Sign In ☕</h2>
          <p className="text-sm text-[#8c6d62]">Welcome back to Asmaa Coffee Shop!</p>
        </div>

        {errorMsg && (
          <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-xl text-sm text-center font-medium">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-[#4a2a21] mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full p-3 border border-[#f4e4d7] rounded-xl focus:outline-none focus:border-[#e07a5f] bg-[#fdf8f4] text-[#4a2a21]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#4a2a21] mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-3 border border-[#f4e4d7] rounded-xl focus:outline-none focus:border-[#e07a5f] bg-[#fdf8f4] text-[#4a2a21]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#e07a5f] text-white font-bold rounded-xl hover:bg-[#c8654b] transition-colors shadow-sm"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-[#8c6d62]">
          Don't have an account?{' '}
          <Link to="/signup" className="text-[#e07a5f] font-bold hover:underline">
            Sign Up
          </Link>
        </p>

      </div>
    </div>
  );
}
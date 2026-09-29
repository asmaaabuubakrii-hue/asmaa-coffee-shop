import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FiMail, FiPhone, FiMapPin, FiEdit2, FiLogOut, FiUser } from 'react-icons/fi';

export default function Profile() {
  const { user, handleSignOut, updateProfile } = useAuth ? useAuth() : { user: null, handleSignOut: () => {}, updateProfile: () => {} };
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("Profile updated successfully!");

  const [formData, setFormData] = useState({
    name: user?.name || "Asmaa Abuu Bakrii",
    email: user?.email || "asmaaabuubakrii@gmail.com",
    phone: user?.phone || "00966592523149",
    address: user?.address || "Saudii Arabia",
    bio: user?.bio || "Im Asmaa",
    profileImage: user?.profileImage || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (updateProfile) updateProfile(formData);
    setIsEditing(false);
    setMessage("Profile updated successfully!");
  };

  const logOut = () => {
    if (handleSignOut) handleSignOut();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#fdf8f4] py-10 px-4 flex flex-col items-center">
      {/* Title */}
      <h1 className="text-3xl font-extrabold text-[#e07a5f] mb-6">
        My Profile
      </h1>

      {/* Main Profile Card */}
      <div className="w-full max-w-lg bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-center">
        
        {/* Profile Image */}
        <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 border-2 border-gray-300 mb-4 flex items-center justify-center">
          {formData.profileImage ? (
            <img 
              src={formData.profileImage} 
              alt="Asmaa Profile" 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-[#4a2a21] text-white flex items-center justify-center text-2xl font-bold">
              A
            </div>
          )}
        </div>

        {/* User Name & Email Header */}
        <h2 className="text-xl font-bold text-gray-800 text-center">
          {formData.name}
        </h2>
        <p className="text-sm text-gray-500 mb-4 text-center">
          {formData.email}
        </p>

        {/* Status / Alert Message */}
        {message && (
          <p className="text-xs font-semibold text-gray-600 mb-6 bg-gray-50 px-3 py-1 rounded">
            {message}
          </p>
        )}

        {/* Info List or Edit Form */}
        {!isEditing ? (
          <div className="w-full space-y-3 text-left text-sm text-gray-700 mb-6">
            <div className="flex items-center gap-3">
              <FiMail className="text-[#e07a5f]" size={16} />
              <span>{formData.email}</span>
            </div>

            <div className="flex items-center gap-3">
              <FiPhone className="text-[#e07a5f]" size={16} />
              <span>{formData.phone}</span>
            </div>

            <div className="flex items-center gap-3">
              <FiMapPin className="text-[#e07a5f]" size={16} />
              <span>{formData.address}</span>
            </div>

            <div className="pt-2">
              <p className="font-bold text-gray-800 text-xs">Bio</p>
              <p className="text-gray-600">{formData.bio}</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full space-y-3 text-sm mb-6">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#e07a5f]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Phone</label>
              <input 
                type="text" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#e07a5f]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Address</label>
              <input 
                type="text" 
                name="address" 
                value={formData.address} 
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#e07a5f]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Bio</label>
              <input 
                type="text" 
                name="bio" 
                value={formData.bio} 
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#e07a5f]"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors"
            >
              Save Changes
            </button>
          </form>
        )}

        {/* Buttons */}
        <div className="w-full space-y-3">
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="w-full py-2.5 bg-[#c84327] hover:bg-[#b0371e] text-white font-semibold rounded-lg text-sm flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <FiEdit2 size={16} /> Edit Profile
            </button>
          )}

          <button
            onClick={logOut}
            className="w-full py-2.5 border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold rounded-lg text-sm flex items-center justify-center gap-2 transition-colors"
          >
            <FiLogOut size={16} /> Log Out
          </button>
        </div>

      </div>
    </div>
  );
}
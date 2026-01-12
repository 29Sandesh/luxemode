import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useStore();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.password) {
      login();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface-light dark:bg-black p-8 relative">
      {/* Navigation */}
      <nav className="flex justify-between items-center mb-12">
        <button 
            onClick={() => navigate(-1)} 
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors text-[#1b0d12] dark:text-white"
        >
            <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
            Back
        </button>
        <button 
            onClick={() => navigate('/login')}
            className="text-xs font-bold uppercase tracking-widest text-primary border-b border-primary pb-0.5 hover:opacity-70 transition-opacity"
        >
            Sign In
        </button>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
        {/* Typographic Header */}
        <div className="mb-16">
            <span className="block text-primary font-bold tracking-[0.2em] text-xs mb-2 ml-1">START YOUR JOURNEY</span>
            <h1 className="text-7xl font-black text-[#1b0d12] dark:text-white leading-[0.8] tracking-tighter">
                BE<br/>BOLD.
            </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSignup} className="flex flex-col gap-10">
            <div className="space-y-8">
                <div className="group">
                    <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-gray-300 dark:border-gray-800 py-3 text-xl font-medium text-[#1b0d12] dark:text-white focus:border-primary focus:border-b-2 outline-none transition-all placeholder:text-gray-300 dark:placeholder:text-gray-700"
                        placeholder="Name"
                        required
                    />
                </div>
                <div className="group">
                    <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-gray-300 dark:border-gray-800 py-3 text-xl font-medium text-[#1b0d12] dark:text-white focus:border-primary focus:border-b-2 outline-none transition-all placeholder:text-gray-300 dark:placeholder:text-gray-700"
                        placeholder="Email"
                        required
                    />
                </div>
                <div className="group">
                    <input 
                        type="password" 
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-gray-300 dark:border-gray-800 py-3 text-xl font-medium text-[#1b0d12] dark:text-white focus:border-primary focus:border-b-2 outline-none transition-all placeholder:text-gray-300 dark:placeholder:text-gray-700"
                        placeholder="Password"
                        required
                    />
                </div>
            </div>

            <div className="flex items-center gap-3">
                 <input type="checkbox" id="terms" required className="accent-black dark:accent-white size-4 cursor-pointer" />
                 <label htmlFor="terms" className="text-xs font-medium text-gray-500 uppercase tracking-wide cursor-pointer">
                    I agree to Terms & Privacy
                 </label>
            </div>

            <button type="submit" className="group mt-4 w-full bg-[#1b0d12] dark:bg-white text-white dark:text-[#1b0d12] py-5 px-6 flex items-center justify-between hover:bg-primary dark:hover:bg-gray-200 transition-colors shadow-2xl">
                <span className="text-sm font-bold uppercase tracking-[0.15em]">Create Account</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">east</span>
            </button>
        </form>

        {/* Minimal Socials */}
        <div className="mt-12 flex justify-center gap-6 opacity-60 hover:opacity-100 transition-opacity">
            <button className="p-2 border border-gray-200 dark:border-gray-800 rounded-full hover:bg-gray-50 dark:hover:bg-white/10 transition-colors">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="size-5 grayscale hover:grayscale-0 transition-all" alt="Google" />
            </button>
            <button className="p-2 border border-gray-200 dark:border-gray-800 rounded-full hover:bg-gray-50 dark:hover:bg-white/10 transition-colors">
                <img src="https://www.svgrepo.com/show/475638/apple-color.svg" className="size-5 dark:invert" alt="Apple" />
            </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
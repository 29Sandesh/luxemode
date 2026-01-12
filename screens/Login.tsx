import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
        login();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface-light dark:bg-black p-8 relative">
       {/* Navigation */}
      <nav className="flex justify-end items-center mb-12">
        <button 
            onClick={() => navigate('/signup')}
            className="text-xs font-bold uppercase tracking-widest text-primary border-b border-primary pb-0.5 hover:opacity-70 transition-opacity"
        >
            Sign Up
        </button>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full -mt-10">
        {/* Typographic Header */}
        <div className="mb-16">
            <span className="block text-primary font-bold tracking-[0.2em] text-xs mb-2 ml-1">WELCOME BACK</span>
            <h1 className="text-7xl font-black text-[#1b0d12] dark:text-white leading-[0.8] tracking-tighter">
                LOG<br/>IN.
            </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-10">
            <div className="space-y-8">
                <div className="group">
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-transparent border-b border-gray-300 dark:border-gray-800 py-3 text-xl font-medium text-[#1b0d12] dark:text-white focus:border-primary focus:border-b-2 outline-none transition-all placeholder:text-gray-300 dark:placeholder:text-gray-700"
                        placeholder="Email"
                        required
                    />
                </div>
                <div className="group">
                    <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-transparent border-b border-gray-300 dark:border-gray-800 py-3 text-xl font-medium text-[#1b0d12] dark:text-white focus:border-primary focus:border-b-2 outline-none transition-all placeholder:text-gray-300 dark:placeholder:text-gray-700"
                        placeholder="Password"
                        required
                    />
                </div>
            </div>

            <div className="flex justify-end">
                <button type="button" className="text-xs font-medium text-gray-500 uppercase tracking-wide hover:text-primary transition-colors">
                    Forgot Password?
                </button>
            </div>

            <button type="submit" className="group mt-2 w-full bg-[#1b0d12] dark:bg-white text-white dark:text-[#1b0d12] py-5 px-6 flex items-center justify-between hover:bg-primary dark:hover:bg-gray-200 transition-colors shadow-2xl">
                <span className="text-sm font-bold uppercase tracking-[0.15em]">Sign In</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">east</span>
            </button>
        </form>

        {/* Minimal Socials */}
        <div className="mt-12 flex justify-center gap-6 opacity-60 hover:opacity-100 transition-opacity">
            <button type="button" className="p-2 border border-gray-200 dark:border-gray-800 rounded-full hover:bg-gray-50 dark:hover:bg-white/10 transition-colors">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="size-5 grayscale hover:grayscale-0 transition-all" alt="Google" />
            </button>
            <button type="button" className="p-2 border border-gray-200 dark:border-gray-800 rounded-full hover:bg-gray-50 dark:hover:bg-white/10 transition-colors">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" className="size-5 dark:invert" alt="Apple" />
            </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
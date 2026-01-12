import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ChangePassword: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      navigate(-1);
    }, 1000);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col text-[#1b0d12] dark:text-white">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-800">
        <button onClick={() => navigate(-1)} className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors active:scale-90">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h1 className="text-lg font-bold tracking-tight">Change Password</h1>
        <div className="size-10"></div>
      </div>

      <div className="p-6 flex-1">
        <p className="text-sm text-gray-500 mb-8 leading-relaxed">
            Your new password must be different from previous used passwords and must contain at least 8 characters.
        </p>

        <form onSubmit={handleSubmit} className="w-full space-y-5">
            <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Current Password</label>
                <div className="relative">
                    <input 
                        type="password" 
                        className="w-full bg-white dark:bg-white/5 border border-transparent focus:border-primary/50 rounded-xl px-4 py-3.5 outline-none font-medium transition-colors"
                        placeholder="••••••••"
                        required
                    />
                     <span className="absolute right-4 top-3.5 text-gray-400 material-symbols-outlined text-[20px]">visibility_off</span>
                </div>
            </div>
             <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">New Password</label>
                <div className="relative">
                    <input 
                        type="password" 
                        className="w-full bg-white dark:bg-white/5 border border-transparent focus:border-primary/50 rounded-xl px-4 py-3.5 outline-none font-medium transition-colors"
                        placeholder="••••••••"
                        required
                    />
                    <span className="absolute right-4 top-3.5 text-gray-400 material-symbols-outlined text-[20px]">visibility_off</span>
                </div>
            </div>
            <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Confirm New Password</label>
                <div className="relative">
                    <input 
                        type="password" 
                        className="w-full bg-white dark:bg-white/5 border border-transparent focus:border-primary/50 rounded-xl px-4 py-3.5 outline-none font-medium transition-colors"
                        placeholder="••••••••"
                        required
                    />
                    <span className="absolute right-4 top-3.5 text-gray-400 material-symbols-outlined text-[20px]">visibility_off</span>
                </div>
            </div>

            <div className="pt-6">
                <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-[#1b0d12] dark:bg-white text-white dark:text-[#1b0d12] font-bold py-4 rounded-xl shadow-lg hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                    {loading ? (
                        <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                        <span>Update Password</span>
                    )}
                </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
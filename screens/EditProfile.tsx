import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditProfile: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: 'Jordan',
    lastName: 'Smith',
    email: 'j.smith@fashion.com',
    phone: '+1 (555) 123-4567'
  });

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
        <h1 className="text-lg font-bold tracking-tight">Edit Profile</h1>
        <div className="size-10"></div>
      </div>

      <div className="p-6 flex-1 flex flex-col items-center">
        {/* Avatar Upload */}
        <div className="relative mb-8">
             <div className="bg-center bg-no-repeat bg-cover rounded-full size-28 border-4 border-white dark:border-white/10 shadow-lg" 
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAgCLxsItyxNBqpk_DpmH-8tJpNSV-gKa64zvIsACj7mORRzuKa1Uu5892FfWigDciRkglFyU14OXxOLJX7CMnHzj8M9tfRQCBTafgYi4v85t7g72YX2OCkx2Ts6Tpj2wZ4jrQr3pi6tOe6bpDlQEXOoyL_1DIdC3tqGQPW6Uq57mUeuiqKAdYTrsG5PuEpz-GL5zQmHyhYr-hIR9sFqRCVUrZDUxQ9go0lsh7kPpQHGLzL3YWNWOTxoBAr96HoE3gx0QkI7dQaZRlF")' }}>
             </div>
             <button className="absolute bottom-0 right-0 bg-primary text-white rounded-full p-2.5 border-4 border-white dark:border-background-dark shadow-sm hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[18px]">camera_alt</span>
             </button>
        </div>

        <form onSubmit={handleSubmit} className="w-full space-y-5">
            <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">First Name</label>
                <input 
                    type="text" 
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="w-full bg-white dark:bg-white/5 border border-transparent focus:border-primary/50 rounded-xl px-4 py-3.5 outline-none font-medium transition-colors"
                />
            </div>
             <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Last Name</label>
                <input 
                    type="text" 
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="w-full bg-white dark:bg-white/5 border border-transparent focus:border-primary/50 rounded-xl px-4 py-3.5 outline-none font-medium transition-colors"
                />
            </div>
            <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Email Address</label>
                <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white dark:bg-white/5 border border-transparent focus:border-primary/50 rounded-xl px-4 py-3.5 outline-none font-medium transition-colors"
                />
            </div>
            <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Phone Number</label>
                <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-white dark:bg-white/5 border border-transparent focus:border-primary/50 rounded-xl px-4 py-3.5 outline-none font-medium transition-colors"
                />
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
                        <span>Save Changes</span>
                    )}
                </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
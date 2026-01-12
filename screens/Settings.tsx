import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

const Settings: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useStore();
  const [notifications, setNotifications] = useState(true);

  const handleBack = () => {
    // Check if we have history to go back to. 
    // If location.key is "default", it means this is the first page in the stack (e.g. refresh).
    if (location.key !== 'default') {
        navigate(-1);
    } else {
        // Fallback to account page
        navigate('/account');
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col text-[#1b0d12] dark:text-white">
      <div className="sticky top-0 z-20 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-800">
        <button onClick={handleBack} className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors active:scale-90">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h1 className="text-lg font-bold tracking-tight">Settings</h1>
        <div className="size-10"></div>
      </div>

      <div className="p-4 space-y-6">
        <section>
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 ml-2">General</h3>
            <div className="bg-white dark:bg-white/5 rounded-xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => navigate('/settings/edit-profile')}
                  className="w-full flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800 active:bg-gray-50 dark:active:bg-white/5 transition-colors"
                >
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-gray-500">person</span>
                        <span>Edit Profile</span>
                    </div>
                    <span className="material-symbols-outlined text-gray-400 text-sm">arrow_forward_ios</span>
                </button>
                 <button 
                  onClick={() => navigate('/settings/change-password')}
                  className="w-full flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800 active:bg-gray-50 dark:active:bg-white/5 transition-colors"
                 >
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-gray-500">lock</span>
                        <span>Change Password</span>
                    </div>
                    <span className="material-symbols-outlined text-gray-400 text-sm">arrow_forward_ios</span>
                </button>
            </div>
        </section>

        <section>
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 ml-2">Preferences</h3>
             <div className="bg-white dark:bg-white/5 rounded-xl overflow-hidden shadow-sm">
                <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-gray-500">notifications</span>
                        <span>Notifications</span>
                    </div>
                    <button 
                        onClick={() => setNotifications(!notifications)} 
                        className={`w-12 h-6 rounded-full transition-colors relative ${notifications ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'}`}
                    >
                        <div className={`size-5 bg-white rounded-full absolute top-0.5 transition-transform shadow-sm ${notifications ? 'translate-x-6' : 'translate-x-0.5'}`}></div>
                    </button>
                </div>
                 <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-gray-500">dark_mode</span>
                        <span>Dark Mode</span>
                    </div>
                    <button 
                        onClick={toggleTheme} 
                        className={`w-12 h-6 rounded-full transition-colors relative ${theme === 'dark' ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'}`}
                    >
                        <div className={`size-5 bg-white rounded-full absolute top-0.5 transition-transform shadow-sm ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0.5'}`}></div>
                    </button>
                </div>
            </div>
        </section>

         <section>
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 ml-2">Support</h3>
             <div className="bg-white dark:bg-white/5 rounded-xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => navigate('/settings/help')}
                  className="w-full flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800 active:bg-gray-50 dark:active:bg-white/5 transition-colors"
                >
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-gray-500">help</span>
                        <span>Help Center</span>
                    </div>
                    <span className="material-symbols-outlined text-gray-400 text-sm">arrow_forward_ios</span>
                </button>
                 <button 
                  onClick={() => navigate('/settings/about')}
                  className="w-full flex items-center justify-between p-4 active:bg-gray-50 dark:active:bg-white/5 transition-colors"
                 >
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-gray-500">info</span>
                        <span>About Us</span>
                    </div>
                    <span className="material-symbols-outlined text-gray-400 text-sm">arrow_forward_ios</span>
                </button>
            </div>
        </section>
      </div>
    </div>
  );
};

export default Settings;
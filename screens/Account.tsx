import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

const Account: React.FC = () => {
  const navigate = useNavigate();
  const { logout } = useStore();

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      logout();
    }
  };

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col bg-white dark:bg-background-dark shadow-xl overflow-x-hidden">
      {/* TopAppBar */}
      <div className="flex items-center p-4 pb-2 justify-between sticky top-0 bg-white/90 dark:bg-background-dark/90 backdrop-blur-sm z-20">
        <button 
          onClick={() => navigate('/')} 
          className="text-[#1b0d12] dark:text-white flex size-12 shrink-0 items-center justify-start cursor-pointer hover:opacity-70 transition-opacity active:scale-90"
        >
          <span className="material-symbols-outlined text-[24px]">arrow_back_ios</span>
        </button>
        <h2 className="text-[#1b0d12] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Account</h2>
        <div className="flex w-12 items-center justify-end">
          <button onClick={() => navigate('/settings')} className="flex cursor-pointer items-center justify-center rounded-lg size-10 bg-transparent text-[#1b0d12] dark:text-white active:bg-gray-100 dark:active:bg-white/10 transition-colors">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </div>

      {/* ProfileHeader */}
      <div className="flex p-4 pt-6">
        <div className="flex w-full flex-col gap-4 items-center">
          <div className="flex gap-4 flex-col items-center">
            <div className="relative group">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32 border-4 border-primary/10 transition-transform duration-500 group-hover:scale-105" 
                   style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAgCLxsItyxNBqpk_DpmH-8tJpNSV-gKa64zvIsACj7mORRzuKa1Uu5892FfWigDciRkglFyU14OXxOLJX7CMnHzj8M9tfRQCBTafgYi4v85t7g72YX2OCkx2Ts6Tpj2wZ4jrQr3pi6tOe6bpDlQEXOoyL_1DIdC3tqGQPW6Uq57mUeuiqKAdYTrsG5PuEpz-GL5zQmHyhYr-hIR9sFqRCVUrZDUxQ9go0lsh7kPpQHGLzL3YWNWOTxoBAr96HoE3gx0QkI7dQaZRlF")' }}>
              </div>
              <button onClick={() => navigate('/settings')} className="absolute bottom-1 right-1 bg-primary text-white rounded-full p-2 border-2 border-white dark:border-background-dark flex items-center justify-center cursor-pointer hover:bg-primary/90 transition-transform active:scale-95 shadow-md">
                <span className="material-symbols-outlined !text-[16px]">edit</span>
              </button>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-[#1b0d12] dark:text-white text-[24px] font-bold leading-tight tracking-[-0.015em] text-center">Jordan Smith</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal text-center">j.smith@fashion.com</p>
              <p className="text-primary text-xs font-bold leading-normal text-center mt-2 uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full">Style Insider Member</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="h-6"></div>

      {/* SectionHeader */}
      <h3 className="text-[#1b0d12] dark:text-white text-[17px] font-bold leading-tight tracking-[-0.015em] px-6 pb-2 pt-4">Shopping Activity</h3>

      {/* ListItem: My Orders */}
      <div className="px-4">
        <button onClick={() => navigate('/orders')} className="w-full flex items-center gap-4 bg-white dark:bg-background-dark px-2 min-h-[64px] justify-between border-b border-gray-100 dark:border-gray-800 cursor-pointer active:bg-gray-50 dark:active:bg-gray-900 transition-colors rounded-lg group">
          <div className="flex items-center gap-4">
            <div className="text-primary flex items-center justify-center rounded-xl bg-primary/10 shrink-0 size-11 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">shopping_bag</span>
            </div>
            <p className="text-[#1b0d12] dark:text-white text-base font-semibold leading-normal flex-1 truncate text-left">My Orders</p>
          </div>
          <div className="shrink-0 flex items-center gap-2">
            <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full">2 Active</span>
            <span className="text-gray-400 material-symbols-outlined !text-[20px] group-hover:translate-x-1 transition-transform">chevron_right</span>
          </div>
        </button>
      </div>

      {/* ListItem: Wishlist */}
      <div className="px-4">
        <button onClick={() => navigate('/wishlist')} className="w-full flex items-center gap-4 bg-white dark:bg-background-dark px-2 min-h-[64px] justify-between border-b border-gray-100 dark:border-gray-800 cursor-pointer active:bg-gray-50 dark:active:bg-gray-900 transition-colors rounded-lg group">
          <div className="flex items-center gap-4">
            <div className="text-primary flex items-center justify-center rounded-xl bg-primary/10 shrink-0 size-11 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">favorite</span>
            </div>
            <p className="text-[#1b0d12] dark:text-white text-base font-semibold leading-normal flex-1 truncate text-left">Wishlist</p>
          </div>
          <div className="shrink-0">
            <span className="text-gray-400 material-symbols-outlined !text-[20px] group-hover:translate-x-1 transition-transform">chevron_right</span>
          </div>
        </button>
      </div>

      <div className="h-4"></div>

      {/* SectionHeader */}
      <h3 className="text-[#1b0d12] dark:text-white text-[17px] font-bold leading-tight tracking-[-0.015em] px-6 pb-2 pt-4">Account Details</h3>

      {/* ListItem: Shipping Addresses */}
      <div className="px-4">
        <button onClick={() => navigate('/addresses')} className="w-full flex items-center gap-4 bg-white dark:bg-background-dark px-2 min-h-[64px] justify-between border-b border-gray-100 dark:border-gray-800 cursor-pointer active:bg-gray-50 dark:active:bg-gray-900 transition-colors rounded-lg group">
          <div className="flex items-center gap-4">
            <div className="text-primary flex items-center justify-center rounded-xl bg-primary/10 shrink-0 size-11 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">location_on</span>
            </div>
            <p className="text-[#1b0d12] dark:text-white text-base font-semibold leading-normal flex-1 truncate text-left">Shipping Addresses</p>
          </div>
          <div className="shrink-0">
            <span className="text-gray-400 material-symbols-outlined !text-[20px] group-hover:translate-x-1 transition-transform">chevron_right</span>
          </div>
        </button>
      </div>

      {/* ListItem: Payment Methods */}
      <div className="px-4">
        <button onClick={() => navigate('/wallet')} className="w-full flex items-center gap-4 bg-white dark:bg-background-dark px-2 min-h-[64px] justify-between border-b border-gray-100 dark:border-gray-800 cursor-pointer active:bg-gray-50 dark:active:bg-gray-900 transition-colors rounded-lg group">
          <div className="flex items-center gap-4">
            <div className="text-primary flex items-center justify-center rounded-xl bg-primary/10 shrink-0 size-11 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">credit_card</span>
            </div>
            <p className="text-[#1b0d12] dark:text-white text-base font-semibold leading-normal flex-1 truncate text-left">Payment Methods</p>
          </div>
          <div className="shrink-0">
            <span className="text-gray-400 material-symbols-outlined !text-[20px] group-hover:translate-x-1 transition-transform">chevron_right</span>
          </div>
        </button>
      </div>

      <div className="mt-auto p-6 flex flex-col items-center gap-4">
        <button onClick={handleLogout} className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-lg shadow-primary/20">
          <span className="material-symbols-outlined">logout</span>
          Log Out
        </button>
        <p className="text-gray-400 text-[10px] font-medium uppercase tracking-widest">Version 4.12.0 • Luxe Mode Inc.</p>
      </div>

      {/* Bottom Safe Area Spacer */}
      <div className="h-8"></div>
    </div>
  );
};

export default Account;
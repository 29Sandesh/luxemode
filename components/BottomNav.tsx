import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getIconClass = (path: string) => {
    return location.pathname === path
      ? "material-symbols-outlined text-primary filled"
      : "material-symbols-outlined text-gray-400 dark:text-gray-500";
  };

  const getTextClass = (path: string) => {
    return location.pathname === path
      ? "text-[10px] font-bold text-primary"
      : "text-[10px] font-medium text-gray-400 dark:text-gray-500";
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-20 items-center justify-around bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800 px-6 pb-4 max-w-[600px] mx-auto">
      <button onClick={() => navigate('/')} className="flex flex-col items-center gap-1 w-14 active:scale-95 transition-transform">
        <span className={getIconClass('/')}>home</span>
        <span className={getTextClass('/')}>Home</span>
      </button>
      <button onClick={() => navigate('/products')} className="flex flex-col items-center gap-1 w-14 active:scale-95 transition-transform">
        <span className={getIconClass('/products')}>explore</span>
        <span className={getTextClass('/products')}>Explore</span>
      </button>
      <button onClick={() => navigate('/wishlist')} className="flex flex-col items-center gap-1 w-14 active:scale-95 transition-transform">
        <span className={getIconClass('/wishlist')}>favorite</span>
        <span className={getTextClass('/wishlist')}>Wishlist</span>
      </button>
      <button onClick={() => navigate('/account')} className="flex flex-col items-center gap-1 w-14 active:scale-95 transition-transform">
        <span className={getIconClass('/account')}>person</span>
        <span className={getTextClass('/account')}>Profile</span>
      </button>
    </nav>
  );
};

export default BottomNav;
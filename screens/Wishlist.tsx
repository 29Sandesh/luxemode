import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { allProducts } from '../services/data';

const Wishlist: React.FC = () => {
  const navigate = useNavigate();
  const { wishlist, toggleWishlist } = useStore();
  
  const wishlistProducts = allProducts.filter(p => wishlist.includes(p.id));

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col">
      {/* Top App Bar */}
      <div className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-800">
        <button onClick={() => navigate(-1)} className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-[#1b0d12] dark:text-white">arrow_back_ios_new</span>
        </button>
        <h1 className="text-lg font-bold tracking-tight text-[#1b0d12] dark:text-white">My Wishlist</h1>
        <div className="size-10"></div>
      </div>

      {wishlistProducts.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <div className="size-32 bg-gray-100 dark:bg-white/5 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-600">favorite_border</span>
            </div>
            <h2 className="text-2xl font-bold mb-2 text-[#1b0d12] dark:text-white">Your Wishlist is Empty</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-[200px]">Save items you love to revisit them later.</p>
            <button onClick={() => navigate('/products')} className="px-8 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                Explore Items
            </button>
        </div>
      ) : (
        <main className="grid grid-cols-2 gap-x-3 gap-y-6 p-4">
          {wishlistProducts.map((product) => (
            <div key={product.id} className="flex flex-col gap-2 group cursor-pointer" onClick={() => navigate(`/product/${product.id}`)}>
              <div className="relative w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl overflow-hidden shadow-sm" style={{ backgroundImage: `url("${product.image}")` }}>
                {product.isNew && (
                  <div className="absolute top-3 left-3 z-10 px-2 py-0.5 bg-primary rounded text-[10px] font-bold text-white uppercase tracking-wider">New</div>
                )}
                <button 
                  onClick={(e) => { e.stopPropagation(); toggleWishlist(product.id); }}
                  className="absolute top-3 right-3 z-10 size-8 flex items-center justify-center rounded-full bg-white/80 dark:bg-black/40 backdrop-blur-sm shadow-sm transition-transform active:scale-90"
                >
                  <span className="material-symbols-outlined text-[20px] text-primary filled">favorite</span>
                </button>
              </div>
              <div className="px-1">
                <p className="text-[#1b0d12] dark:text-[#f8f6f6] text-sm font-semibold leading-tight truncate">{product.name}</p>
                <p className="text-[#9a4c66] dark:text-[#d41152] text-sm font-bold mt-1">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </main>
      )}
    </div>
  );
};

export default Wishlist;

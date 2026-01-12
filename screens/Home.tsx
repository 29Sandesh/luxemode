import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import { categories, trendingProducts } from '../services/data';
import { useStore } from '../context/StoreContext';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { cartCount, wishlist, toggleWishlist } = useStore();

  return (
    <div className="relative flex flex-col w-full min-h-screen pb-20 bg-background-light dark:bg-background-dark">
      {/* TopAppBar */}
      <header className="sticky top-0 z-50 flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 justify-between border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/settings')} className="flex items-center justify-center active:scale-90 transition-transform">
            <span className="material-symbols-outlined text-[#1b0d12] dark:text-[#fcf8f9] cursor-pointer">menu</span>
          </button>
        </div>
        <h1 className="text-[#1b0d12] dark:text-[#fcf8f9] text-xl font-bold leading-tight tracking-tight text-center flex-1">LUXE MODE</h1>
        <div className="flex items-center gap-3">
          <button onClick={() => navigate('/products')} className="flex items-center justify-center active:scale-90 transition-transform">
            <span className="material-symbols-outlined text-[#1b0d12] dark:text-[#fcf8f9] cursor-pointer">search</span>
          </button>
          <div className="relative cursor-pointer active:scale-90 transition-transform" onClick={() => navigate('/cart')}>
            <span className="material-symbols-outlined text-[#1b0d12] dark:text-[#fcf8f9]">shopping_bag</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white animate-fade-in">{cartCount}</span>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* HeaderImage / Hero Banner */}
        <div className="px-4 py-3">
          <div className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-gray-200 rounded-xl min-h-[500px]" 
               style={{ backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 40%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC0-MRnmws7gakKzblaBMCcFnbzLAPNvgauVct_-DRRt8NtMrlUFDIo4eN2Q6dXI4l4vcn3VAzafgV88DRHjeokkRtMxCvCtASkD5XiSHjJHLvHuM_qdR7aFv5d1VtoA51RYbumzRHov8lFPe5nDbWunu94-z9-e452tOO0bwRXGn9VUDBXUw5fE8eIMWOP_RiNGNRxA0-FeHmlCo2eMbkSW9bMF6_dR1qsSvAQc7w6xLO2s1F03d242he4ElOeo-e4gCzk4i3rlI9e")' }}>
            <div className="flex flex-col p-8 gap-3">
              <p className="text-white text-sm font-medium tracking-widest uppercase">New Arrival</p>
              <h2 className="text-white tracking-tight text-5xl font-bold leading-tight">Summer <br/>Collection</h2>
              <div className="mt-6 flex">
                <button onClick={() => navigate('/products')} className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-primary text-white text-base font-bold leading-normal tracking-wide shadow-lg active:scale-95 transition-transform">
                  <span className="truncate uppercase">Shop Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <section className="mt-6">
          <div className="flex items-center justify-between px-4">
            <h3 className="text-[#1b0d12] dark:text-[#fcf8f9] text-xl font-bold leading-tight tracking-tight">Browse Categories</h3>
            <button onClick={() => navigate('/products')} className="text-primary text-sm font-semibold">View All</button>
          </div>
          <div className="flex w-full overflow-x-auto no-scrollbar px-4 py-6">
            <div className="flex min-h-min flex-row items-start justify-start gap-8">
              {categories.map((cat, idx) => (
                <div key={idx} onClick={() => navigate('/products')} className="flex flex-col items-center gap-3 min-w-[76px] cursor-pointer group active:scale-95 transition-transform">
                  <div className={`w-20 h-20 bg-center bg-no-repeat bg-cover rounded-full border-2 ${idx === 0 ? 'border-primary/20' : 'border-transparent group-hover:border-gray-200'} p-0.5 transition-colors`} 
                       style={{ backgroundImage: `url("${cat.image}")` }}>
                  </div>
                  <p className="text-[#1b0d12] dark:text-[#fcf8f9] text-sm font-medium leading-normal">{cat.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trending Now Section */}
        <section className="mt-4 pb-6">
          <div className="flex items-center justify-between px-4 pb-4">
            <h3 className="text-[#1b0d12] dark:text-[#fcf8f9] text-xl font-bold leading-tight tracking-tight">Trending Now</h3>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 px-4">
            {trendingProducts.map((product) => (
              <div key={product.id} className="flex flex-col gap-3 group cursor-pointer" onClick={() => navigate(`/product/${product.id}`)}>
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-gray-100">
                  <img alt={product.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={product.image} />
                  <button 
                    onClick={(e) => { e.stopPropagation(); toggleWishlist(product.id); }}
                    className="absolute top-3 right-3 flex size-10 items-center justify-center rounded-full bg-white/80 backdrop-blur shadow-sm active:scale-90 transition-transform"
                  >
                    <span className={`material-symbols-outlined text-xl ${wishlist.includes(product.id) ? 'text-primary filled' : 'text-gray-400'}`}>favorite</span>
                  </button>
                  {product.isNew && (
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-primary px-2.5 py-1 rounded text-[10px] font-bold text-white uppercase tracking-wider shadow-sm">New</span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col px-1">
                  <h4 className="text-base font-medium text-[#1b0d12] dark:text-[#fcf8f9] truncate">{product.name}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-primary text-base font-bold">${product.price.toFixed(2)}</p>
                    {product.originalPrice && <p className="text-gray-400 text-xs line-through">${product.originalPrice.toFixed(2)}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <BottomNav />
    </div>
  );
};

export default Home;
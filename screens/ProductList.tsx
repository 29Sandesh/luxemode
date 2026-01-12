import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { summerDresses, allProducts } from '../services/data';
import { useStore } from '../context/StoreContext';
import BottomNav from '../components/BottomNav';

const ProductList: React.FC = () => {
  const navigate = useNavigate();
  const { cartCount, wishlist, toggleWishlist } = useStore();
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products based on search
  const filteredProducts = searchQuery 
    ? allProducts.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : summerDresses;

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden">
      {/* Sticky Header Container */}
      <header className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md">
        {/* Top App Bar */}
        <div className="flex items-center p-4 pb-2 justify-between">
          <div onClick={() => navigate(-1)} className="text-[#1b0d12] dark:text-[#f8f6f6] flex size-12 shrink-0 items-center justify-start cursor-pointer hover:opacity-70 transition-opacity active:scale-90">
            <span className="material-symbols-outlined text-[24px]">arrow_back_ios</span>
          </div>
          <h2 className="text-[#1b0d12] dark:text-[#f8f6f6] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
            {searchQuery ? 'Search Results' : 'Summer Dresses'}
          </h2>
          <div className="flex w-12 items-center justify-end">
            <button onClick={() => navigate('/cart')} className="relative flex cursor-pointer items-center justify-center rounded-lg h-12 bg-transparent text-[#1b0d12] dark:text-[#f8f6f6] active:scale-90 transition-transform">
              <span className="material-symbols-outlined text-[24px]">shopping_bag</span>
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white animate-fade-in">{cartCount}</span>
              )}
            </button>
          </div>
        </div>
        {/* Search Bar */}
        <div className="px-4 py-2">
          <label className="flex flex-col min-w-40 h-11 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm">
              <div className="text-[#9a4c66] dark:text-[#d41152] flex border-none bg-white dark:bg-[#351a24] items-center justify-center pl-4 rounded-l-xl">
                <span className="material-symbols-outlined text-[20px]">search</span>
              </div>
              <input 
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-xl text-[#1b0d12] dark:text-[#f8f6f6] focus:outline-0 focus:ring-0 border-none bg-white dark:bg-[#351a24] h-full placeholder:text-[#9a4c66] dark:placeholder:text-[#9a4c66]/50 px-4 pl-2 text-sm font-normal leading-normal" 
                placeholder="Search styles..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="bg-white dark:bg-[#351a24] px-3 flex items-center justify-center rounded-r-xl text-gray-400 hover:text-gray-600">
                    <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              )}
            </div>
          </label>
        </div>
        {/* Chips / Filters */}
        <div className="flex gap-2 p-4 overflow-x-auto whitespace-nowrap no-scrollbar">
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-[#351a24] px-4 border border-transparent active:scale-95 transition-transform shadow-sm">
            <span className="material-symbols-outlined text-sm text-[18px]">tune</span>
            <p className="text-[#1b0d12] dark:text-[#f8f6f6] text-xs font-semibold uppercase tracking-wider leading-normal">Filter</p>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-[#351a24] px-4 active:scale-95 transition-transform shadow-sm">
            <p className="text-[#1b0d12] dark:text-[#f8f6f6] text-xs font-semibold uppercase tracking-wider leading-normal">Sort</p>
            <span className="material-symbols-outlined text-[18px]">expand_more</span>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-[#351a24] px-4 active:scale-95 transition-transform shadow-sm">
            <p className="text-[#1b0d12] dark:text-[#f8f6f6] text-xs font-semibold uppercase tracking-wider leading-normal">Size</p>
            <span className="material-symbols-outlined text-[18px]">expand_more</span>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-[#351a24] px-4 active:scale-95 transition-transform shadow-sm">
            <p className="text-[#1b0d12] dark:text-[#f8f6f6] text-xs font-semibold uppercase tracking-wider leading-normal">Color</p>
            <span className="material-symbols-outlined text-[18px]">expand_more</span>
          </button>
        </div>
      </header>

      {/* Product Grid */}
      <main className="flex-1 overflow-y-auto pb-24">
        {filteredProducts.length === 0 ? (
           <div className="flex flex-col items-center justify-center py-20 opacity-50">
               <span className="material-symbols-outlined text-4xl mb-2">search_off</span>
               <p>No products found</p>
           </div>
        ) : (
            <div className="grid grid-cols-2 gap-x-3 gap-y-6 p-4">
            {filteredProducts.map((product) => (
                <div key={product.id} className="flex flex-col gap-2 group cursor-pointer" onClick={() => navigate(`/product/${product.id}`)}>
                <div className="relative w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl overflow-hidden shadow-sm" style={{ backgroundImage: `url("${product.image}")` }}>
                    {product.isNew && (
                    <div className="absolute top-3 left-3 z-10 px-2 py-0.5 bg-primary rounded text-[10px] font-bold text-white uppercase tracking-wider shadow-sm">New</div>
                    )}
                    <button 
                    onClick={(e) => { e.stopPropagation(); toggleWishlist(product.id); }}
                    className="absolute top-3 right-3 z-10 size-8 flex items-center justify-center rounded-full bg-white/80 dark:bg-black/40 backdrop-blur-sm shadow-sm transition-transform active:scale-90"
                    >
                    <span className={`material-symbols-outlined text-[20px] ${wishlist.includes(product.id) ? 'text-primary filled' : 'text-[#1b0d12] dark:text-white'}`}>favorite</span>
                    </button>
                </div>
                <div className="px-1">
                    <p className="text-[#1b0d12] dark:text-[#f8f6f6] text-sm font-semibold leading-tight truncate">{product.name}</p>
                    <p className="text-[#9a4c66] dark:text-[#d41152] text-sm font-bold mt-1">${product.price.toFixed(2)}</p>
                </div>
                </div>
            ))}
            </div>
        )}
      </main>

      {/* Standard Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default ProductList;
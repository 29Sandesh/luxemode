import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { allProducts } from '../services/data';

const ProductDetails: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { addToCart, wishlist, toggleWishlist } = useStore();
  
  const product = allProducts.find(p => p.id === id);
  
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (product) {
      if (product.sizes && product.sizes.length > 0) setSelectedSize(product.sizes[0]);
      if (product.colors && product.colors.length > 0) setSelectedColor(product.colors[0]);
    }
  }, [product]);

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#1b0d12] dark:text-[#fcf8f9] min-h-screen flex flex-col">
      {/* Top Navigation Overlay */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 max-w-[600px] mx-auto pointer-events-none">
        <button onClick={() => navigate(-1)} className="pointer-events-auto flex size-10 items-center justify-center rounded-full bg-white/80 dark:bg-black/40 backdrop-blur-md shadow-sm transition-transform active:scale-95">
          <span className="material-symbols-outlined text-black dark:text-white">arrow_back_ios_new</span>
        </button>
        <button 
          onClick={() => toggleWishlist(product.id)}
          className="pointer-events-auto flex size-10 items-center justify-center rounded-full bg-white/80 dark:bg-black/40 backdrop-blur-md shadow-sm transition-transform active:scale-95"
        >
          <span className={`material-symbols-outlined ${wishlist.includes(product.id) ? 'text-primary filled' : 'text-black dark:text-white'}`}>heart_plus</span>
        </button>
      </div>

      <main className="flex-1 pb-32">
        {/* Header Image Carousel */}
        <div className="relative">
          <div className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-[#fcf8f9] dark:bg-background-dark min-h-[500px]" 
               style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 40%), url("${product.image}")` }}>
            <div className="flex justify-center gap-2 p-5">
              <div className="size-2 rounded-full bg-white"></div>
              <div className="size-2 rounded-full bg-white opacity-40"></div>
              <div className="size-2 rounded-full bg-white opacity-40"></div>
              <div className="size-2 rounded-full bg-white opacity-40"></div>
            </div>
          </div>
        </div>

        {/* Product Info Section */}
        <div className="px-6">
          <div className="flex justify-between items-start pt-8">
            <h1 className="text-[#1b0d12] dark:text-white tracking-tight text-[32px] font-bold leading-tight max-w-[70%]">
              {product.name}
            </h1>
            <div className="flex flex-col items-end">
              <p className="text-primary text-[28px] font-extrabold leading-tight">${product.price.toFixed(2)}</p>
              {product.originalPrice && (
                <p className="text-sm text-gray-500 dark:text-gray-400 line-through">${product.originalPrice.toFixed(2)}</p>
              )}
            </div>
          </div>

          {/* Rating Brief */}
          <div className="flex items-center gap-2 mt-3">
            <div className="flex text-primary">
              <span className="material-symbols-outlined text-sm filled">star</span>
              <span className="material-symbols-outlined text-sm filled">star</span>
              <span className="material-symbols-outlined text-sm filled">star</span>
              <span className="material-symbols-outlined text-sm filled">star</span>
              <span className="material-symbols-outlined text-sm">star_half</span>
            </div>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">4.8 (120 reviews)</span>
          </div>

          {/* Description */}
          <div className="mt-8">
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400">
              A timeless piece for your warm-weather wardrobe. This breathable cotton dress features a vintage-inspired floral print, delicate spaghetti straps, and a flattering A-line silhouette.
            </p>
          </div>

          {/* Color Selection */}
          {product.colors && (
            <div className="mt-8">
              <h3 className="text-sm font-bold text-[#1b0d12] dark:text-white uppercase tracking-wider mb-3">Color</h3>
              <div className="flex gap-4">
                {product.colors.map(color => (
                  <button 
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`size-12 rounded-full transition-all border border-gray-200 dark:border-gray-700 ${selectedColor === color ? 'ring-2 ring-primary ring-offset-2 dark:ring-offset-background-dark scale-110' : ''}`}
                    style={{ backgroundColor: color }}
                  ></button>
                ))}
              </div>
            </div>
          )}

          {/* Size Selection */}
          {product.sizes && (
            <div className="mt-8">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-bold text-[#1b0d12] dark:text-white uppercase tracking-wider">Select Size</h3>
                <button className="text-xs font-semibold text-primary underline">Size Guide</button>
              </div>
              <div className="flex gap-3">
                {product.sizes.map(size => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`flex-1 h-14 font-bold rounded-lg transition-colors ${selectedSize === size ? 'border-2 border-primary bg-primary/10 text-primary' : 'border border-gray-200 dark:border-gray-700 hover:border-primary'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Rating Summary */}
          <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
            <h3 className="text-lg font-bold mb-4">Customer Reviews</h3>
            <div className="flex flex-wrap gap-x-8 gap-y-6">
              <div className="flex flex-col gap-1">
                <p className="text-[#1b0d12] dark:text-white text-5xl font-black leading-tight tracking-[-0.033em]">4.8</p>
                <div className="flex gap-0.5 text-primary">
                  <span className="material-symbols-outlined text-[20px] filled">star</span>
                  <span className="material-symbols-outlined text-[20px] filled">star</span>
                  <span className="material-symbols-outlined text-[20px] filled">star</span>
                  <span className="material-symbols-outlined text-[20px] filled">star</span>
                  <span className="material-symbols-outlined text-[20px]">star</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-normal">120 reviews</p>
              </div>
              <div className="grid min-w-[200px] max-w-[400px] flex-1 grid-cols-[20px_1fr_40px] items-center gap-y-2">
                <p className="text-sm font-normal">5</p>
                <div className="flex h-1.5 flex-1 overflow-hidden rounded-full bg-primary/10"><div className="rounded-full bg-primary" style={{ width: '80%' }}></div></div>
                <p className="text-xs text-gray-500 text-right">80%</p>
                <p className="text-sm font-normal">4</p>
                <div className="flex h-1.5 flex-1 overflow-hidden rounded-full bg-primary/10"><div className="rounded-full bg-primary" style={{ width: '12%' }}></div></div>
                <p className="text-xs text-gray-500 text-right">12%</p>
                <p className="text-sm font-normal">3</p>
                <div className="flex h-1.5 flex-1 overflow-hidden rounded-full bg-primary/10"><div className="rounded-full bg-primary" style={{ width: '5%' }}></div></div>
                <p className="text-xs text-gray-500 text-right">5%</p>
                <p className="text-sm font-normal">2</p>
                <div className="flex h-1.5 flex-1 overflow-hidden rounded-full bg-primary/10"><div className="rounded-full bg-primary" style={{ width: '2%' }}></div></div>
                <p className="text-xs text-gray-500 text-right">2%</p>
                <p className="text-sm font-normal">1</p>
                <div className="flex h-1.5 flex-1 overflow-hidden rounded-full bg-primary/10"><div className="rounded-full bg-primary" style={{ width: '1%' }}></div></div>
                <p className="text-xs text-gray-500 text-right">1%</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Sticky Footer CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-background-dark/90 backdrop-blur-xl border-t border-gray-100 dark:border-gray-800 p-4 pb-8 z-50 max-w-[600px] mx-auto">
        <div className="max-w-lg mx-auto flex gap-4">
          <button className="flex size-14 items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700 bg-transparent text-[#1b0d12] dark:text-white shrink-0 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
            <span className="material-symbols-outlined">share</span>
          </button>
          <button 
            className={`flex-1 font-bold h-14 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95 ${isAdded ? 'bg-green-600 text-white' : 'bg-primary text-white shadow-primary/20'}`} 
            onClick={handleAddToCart}
          >
            <span className="material-symbols-outlined">{isAdded ? 'check' : 'shopping_bag'}</span>
            {isAdded ? 'Added to Bag' : 'Add to Bag'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
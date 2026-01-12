import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, cartTotal } = useStore();

  const handleUpdateQuantity = (id: string, delta: number) => {
    updateQuantity(id, delta);
  };

  if (cart.length === 0) {
    return (
      <div className="bg-background-light dark:bg-background-dark text-[#1b0d12] dark:text-white min-h-screen flex flex-col">
        {/* Top Nav */}
        <div className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-800">
            <button onClick={() => navigate(-1)} className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
            </button>
            <h1 className="text-lg font-bold tracking-tight">Shopping Cart</h1>
            <div className="size-10"></div>
        </div>
        
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <div className="size-32 bg-gray-100 dark:bg-white/5 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-600">production_quantity_limits</span>
            </div>
            <h2 className="text-2xl font-bold mb-2">Your Bag is Empty</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-[200px]">Looks like you haven't added any items to the bag yet.</p>
            <button onClick={() => navigate('/products')} className="px-8 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                Start Shopping
            </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#1b0d12] dark:text-white min-h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <div className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-800">
        <button onClick={() => navigate(-1)} className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h1 className="text-lg font-bold tracking-tight">Shopping Cart ({cart.length})</h1>
        <button className="text-primary font-bold text-sm">Edit</button>
      </div>

      {/* Scrollable Content Section */}
      <div className="flex-1 overflow-y-auto pb-40">
        {/* Cart Items List */}
        <div className="mt-4 space-y-3">
          {cart.map((item) => (
            <div key={item.cartItemId} className="flex gap-4 px-4 py-4 bg-white dark:bg-white/5 mx-4 rounded-xl shadow-sm border border-transparent dark:border-white/5">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-24 shrink-0" 
                    style={{ backgroundImage: `url("${item.image}")` }}>
                </div>
                <div className="flex flex-1 flex-col justify-between">
                <div>
                    <div className="flex justify-between items-start">
                    <p className="font-bold text-base leading-tight line-clamp-2">{item.name}</p>
                    <button onClick={() => removeFromCart(item.cartItemId)} className="text-gray-400 dark:text-gray-500 hover:text-red-500 transition-colors p-1 -mr-2">
                        <span className="material-symbols-outlined text-[20px]">close</span>
                    </button>
                    </div>
                    <div className="flex items-center gap-3 mt-1">
                        <div className="flex items-center gap-1">
                            <div className="size-3 rounded-full border border-gray-200" style={{ backgroundColor: item.selectedColor }}></div>
                            <span className="text-xs text-gray-500 capitalize">Color</span>
                        </div>
                        <span className="text-gray-300">|</span>
                         <div className="flex items-center gap-1">
                            <span className="text-xs font-bold bg-gray-100 dark:bg-white/10 px-1.5 py-0.5 rounded">{item.selectedSize}</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-2">
                    <p className="font-bold text-lg text-primary">${item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-3 bg-gray-100 dark:bg-white/10 rounded-full px-2 py-1">
                    <button onClick={() => handleUpdateQuantity(item.cartItemId, -1)} className="size-7 flex items-center justify-center rounded-full bg-white dark:bg-white/20 shadow-sm active:scale-90 transition-transform disabled:opacity-50" disabled={item.quantity <= 1}>
                        <span className="material-symbols-outlined text-sm">remove</span>
                    </button>
                    <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                    <button onClick={() => handleUpdateQuantity(item.cartItemId, 1)} className="size-7 flex items-center justify-center rounded-full bg-white dark:bg-white/20 shadow-sm active:scale-90 transition-transform">
                        <span className="material-symbols-outlined text-sm">add</span>
                    </button>
                    </div>
                </div>
                </div>
            </div>
          ))}
        </div>

        {/* Promo Code Input */}
        <div className="px-4 mt-8">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <input className="w-full bg-white dark:bg-white/5 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none text-[#1b0d12] dark:text-white" placeholder="Promo Code" type="text" />
            </div>
            <button className="bg-primary/10 dark:bg-primary/20 text-primary font-bold px-6 py-3 rounded-xl text-sm hover:bg-primary hover:text-white transition-all">
              Apply
            </button>
          </div>
        </div>

        {/* Section Header */}
        <h3 className="text-lg font-bold leading-tight tracking-tight px-4 mt-8 pb-2">Order Summary</h3>

        {/* Summary Details */}
        <div className="px-4 space-y-3">
          <div className="flex justify-between items-center">
            <p className="text-[#9a4c66] dark:text-gray-400 text-sm font-medium">Subtotal</p>
            <p className="font-semibold text-sm">${cartTotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[#9a4c66] dark:text-gray-400 text-sm font-medium">Shipping</p>
            <p className="font-semibold text-sm text-green-600">Free</p>
          </div>
          <div className="flex justify-between items-center pt-3 border-t border-gray-200 dark:border-gray-800">
            <p className="text-lg font-bold">Total</p>
            <p className="text-xl font-bold text-primary">${cartTotal.toFixed(2)}</p>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Checkout Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-background-dark/90 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800 p-4 pb-8 max-w-[600px] mx-auto">
        <button onClick={() => navigate('/checkout')} className="w-full bg-primary text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/25 active:scale-[0.98] transition-transform">
          <span>Proceed to Checkout</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default Cart;
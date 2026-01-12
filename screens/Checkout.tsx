import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { cartTotal, clearCart } = useStore();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const finalTotal = cartTotal + 10.72; // Including Tax

  const handlePlaceOrder = () => {
    // Simulate API call
    setTimeout(() => {
      setOrderPlaced(true);
      clearCart();
    }, 800);
  };

  if (orderPlaced) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background-light dark:bg-background-dark p-6 text-center animate-fade-in">
        <div className="flex size-24 items-center justify-center rounded-full bg-green-100 text-green-600 mb-6">
          <span className="material-symbols-outlined text-[48px] filled">check_circle</span>
        </div>
        <h1 className="text-2xl font-bold text-[#1b0d12] dark:text-white mb-2">Order Confirmed!</h1>
        <p className="text-gray-500 mb-8 max-w-xs">Your order #20392 has been placed successfully. You will receive an email confirmation shortly.</p>
        <button onClick={() => navigate('/')} className="w-full max-w-xs bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/25">
          Continue Shopping
        </button>
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
        <h1 className="text-lg font-bold tracking-tight">Checkout</h1>
        <div className="size-10"></div> {/* Spacer for alignment */}
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-32 space-y-6">
        {/* Shipping Address */}
        <section>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-lg">Shipping Address</h3>
            <button className="text-primary text-sm font-semibold">Edit</button>
          </div>
          <div className="bg-white dark:bg-white/5 p-4 rounded-xl shadow-sm flex items-start gap-4">
            <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
              <span className="material-symbols-outlined filled">location_on</span>
            </div>
            <div>
              <p className="font-bold">Home</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">123 Fashion Ave, Suite 4B<br/>New York, NY 10001<br/>United States</p>
            </div>
          </div>
        </section>

        {/* Payment Method */}
        <section>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-lg">Payment Method</h3>
            <button className="text-primary text-sm font-semibold">Change</button>
          </div>
          <div className="bg-white dark:bg-white/5 p-4 rounded-xl shadow-sm flex items-center gap-4">
             <div className="flex size-10 items-center justify-center rounded-full bg-blue-900/10 text-blue-800 dark:text-blue-300 shrink-0">
              <span className="material-symbols-outlined filled">credit_card</span>
            </div>
            <div className="flex-1">
              <p className="font-bold">Visa Classic</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">**** **** **** 4242</p>
            </div>
            <div className="size-5 rounded-full border-2 border-primary flex items-center justify-center">
              <div className="size-2.5 rounded-full bg-primary"></div>
            </div>
          </div>
        </section>

        {/* Delivery Options */}
        <section>
          <h3 className="font-bold text-lg mb-3">Delivery Method</h3>
          <div className="space-y-3">
            <div className="bg-white dark:bg-white/5 p-4 rounded-xl shadow-sm border-2 border-primary flex items-center justify-between cursor-pointer">
              <div className="flex flex-col">
                <span className="font-bold text-sm">Standard Delivery</span>
                <span className="text-xs text-gray-500">3-5 Business Days</span>
              </div>
              <span className="font-bold text-green-600 text-sm">Free</span>
            </div>
             <div className="bg-white dark:bg-white/5 p-4 rounded-xl shadow-sm border border-transparent flex items-center justify-between opacity-60 cursor-pointer">
              <div className="flex flex-col">
                <span className="font-bold text-sm">Express Delivery</span>
                <span className="text-xs text-gray-500">1-2 Business Days</span>
              </div>
              <span className="font-bold text-[#1b0d12] dark:text-white text-sm">$12.00</span>
            </div>
          </div>
        </section>

        {/* Order Breakdown */}
        <section className="pt-2">
            <h3 className="font-bold text-lg mb-3">Order Total</h3>
            <div className="bg-white dark:bg-white/5 p-4 rounded-xl shadow-sm space-y-3">
                <div className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Subtotal</span>
                    <span className="font-semibold">${cartTotal.toFixed(2)}</span>
                </div>
                 <div className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Shipping</span>
                    <span className="font-semibold text-green-600">Free</span>
                </div>
                 <div className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Tax</span>
                    <span className="font-semibold">$10.72</span>
                </div>
                <div className="border-t border-gray-100 dark:border-gray-700 pt-3 flex justify-between items-center">
                    <span className="font-bold text-lg">Total</span>
                    <span className="font-bold text-xl text-primary">${finalTotal.toFixed(2)}</span>
                </div>
            </div>
        </section>
      </div>

      {/* Sticky Bottom Pay Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-background-dark/90 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800 p-4 pb-8 max-w-[600px] mx-auto">
        <button onClick={handlePlaceOrder} className="w-full bg-primary text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/25 active:scale-[0.98] transition-transform">
          <span>Place Order</span>
          <span className="material-symbols-outlined text-[18px]">check</span>
        </button>
      </div>
    </div>
  );
};

export default Checkout;
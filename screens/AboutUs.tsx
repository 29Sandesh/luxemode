import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutUs: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col text-[#1b0d12] dark:text-white">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-800">
        <button onClick={() => navigate(-1)} className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors active:scale-90">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h1 className="text-lg font-bold tracking-tight">About Us</h1>
        <div className="size-10"></div>
      </div>

      <div className="p-6 flex flex-col items-center text-center">
          <div className="size-24 bg-primary text-white rounded-3xl flex items-center justify-center mb-6 shadow-xl shadow-primary/30">
               <span className="material-symbols-outlined text-5xl">diamond</span>
          </div>
          
          <h2 className="text-2xl font-black mb-2 tracking-tight">LUXE MODE</h2>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-8">Version 4.12.0</p>

          <div className="bg-white dark:bg-white/5 rounded-xl p-6 shadow-sm mb-8 text-left w-full">
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 mb-4">
                  Luxe Mode is a premier fashion destination tailored for the modern individual. We believe that style is a way to say who you are without having to speak.
              </p>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  Our mission is to bring you the latest trends, timeless classics, and high-quality garments that empower you to look and feel your best, every single day.
              </p>
          </div>

          <div className="w-full space-y-3">
               <button className="w-full bg-white dark:bg-white/5 p-4 rounded-xl flex items-center justify-between hover:bg-gray-50 dark:hover:bg-white/10 transition-colors">
                   <div className="flex items-center gap-3">
                       <span className="material-symbols-outlined text-gray-500">description</span>
                       <span className="font-semibold text-sm">Terms of Service</span>
                   </div>
                   <span className="material-symbols-outlined text-gray-400 text-sm">chevron_right</span>
               </button>
               <button className="w-full bg-white dark:bg-white/5 p-4 rounded-xl flex items-center justify-between hover:bg-gray-50 dark:hover:bg-white/10 transition-colors">
                   <div className="flex items-center gap-3">
                       <span className="material-symbols-outlined text-gray-500">privacy_tip</span>
                       <span className="font-semibold text-sm">Privacy Policy</span>
                   </div>
                   <span className="material-symbols-outlined text-gray-400 text-sm">chevron_right</span>
               </button>
               <button className="w-full bg-white dark:bg-white/5 p-4 rounded-xl flex items-center justify-between hover:bg-gray-50 dark:hover:bg-white/10 transition-colors">
                   <div className="flex items-center gap-3">
                       <span className="material-symbols-outlined text-gray-500">star</span>
                       <span className="font-semibold text-sm">Rate Us</span>
                   </div>
                   <span className="material-symbols-outlined text-gray-400 text-sm">chevron_right</span>
               </button>
          </div>

          <p className="mt-12 text-xs text-gray-400">© 2024 Luxe Mode Inc. All rights reserved.</p>
      </div>
    </div>
  );
};

export default AboutUs;
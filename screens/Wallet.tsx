import React from 'react';
import { useNavigate } from 'react-router-dom';

const Wallet: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col text-[#1b0d12] dark:text-white">
      <div className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-800">
        <button onClick={() => navigate(-1)} className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h1 className="text-lg font-bold tracking-tight">Payment Methods</h1>
        <button className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined">add</span>
        </button>
      </div>

      <div className="p-4 space-y-4">
        {/* Visa Card */}
        <div className="relative h-48 w-full rounded-2xl p-6 text-white flex flex-col justify-between overflow-hidden shadow-lg" 
             style={{ background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)' }}>
          <div className="absolute top-0 right-0 p-36 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          
          <div className="flex justify-between items-start z-10">
             <span className="font-mono text-xl tracking-widest">VISA</span>
             <span className="material-symbols-outlined">contactless</span>
          </div>

          <div className="z-10">
            <p className="font-mono text-xl tracking-widest mb-4">**** **** **** 4242</p>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[10px] uppercase opacity-70 mb-1">Card Holder</p>
                <p className="font-medium tracking-wide">JORDAN SMITH</p>
              </div>
              <div>
                <p className="text-[10px] uppercase opacity-70 mb-1">Expires</p>
                <p className="font-medium tracking-wide">12/25</p>
              </div>
            </div>
          </div>
        </div>

        {/* MasterCard */}
        <div className="bg-white dark:bg-white/5 p-4 rounded-xl shadow-sm border border-transparent dark:border-white/5 flex items-center gap-4">
             <div className="flex size-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-white/10 shrink-0">
                <div className="flex -space-x-3">
                    <div className="size-6 rounded-full bg-red-500/80"></div>
                    <div className="size-6 rounded-full bg-yellow-500/80"></div>
                </div>
            </div>
            <div className="flex-1">
              <p className="font-bold">MasterCard</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">**** **** **** 8833</p>
            </div>
            <button className="text-gray-400 hover:text-red-500">
                <span className="material-symbols-outlined">delete</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Wallet;

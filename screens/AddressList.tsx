import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddressList: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col text-[#1b0d12] dark:text-white">
      {/* Top App Bar */}
      <div className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-800">
        <button onClick={() => navigate(-1)} className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h1 className="text-lg font-bold tracking-tight">Addresses</h1>
        <button className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined">add</span>
        </button>
      </div>

      <div className="p-4 space-y-4">
        <div className="bg-white dark:bg-white/5 p-4 rounded-xl shadow-sm border border-primary/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">DEFAULT</div>
          <div className="flex items-start gap-4">
            <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
              <span className="material-symbols-outlined filled">home</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <p className="font-bold">Home</p>
                <button className="text-gray-400 hover:text-primary"><span className="material-symbols-outlined text-[20px]">edit</span></button>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                Jordan Smith<br/>
                123 Fashion Ave, Suite 4B<br/>
                New York, NY 10001<br/>
                United States<br/>
                +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-white/5 p-4 rounded-xl shadow-sm border border-transparent dark:border-white/5">
          <div className="flex items-start gap-4">
            <div className="flex size-10 items-center justify-center rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 shrink-0">
              <span className="material-symbols-outlined">work</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <p className="font-bold">Work</p>
                <button className="text-gray-400 hover:text-primary"><span className="material-symbols-outlined text-[20px]">edit</span></button>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                Jordan Smith<br/>
                456 Corporate Blvd, Floor 12<br/>
                San Francisco, CA 94105<br/>
                United States
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressList;

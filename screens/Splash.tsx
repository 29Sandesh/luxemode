import React from 'react';

const Splash: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#1b0d12] text-[#f8f6f6] overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2a151d] via-[#1b0d12] to-[#000000] opacity-80"></div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Animated Logo Container */}
        <div className="relative mb-12 flex flex-col items-center">
            <div className="absolute inset-0 bg-primary blur-[80px] opacity-20 animate-pulse"></div>
            <h1 className="text-7xl font-black tracking-tighter leading-none mix-blend-overlay animate-[slideUp_1s_ease-out_forwards]">
                LUXE
            </h1>
            <h1 className="text-7xl font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-primary to-white animate-[slideUp_1.2s_ease-out_forwards_0.2s] -mt-2">
                MODE
            </h1>
        </div>

        {/* Separator Line Animation */}
        <div className="w-0 h-[2px] bg-white/20 mb-8 animate-[expandWidth_1s_ease-out_forwards_0.8s]"></div>

        {/* Tagline */}
        <p className="text-xs font-bold tracking-[0.3em] uppercase opacity-0 animate-[fadeIn_1s_ease-out_forwards_1.2s]">
            Redefining Style
        </p>
      </div>

      {/* Loading Bar */}
      <div className="absolute bottom-12 left-8 right-8">
          <div className="h-[2px] w-full bg-white/10 overflow-hidden">
              <div className="h-full bg-primary w-full origin-left animate-[loadProgress_2.5s_cubic-bezier(0.22,1,0.36,1)_forwards]"></div>
          </div>
          <div className="flex justify-between mt-2">
              <span className="text-[10px] font-mono text-gray-500 animate-pulse">INITIALIZING EXPERIENCE...</span>
              <span className="text-[10px] font-mono text-primary font-bold">100%</span>
          </div>
      </div>

      <style>{`
        @keyframes slideUp {
            from { transform: translateY(40px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        @keyframes expandWidth {
            from { width: 0; }
            to { width: 80px; }
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes loadProgress {
            0% { transform: scaleX(0); }
            40% { transform: scaleX(0.4); }
            70% { transform: scaleX(0.6); }
            100% { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
};

export default Splash;
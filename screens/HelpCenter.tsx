import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className="border-b border-gray-100 dark:border-gray-800 last:border-none">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-4 px-4 flex justify-between items-center text-left hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
            >
                <span className="font-semibold text-sm">{question}</span>
                <span className={`material-symbols-outlined text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}>expand_more</span>
            </button>
            {isOpen && (
                <div className="px-4 pb-4 text-sm text-gray-500 dark:text-gray-400 leading-relaxed animate-fade-in">
                    {answer}
                </div>
            )}
        </div>
    );
};

const HelpCenter: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('faq');

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col text-[#1b0d12] dark:text-white">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-800">
        <button onClick={() => navigate(-1)} className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors active:scale-90">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h1 className="text-lg font-bold tracking-tight">Help Center</h1>
        <div className="size-10"></div>
      </div>

      <div className="p-4">
          <div className="bg-white dark:bg-white/5 p-1 rounded-xl flex mb-6">
              <button 
                onClick={() => setActiveTab('faq')}
                className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'faq' ? 'bg-[#1b0d12] dark:bg-white text-white dark:text-[#1b0d12] shadow-sm' : 'text-gray-500 hover:text-gray-800'}`}
              >
                  FAQ
              </button>
              <button 
                onClick={() => setActiveTab('contact')}
                className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'contact' ? 'bg-[#1b0d12] dark:bg-white text-white dark:text-[#1b0d12] shadow-sm' : 'text-gray-500 hover:text-gray-800'}`}
              >
                  Contact Us
              </button>
          </div>

          {activeTab === 'faq' ? (
              <div className="bg-white dark:bg-white/5 rounded-xl overflow-hidden shadow-sm">
                  <FAQItem question="How do I track my order?" answer="You can track your order by going to the 'My Orders' section in your profile. Click on the order you want to track to see its current status." />
                  <FAQItem question="What is your return policy?" answer="We offer a 30-day return policy for all unused items in their original packaging. Please visit our Returns page to initiate a return." />
                  <FAQItem question="Do you ship internationally?" answer="Yes, we ship to over 50 countries worldwide. Shipping costs and times vary depending on the destination." />
                  <FAQItem question="How can I change my shipping address?" answer="You can manage your shipping addresses in the 'Addresses' section of your profile or during the checkout process." />
                  <FAQItem question="What payment methods do you accept?" answer="We accept major credit cards (Visa, MasterCard, Amex), PayPal, and Apple Pay." />
              </div>
          ) : (
              <div className="space-y-4">
                  <div className="bg-white dark:bg-white/5 p-5 rounded-xl shadow-sm flex items-center gap-4">
                      <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                          <span className="material-symbols-outlined">headset_mic</span>
                      </div>
                      <div>
                          <p className="font-bold">Customer Service</p>
                          <p className="text-sm text-gray-500">Available 24/7</p>
                          <p className="text-sm font-semibold mt-1">+1 (800) 123-4567</p>
                      </div>
                  </div>
                   <div className="bg-white dark:bg-white/5 p-5 rounded-xl shadow-sm flex items-center gap-4">
                      <div className="size-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                          <span className="material-symbols-outlined">mail</span>
                      </div>
                      <div>
                          <p className="font-bold">Email Support</p>
                          <p className="text-sm text-gray-500">Get a response within 24h</p>
                          <p className="text-sm font-semibold mt-1">support@luxemode.com</p>
                      </div>
                  </div>
                   <div className="bg-white dark:bg-white/5 p-5 rounded-xl shadow-sm flex items-center gap-4">
                      <div className="size-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                          <span className="material-symbols-outlined">chat</span>
                      </div>
                      <div>
                          <p className="font-bold">Live Chat</p>
                          <p className="text-sm text-gray-500">Chat with our agents</p>
                          <button className="text-xs bg-black dark:bg-white text-white dark:text-black px-3 py-1.5 rounded-full mt-2 font-bold">Start Chat</button>
                      </div>
                  </div>
              </div>
          )}
      </div>
    </div>
  );
};

export default HelpCenter;
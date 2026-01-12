import React from 'react';
import { useNavigate } from 'react-router-dom';

const Orders: React.FC = () => {
  const navigate = useNavigate();

  const orders = [
    { id: '#20392', date: 'Today', status: 'Processing', total: 144.72, items: 2, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxcfOCDuKuKrG4hsC1dpgZWjJsy-FFLpCKHIwtlJ8K9CoImoUZDoKIWNHi00yV6yzUnlIh1HXvVeVZgSRQDLwTB70eNZRlio5sw7opWIy8DWAFTfPhIMYixWr_31w9nyT2gNBn4AJbvXFyGS8XJ08FqZr-eH04uQfvwTKQ_cTKas7ccQeVKqlWPbbyUeduAxRx8F_U2266aLyCy3nXkQySIfTmg18yjoO87NE3paaPnjQxrfV94aczgTY6EePMr-PMvhKVjcYW-SW7' },
    { id: '#19201', date: 'Aug 12, 2024', status: 'Delivered', total: 89.00, items: 1, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0zXXBnruhZblZ9YE1uCrNmC1RkKXvRkzQLFIFc-KZg2uOoFI_q1irQt5gOXXzpZMHsdv9UTvdX5uU8CWEiS3C-U34W8gkNHhOD8SfnnhynbX0gtUeqiqB_QoVT6KV0BVm4mIfOXAUVeFYPjhfV6ZUzP0XutSHYE_Ur7VZvuzI5cGTGanZRaIBHjDWIbtq__u7Mtm9Kz7iHQ2j1NTtfxa8v8d3ka3cCCDG97k_UJwZo4cqElyO3SOqKjVypNZhzecDJi1yxi1VVvjv' },
    { id: '#18442', date: 'Jul 28, 2024', status: 'Delivered', total: 210.50, items: 3, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0bEAGkd5tgZGHo44R1jFZr7TBYyy1R1NdOgVU9_2EtDRjgWRVtMihsqSrat7VDDPuigHFAQcoiAnfjXT-w50gIX8_zvH7ra3wSpY2jGR2z0LyO_PfkcqKub-2iued3RtbQ5I7x7CdVQdq8UxfaWtAkPOVhE3QVpWxf4v1FukcoXODyZMqwx6HNL7WWNffW03wzKl-9fr2MfaSVKAd2IdMWYL3lNokHLt9LjiHmYsYaOSvQURsw0et8LFtn5ojz5g6qxYPURGYYMHe' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Processing': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
      case 'Delivered': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col text-[#1b0d12] dark:text-white">
      {/* Top App Bar */}
      <div className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-800">
        <button onClick={() => navigate(-1)} className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h1 className="text-lg font-bold tracking-tight">My Orders</h1>
        <div className="size-10"></div>
      </div>

      <div className="p-4 space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white dark:bg-white/5 p-4 rounded-xl shadow-sm border border-transparent dark:border-white/5 active:scale-[0.99] transition-transform cursor-pointer">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="font-bold text-lg">{order.id}</p>
                <p className="text-sm text-gray-500">{order.date}</p>
              </div>
              <span className={`px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider ${getStatusColor(order.status)}`}>
                {order.status}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="size-16 bg-cover bg-center rounded-lg bg-gray-100" style={{ backgroundImage: `url("${order.image}")` }}></div>
              <div className="flex-1">
                <p className="font-semibold">{order.items} {order.items === 1 ? 'Item' : 'Items'}</p>
                <p className="text-primary font-bold">${order.total.toFixed(2)}</p>
              </div>
              <span className="material-symbols-outlined text-gray-400">chevron_right</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;

import React from 'react';
import { YOUTUBE_CHANNELS } from '../../config/home-sections';

export const YouTubeSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Our YouTube Ecosystem</h2>
            <p className="text-gray-500">Free high-quality lectures and strategy videos for every board and exam.</p>
          </div>
          <button className="px-8 py-3 bg-red-600 text-white rounded-[0.375rem] font-bold hover:bg-red-700 transition-colors flex items-center gap-2 w-fit">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
            Subscribe Now
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {YOUTUBE_CHANNELS.map((channel) => (
            <a 
              key={channel.id}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-red-100 hover:shadow-xl hover:shadow-red-500/5 transition-all group"
            >
              <div className="aspect-video relative overflow-hidden bg-gray-100">
                <img 
                  src={channel.image} 
                  alt={channel.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold rounded-full">
                    {channel.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold mb-1 group-hover:text-red-600 transition-colors line-clamp-1">{channel.name}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  {channel.subscribers} Subscribers
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

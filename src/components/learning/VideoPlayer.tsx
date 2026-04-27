import React from 'react';

interface VideoPlayerProps {
  url: string;
  title: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ url, title }) => {
  return (
    <div className="w-full bg-black rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 aspect-video relative group">
      <video 
        key={url}
        controls
        className="w-full h-full object-contain"
        poster="/assets/images/course.png"
      >
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay Title */}
      <div className="absolute top-0 left-0 right-0 p-8 bg-gradient-to-b from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <h2 className="text-white font-black text-lg md:text-xl drop-shadow-lg truncate">
          {title}
        </h2>
      </div>
      
      {/* Quality Badge */}
      <div className="absolute bottom-20 right-8 px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-white text-[10px] font-black uppercase tracking-widest">1080p HD</span>
      </div>
    </div>
  );
};

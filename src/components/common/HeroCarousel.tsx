import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SLIDES = [
  {
    image: '/assets/images/class9_course.png',
    link: '/batches'
  },
  {
    image: '/assets/images/class10_course.png',
    link: '/batches'
  },
  {
    image: '/assets/images/class11_course.png',
    link: '/batches'
  },
  {
    image: '/assets/images/class12_course.png',
    link: '/batches'
  }
];

export const HeroCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrent((current + 1) % SLIDES.length);
  };
  
  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrent((current - 1 + SLIDES.length) % SLIDES.length);
  };

  return (
    <section className="relative h-[400px] overflow-hidden bg-white">
      <div className="container h-full w-full relative">
        {/* Slides Container */}
        <div 
          className="flex w-full h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {SLIDES.map((slide, i) => (
            <Link 
              key={i}
              to={slide.link}
              className="w-full h-full flex-shrink-0 block relative bg-gray-50"
            >
              <img 
                src={slide.image} 
                alt="" 
                className={`w-full h-full `} 
              />
            </Link>
          ))}
        </div>

        {/* Controls */}
        <div className="absolute bottom-6 right-10 flex gap-3 z-20">
          <button 
            onClick={prev}
            className="w-10 h-10 rounded-full bg-black/10 backdrop-blur-md flex items-center justify-center text-gray-800 hover:bg-black/20 transition-all border-none cursor-pointer"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={next}
            className="w-10 h-10 rounded-full bg-black/10 backdrop-blur-md flex items-center justify-center text-gray-800 hover:bg-black/20 transition-all border-none cursor-pointer"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {SLIDES.map((_, i) => (
            <button 
              key={i}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setCurrent(i);
              }}
              className={`h-1.5 transition-all duration-300 rounded-full border-none cursor-pointer ${i === current ? 'w-8 bg-[var(--color-primary)]' : 'w-2 bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

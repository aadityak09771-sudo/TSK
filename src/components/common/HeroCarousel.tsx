import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  {
    image: '/assets/images/hero.png',
    title: 'Master Your Academics Today',
    subtitle: 'Comprehensive learning resources and test series for classes 9 to 12. Laying the foundation for future competitive exams.'
  },
  {
    image: '/assets/images/future_leaders.png',
    title: 'A Future Built on Understanding',
    subtitle: "Not just memorization. We prepare students to think independently and lead tomorrow's world."
  },
  {
    image: '/assets/images/mindset.png',
    title: 'Cultivating an Independent Mindset',
    subtitle: 'Engaging with concepts directly. Fostering a true love for academics.'
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

  const next = () => setCurrent((current + 1) % SLIDES.length);
  const prev = () => setCurrent((current - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section className="relative h-[350px] overflow-hidden bg-gray-900">
      {SLIDES.map((slide, i) => (
        <div 
          key={i}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${i === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'}`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img src={slide.image} alt="" className="w-full h-full object-cover opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/40 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative container h-full flex flex-col justify-center max-w-2xl text-white">
            <h1 className="text-4xl font-black leading-tight mb-4 animate-in slide-in-from-left duration-700">
              {slide.title}
            </h1>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed animate-in slide-in-from-left duration-1000">
              {slide.subtitle}
            </p>
            <div className="flex gap-4 animate-in slide-in-from-bottom duration-1000">
              <button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white px-6 py-3 rounded-full font-bold transition-all hover:scale-105 shadow-xl shadow-blue-500/20 uppercase tracking-widest text-xs">
                Explore Courses
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Controls */}
      <div className="absolute bottom-10 right-10 flex gap-4">
        <button 
          onClick={prev}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={next}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
        {SLIDES.map((_, i) => (
          <div 
            key={i}
            className={`h-1 transition-all duration-300 rounded-full ${i === current ? 'w-12 bg-[var(--color-primary)]' : 'w-4 bg-white/30'}`}
          />
        ))}
      </div>
    </section>
  );
};

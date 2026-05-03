import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './HeroCarousel.css'

const SLIDES = [
  {
    image: '/assets/images/class9_course.png',
    link: '/courses'
  },
  {
    image: '/assets/images/class10_course.png',
    link: '/courses'
  },
  {
    image: '/assets/images/class11_course.png',
    link: '/courses'
  },
  {
    image: '/assets/images/class12_course.png',
    link: '/courses'
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
    <>
      <section className="hero-container">
        {/* Slides Container - keep within container for alignment if needed, or move out for full width */}
        <div className="h-full relative">
          <div 
            className="hero-slider-track"
            style={{ 
              transform: `translateX(-${current * 100}%)`,
              width: '100%',
              height: '100%'
            }}
          >
            {SLIDES.map((slide, i) => (
              <Link 
                key={i}
                to={slide.link}
                className="hero-slide"
                style={{ width: '100%', flexShrink: 0 }}
              >
                <img 
                  src={slide.image} 
                  alt={`Slide ${i + 1}`} 
                  className="w-full h-full object-cover" 
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Controls - Moved outside container for edge-to-edge positioning */}
        <div className="carousel-actions">
          <button 
            onClick={prev}
            className="carousel-arrow-button"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={next}
            className="carousel-arrow-button"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </section>

      {/* Dots - Moved outside hero-container to appear after it */}
      <div className="carousel-dots">
        {SLIDES.map((_, i) => (
          <button 
            key={i}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setCurrent(i);
            }}
            className={`carousel-dot ${i === current ? 'w-8 bg-[var(--color-primary)]' : 'w-2 bg-gray-300'}`}
          />
        ))}
      </div>
    </>
  );
};

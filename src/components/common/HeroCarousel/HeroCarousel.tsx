import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './HeroCarousel.css'

interface HeroSlide {
  image: string;
  link: string;
}

export const HeroCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [slides, setSlides] = useState<HeroSlide[]>([
    {
      image: '/assets/images/hero1.png',
      link: '/courses'
    }
  ]);

  useEffect(() => {
    const fetchSlides = async () => {

      // Mock API call simulation with 2s delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const data: HeroSlide[] = [
        {
          image: '/assets/images/hero1.png',
          link: '/courses'
        },
        // {
        //   image: '/assets/images/class10_course.png',
        //   link: '/courses'
        // },
        // {
        //   image: '/assets/images/class11_course.png',
        //   link: '/courses'
        // },
        // {
        //   image: '/assets/images/class12_course.png',
        //   link: '/courses'
        // }
      ];
      
      setSlides(data);
    };

    fetchSlides();
  }, []);

  useEffect(() => {
    if (slides.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides]);

  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (slides.length > 1) {
      setCurrent((current + 1) % slides.length);
    }
  };
  
  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (slides.length > 1) {
      setCurrent((current - 1 + slides.length) % slides.length);
    }
  };

  if (slides.length === 0) return null;

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
            {slides.map((slide, i) => (
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

        {/* Controls - Hide if only 1 slide */}
        {slides.length > 1 && (
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
        )}
      </section>

      {/* Dots - Hide if only 1 slide */}
      {slides.length > 1 && (
        <div className="carousel-dots">
          {slides.map((_, i) => (
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
      )}
    </>
  );
};

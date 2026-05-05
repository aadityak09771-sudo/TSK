import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, GraduationCap, Award } from 'lucide-react';
import { FACULTY_DATA } from '../../config/home-sections';

export const FacultyCarousel: React.FC = () => {
  const [itemsToShow, setItemsToShow] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(itemsToShow);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // Extend data for circular loop: [last items] + [original items] + [first items]
  const extendedData = [
    ...FACULTY_DATA.slice(-itemsToShow),
    ...FACULTY_DATA,
    ...FACULTY_DATA.slice(0, itemsToShow)
  ];

  useEffect(() => {
    const handleResize = () => {
      let newItemsToShow = 3;
      if (window.innerWidth < 768) newItemsToShow = 1;
      else if (window.innerWidth < 1024) newItemsToShow = 2;
      
      setItemsToShow(newItemsToShow);
      setCurrentIndex(newItemsToShow); // Reset to start of real items on resize
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTransitionEnd = () => {
    if (currentIndex >= FACULTY_DATA.length + itemsToShow) {
      setIsTransitioning(false);
      setCurrentIndex(itemsToShow);
    } else if (currentIndex <= 0) {
      setIsTransitioning(false);
      setCurrentIndex(FACULTY_DATA.length);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      // Small delay to allow state update without transition
      const timer = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const next = useCallback(() => {
    if (isTransitioning) {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [isTransitioning]);

  const prev = useCallback(() => {
    if (isTransitioning) {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [isTransitioning]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-1.5">Learn from the Best</h2>
            <p className="text-gray-500">Our faculty members are veterans in their respective fields with proven track records.</p>
          </div>
        </div>

        <div 
          className="relative px-6 md:px-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Buttons */}
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all cursor-pointer shadow-lg z-20"
            aria-label="Previous faculty"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all cursor-pointer shadow-lg z-20"
            aria-label="Next faculty"
          >
            <ChevronRight size={24} />
          </button>

          <div className="overflow-hidden">
            <div 
              className="flex"
              onTransitionEnd={handleTransitionEnd}
              style={{ 
                transform: `translateX(-${currentIndex * (100 / extendedData.length)}%)`,
                width: `${(extendedData.length / itemsToShow) * 100}%`,
                transition: isTransitioning ? 'transform 700ms cubic-bezier(0.45, 0, 0.55, 1)' : 'none'
              }}
            >
              {extendedData.map((faculty, i) => (
                <div 
                  key={`${faculty.id}-${i}`}
                  className="px-4"
                  style={{ width: `${100 / extendedData.length}%` }}
                >
                  <div className="bg-gray-50 rounded-[2rem] overflow-hidden group border border-gray-100 hover:border-[var(--color-primary-light)] hover:shadow-2xl hover:shadow-[var(--color-primary)]/5 transition-all duration-500 h-full">
                    <div className="relative overflow-hidden bg-gray-200">
                      <img 
                        src={faculty.image} 
                        alt={faculty.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 text-white">
                        <div className="flex items-center gap-2 mb-2 text-[var(--color-primary-light)]">
                          <Award size={18} />
                          <span className="font-bold text-xs uppercase tracking-[0.2em]">{faculty.tag}</span>
                        </div>
                        <p className="text-gray-300 text-xs leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          Expert mentorship focusing on conceptual clarity and exam-oriented preparation strategies.
                        </p>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-[var(--color-primary)] mb-2 font-bold text-xs uppercase tracking-[0.2em]">
                        <GraduationCap size={20} />
                        {faculty.subject}
                      </div>
                      <h3 className="text-xl font-bold mb-0.5 group-hover:text-[var(--color-primary)] transition-colors">{faculty.name}</h3>
                      <p className="text-gray-500 text-sm font-semibold">{faculty.experience}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

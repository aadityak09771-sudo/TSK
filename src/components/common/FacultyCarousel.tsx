import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, GraduationCap, Award } from 'lucide-react';
import { FACULTY_DATA } from '../../config/home-sections';

export const FacultyCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, FACULTY_DATA.length - itemsToShow);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl font-black mb-2">Learn from the Best</h2>
            <p className="text-gray-500">Our faculty members are veterans in their respective fields with proven track records.</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all cursor-pointer shadow-sm"
              aria-label="Previous faculty"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all cursor-pointer shadow-sm"
              aria-label="Next faculty"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.45,0,0.55,1)]"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
                width: `${(FACULTY_DATA.length / itemsToShow) * 100}%`
              }}
            >
              {FACULTY_DATA.map((faculty) => (
                <div 
                  key={faculty.id}
                  className="px-4"
                  style={{ width: `${100 / FACULTY_DATA.length}%` }}
                >
                  <div className="bg-gray-50 rounded-[2rem] overflow-hidden group border border-gray-100 hover:border-[var(--color-primary-light)] hover:shadow-2xl hover:shadow-[var(--color-primary)]/5 transition-all duration-500 h-full">
                    <div className="aspect-[4/5] relative overflow-hidden bg-gray-200">
                      <img 
                        src={faculty.image} 
                        alt={faculty.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
                        <div className="flex items-center gap-2 mb-3 text-[var(--color-primary-light)]">
                          <Award size={18} />
                          <span className="font-bold text-xs uppercase tracking-[0.2em]">{faculty.tag}</span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          Expert mentorship focusing on conceptual clarity and exam-oriented preparation strategies.
                        </p>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-2 text-[var(--color-primary)] mb-3 font-bold text-xs uppercase tracking-[0.2em]">
                        <GraduationCap size={20} />
                        {faculty.subject}
                      </div>
                      <h3 className="text-2xl font-black mb-1 group-hover:text-[var(--color-primary)] transition-colors">{faculty.name}</h3>
                      <p className="text-gray-500 font-semibold">{faculty.experience}</p>
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

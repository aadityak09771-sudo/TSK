import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CATEGORIES } from '../../config/studentData';

export const AllCategories: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-white overflow-hidden relative">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">All Categories</h2>
          <p className="text-gray-500 text-lg mx-auto">
            Discover a wide range of courses tailored to help you master new skills and excel in your academic journey.
          </p>
        </div>

        <div className="relative group">
          {/* Navigation Buttons */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center text-gray-600 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all duration-300 -ml-4 md:-ml-6"
            aria-label="Previous categories"
          >
            <ChevronLeft size={28} />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center text-gray-600 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all duration-300 -mr-4 md:-mr-6"
            aria-label="Next categories"
          >
            <ChevronRight size={28} />
          </button>

          {/* Scroll Container */}
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth pb-12 px-4"
          >
            {CATEGORIES.map((category) => (
              <div 
                key={category.id}
                className="flex-shrink-0 w-[220px] md:w-[280px] group cursor-pointer"
              >
                <div className="bg-gray-50/50 rounded-[3rem] p-10 aspect-square flex flex-col items-center justify-center gap-8 border border-gray-50 group-hover:bg-white group-hover:border-[var(--color-primary)] group-hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] transition-all duration-500 relative overflow-hidden">
                  {/* Decorative element */}
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-[var(--color-primary)]/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center text-6xl shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 z-10">
                    {category.icon}
                  </div>
                  <div className="text-center z-10">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                      Explore Courses
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { CATEGORIES } from '../../config/studentData';

export const CategoryCard: React.FC<{ category: typeof CATEGORIES[0] }> = ({ category }) => {
  return (
    <div className="flex-shrink-0 group cursor-pointer">
      <div className="w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-[2rem] border border-gray-100 shadow-sm flex flex-col items-center justify-center gap-3 group-hover:shadow-xl group-hover:shadow-blue-500/10 group-hover:border-[var(--color-primary)] transition-all duration-300">
        <span className="text-3xl sm:text-4xl transform group-hover:scale-110 transition-transform duration-300">
          {category.icon}
        </span>
      </div>
      <p className="mt-4 text-center text-xs font-black text-gray-700 group-hover:text-[var(--color-primary)] transition-colors whitespace-nowrap">
        {category.name}
      </p>
    </div>
  );
};

export const CategoryScroller: React.FC = () => {
  return (
    <div className="relative">
      <div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar scroll-smooth">
        {CATEGORIES.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

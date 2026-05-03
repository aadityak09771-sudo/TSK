import React from 'react';

interface CourseFilterTabsProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export const CourseFilterTabs: React.FC<CourseFilterTabsProps> = ({ activeFilter, onFilterChange }) => {
  const filters = ['All', 'School Courses', 'JEE', 'NEET', 'Foundation', 'Dropper'];

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${
            activeFilter === filter
              ? 'bg-[var(--color-primary)] text-white shadow-lg shadow-blue-500/30'
              : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

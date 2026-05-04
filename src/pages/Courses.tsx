import React, { useState, useMemo } from 'react';
import { CourseHero } from '../components/courses/CourseHero';
import { CourseFilterTabs } from '../components/courses/CourseFilterTabs';
import { CourseCard } from '../components/courses/CourseCard';
import { StudentGetsSection } from '../components/courses/StudentGetsSection';
import { BenefitsSection } from '../components/courses/BenefitsSection';
import { CourseComparisonTable } from '../components/courses/CourseComparisonTable';
import { FAQAccordion } from '../components/courses/FAQAccordion';
import { COURSES_DATA } from '../config/courses-data';

export const Courses: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredCourses = useMemo(() => {
    if (activeFilter === 'All') return COURSES_DATA;
    return COURSES_DATA.filter(course => course.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="bg-white min-h-screen">
      {/* <CourseHero /> */}
      
      <section className="py-5 bg-white" id="explore">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore Our Courses</h2>
            {/* <p className="text-gray-500">Filter courses by category to find the perfect course for your goals.</p> */}
          </div>

          <CourseFilterTabs activeFilter={activeFilter} onFilterChange={setActiveFilter} />

          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <CourseCard 
                  key={course.id} 
                  course={course} 
                />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center bg-gray-50 rounded-[2rem] border border-dashed border-gray-200">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
                🔍
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No courses found</h3>
              <p className="text-gray-500">We couldn't find any courses matching "{activeFilter}". <br />Try selecting a different category.</p>
              <button 
                onClick={() => setActiveFilter('All')}
                className="mt-6 text-[var(--color-primary)] font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      <StudentGetsSection />
      <BenefitsSection />
      <CourseComparisonTable />
      <FAQAccordion />
    </div>
  );
};

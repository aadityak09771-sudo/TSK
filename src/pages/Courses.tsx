import React, { useState, useMemo } from 'react';
import { CourseHero } from '../components/batches/CourseHero';
import { CourseFilterTabs } from '../components/batches/CourseFilterTabs';
import { BatchCard } from '../components/batches/BatchCard';
import { StudentGetsSection } from '../components/batches/StudentGetsSection';
import { BenefitsSection } from '../components/batches/BenefitsSection';
import { CourseComparisonTable } from '../components/batches/CourseComparisonTable';
import { FAQAccordion } from '../components/batches/FAQAccordion';
import { BATCHES_DATA } from '../config/batches';

export const Courses: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredBatches = useMemo(() => {
    if (activeFilter === 'All') return BATCHES_DATA;
    return BATCHES_DATA.filter(batch => batch.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="bg-white min-h-screen">
      <CourseHero />
      
      <section className="py-20 bg-white" id="explore">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Explore Our Batches</h2>
            <p className="text-gray-500">Filter courses by category to find the perfect batch for your goals.</p>
          </div>

          <CourseFilterTabs activeFilter={activeFilter} onFilterChange={setActiveFilter} />

          {filteredBatches.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBatches.map((batch) => (
                <BatchCard 
                  key={batch.id} 
                  batch={batch} 
                />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center bg-gray-50 rounded-[2rem] border border-dashed border-gray-200">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
                🔍
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No batches found</h3>
              <p className="text-gray-500">We couldn't find any batches matching "{activeFilter}". <br />Try selecting a different category.</p>
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

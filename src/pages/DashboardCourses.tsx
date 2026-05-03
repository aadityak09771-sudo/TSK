import React, { useState, useMemo } from 'react';
import { StudentDashboardLayout } from '../layouts/StudentDashboardLayout';
import { Store, Search, Filter } from 'lucide-react';
import { COURSES_DATA } from '../config/courses-data';
import { CourseCard } from '../components/courses/CourseCard';
import { CourseFilterTabs } from '../components/courses/CourseFilterTabs';

export const DashboardCourses: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredCourses = useMemo(() => {
    let result = COURSES_DATA;
    
    // Category filter
    if (activeFilter !== 'All') {
      result = result.filter(course => course.category === activeFilter);
    }
    
    // Search filter
    if (searchQuery) {
      result = result.filter(course => 
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return result;
  }, [activeFilter, searchQuery]);

  return (
    <StudentDashboardLayout 
      searchQuery={searchQuery} 
      onSearchChange={setSearchQuery}
    >
      <div className="space-y-12 pt-[30px]">
        {/* Header Section */}
        <section>
          <div className="pt-[50px] flex flex-col gap-2 mb-8">
            <div className="flex items-center gap-2 text-[var(--color-primary)] font-black uppercase tracking-[0.2em] text-[10px]">
              <Store size={14} />
              Explore
            </div>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">Our Courses</h2>
            <p className="text-gray-500">Discover top-rated courses to master your exams and build your career.</p>
          </div>
        </section>

        {/* Filters */}
        <section className="bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex-grow">
              <CourseFilterTabs activeFilter={activeFilter} onFilterChange={setActiveFilter} />
            </div>
          </div>
        </section>

        {/* Course Grid */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-black text-gray-900 tracking-tight">
              {activeFilter === 'All' ? 'Available Courses' : `${activeFilter} Courses`}
              <span className="ml-3 text-sm text-gray-400 font-bold">({filteredCourses.length})</span>
            </h3>
          </div>

          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <CourseCard 
                  key={course.id} 
                  course={course} 
                />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center bg-gray-50 rounded-[3rem] border border-dashed border-gray-200">
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-6 text-gray-300 shadow-sm">
                <Search size={40} />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-500 max-w-xs mx-auto">We couldn't find any courses matching your current filters or search query.</p>
              <button 
                onClick={() => { setActiveFilter('All'); setSearchQuery(''); }}
                className="mt-6 px-6 py-2.5 bg-white border border-gray-200 rounded-xl text-xs font-black text-gray-600 hover:bg-gray-50 transition-all uppercase tracking-widest"
              >
                Clear all filters
              </button>
            </div>
          )}
        </section>

        {/* Footer Support Banner */}
        <section className="bg-blue-600 rounded-[3rem] p-10 md:p-14 text-white relative overflow-hidden shadow-2xl shadow-blue-500/20">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 pointer-events-none skew-x-12 translate-x-32" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl text-center md:text-left space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/10">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-50">Career Guidance</span>
              </div>
              <h3 className="text-3xl font-black italic tracking-tight leading-tight">Need a <span className="text-blue-200">custom study plan?</span></h3>
              <p className="text-blue-100 font-medium text-lg leading-relaxed">Our expert counselors are here to help you choose the right path for your academic goals.</p>
            </div>
            <button className="w-full md:w-auto px-10 py-5 bg-white text-blue-600 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-blue-50 transition-all shadow-xl shadow-blue-900/20 hover:-translate-y-1 whitespace-nowrap">
              Get Free Counseling
            </button>
          </div>
        </section>
      </div>
    </StudentDashboardLayout>
  );
};

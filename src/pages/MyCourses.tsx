import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Sparkles } from 'lucide-react';
import { StudentDashboardLayout } from '../layouts/StudentDashboardLayout';
import { CategoryScroller } from '../components/dashboard/CategoryScroller';
import { CourseCard } from '../components/dashboard/CourseCard';
import { CourseDetailsModal } from '../components/dashboard/CourseDetailsModal';
import { EmptyState } from '../components/dashboard/EmptyState';
import { BATCH_COURSES, type BatchCourse } from '../config/studentData';

export const MyCourses: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourse, setSelectedCourse] = useState<BatchCourse | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredCourses = useMemo(() => {
    return BATCH_COURSES.filter(course => 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.target.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.language.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleViewDetails = (course: BatchCourse) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleStartLearning = (course: BatchCourse) => {
    setIsModalOpen(false);
    navigate(`/learning/${course.id}`);
    
  };

  return (
    <StudentDashboardLayout 
      searchQuery={searchQuery} 
      onSearchChange={setSearchQuery}
    >
      <div className="space-y-12">
        {/* Header Section */}
        <section>
          <div className="flex flex-col gap-2 mb-8">
            <div className="flex items-center gap-2 text-[var(--color-primary)] font-black uppercase tracking-[0.2em] text-[10px]">
              <Sparkles size={14} />
              Batches
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              Learn a skill and <br />
              <span className="text-[var(--color-primary)]">start earning early</span>
            </h1>
          </div>

          <div className="relative group max-w-xl">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[var(--color-primary)] transition-colors">
              <Search size={20} />
            </div>
            <input 
              type="text" 
              placeholder="Search for your favorite course..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 text-sm font-bold outline-none focus:bg-white focus:border-[var(--color-primary)] focus:ring-4 focus:ring-blue-500/5 transition-all shadow-sm"
            />
          </div>
        </section>

        {/* Categories Section */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-black text-gray-900 tracking-tight">Explore Categories</h2>
          </div>
          <CategoryScroller />
        </section>

        {/* Courses Section */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-black text-gray-900 tracking-tight">Popular Courses</h2>
              <span className="bg-blue-50 text-[var(--color-primary)] text-[10px] font-black px-2.5 py-1 rounded-lg uppercase tracking-wider">
                {filteredCourses.length} Found
              </span>
            </div>
          </div>

          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <CourseCard 
                  key={course.id} 
                  course={course}
                  onViewDetails={handleViewDetails}
                  onStartLearning={handleStartLearning}
                />
              ))}
            </div>
          ) : (
            <EmptyState onClear={() => setSearchQuery('')} />
          )}
        </section>
      </div>

      <CourseDetailsModal 
        course={selectedCourse}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onStartLearning={handleStartLearning}
      />
    </StudentDashboardLayout>
  );
};

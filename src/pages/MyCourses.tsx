import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { StudentDashboardLayout } from '../layouts/StudentDashboardLayout';
import { CourseCard } from '../components/dashboard/CourseCard';
import { CourseDetailsModal } from '../components/dashboard/CourseDetailsModal';
import { EmptyState } from '../components/dashboard/EmptyState';
import { DASHBOARD_COURSES, type DashboardCourse } from '../config/studentData';

export const MyCourses: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourse, setSelectedCourse] = useState<DashboardCourse | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredCourses = useMemo(() => {
    return DASHBOARD_COURSES.filter(course => 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.target.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.language.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleViewDetails = (course: DashboardCourse) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleStartLearning = (course: DashboardCourse) => {
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
              Courses
            </div>
          </div>

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

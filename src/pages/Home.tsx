import React from 'react';
import { HeroCarousel } from '../components/common/HeroCarousel';
import { CourseCard } from '../components/common/CourseCard';
import { COURSE_DATA } from '../config/courses';
import { Ecosystem } from '../components/common/Ecosystem';
import { BookOpen, Award, Users, GraduationCap } from 'lucide-react';

const ACADEMIC_CLASSES = [
  {
    grade: '9th',
    title: 'Class 9th',
    description: 'Building a strong foundation with core science and mathematics concepts for early academic excellence.',
    icon: BookOpen,
    color: '#10B981',
  },
  {
    grade: '10th',
    title: 'Class 10th',
    description: 'Mastering the Board Exam curriculum with focused strategy, clarity, and extensive practice modules.',
    icon: Award,
    color: '#F59E0B',
  },
  {
    grade: '11th',
    title: 'Class 11th',
    description: 'Bridging the gap to advanced academic depth with comprehensive coverage of complex senior secondary topics.',
    icon: Users,
    color: '#8B5CF6',
  },
  {
    grade: '12th',
    title: 'Class 12th',
    description: 'Final Board excellence and competitive readiness through intensive conceptual polishing and mock mastery.',
    icon: GraduationCap,
    color: '#1E40AF',
  },
];

export const Home: React.FC = () => {
  const featuredCourses = COURSE_DATA.filter(c => 
    c.title === 'Class 12th Board Mastery' || 
    c.title === 'Class 11th Foundation Batch' || 
    c.title === 'Class 10th Board Powerpack'
  );

  return (
    <div>
      <HeroCarousel />
      
      <Ecosystem />

      {/* Featured Courses */}
      <section className="py-24 bg-white">
        <div className="container flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl font-black mb-2">Our Core Programs</h2>
            <p className="text-gray-500">Structured curriculums designed to provide maximum clarity</p>
          </div>
          <button className="text-[var(--color-primary)] font-bold border-b-2 border-[var(--color-primary)] pb-1 hover:text-[var(--color-primary-light)] hover:border-[var(--color-primary-light)] transition-all">
            View All Courses
          </button>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredCourses.map((course, i) => (
            <CourseCard key={i} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
};

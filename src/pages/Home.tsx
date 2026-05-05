import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeroCarousel } from '../components/common/HeroCarousel/HeroCarousel';
import { CourseCard } from '../components/common/CourseCard';
import { COURSE_DATA } from '../config/courses';
import { Ecosystem } from '../components/common/Ecosystem/Ecosystem';
import { AllCategories } from '../components/common/AllCategories';
import { StudyResources } from '../components/common/StudyResources';
import { FacultyCarousel } from '../components/common/FacultyCarousel';
import { YouTubeSection } from '../components/common/YouTubeSection';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const featuredCourses = COURSE_DATA.filter(c =>
    c.title === 'Class 12th Board Mastery' ||
    c.title === 'Class 11th Foundation Course' ||
    c.title === 'Class 10th Board Powerpack'
  );

  return (
    <div>
      <HeroCarousel />

      <Ecosystem />

      <AllCategories />

      <StudyResources />

      <FacultyCarousel />

      <YouTubeSection />

      {/* Featured Courses */}
      <section className="py-24 bg-white">

        <div className="container flex justify-between items-end mb-16">
          <div className="mb-2">
            <h2 className="text-3xl font-bold mb-2">Our Core Programs</h2>
            <p className="text-gray-500">Structured curriculums designed to provide maximum clarity</p>
          </div>
          <button 
            onClick={() => navigate('/courses')}
            className="mb-2 text-[var(--color-primary)] font-bold border-b-2 border-[var(--color-primary)] pb-1 hover:text-[var(--color-primary-light)] hover:border-[var(--color-primary-light)] transition-all bg-transparent cursor-pointer"
          >
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

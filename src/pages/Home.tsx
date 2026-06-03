import React from 'react';
import { HeroCarousel } from '../components/common/HeroCarousel/HeroCarousel';
import { AboutSection } from '../components/common/AboutSection/AboutSection';
import LearningJourney from '../components/common/ExpertThoughts/LearningJourney';
import { PopularCourses } from '../components/common/PopularCourses/PopularCourses';
import { CourseDiscovery } from '../components/common/CourseDiscovery/CourseDiscovery';
import { Ecosystem } from '../components/common/Ecosystem/Ecosystem';
import { ExpertThoughts } from '../components/common/ExpertThoughts/ExpertThoughts';
import { FAQSection } from '../components/common/FAQSection/FAQSection';

export const Home: React.FC = () => {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Phase 5: Hero Redesign */}
      <HeroCarousel />
      {/* Phase 6: About Section */}
      <AboutSection />
      {/* Learning Journey */}
      <LearningJourney />
      {/* Phase 7: Popular Courses */}
      <PopularCourses />
      {/* Phase 8: Explore Courses */}
      <CourseDiscovery />
      {/* Phase 9: Ecosystem */}
      <Ecosystem />
      {/* Phase 10: Expert Thoughts */}
      <ExpertThoughts />
      {/* FAQ Section */}
      <FAQSection />
    </main>
  );
};

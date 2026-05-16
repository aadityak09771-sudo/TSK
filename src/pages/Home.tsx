import React from 'react';
import { HeroCarousel } from '../components/common/HeroCarousel/HeroCarousel';
import { PopularCourses } from '../components/common/PopularCourses/PopularCourses';
import { CourseDiscovery } from '../components/common/CourseDiscovery/CourseDiscovery';
import { Ecosystem } from '../components/common/Ecosystem/Ecosystem';
import { StudyResources } from '../components/common/StudyResources';
import { YouTubeChannels } from '../components/common/YouTubeChannels/YouTubeChannels';
import { FAQSection } from '../components/common/FAQSection/FAQSection';

export const Home: React.FC = () => {

  return (
    <div>
      <HeroCarousel />
      <PopularCourses />
      <CourseDiscovery />
      <Ecosystem />
      <StudyResources />
      <YouTubeChannels />
      <FAQSection />
    </div>
  );
};

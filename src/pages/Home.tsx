import React from 'react';
import { HeroCarousel } from '../components/common/HeroCarousel/HeroCarousel';
import { Ecosystem } from '../components/common/Ecosystem/Ecosystem';
import { AllCategories } from '../components/common/AllCategories';
import { StudyResources } from '../components/common/StudyResources';
import { FacultyCarousel } from '../components/common/FacultyCarousel';
import { YouTubeSection } from '../components/common/YouTubeSection';

export const Home: React.FC = () => {

  return (
    <div>
      <HeroCarousel />

      <Ecosystem />

      <AllCategories />

      <StudyResources />

      <FacultyCarousel />

      <YouTubeSection />

    </div>
  );
};

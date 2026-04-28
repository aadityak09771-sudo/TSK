import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { CourseListing } from './pages/CourseListing';
import { BoardSelection } from './pages/BoardSelection';
import { Faqs } from './pages/Faqs';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';

import { Courses } from './pages/Courses';
import { BatchDetails } from './pages/BatchDetails';
import { MyCourses } from './pages/MyCourses';
import { LearningRoom } from './pages/LearningRoom';

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/course-listing" element={<CourseListing />} />
          <Route path="/batches" element={<Courses />} />
          <Route path="/batches/:id" element={<BatchDetails />} />
          <Route path="/dashboard" element={<MyCourses />} />
          <Route path="/learning/:id" element={<LearningRoom />} />
          <Route path="/board-cbse" element={<BoardSelection />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { CourseListing } from './pages/CourseListing';
import { BoardSelection } from './pages/BoardSelection';
import { Cart } from './pages/Cart';
import { Faqs } from './pages/Faqs';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';

import { Courses } from './pages/Courses';
import { BatchDetails } from './pages/BatchDetails';

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
          <Route path="/board-cbse" element={<BoardSelection />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;

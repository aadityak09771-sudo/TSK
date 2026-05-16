import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { CourseListing } from './pages/CourseListing';
import { BoardSelection } from './pages/BoardSelection';
import { GoalSelection } from './pages/GoalSelection';
import { Faqs } from './pages/Faqs';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';

import { Courses } from './pages/Courses';
import { CourseDetails } from './pages/CourseDetails';
import { MyCourses } from './pages/MyCourses';
import { MyProfile } from './pages/MyProfile';
import { LearningRoom } from './pages/LearningRoom';
import { Library } from './pages/Library';
import { MyPurchases } from './pages/MyPurchases';
import { DashboardCourses } from './pages/DashboardCourses';
import { StudentDashboardLayout } from './layouts/StudentDashboardLayout';
import { PublicRoute } from './components/common/PublicRoute';
import { ScrollToTop } from './utils/ScrollToTop';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Standalone Pages (No Main Header/Footer) */}        
        {/* Main Layout Pages */}
        <Route path="*" element={
          <MainLayout>
            <Routes>
              <Route path="/" element={<PublicRoute><Home /></PublicRoute>} />
              <Route path="/about" element={<PublicRoute><About /></PublicRoute>} />
              <Route path="/contact" element={<PublicRoute><Contact /></PublicRoute>} />
              <Route path="/course-listing" element={<PublicRoute><CourseListing /></PublicRoute>} />
              <Route path="/courses" element={<PublicRoute><Courses /></PublicRoute>} />
              <Route path="/courses/:id" element={<PublicRoute><CourseDetails /></PublicRoute>} />  
              <Route path="/select-goal" element={<PublicRoute><GoalSelection /></PublicRoute>} />
              
              {/* Dashboard Routes */}
              <Route path="/dashboard" element={<MyCourses />} />
              <Route path="/library" element={<Library />} />
              <Route path="/my-purchases" element={<MyPurchases />} />
              <Route path="/dashboard/courses" element={<DashboardCourses />} />
              <Route 
                path="/dashboard/profile" 
                element={
                  <StudentDashboardLayout searchQuery="" onSearchChange={() => {}}>
                    <MyProfile />
                  </StudentDashboardLayout>
                } 
              />
              <Route 
                path="/dashboard/about" 
                element={
                  <StudentDashboardLayout searchQuery="" onSearchChange={() => {}}>
                    <About isDashboard={true} />
                  </StudentDashboardLayout>
                } 
              />
              <Route 
                path="/dashboard/contact" 
                element={
                  <StudentDashboardLayout searchQuery="" onSearchChange={() => {}}>
                    <Contact />
                  </StudentDashboardLayout>
                } 
              />
              <Route 
                path="/dashboard/privacy" 
                element={
                  <StudentDashboardLayout searchQuery="" onSearchChange={() => {}}>
                    <Privacy />
                  </StudentDashboardLayout>
                } 
              />
              
              <Route path="/learning/:id" element={<LearningRoom />} />
              <Route path="/board-cbse" element={<PublicRoute><BoardSelection /></PublicRoute>} />
              <Route path="/faqs" element={<PublicRoute><Faqs /></PublicRoute>} />
              <Route path="/privacy" element={<PublicRoute><Privacy /></PublicRoute>} />
              <Route path="/terms" element={<PublicRoute><Terms /></PublicRoute>} />
            </Routes>
          </MainLayout>
        } />
      </Routes>
    </Router>
  );
};

export default App;

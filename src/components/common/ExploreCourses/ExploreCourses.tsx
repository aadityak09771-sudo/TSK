import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../../ui/Button';
import './ExploreCourses.css';

interface CourseCardProps {
  badge: string;
  title: string;
  description: string;
  price: string;
  image: string;
  buttonText: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ badge, title, description, price, image, buttonText }) => {
  return (
    <div className="explore-course-card">
      <div className="course-image-container">
        <img src={image} alt={title} className="course-image" />
        <span className="course-badge">{badge}</span>
      </div>
      <div className="course-info">
        <h3 className="course-title">{title}</h3>
        <p className="course-description">{description}</p>
        <div className="course-footer">
          <span className="course-price">{price}</span>
          <Button variant="primary" className="enroll-button">
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export const ExploreCourses: React.FC = () => {
  const exploreCourses = [
    {
      badge: "POPULAR",
      title: "Class 10 Complete Bundle",
      description: "Full syllabus coverage with live classes, notes, tests & doubt support.",
      price: "₹4,999",
      image: "/assets/images/class10_course.png",
      buttonText: "Enroll Now"
    },
    {
      badge: "BESTSELLER",
      title: "JEE Target Batch",
      description: "Advanced preparation with expert faculty and mock tests.",
      price: "₹14,999",
      image: "/assets/images/future_leaders.png", // Using a representative image
      buttonText: "Enroll Now"
    },
    {
      badge: "TRENDING",
      title: "NEET Achievers Batch",
      description: "NEET-focused learning with live classes and test series.",
      price: "₹14,999",
      image: "/assets/images/educators.png", // Using a representative image
      buttonText: "Enroll Now"
    }
  ];

  return (
    <section className="explore-courses-section">
      <div className="container">
        <div className="explore-container-card">
          <div className="explore-header">
            <h2 className="explore-heading">Explore Courses</h2>
            <Link to="/courses" className="view-all-link">
              View All Courses <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="explore-grid">
            {exploreCourses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

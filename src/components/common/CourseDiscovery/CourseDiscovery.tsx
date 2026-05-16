import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, GraduationCap } from 'lucide-react';
import { Button } from '../../ui/Button';
import { Spinner } from '../../ui/Spinner/Spinner';
import './CourseDiscovery.css';

interface DiscoveryCourse {
  badge: string;
  title: string;
  description: string;
  price: string;
  image: string;
  buttonText: string;
}

interface Faculty {
  name: string;
  role: string;
  experience: string;
  institute: string;
  image: string;
}

const CourseCard: React.FC<DiscoveryCourse> = ({ badge, title, description, price, image, buttonText }) => (
  <Link to="/board-cbse" className="compact-course-card" style={{ textDecoration: 'none' }}>
    <div className="compact-course-image-container">
      <img src={image} alt={title} className="compact-course-image" />
      <span className="compact-course-badge">{badge}</span>
    </div>
    <div className="compact-course-info">
      <h3 className="compact-course-title">{title}</h3>
      <p className="compact-course-description">{description}</p>
      <div className="compact-course-footer">
        <span className="compact-course-price">{price}</span>
        <Button variant="primary" className="compact-enroll-button">
          {buttonText}
        </Button>
      </div>
    </div>
  </Link>
);

const FacultyCard: React.FC<Faculty> = ({ name, role, experience, institute, image }) => (
  <div className="compact-faculty-card">
    <div className="compact-faculty-image-wrapper">
      <img src={image} alt={name} className="compact-faculty-image" />
    </div>
    <div className="compact-faculty-info">
      <h3 className="compact-faculty-name">{name}</h3>
      <p className="compact-faculty-role">{role}</p>
      <div className="compact-faculty-details">
        <div className="compact-detail-item">
          <Clock size={12} className="compact-detail-icon" />
          <span>{experience}</span>
        </div>
        <div className="compact-detail-item">
          <GraduationCap size={12} className="compact-detail-icon" />
          <span>{institute}</span>
        </div>
      </div>
    </div>
  </div>
);

export const CourseDiscovery: React.FC = () => {
  const [courses, setCourses] = useState<DiscoveryCourse[]>([]);
  const [faculty, setFaculty] = useState<Faculty[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDiscoveryData = async () => {
      try {
        setIsLoading(true);
        // Mock API call simulation
        await new Promise(resolve => setTimeout(resolve, 1800));

        const mockCourses: DiscoveryCourse[] = [
          {
            badge: "POPULAR",
            title: "Class 10 Bundle",
            description: "Full syllabus coverage with live classes & notes.",
            price: "₹4,999",
            image: "/assets/images/class10_course.png",
            buttonText: "Enroll"
          },
          {
            badge: "BESTSELLER",
            title: "JEE Target",
            description: "Advanced preparation with expert faculty.",
            price: "₹14,999",
            image: "/assets/images/future_leaders.png",
            buttonText: "Enroll"
          },
          {
            badge: "TRENDING",
            title: "NEET Achievers",
            description: "NEET-focused learning with test series.",
            price: "₹14,999",
            image: "/assets/images/educators.png",
            buttonText: "Enroll"
          }
        ];

        const mockFaculty: Faculty[] = [
          {
            name: "Aariz Verma",
            role: "Physics",
            experience: "10+ Yrs",
            institute: "IIT Delhi",
            image: "/assets/images/teacher_1.png"
          },
          {
            name: "Neha Sharma",
            role: "Chemistry",
            experience: "8+ Yrs",
            institute: "IIT Bombay",
            image: "/assets/images/teacher_2.png"
          },
          {
            name: "Rahul Mehta",
            role: "Maths",
            experience: "12+ Yrs",
            institute: "IIT Kanpur",
            image: "/assets/images/teacher_3.png"
          }
        ];

        setCourses(mockCourses);
        setFaculty(mockFaculty);
      } catch (error) {
        console.error("Error fetching discovery data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDiscoveryData();
  }, []);

  return (
    <section className="course-discovery-section">
      <div className="container">
        {isLoading ? (
          <div className="flex justify-center py-20">
            <Spinner text="Loading discovery data..." />
          </div>
        ) : (
          <div className="course-discovery-row">
            {/* Explore Courses Card */}
            <div className="discovery-block explore-block">
              <div className="discovery-block-header">
                <h2 className="discovery-block-heading">Explore Courses</h2>
                <Link to="/select-goal" className="discovery-view-all">
                  View All Courses <ArrowRight size={16} />
                </Link>
              </div>
              <div className="compact-grid courses-grid">
                {courses.map((course, index) => (
                  <CourseCard key={index} {...course} />
                ))}
              </div>
            </div>

            {/* Expert Faculty Card */}
            <div className="discovery-block faculty-block">
              <div className="discovery-block-header">
                <h2 className="discovery-block-heading">Expert Faculty</h2>
                <Link to="/about" className="discovery-view-all">
                  View All Faculty <ArrowRight size={16} />
                </Link>
              </div>
              <div className="compact-grid faculty-grid">
                {faculty.map((f, index) => (
                  <FacultyCard key={index} {...f} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

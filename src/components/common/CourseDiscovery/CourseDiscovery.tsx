import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, GraduationCap } from 'lucide-react';
import { Button } from '../../ui/Button';
import { Skeleton } from '../../ui/Skeleton/Skeleton';
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

const CourseCardSkeleton: React.FC = () => (
  <div className="compact-course-card">
    <div className="compact-course-image-container">
      <Skeleton width="100%" height="100%" />
    </div>
    <div className="compact-course-info">
      <Skeleton variant="text" width="80%" height={16} className="mb-2" />
      <Skeleton variant="text" width="100%" height={12} className="mb-1" />
      <Skeleton variant="text" width="90%" height={12} className="mb-3" />
      <div className="compact-course-footer">
        <Skeleton variant="text" width={50} height={16} />
        <Skeleton variant="rectangular" width={60} height={24} className="rounded" />
      </div>
    </div>
  </div>
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

const FacultyCardSkeleton: React.FC = () => (
  <div className="compact-faculty-card">
    <div className="compact-faculty-image-wrapper">
      <Skeleton variant="circular" width={80} height={80} className="mx-auto" />
    </div>
    <div className="compact-faculty-info">
      <Skeleton variant="text" width="70%" height={16} className="mx-auto mb-1" />
      <Skeleton variant="text" width="40%" height={12} className="mx-auto mb-3" />
      <div className="compact-faculty-details">
        <Skeleton variant="text" width="50%" height={10} className="mx-auto" />
        <Skeleton variant="text" width="60%" height={10} className="mx-auto" />
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
              {isLoading ? (
                Array.from({ length: 3 }).map((_, i) => <CourseCardSkeleton key={i} />)
              ) : (
                courses.map((course, index) => (
                  <CourseCard key={index} {...course} />
                ))
              )}
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
              {isLoading ? (
                Array.from({ length: 3 }).map((_, i) => <FacultyCardSkeleton key={i} />)
              ) : (
                faculty.map((f, index) => (
                  <FacultyCard key={index} {...f} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

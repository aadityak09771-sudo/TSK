import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, GraduationCap } from 'lucide-react';
import { Button } from '../../ui/Button';
import { Skeleton } from '../../ui/Skeleton/Skeleton';
import { useAuthStore } from '../../../store/useAuthStore';
import './CourseDiscovery.css';

interface ApiCourse {
  course_id: number;
  course_name: string;
  course_desc: string | null;
  board: string;
  language: string;
  course_price: number;
  discounted_price: number;
  course_image: string | null;
  start_date: string | null;
  batch_id: number | null;
  batch_name: string | null;
}

interface DiscoveryCourse {
  id: number;
  badge: string;
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  discountPercentage?: number;
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

const CourseCard: React.FC<DiscoveryCourse> = ({ id, badge, title, description, price, originalPrice, discountPercentage, image, buttonText }) => {
  const isLoggedIn = useAuthStore(state => state.isLoggedIn);
  const openAuthModal = useAuthStore(state => state.openAuthModal);

  const handleAction = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isLoggedIn) {
      openAuthModal();
    } else {
      window.location.href = `/courses/${id}`;
    }
  };

  return (
    <Link to="/board-cbse" className="compact-course-card" style={{ textDecoration: 'none' }}>
      <div className="compact-course-image-container">
        <img src={image} alt={title} className="compact-course-image" />
        <span className="compact-course-badge">{badge}</span>
      </div>
      <div className="compact-course-info">
        <h3 className="compact-course-title">{title}</h3>
        <p className="compact-course-description">{description}</p>
        <div className="compact-course-footer">
          <div className="price-container">
            <div className="price-row">
              <span className={`compact-course-price ${price === 'Free' ? 'is-free' : ''}`}>{price}</span>
              {originalPrice && originalPrice !== price && (
                <span className="compact-course-original-price">{originalPrice}</span>
              )}
            </div>
            {discountPercentage && discountPercentage > 0 && (
              <span className="compact-course-discount-percentage">{discountPercentage}% OFF</span>
            )}
          </div>
          <Button 
            variant="solid" 
            className="compact-enroll-button py-1.5 h-9 text-[10px] shadow-md shadow-blue-500/10"
            onClick={handleAction}
          >
            {isLoggedIn ? 'ENROLL NOW' : 'BUY NOW'}
          </Button>
        </div>
      </div>
    </Link>
  );
};

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
        <div className="price-container">
          <Skeleton variant="text" width={40} height={16} />
          <Skeleton variant="text" width={30} height={12} />
        </div>
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

        const mockCoursesResponse = {
          "success": true,
          "data": [
            {
              "course_id": 2,
              "course_name": "Social Science by ABC",
              "course_desc": null,
              "board": "CBSE Science",
              "language": "en",
              "course_price": 0,
              "discounted_price": 0,
              "course_image": null,
              "start_date": null,
              "batch_id": null,
              "batch_name": null
            },
            {
              "course_id": 1,
              "course_name": "Maths By The Kushwaha Sir",
              "course_desc": "Academics for class 9th ",
              "board": "CBSE Science",
              "language": "en",
              "course_price": 1200,
              "discounted_price": 999,
              "course_image": null,
              "start_date": "2026-05-16T12:00:00",
              "batch_id": 1,
              "batch_name": "Morning Batch"
            }
          ]
        };

        const transformedCourses: DiscoveryCourse[] = mockCoursesResponse.data.map((course: ApiCourse) => {
          const discountPercentage = course.course_price > 0 && course.discounted_price < course.course_price
            ? Math.round(((course.course_price - course.discounted_price) / course.course_price) * 100)
            : undefined;

          return {
            id: course.course_id,
            badge: course.course_price === 0 ? "FREE" : "POPULAR",
            title: course.course_name,
            description: course.course_desc || `Complete ${course.board} preparation in ${course.language === 'en' ? 'English' : 'Hindi'}.`,
            price: course.discounted_price === 0 ? "Free" : `₹${course.discounted_price}`,
            originalPrice: course.course_price === 0 ? undefined : `₹${course.course_price}`,
            discountPercentage,
            image: course.course_image || "/assets/images/course.png",
            buttonText: "Buy Now"
          };
        });

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
          },
          {
            name: "Dr. Priya Roy",
            role: "Biology",
            experience: "15+ Yrs",
            institute: "AIIMS Delhi",
            image: "/assets/images/teacher_4.png"
          }
        ];

        setCourses(transformedCourses);
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
    <div className="course-discovery-container">
      {/* Explore Courses Section */}
      <section className="discovery-section">
        <div className="container">
          <div className="discovery-header">
            <h2 className="discovery-heading">Explore Courses</h2>
            <Link to="/select-goal" className="discovery-view-all">
              View All Courses <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="discovery-scroll-grid">
            {isLoading ? (
              Array.from({ length: 4 }).map((_, i) => <CourseCardSkeleton key={i} />)
            ) : (
              courses.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))
            )}
          </div>
        </div>
      </section>

      {/* Expert Faculty Section */}
      <section className="discovery-section">
        <div className="container">
          <div className="discovery-header">
            <h2 className="discovery-heading">Expert Faculty</h2>
            <Link to="/about" className="discovery-view-all">
              View All Faculty <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="discovery-scroll-grid">
            {isLoading ? (
              Array.from({ length: 4 }).map((_, i) => <FacultyCardSkeleton key={i} />)
            ) : (
              faculty.map((f, index) => (
                <FacultyCard key={index} {...f} />
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

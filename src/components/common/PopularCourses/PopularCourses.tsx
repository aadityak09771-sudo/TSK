import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  BookText, 
  FlaskConical, 
  Atom, 
  GraduationCap, 
  Trophy, 
  ArrowRight 
} from 'lucide-react';
import { Spinner } from '../../ui/Spinner/Spinner';
import './PopularCourses.css';

interface CourseCardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  bgColor: string;
  iconColor: string;
  path: string;
  board?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, subtitle, icon, bgColor, iconColor, path, board }) => {
  return (
    <Link to={path} className="popular-course-card" style={{ backgroundColor: bgColor }}>
      {board && <span className="card-board-badge">{board}</span>}
      <div className="card-content">
        <div className="card-icon-wrapper" style={{ color: iconColor }}>
          {icon}
        </div>
        <div className="card-text">
          <h3 className="card-title">{title}</h3>
          <p className="card-subtitle">{subtitle}</p>
        </div>
      </div>
      <div className="card-arrow">
        <ArrowRight size={16} />
      </div>
    </Link>
  );
};

// Icon mapping helper
const iconMap: Record<string, React.ReactNode> = {
  'BookOpen': <BookOpen size={24} />,
  'BookText': <BookText size={24} />,
  'FlaskConical': <FlaskConical size={24} />,
  'Atom': <Atom size={24} />,
  'GraduationCap': <GraduationCap size={24} />,
  'Trophy': <Trophy size={24} />,
};

interface PopularCourse {
  title: string;
  subtitle: string;
  iconName: string;
  bgColor: string;
  iconColor: string;
  path: string;
  board?: string;
}

export const PopularCourses: React.FC = () => {
  const [courses, setCourses] = useState<PopularCourse[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPopularCourses = async () => {
      try {
        setIsLoading(true);
        // Mock API call simulation
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        const mockData: PopularCourse[] = [
          {
            title: "Class 9",
            subtitle: "Strong Foundation for Success",
            iconName: "BookOpen",
            bgColor: "#EBF5FF",
            iconColor: "#3B82F6",
            path: "/course-listing?class=9",
            board: "CBSE"
          },
          {
            title: "Class 10",
            subtitle: "Score Higher, Achieve More",
            iconName: "BookText",
            bgColor: "#E6FFFA",
            iconColor: "#319795",
            path: "/course-listing?class=10",
            board: "CBSE"
          },
          {
            title: "Class 11 Science",
            subtitle: "Build Concepts, Aim Higher",
            iconName: "FlaskConical",
            bgColor: "#F5F3FF",
            iconColor: "#8B5CF6",
            path: "/course-listing?class=11",
            board: "CBSE"
          },
          {
            title: "Class 12 Science",
            subtitle: "Board + Competitive Excellence",
            iconName: "Atom",
            bgColor: "#FFF5F5",
            iconColor: "#F56565",
            path: "/course-listing?class=12",
            board: "CBSE"
          },
          {
            title: "Foundation",
            subtitle: "Build Strong Fundamentals",
            iconName: "GraduationCap",
            bgColor: "#E0FBFF",
            iconColor: "#00B5D8",
            path: "/courses?category=Foundation",
            board: "CBSE"
          },
          {
            title: "JEE / NEET",
            subtitle: "Crack the Exam, Shape Your Future",
            iconName: "Trophy",
            bgColor: "#FFF5F7",
            iconColor: "#D53F8C",
            path: "/courses?category=JEE / NEET"
          }
        ];
        
        setCourses(mockData);
      } catch (error) {
        console.error("Error fetching popular courses:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPopularCourses();
  }, []);

  return (
    <section className="popular-courses-section">
      <div className="container">
        <div className="popular-courses-header">
          <h2 className="popular-courses-heading">Popular Courses</h2>
          <Link to="/courses" className="view-all-link">
            View All Courses <ArrowRight size={18} />
          </Link>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center py-12">
            <Spinner text="Loading popular courses..." />
          </div>
        ) : (
          <div className="popular-courses-grid">
            {courses.map((course, index) => (
              <CourseCard 
                key={index} 
                {...course}
                board={course.board}
                icon={iconMap[course.iconName] || <BookOpen size={24} />} 
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

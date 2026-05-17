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
import { Skeleton } from '../../ui/Skeleton/Skeleton';
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

const CourseCardSkeleton: React.FC = () => {
  return (
    <div className="popular-course-card skeleton-card" style={{ backgroundColor: '#f9fafb' }}>
      <div className="card-content">
        <Skeleton variant="circular" width={44} height={44} className="mb-4" />
        <div className="card-text">
          <Skeleton variant="text" width="60%" height={24} className="mb-2" />
          <Skeleton variant="text" width="90%" height={16} />
        </div>
      </div>
      <div className="card-arrow" style={{ opacity: 0.5 }}>
        <Skeleton variant="rectangular" width={28} height={28} className="rounded" />
      </div>
    </div>
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

// API Types
interface ApiClass {
  id: number;
  name: string;
  slug: string;
  order: number;
  description: string;
  bg_color: string | null;
  icon: string | null;
  icon_color: string | null;
  unique_alias: string | null;
}

interface ApiBoard {
  id: number;
  name: string;
  official_title: string;
  slug: string;
  order: number;
  description: string;
  classes: ApiClass[];
}

interface PopularCourse {
  title: string;
  subtitle: string;
  iconName: string | null;
  bgColor: string;
  iconColor: string,
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

        const mockApiResponse = {
          "success": true,
          "message": "Boards",
          "status_code": 200,
          "data": [
            {
              "id": 1,
              "name": "CBSE Science",
              "official_title": "Central Board of Secondary Education",
              "slug": "cbse-science",
              "order": 1,
              "description": "Central Board of Secondary Education",
              "classes": [
                {
                  "id": 1,
                  "name": "Class 9",
                  "slug": "class-9",
                  "order": 9,
                  "description": "Secondary school - Grade 9",
                  "bg_color": "#EBF5FF",
                  "icon": "BookOpen",
                  "icon_color": "#3B82F6",
                  "unique_alias": null
                },
                {
                  "id": 2,
                  "name": "Class 10",
                  "slug": "class-10",
                  "order": 10,
                  "description": "Secondary school - Grade 10",
                  "bg_color": "#E6FFFA",
                  "icon": "BookText",
                  "icon_color": "#319795",
                  "unique_alias": null
                },
                {
                  "id": 3,
                  "name": "Class 11",
                  "slug": "class-11",
                  "order": 11,
                  "description": "Senior secondary - Grade 11 (Science)",
                  "bg_color": "#F5F3FF",
                  "icon": "FlaskConical",
                  "icon_color": "#8B5CF6",
                  "unique_alias": null
                },
                {
                  "id": 4,
                  "name": "Class 12",
                  "slug": "class-12",
                  "order": 12,
                  "description": "Senior secondary - Grade 12 (Science)",
                  "bg_color": "#FFF5F5",
                  "icon": "Atom",
                  "icon_color": "#F56565",
                  "unique_alias": null
                }
              ]
            },
            {
              "id": 2,
              "name": "UP Board",
              "official_title": "Uttar Pradesh Madhyamik Shiksha Parishad",
              "slug": "up-board",
              "order": 2,
              "description": "string",
              "classes": [
                {
                  "id": 1,
                  "name": "Class 9",
                  "slug": "class-9",
                  "order": 9,
                  "description": "Secondary school - Grade 9",
                  "bg_color": "#EBF5FF",
                  "icon": "BookOpen",
                  "icon_color": "#3B82F6",
                  "unique_alias": null
                },
                {
                  "id": 2,
                  "name": "Class 10",
                  "slug": "class-10",
                  "order": 10,
                  "description": "Secondary school - Grade 10",
                  "bg_color": "#E6FFFA",
                  "icon": "BookText",
                  "icon_color": "#319795",
                  "unique_alias": null
                }
              ]
            },
            {
              "id": 3,
              "name": "Bihar Board",
              "official_title": "Bihar School Examination Board",
              "slug": "bihar-board",
              "order": 3,
              "description": "string",
              "classes": [
                {
                  "id": 3,
                  "name": "Class 11",
                  "slug": "class-11",
                  "order": 11,
                  "description": "Senior secondary - Grade 11 (Science)",
                  "bg_color": "#F5F3FF",
                  "icon": "FlaskConical",
                  "icon_color": "#8B5CF6",
                  "unique_alias": null
                }
              ]
            }
          ]
        }

        // Transform nested board/class data into flat popular course cards
        const transformedData: PopularCourse[] = (mockApiResponse.data as any[]).flatMap((board: ApiBoard) =>
          board.classes.map((cls: ApiClass) => {
            return {
              title: cls.name,
              subtitle: cls.description,
              bgColor: cls.bg_color,
              iconName: cls.icon,
              iconColor: cls.icon_color,
              path: `/course-listing?board=${board.slug}&class=${cls.slug}`,
              board: board.name.split(' ')[0] // Short name for badge
            };
          })
        );

        setCourses(transformedData);
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
        </div>

        <div className="popular-courses-grid">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <CourseCardSkeleton key={index} />
            ))
          ) : (
            courses.map((course, index) => (
              <CourseCard
                key={index}
                {...course}
                board={course.board}
                icon={iconMap[course.iconName || "BookOpen"] || <BookOpen size={24} />}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

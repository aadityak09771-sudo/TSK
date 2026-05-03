import { useNavigate } from 'react-router-dom';
import { Users } from 'lucide-react';
import type { CommonCourse } from '../../types/entities';
import { useAuthStore } from '../../store/useAuthStore';
import { Button } from '../ui/Button';

interface CourseCardProps {
  course: CommonCourse;
  showExplore?: boolean;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, showExplore = true }) => {
  const navigate = useNavigate();
  const isLoggedIn = useAuthStore(state => state.isLoggedIn);
  const openAuthModal = useAuthStore(state => state.openAuthModal);

  const handleAction = () => {
    if (!isLoggedIn) {
      openAuthModal();
    } else {
      // Enrollment logic or redirect to details
      if (course.id) {
        navigate(`/courses/${course.id}`);
      }
    }
  };

  return (
    <article className="bg-white rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-hover)] border border-[var(--color-border)] flex flex-col h-full">
      <div className="relative aspect-[16/9] overflow-hidden">
        {course.badge && (
          <div className="absolute top-4 left-4 z-10 bg-[var(--color-primary)] text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider">
            {course.badge}
          </div>
        )}
        <img 
          src={course.image.replace(/^\.\//, '/')} 
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow bg-white">
        <h3 className="text-lg font-bold text-[var(--color-text-main)] mb-3 line-clamp-2 min-h-[3.5rem]">
          {course.title}
        </h3>

        <div className="flex items-center gap-2 text-[var(--color-text-muted)] text-sm mb-6">
          <Users size={16} />
          <span>{course.audience}</span>
        </div>

        <div className="mt-auto space-y-4">
          <div className="flex items-center gap-3">
            {showExplore && (
              <Button 
                variant="outline" 
                className="flex-1 py-1.5 h-10 text-xs"
                onClick={() => course.id && navigate(`/courses/${course.id}`)}
              >
                EXPLORE
              </Button>
            )}
            
            <Button 
              variant="solid" 
              className="flex-1 py-1.5 h-10 text-xs shadow-md shadow-blue-500/10"
              onClick={handleAction}
            >
              {isLoggedIn ? 'ENROLL NOW' : 'BUY NOW'}
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};

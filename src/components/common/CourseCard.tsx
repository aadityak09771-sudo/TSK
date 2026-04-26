import { Users } from 'lucide-react';
import type { Course } from '../../types';
import { useAuthStore } from '../../store/useAuthStore';
import { useCartStore } from '../../store/useCartStore';
import { Button } from '../ui/Button';

interface CourseCardProps {
  course: Course;
  showExplore?: boolean;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, showExplore = true }) => {
  const isLoggedIn = useAuthStore(state => state.isLoggedIn);
  const openAuthModal = useAuthStore(state => state.openAuthModal);
  const quantity = useCartStore(state => state.items.find(i => i.courseTitle === course.title)?.quantity || 0);
  const addItem = useCartStore(state => state.addItem);
  const updateQuantity = useCartStore(state => state.updateQuantity);

  const handleAction = () => {
    if (!isLoggedIn) {
      openAuthModal();
    } else if (quantity === 0) {
      addItem(course.title);
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
              <Button variant="outline" className="flex-1 py-1.5 h-10 text-xs">
                EXPLORE
              </Button>
            )}
            
            {isLoggedIn && quantity > 0 ? (
              <div className="flex-1 flex items-center justify-between bg-blue-50 border-2 border-[var(--color-primary)] rounded-[var(--radius-md)] overflow-hidden h-10">
                <button 
                  onClick={() => updateQuantity(course.title, -1)}
                  className="bg-[var(--color-primary)] text-white w-10 h-full flex items-center justify-center font-bold text-lg border-none cursor-pointer hover:bg-[var(--color-primary-light)]"
                >
                  −
                </button>
                <span className="font-extrabold text-[var(--color-primary)] text-sm">{quantity}</span>
                <button 
                  onClick={() => updateQuantity(course.title, 1)}
                  className="bg-[var(--color-primary)] text-white w-10 h-full flex items-center justify-center font-bold text-lg border-none cursor-pointer hover:bg-[var(--color-primary-light)]"
                >
                  +
                </button>
              </div>
            ) : (
              <Button 
                variant="solid" 
                className="flex-1 py-1.5 h-10 text-xs shadow-md shadow-blue-500/10"
                onClick={handleAction}
              >
                {isLoggedIn ? 'ADD TO CART' : 'BUY NOW'}
              </Button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Monitor, BookOpen, Clock } from 'lucide-react';
import type { Course } from '../../types/courses';
import { Button } from '../ui/Button';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const navigate = useNavigate();
  const discountAmount = course.originalPrice - course.price;
  const discountPercentage = Math.round((discountAmount / course.originalPrice) * 100);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full group">
      <div className="relative h-[200px] overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2 left-3 flex flex-wrap gap-2">
          <span className="bg-[var(--color-primary)] text-white text-[9px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
            {course.category}
          </span>
        </div>
      </div>

      <div className="p-2 flex flex-col flex-grow bg-gray-50">
        <h3 className="text-lg font-bold text-gray-900 line-clamp-2 min-h-[3rem]">
          {course.title}
        </h3>

        <div className="grid grid-cols-2 gap-y-1.5 gap-x-4 mb-2">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar size={14} className="text-[var(--color-primary)]" />
            <span className="text-xs">{course.target}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <BookOpen size={14} className="text-[var(--color-primary)]" />
            <span className="text-xs">{course.language}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock size={14} className="text-[var(--color-primary)]" />
            <span className="text-xs">{course.startDate}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-blue-50 text-blue-600 text-[9px] font-bold px-2 py-0.5 rounded-md">
            {course.lessonsCount}
          </span>
        </div>

        <div className="mt-auto border-t border-gray-50">
          <div className="flex items-end gap-3 mb-4">
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-400 line-through">₹{course.originalPrice.toLocaleString()}</span>
              <span className="text-xl font-black text-gray-900">₹{course.price.toLocaleString()}</span>
            </div>
            <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-lg mb-0.5">
              {discountPercentage}% OFF
            </span>
          </div>

          <div className="flex gap-2">
            <Button 
              variant="outline" 
              className="flex-1 rounded-xl h-10 text-xs"
              onClick={() => navigate(`/courses/${course.id}`)}
            >
              View Details
            </Button>
            <Button 
              variant="solid" 
              className="flex-1 rounded-xl h-10 text-xs shadow-lg shadow-blue-500/10"
            >
              Enroll Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
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
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full group">
      <div className="relative aspect-video">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className="bg-[var(--color-primary)] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {course.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 min-h-[3.5rem]">
          {course.title}
        </h3>

        <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar size={16} className="text-[var(--color-primary)]" />
            <span>{course.target}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <BookOpen size={16} className="text-[var(--color-primary)]" />
            <span>{course.language}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Monitor size={16} className="text-[var(--color-primary)]" />
            <span>Hybrid Classes</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock size={16} className="text-[var(--color-primary)]" />
            <span>{course.startDate}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2.5 py-1 rounded-md">
            {course.lessonsCount}
          </span>
          {course.badge && (
            <span className="bg-purple-50 text-purple-600 text-[10px] font-bold px-2.5 py-1 rounded-md">
              {course.badge}
            </span>
          )}
        </div>

        <div className="mt-auto pt-6 border-t border-gray-50">
          <div className="flex items-end gap-3 mb-6">
            <div className="flex flex-col">
              <span className="text-xs text-gray-400 line-through">₹{course.originalPrice.toLocaleString()}</span>
              <span className="text-2xl font-black text-gray-900">₹{course.price.toLocaleString()}</span>
            </div>
            <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-lg mb-1">
              {discountPercentage}% OFF
            </span>
          </div>

          <div className="flex gap-3">
            <Button 
              variant="outline" 
              className="flex-1 rounded-xl h-12 text-sm"
              onClick={() => navigate(`/courses/${course.id}`)}
            >
              View Details
            </Button>
            <Button 
              variant="solid" 
              className="flex-1 rounded-xl h-12 text-sm shadow-lg shadow-blue-500/20"
            >
              Enroll Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
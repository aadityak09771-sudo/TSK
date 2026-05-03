import React from 'react';
import { Languages, Target, BookOpen, ChevronRight } from 'lucide-react';
import type { DashboardCourse } from '../../config/studentData';
import { Button } from '../ui/Button';

interface CourseCardProps {
  course: DashboardCourse;
  onViewDetails: (course: DashboardCourse) => void;
  onStartLearning: (course: DashboardCourse) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onViewDetails, onStartLearning }) => {
  return (
    <div className="bg-white rounded-[1.5rem] border border-gray-100 shadow-sm overflow-hidden flex flex-col group hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 border-b-2 border-b-transparent hover:border-b-[var(--color-primary)]">
      {/* Thumbnail Area */}
      <div className="relative aspect-[21/9] overflow-hidden">
        <img 
          src={course.thumbnail} 
          alt={course.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="absolute bottom-2 left-2 right-2 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          <Button 
            className="w-full h-7 rounded-md bg-white text-[var(--color-primary)] hover:bg-white/90 text-[9px] font-black shadow-lg"
            onClick={() => onViewDetails(course)}
          >
            Quick View
          </Button>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-3.5 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[9px] font-black text-[var(--color-primary)] bg-blue-50 px-2 py-0.5 rounded-md uppercase tracking-wider">
            {course.category}
          </span>
          <div className="flex items-center gap-1 text-[9px] font-black text-gray-400 uppercase tracking-widest">
            <Languages size={10} />
            {course.language}
          </div>
        </div>

        <h3 className="text-base font-black text-gray-900 mb-2 group-hover:text-[var(--color-primary)] transition-colors line-clamp-1">
          {course.title}
        </h3>

        {/* Metadata Row */}
        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center gap-1 text-[10px] text-gray-500 font-bold">
            <Target size={10} className="text-gray-400" />
            <span>{course.target}</span>
          </div>
          <div className="flex items-center gap-1 text-[10px] text-gray-500 font-bold">
            <BookOpen size={10} className="text-gray-400" />
            <span>{course.lessons}</span>
          </div>
        </div>

        {/* Footer Area */}
        <div className="mt-auto pt-3 border-t border-gray-50">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-black text-gray-900">{course.price}</span>
              <span className="text-[10px] font-bold text-gray-400 line-through">{course.originalPrice}</span>
              <span className="text-[9px] font-black text-green-500 uppercase ml-1">{course.discount}</span>
            </div>
          </div>

          <div className="flex gap-2">
            <Button 
              variant="outline" 
              className="flex-1 h-8 rounded-lg text-[9px] font-black border border-gray-100 hover:border-[var(--color-primary)]"
              onClick={() => onViewDetails(course)}
            >
              Details
            </Button>
            <Button 
              className="flex-[2] h-8 rounded-lg text-[9px] font-black shadow-md group/btn"
              onClick={() => onStartLearning(course)}
            >
              Start Learning
              <ChevronRight size={12} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

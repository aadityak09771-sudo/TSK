import React from 'react';
import { Calendar, Languages, Target, BookOpen, ChevronRight } from 'lucide-react';
import type { BatchCourse } from '../../config/studentData';
import { Button } from '../ui/Button';

interface CourseCardProps {
  course: BatchCourse;
  onViewDetails: (course: BatchCourse) => void;
  onStartLearning: (course: BatchCourse) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onViewDetails, onStartLearning }) => {
  return (
    <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden flex flex-col group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 border-b-4 border-b-transparent hover:border-b-[var(--color-primary)]">
      {/* Thumbnail Area */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          src={course.thumbnail} 
          alt={course.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className="bg-white/95 backdrop-blur-sm text-[var(--color-primary)] text-[10px] font-black px-3 py-1.5 rounded-lg shadow-sm uppercase tracking-wider">
            Multiple plans inside
          </span>
        </div>

        <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <Button 
            className="w-full h-10 rounded-xl bg-white text-[var(--color-primary)] hover:bg-white/90 text-xs font-black shadow-xl"
            onClick={() => onViewDetails(course)}
          >
            Quick View
          </Button>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-black text-[var(--color-primary)] bg-blue-50 px-2.5 py-1 rounded-md uppercase tracking-wider">
            {course.category}
          </span>
          <div className="flex items-center gap-1.5 text-[10px] font-black text-gray-400 uppercase tracking-widest">
            <Languages size={12} />
            {course.language}
          </div>
        </div>

        <h3 className="text-xl font-black text-gray-900 mb-4 group-hover:text-[var(--color-primary)] transition-colors line-clamp-1">
          {course.title}
        </h3>

        {/* Metadata Grid */}
        <div className="grid grid-cols-1 gap-3 mb-6">
          <div className="flex items-center gap-3 text-xs text-gray-500 font-bold">
            <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400">
              <Target size={14} />
            </div>
            <span>Target: {course.target}</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-gray-500 font-bold">
            <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400">
              <Calendar size={14} />
            </div>
            <span>{course.startDate}</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-gray-500 font-bold">
            <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400">
              <BookOpen size={14} />
            </div>
            <span>{course.lessons}</span>
          </div>
        </div>

        {/* Footer Area */}
        <div className="mt-auto pt-6 border-t border-gray-50">
          <div className="flex items-center justify-between mb-6">
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-green-500 uppercase tracking-widest mb-1">{course.discount}</span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-gray-900">{course.price}</span>
                <span className="text-sm font-bold text-gray-400 line-through">{course.originalPrice}</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Button 
              variant="outline" 
              className="flex-1 h-12 rounded-2xl text-xs font-black border-2 border-gray-100 hover:border-[var(--color-primary)] hover:bg-blue-50/50"
              onClick={() => onViewDetails(course)}
            >
              Details
            </Button>
            <Button 
              className="flex-[2] h-12 rounded-2xl text-xs font-black shadow-lg shadow-blue-500/20 group/btn"
              onClick={() => onStartLearning(course)}
            >
              Start Learning
              <ChevronRight size={16} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

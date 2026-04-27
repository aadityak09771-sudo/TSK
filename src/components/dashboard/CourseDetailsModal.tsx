import React from 'react';
import { X, CheckCircle2, Globe, Clock, Calendar, Star, ChevronRight } from 'lucide-react';
import type { BatchCourse } from '../../config/studentData';
import { Button } from '../ui/Button';

interface CourseDetailsModalProps {
  course: BatchCourse | null;
  isOpen: boolean;
  onClose: () => void;
  onStartLearning: (course: BatchCourse) => void;
}

export const CourseDetailsModal: React.FC<CourseDetailsModalProps> = ({ 
  course, 
  isOpen, 
  onClose,
  onStartLearning 
}) => {
  if (!course || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
        {/* Mobile Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-900 md:hidden shadow-lg"
        >
          <X size={20} />
        </button>

        {/* Left: Media & Highlights */}
        <div className="md:w-[45%] bg-gray-50 flex flex-col">
          <div className="relative aspect-video md:aspect-[4/5] overflow-hidden">
            <img 
              src={course.thumbnail} 
              alt={course.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-[var(--color-primary)] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  {course.category}
                </span>
                <span className="bg-white/20 backdrop-blur-sm text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  {course.language}
                </span>
              </div>
              <h2 className="text-3xl font-black text-white leading-tight">
                {course.title}
              </h2>
            </div>
          </div>

          <div className="p-8 flex-grow overflow-y-auto no-scrollbar hidden md:block">
            <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6">What you will get</h4>
            <div className="space-y-4">
              {course.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 text-green-500">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-sm font-bold text-gray-600">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Details & Actions */}
        <div className="flex-grow p-8 md:p-12 overflow-y-auto no-scrollbar flex flex-col">
          {/* Desktop Close Button */}
          <div className="hidden md:flex justify-end mb-4">
            <button 
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="text-[10px] font-black text-[var(--color-primary)] uppercase tracking-widest mb-4">Course Overview</h4>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                {course.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-1">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Language</p>
                <div className="flex items-center gap-2 text-gray-900 font-black">
                  <Globe size={16} className="text-[var(--color-primary)]" />
                  <span>{course.language}</span>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Duration</p>
                <div className="flex items-center gap-2 text-gray-900 font-black">
                  <Clock size={16} className="text-[var(--color-primary)]" />
                  <span>300+ Hours</span>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Start Date</p>
                <div className="flex items-center gap-2 text-gray-900 font-black">
                  <Calendar size={16} className="text-[var(--color-primary)]" />
                  <span>{course.startDate}</span>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Rating</p>
                <div className="flex items-center gap-2 text-gray-900 font-black">
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  <span>4.9 (12k+ reviews)</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Subjects Covered</h4>
              <div className="flex flex-wrap gap-2">
                {course.subjects.map((subject) => (
                  <span key={subject} className="px-4 py-2 bg-gray-50 rounded-xl text-xs font-black text-gray-700 border border-gray-100">
                    {subject}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-8 border-t border-gray-100">
              <div className="flex items-center justify-between mb-8">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-green-500 uppercase tracking-widest mb-1">Exclusive Offer</span>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-black text-gray-900">{course.price}</span>
                    <span className="text-lg font-bold text-gray-400 line-through">{course.originalPrice}</span>
                  </div>
                </div>
                <div className="px-4 py-2 bg-green-50 rounded-xl">
                  <span className="text-sm font-black text-green-600">{course.discount}</span>
                </div>
              </div>

              <div className="flex gap-4">
                <Button 
                  className="flex-grow h-16 rounded-[1.5rem] text-sm font-black shadow-2xl shadow-blue-500/20 group"
                  onClick={() => onStartLearning(course)}
                >
                  Start Learning Now
                  <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

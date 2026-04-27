import React from 'react';
import { Play, CheckCircle, Lock, Clock } from 'lucide-react';
import type { Lesson } from '../../types/student';

interface LessonListProps {
  lessons: Lesson[];
  currentLessonId: string;
  onLessonSelect: (lesson: Lesson) => void;
}

export const LessonList: React.FC<LessonListProps> = ({ 
  lessons, 
  currentLessonId, 
  onLessonSelect 
}) => {
  return (
    <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden sticky top-28">
      <div className="p-8 border-b border-gray-50 bg-gray-50/50">
        <h3 className="text-xl font-black text-gray-900 tracking-tight">Course Content</h3>
        <p className="text-xs font-bold text-gray-400 mt-1 uppercase tracking-widest">
          {lessons.length} Lessons • 12+ Hours Content
        </p>
      </div>

      <div className="max-h-[60vh] overflow-y-auto no-scrollbar">
        {lessons.map((lesson) => {
          const isActive = lesson.id === currentLessonId;
          const isLocked = !lesson.isCompleted && !isActive && lesson.lessonNumber > 2; // Dummy lock logic

          return (
            <button
              key={lesson.id}
              onClick={() => !isLocked && onLessonSelect(lesson)}
              className={`w-full flex items-center gap-4 p-6 transition-all border-b border-gray-50 text-left group
                ${isActive ? 'bg-blue-50/50' : 'hover:bg-gray-50'}
                ${isLocked ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}
              `}
            >
              <div className={`w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center transition-all duration-300
                ${isActive ? 'bg-[var(--color-primary)] text-white shadow-lg shadow-blue-500/20 rotate-0' : 'bg-white border border-gray-100 text-gray-400 group-hover:border-[var(--color-primary)] group-hover:text-[var(--color-primary)]'}
              `}>
                {lesson.isCompleted ? (
                  <CheckCircle size={20} className={isActive ? 'text-white' : 'text-green-500'} />
                ) : isLocked ? (
                  <Lock size={20} />
                ) : isActive ? (
                  <Play size={20} className="fill-current" />
                ) : (
                  <span className="text-sm font-black">{lesson.lessonNumber}</span>
                )}
              </div>

              <div className="flex-grow min-w-0">
                <h4 className={`text-sm font-black truncate transition-colors
                  ${isActive ? 'text-[var(--color-primary)]' : 'text-gray-900'}
                `}>
                  {lesson.title}
                </h4>
                <div className="flex items-center gap-3 mt-1.5">
                  <div className="flex items-center gap-1 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    <Clock size={12} />
                    {lesson.duration}
                  </div>
                  {isActive && (
                    <span className="text-[10px] font-black text-[var(--color-primary)] uppercase tracking-[0.2em] animate-pulse">
                      Playing
                    </span>
                  )}
                </div>
              </div>

              {!isLocked && !isActive && (
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play size={16} className="text-[var(--color-primary)]" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      <div className="p-6 bg-gray-50/50 border-t border-gray-50">
        <button className="w-full py-3 bg-white border border-gray-200 rounded-xl text-xs font-black text-gray-600 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all">
          Download All Resources
        </button>
      </div>
    </div>
  );
};

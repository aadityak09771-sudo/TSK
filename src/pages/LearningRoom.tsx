import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Share2, Info, ChevronRight, MessageSquare, FileText } from 'lucide-react';
import { ENROLLED_COURSES } from '../config/studentData';
import type { EnrolledLesson } from '../types/student';
import { VideoPlayer } from '../components/learning/VideoPlayer';
import { LessonList } from '../components/learning/LessonList';
import { Button } from '../components/ui/Button';

export const LearningRoom: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const course = ENROLLED_COURSES.find(c => c.id === id);
  const [activeLesson, setActiveLesson] = useState<EnrolledLesson | null>(null);

  useEffect(() => {
    if (course && course.lessons.length > 0) {
      setActiveLesson(course.lessons[0]);
    }
    window.scrollTo(0, 0);
  }, [course]);

  if (!course || !activeLesson) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-white">
        <div className="w-20 h-20 bg-gray-50 rounded-[2rem] flex items-center justify-center text-gray-300 mb-8">
          <Info size={40} />
        </div>
        <h2 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">Course not found</h2>
        <Link to="/dashboard">
          <Button className="rounded-xl h-12 px-8 font-black shadow-xl">Back to Dashboard</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Learning Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-6 overflow-hidden">
            <Link to="/dashboard" className="p-2.5 hover:bg-gray-50 rounded-xl text-gray-400 hover:text-gray-900 transition-colors border border-transparent hover:border-gray-100">
              <ArrowLeft size={22} />
            </Link>
            <div className="overflow-hidden">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[10px] font-black text-[var(--color-primary)] bg-blue-50 px-2 py-0.5 rounded uppercase tracking-wider">
                  Live Course
                </span>
                <ChevronRight size={12} className="text-gray-300" />
                <h1 className="text-sm font-black text-gray-900 truncate">{course.title}</h1>
              </div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] truncate">
                Lesson {activeLesson.lessonNumber}: {activeLesson.title}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex items-center gap-2 h-10 px-4 hover:bg-gray-50 rounded-xl text-gray-600 font-black text-xs transition-colors border border-gray-100">
              <Share2 size={16} /> Share
            </button>
            <div className="w-10 h-10 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-white font-black text-xs border-2 border-white shadow-xl">
              SK
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid lg:grid-cols-3 gap-8 xl:gap-12">
          {/* Main Video Area */}
          <div className="lg:col-span-2 space-y-8 md:space-y-12">
            <VideoPlayer 
              url={activeLesson.videoUrl} 
              title={activeLesson.title} 
            />

            <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-gray-100 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-[var(--color-primary)]">
                    <Info size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 tracking-tight">Lesson Overview</h3>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Details & Resources</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="p-3 bg-gray-50 text-gray-400 hover:text-[var(--color-primary)] hover:bg-blue-50 rounded-xl transition-all border border-gray-100">
                    <MessageSquare size={20} />
                  </button>
                  <button className="p-3 bg-gray-50 text-gray-400 hover:text-[var(--color-primary)] hover:bg-blue-50 rounded-xl transition-all border border-gray-100">
                    <FileText size={20} />
                  </button>
                </div>
              </div>

              <div className="prose prose-blue max-w-none">
                <p className="text-gray-500 text-base leading-relaxed font-medium mb-8">
                  Welcome to <span className="text-gray-900 font-black">Lesson {activeLesson.lessonNumber}</span>. 
                  In this session, we will deep dive into the core concepts of <span className="text-[var(--color-primary)] font-black">{activeLesson.title}</span>. 
                  This lesson is designed to provide you with both theoretical knowledge and practical applications.
                  Make sure to download the attached study materials and attempt the practice quiz after watching the video.
                </p>
              </div>
              
              <div className="mt-10 pt-10 border-t border-gray-50 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button variant="outline" className="rounded-[1.25rem] h-14 text-xs font-black border-2 border-gray-100 hover:border-[var(--color-primary)] group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400 group-hover:text-[var(--color-primary)] group-hover:bg-blue-50 transition-colors">
                      <FileText size={16} />
                    </div>
                    <span>Download Lecture Notes</span>
                  </div>
                </Button>
                <Button variant="outline" className="rounded-[1.25rem] h-14 text-xs font-black border-2 border-gray-100 hover:border-[var(--color-primary)] group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400 group-hover:text-[var(--color-primary)] group-hover:bg-blue-50 transition-colors">
                      <ChevronRight size={16} />
                    </div>
                    <span>Practice Questions</span>
                  </div>
                </Button>
              </div>
            </div>
          </div>

          {/* Lesson List Area */}
          <div className="lg:col-span-1">
            <LessonList 
              lessons={course.lessons} 
              currentLessonId={activeLesson.id}
              onLessonSelect={(lesson) => {
                setActiveLesson(lesson);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
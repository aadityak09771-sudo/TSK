import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  CheckCircle2, 
  Info, 
  BookCheck, 
  Headphones, 
  CalendarDays, 
  ArrowLeft,
  Share2,
  Bookmark
} from 'lucide-react';
import { COURSES_DATA } from '../config/courses-data';
import { Button } from '../components/ui/Button';

export const CourseDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const course = COURSES_DATA.find(c => c.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold mb-4">Course not found</h2>
        <Button onClick={() => navigate('/courses')}>Back to All Courses</Button>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Navigation Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/courses" className="hover:text-[var(--color-primary)] transition-colors flex items-center gap-1">
              <ArrowLeft size={14} /> Back to Courses
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium truncate">{course.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="bg-blue-50 text-[var(--color-primary)] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] mb-6 inline-block">
                {course.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                {course.title}
              </h1>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8">
                {course.details?.overview}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-gray-100 shadow-sm">
                  <CalendarDays size={18} className="text-blue-500" />
                  <span className="text-sm font-bold text-gray-700">{course.startDate}</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-gray-100 shadow-sm">
                  <BookCheck size={18} className="text-purple-500" />
                  <span className="text-sm font-bold text-gray-700">{course.language}</span>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div>
                  <span className="text-sm text-gray-400 line-through block">₹{course.originalPrice.toLocaleString()}</span>
                  <span className="text-4xl font-black text-gray-900">₹{course.price.toLocaleString()}</span>
                </div>
                <Button variant="solid" className="h-14 px-10 rounded-2xl shadow-xl shadow-blue-500/20 text-lg">
                  Enroll Now
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white group">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
              {/* Floating Action Buttons */}
              <div className="absolute -bottom-6 right-8 flex gap-3">
                <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-[var(--color-primary)] transition-all">
                  <Share2 size={20} />
                </button>
                <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-[var(--color-primary)] transition-all">
                  <Bookmark size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-16">
              {course.details && (
                <>
                  <section>
                    <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                        <CheckCircle2 className="text-[var(--color-primary)]" />
                      </div>
                      Who is it for?
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {course.details.whoIsItFor.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                          <div className="mt-1.5 w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
                        <BookCheck className="text-purple-600" />
                      </div>
                      Subjects Covered
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {course.details.subjectsCovered.map((item, idx) => (
                        <span key={idx} className="px-6 py-3 bg-white text-gray-800 rounded-2xl font-bold border border-gray-200 shadow-sm hover:border-purple-200 transition-colors">
                          {item}
                        </span>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                        <Info className="text-green-600" />
                      </div>
                      Course Highlights
                    </h3>
                    <div className="space-y-4">
                      {course.details.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 p-4 hover:bg-green-50/50 rounded-2xl transition-colors">
                          <CheckCircle2 size={24} className="text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-lg">{item}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                </>
              )}
            </div>

            {/* Right Column (Sidebar Style) */}
            <div className="space-y-12">
              {course.details && (
                <>
                  <div className="bg-orange-50/50 p-8 rounded-[2.5rem] border border-orange-100">
                    <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-3">
                      <BookCheck className="text-orange-600" />
                      Test & Practice
                    </h3>
                    <ul className="space-y-4">
                      {course.details.testPractice.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-600">
                          <div className="mt-1.5 w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0"></div>
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-red-50/50 p-8 rounded-[2.5rem] border border-red-100">
                    <h3 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-3">
                      <Headphones className="text-red-600" />
                      Doubt Support
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {course.details.doubtSupport}
                    </p>
                  </div>

                  <div className="bg-gray-900 text-white p-8 rounded-[2.5rem] relative overflow-hidden">
                    <div className="relative z-10">
                      <h3 className="text-xl font-black mb-2 flex items-center gap-3 text-blue-400">
                        <CalendarDays />
                        Course Validity
                      </h3>
                      <p className="text-2xl font-bold mb-6">{course.details.validity}</p>
                      <Button variant="solid" className="w-full bg-white text-gray-900 hover:bg-gray-100 border-none">
                        Download Schedule
                      </Button>
                    </div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                  </div>
                </>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
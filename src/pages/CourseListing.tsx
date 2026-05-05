import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { CourseCard } from '../components/common/CourseCard';
import { COURSE_DATA, CLASS_METADATA } from '../config/courses';
import { BookOpen, Calculator, Zap, FlaskConical, Dna, Languages, Globe } from 'lucide-react';

const SubjectIcon = ({ name }: { name: string }) => {
  const iconProps = { size: 24 };
  switch (name) {
    case 'Mathematics': return <Calculator {...iconProps} />;
    case 'Physics': return <Zap {...iconProps} />;
    case 'Chemistry': return <FlaskConical {...iconProps} />;
    case 'Biology': return <Dna {...iconProps} />;
    case 'Science': return <Zap {...iconProps} />;
    case 'English': return <Languages {...iconProps} />;
    case 'Social Science': return <Globe {...iconProps} />;
    default: return <BookOpen {...iconProps} />;
  }
};

export const CourseListing: React.FC = () => {
  const [searchParams] = useSearchParams();
  const classFilter = searchParams.get('class');
  
  // Filter courses based on class parameter
  const filteredCourses = classFilter 
    ? COURSE_DATA.filter(c => c.class === classFilter)
    : COURSE_DATA;

  // Subjects based on class
  const subjects = classFilter ? CLASS_METADATA[classFilter] || [] : [];

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <section className="bg-white border-b border-gray-100 py-5">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <nav className="flex items-center gap-2 text-sm text-[var(--color-primary)] font-bold mb-4 uppercase tracking-widest">
                <span>CBSE</span>
                <span className="text-gray-300">/</span>
                <span className="text-gray-400">CLASS {classFilter || 'ALL'}</span>
              </nav>
              {/* <h1 className="text-4xl font-black text-gray-900">
                {classFilter ? `Class ${classFilter}th Courses` : 'All Courses'}
              </h1> */}
            </div>
            {classFilter && (
              <div className="bg-blue-50 px-6 py-2 rounded-2xl border border-blue-100 flex items-center gap-4">
                {/* <div className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-xl flex items-center justify-center font-bold">
                  {classFilter}
                </div> */}
                <div>
                  {/* <p className="text-xs font-bold text-blue-600 uppercase">Selected Grade</p> */}
                  <p className="font-bold text-gray-900">Academic Year 2026-27</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Subjects Grid */}
      {classFilter && subjects.length > 0 && (
        <section className="py-8 bg-white border-b border-gray-50">
          <div className="container">
            <h2 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] mb-5">Explore by Subject</h2>
            <div className="flex flex-wrap gap-4">
              {subjects.map((subject, i) => (
                <div key={i} className="group cursor-pointer bg-gray-50 border border-gray-100 px-5 py-3 rounded-xl flex items-center gap-3 transition-all hover:bg-white hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-0.5">
                  <div className="w-8 h-8 bg-white shadow-sm rounded-lg flex items-center justify-center group-hover:bg-blue-50 group-hover:text-[var(--color-primary)] transition-colors">
                    <div className="scale-75">
                      <SubjectIcon name={subject} />
                    </div>
                  </div>
                  <span className="font-bold text-gray-700 text-sm whitespace-nowrap">{subject}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Courses List */}
      <section className="py-16">
        <div className="container">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl font-black text-gray-900 leading-none">
              Recommended for you
            </h2>
            <div className="text-sm font-bold text-gray-400">
              Showing {filteredCourses.length} Courses
            </div>
          </div>

          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredCourses.map((course, i) => (
                <CourseCard key={i} course={course} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center bg-white rounded-3xl border border-dashed border-gray-200">
              <p className="text-gray-400 font-medium">No courses found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

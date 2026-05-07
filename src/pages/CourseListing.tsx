import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CourseCard } from '../components/common/CourseCard';
import { COURSE_DATA, CLASS_METADATA } from '../config/courses';
import { BookOpen, Calculator, Zap, FlaskConical, Dna, Languages, Globe, Home, X, ChevronRight, BookCheck } from 'lucide-react';
import { Button } from '../components/ui/Button';

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

const SYLLABUS_DATA: Record<string, string[]> = {
  'Mathematics': [
    'Real Numbers', 'Polynomials', 'Pair of Linear Equations in Two Variables', 
    'Quadratic Equations', 'Arithmetic Progressions', 'Triangles', 
    'Coordinate Geometry', 'Introduction to Trigonometry', 'Some Applications of Trigonometry', 
    'Circles', 'Areas Related to Circles', 'Surface Areas and Volumes', 
    'Statistics', 'Probability'
  ],
  'Science': [
    'Chemical Reactions and Equations', 'Acids, Bases and Salts', 'Metals and Non-metals', 
    'Carbon and its Compounds', 'Life Processes', 'Control and Coordination', 
    'How do Organisms Reproduce?', 'Heredity and Evolution', 'Light – Reflection and Refraction', 
    'The Human Eye and the Colourful World', 'Electricity', 'Magnetic Effects of Electric Current', 
    'Our Environment'
  ],
  'Physics': [
    'Units and Measurements', 'Motion in a Straight Line', 'Motion in a Plane', 
    'Laws of Motion', 'Work, Energy and Power', 'System of Particles and Rotational Motion', 
    'Gravitation', 'Mechanical Properties of Solids', 'Mechanical Properties of Fluids', 
    'Thermal Properties of Matter', 'Thermodynamics', 'Kinetic Theory', 'Oscillations', 'Waves'
  ],
  'Chemistry': [
    'Some Basic Concepts of Chemistry', 'Structure of Atom', 'Classification of Elements and Periodicity in Properties', 
    'Chemical Bonding and Molecular Structure', 'Thermodynamics', 'Equilibrium', 
    'Redox Reactions', 'Organic Chemistry – Some Basic Principles and Techniques', 'Hydrocarbons'
  ],
  'Biology': [
    'The Living World', 'Biological Classification', 'Plant Kingdom', 'Animal World', 
    'Morphology of Flowering Plants', 'Anatomy of Flowering Plants', 'Structural Organisation in Animals', 
    'Cell: The Unit of Life', 'Biomolecules', 'Cell Cycle and Cell Division', 
    'Transport in Plants', 'Mineral Nutrition', 'Photosynthesis in Higher Plants'
  ],
  'English': [
    'Reading Comprehension', 'Writing Skills (Letter, Essay)', 'Applied Grammar', 
    'Literature: First Flight', 'Literature: Footprints Without Feet'
  ],
  'Social Science': [
    'History: The Rise of Nationalism in Europe', 'Geography: Resources and Development', 
    'Political Science: Power Sharing', 'Economics: Development'
  ]
};

export const CourseListing: React.FC = () => {
  const [searchParams] = useSearchParams();
  const classFilter = searchParams.get('class');
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  
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
                <Link to="/" className="hover:text-[var(--color-primary-light)] transition-colors">
                  <Home size={16} />
                </Link>
                <span className="text-gray-300">/</span>
                <span>CBSE</span>
                <span className="text-gray-300">/</span>
                <span className="text-gray-400">CLASS {classFilter || 'ALL'}</span>
              </nav>
            </div>
            {classFilter && (
              <div className="bg-blue-50 px-6 py-2 rounded-2xl border border-blue-100 flex items-center gap-4">
                <div>
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
                <div 
                  key={i} 
                  onClick={() => setSelectedSubject(subject)}
                  className="group cursor-pointer bg-gray-50 border border-gray-100 px-5 py-3 rounded-xl flex items-center gap-3 transition-all hover:bg-white hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-0.5"
                >
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

      {/* Syllabus Modal */}
      {selectedSubject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl max-h-[80vh] overflow-hidden rounded-[2rem] shadow-2xl flex flex-col">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-[var(--color-primary)]">
                  <BookCheck size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{selectedSubject} Syllabus</h3>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Class {classFilter}th • CBSE 2026-27</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedSubject(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={20} className="text-gray-400" />
              </button>
            </div>
            
            <div className="flex-grow overflow-y-auto p-6">
              <div className="grid gap-3">
                {(SYLLABUS_DATA[selectedSubject] || ['Syllabus content coming soon...']).map((chapter, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-white hover:border-[var(--color-primary)] transition-all group">
                    <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-xs font-bold text-gray-400 group-hover:text-[var(--color-primary)]">
                      {idx + 1}
                    </div>
                    <span className="font-semibold text-gray-700 flex-grow">{chapter}</span>
                    <ChevronRight size={16} className="text-gray-300 group-hover:text-[var(--color-primary)]" />
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 border-t border-gray-100 bg-gray-50/50">
              <Button variant="solid" className="w-full h-12 rounded-xl" onClick={() => setSelectedSubject(null)}>
                Got it, Thanks!
              </Button>
            </div>
          </div>
        </div>
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

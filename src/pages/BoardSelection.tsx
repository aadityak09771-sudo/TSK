import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

const CLASSES = [
  { id: '9', name: 'Class 9th', description: 'Foundation & Baseline' },
  { id: '10', name: 'Class 10th', description: 'Board Exams Prep' },
  { id: '11', name: 'Class 11th', description: 'Core Specialization' },
  { id: '12', name: 'Class 12th', description: 'Board Exams Prep' },
];

export const BoardSelection: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="py-24 bg-blue-50/50">
        <div className="container text-center max-w-3xl">
          <span className="inline-block bg-white text-[var(--color-primary)] text-[10px] font-black px-4 py-1.5 rounded-full shadow-sm mb-6 tracking-[0.2em] uppercase">
            National Board
          </span>
          <h1 className="text-5xl font-black mb-6 text-gray-900">CBSE Curriculum & Test Series</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Select your class to view available curriculum, mock tests, and 
            foundational material specifically tailored for CBSE patterns.
          </p>
        </div>
      </section>

      {/* Class Selection Grid */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {CLASSES.map((cls) => (
              <div key={cls.id} className="group bg-white border border-gray-100 p-12 rounded-[40px] text-center shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
                <h2 className="text-3xl font-black text-[var(--color-primary)] mb-2">{cls.name}</h2>
                <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mb-10">
                  {cls.description}
                </p>
                <Link to={`/course-listing?class=${cls.id}`}>
                  <Button variant="solid" className="w-full text-xs py-2 rounded-2xl shadow-lg shadow-blue-500/20 group-hover:bg-[var(--color-primary-light)]">
                    EXPLORE
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose CBSE */}
      <section className="py-24 bg-gray-50/50 border-t border-gray-100">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
             <div className="w-12 h-12 bg-blue-100 text-[var(--color-primary)] rounded-2xl flex items-center justify-center font-black text-xl">01</div>
             <h3 className="text-xl font-bold">Standard Syllabus</h3>
             <p className="text-gray-500 text-sm leading-relaxed">Aligned with NCERT guidelines ensures quality and uniformity across all subjects.</p>
          </div>
          <div className="space-y-4">
             <div className="w-12 h-12 bg-blue-100 text-[var(--color-primary)] rounded-2xl flex items-center justify-center font-black text-xl">02</div>
             <h3 className="text-xl font-bold">Competitive Edge</h3>
             <p className="text-gray-500 text-sm leading-relaxed">Foundation for JEE, NEET and other national level competitive examinations.</p>
          </div>
          <div className="space-y-4">
             <div className="w-12 h-12 bg-blue-100 text-[var(--color-primary)] rounded-2xl flex items-center justify-center font-black text-xl">03</div>
             <h3 className="text-xl font-bold">Holistic Learning</h3>
             <p className="text-gray-500 text-sm leading-relaxed">Moves beyond rote learning to foster critical thinking and practical understanding.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

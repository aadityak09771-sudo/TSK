import React from 'react';
import { STUDY_RESOURCES } from '../../config/home-sections';

export const StudyResources: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="mb-16">
          <h2 className="text-3xl font-black mb-2">Study Resources</h2>
          <p className="text-gray-500">Everything you need to ace your exams, all in one place.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STUDY_RESOURCES.map((resource) => (
            <div 
              key={resource.id}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all group cursor-pointer border border-gray-100"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-transform group-hover:scale-110
                ${resource.color === 'blue' ? 'bg-blue-50 text-blue-600' : 
                  resource.color === 'green' ? 'bg-green-50 text-green-600' : 
                  'bg-purple-50 text-purple-600'}`}
              >
                {resource.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{resource.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {resource.desc}
              </p>
              <button className="text-[var(--color-primary)] font-bold flex items-center gap-2 group/btn">
                Explore Now
                <span className="transition-transform group-hover/btn:translate-x-1">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

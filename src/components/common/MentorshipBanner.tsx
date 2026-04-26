import React from 'react';

export const MentorshipBanner: React.FC = () => {
  return (
    <section className="py-24 bg-blue-50/50 border-t border-blue-100 overflow-hidden">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500 bg-white p-4 border border-blue-100/50">
           <img 
             src="/assets/images/mentorship.png" 
             alt="True Mentorship" 
             className="w-full h-full object-cover rounded-2xl" 
           />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-black mb-6 italic text-[var(--color-primary)]">For Students, By Mentors</h2>
          <p className="text-gray-600 mb-6 leading-relaxed text-lg font-medium">
            SikshaKendra is not a platform where teachers just teach. 
            It’s where mentors guide, challenge, and grow with students.
          </p>
          <div className="p-8 bg-white rounded-2xl border border-blue-100 shadow-xl shadow-blue-900/5">
            <p className="italic text-gray-900 text-xl font-bold">
              "A right mentor doesn’t just change marks, he changes direction."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { MentorshipBanner } from '../components/common/MentorshipBanner';

export const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-24 bg-blue-50/50">
        <div className="container text-center max-w-3xl">
          <h1 className="text-5xl font-black mb-6 text-gray-900">Our Mission</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Siksha Kendra is an edutech platform focused on true academic excellence. 
            We move beyond memorization to help students deeply understand, ask big questions, 
            and become real-world problem solvers.
          </p>
        </div>
      </section>

      {/* Philosophy - ZigZag Row 1 */}
      <section className="py-24">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-black mb-6 italic text-[var(--color-primary)]">What Makes Us Different</h2>
            <p className="text-gray-500 mb-6 font-medium">
              Most platforms teach “what to study.” <span className="text-gray-900 font-bold underline decoration-[var(--color-primary)] decoration-4 underline-offset-4">We focus on how to think.</span>
            </p>
            <p className="text-gray-500 mb-8">
              At SikshaKendra, students don’t just prepare for exams—they build a mindset 
              that stays beyond the exam hall. We combine:
            </p>
            <ul className="space-y-4 text-gray-600 font-medium list-none p-0">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[var(--color-primary)] rounded-full" />
                Concept-first teaching
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[var(--color-primary)] rounded-full" />
                Real-life application of topics
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[var(--color-primary)] rounded-full" />
                Smart strategies based on student psychology
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[var(--color-primary)] rounded-full" />
                Consistent practice with clarity
              </li>
            </ul>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
            <img src="/assets/images/mindset.png" alt="What Makes Us Different" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Vision - ZigZag Row 2 */}
      <section className="py-24 bg-gray-50">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
             <img src="/assets/images/future_leaders.png" alt="Our Vision" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-black mb-6 italic text-[var(--color-primary)]">Our Vision</h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              To create a generation of students who are not just rankers, 
              but <span className="text-gray-900 font-bold">independent thinkers and decision-makers</span> who lead with clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are - ZigZag Row 3 */}
      <section className="py-24">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-black mb-6 italic text-[var(--color-primary)]">Who We Are</h2>
            <p className="text-gray-500 mb-6 leading-relaxed">
              We are a team of educators, creators, and strategists who understand one thing deeply: 
              <span className="block mt-4 text-xl font-black text-gray-900 leading-tight">"Education is not about information. It’s about transformation."</span>
            </p>
            <p className="text-gray-500">
              From classrooms to content, from doubt-solving to mindset-building—everything we 
              create is designed to move students one step closer to their best version.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
            <img src="/assets/images/educators.png" alt="Who We Are" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <MentorshipBanner />
    </div>
  );
};

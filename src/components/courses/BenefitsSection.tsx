import React from 'react';
import { Target, Layout, Home, Repeat, Zap, Award, Wallet, BarChart3 } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    { icon: <Target className="text-blue-500" />, title: 'Complete Syllabus Coverage', desc: 'Every topic covered from scratch to advanced level.' },
    { icon: <Layout className="text-purple-500" />, title: 'Structured Learning Path', desc: 'Well-planned schedule to ensure timely completion.' },
    { icon: <Home className="text-green-500" />, title: 'Learn from Home', desc: 'Safety and comfort of your home with expert guidance.' },
    { icon: <Repeat className="text-orange-500" />, title: 'Regular Practice', desc: 'Consistent testing and practice for better retention.' },
    { icon: <Zap className="text-yellow-500" />, title: 'Better Revision', desc: 'Strategic revision modules before exams.' },
    { icon: <Award className="text-red-500" />, title: 'Exam-Focused Preparation', desc: 'Tips and tricks to score high in boards and competitive exams.' },
    { icon: <Wallet className="text-indigo-500" />, title: 'Affordable Learning', desc: 'Premium quality education at the most reasonable prices.' },
    { icon: <BarChart3 className="text-emerald-500" />, title: 'Progress Tracking', desc: 'Identify your strengths and work on your weaknesses.' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">Why Choose Our Courses?</h2>
          <div className="w-24 h-1.5 bg-[var(--color-primary)] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex gap-5 p-6 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center">
                {benefit.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

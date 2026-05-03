import React from 'react';
import { Button } from '../ui/Button';
import { Video, BookOpen, Headphones, ShieldCheck } from 'lucide-react';

export const CourseHero: React.FC = () => {
  const stats = [
    { icon: <Video className="text-blue-500" />, label: 'Live + Recorded Classes' },
    { icon: <ShieldCheck className="text-green-500" />, label: 'Mock Tests Included' },
    { icon: <Headphones className="text-purple-500" />, label: 'Doubt Support' },
    { icon: <BookOpen className="text-orange-500" />, label: 'Affordable Courses' },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
          Find the Right Course for Your <br className="hidden md:block" />
          <span className="text-[var(--color-primary)]">Learning Journey</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Unlock your potential with our expert-led live classes, comprehensive recorded lectures, 
          premium study material, and 24/7 doubt support. Join thousands of successful students today!
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Button variant="solid" className="px-10 py-4 text-lg rounded-full">
            Explore Courses
          </Button>
          <Button variant="outline" className="px-10 py-4 text-lg rounded-full">
            Book Free Demo
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center gap-3 transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center">
                {stat.icon}
              </div>
              <span className="font-bold text-gray-800 text-sm md:text-base">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

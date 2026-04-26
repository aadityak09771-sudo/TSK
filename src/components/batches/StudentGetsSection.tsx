import React from 'react';
import { Video, BookText, FileSpreadsheet, ClipboardCheck, Trophy, Headphones, TrendingUp, MonitorPlay } from 'lucide-react';

export const StudentGetsSection: React.FC = () => {
  const items = [
    { icon: <Video size={32} className="text-blue-500" />, title: 'Live Interactive Classes', desc: 'Real-time engagement with top educators' },
    { icon: <MonitorPlay size={32} className="text-purple-500" />, title: 'Recorded Lecture Access', desc: 'Watch any class, anytime for revision' },
    { icon: <BookText size={32} className="text-green-500" />, title: 'Study Notes & PDFs', desc: 'Comprehensive digital study material' },
    { icon: <FileSpreadsheet size={32} className="text-orange-500" />, title: 'Daily Practice Problems', desc: 'Stay consistent with daily exercises' },
    { icon: <ClipboardCheck size={32} className="text-red-500" />, title: 'Chapter-wise Tests', desc: 'Assess your understanding of each topic' },
    { icon: <Trophy size={32} className="text-yellow-500" />, title: 'Full Mock Tests', desc: 'Simulate real exam environment' },
    { icon: <Headphones size={32} className="text-indigo-500" />, title: 'Doubt Solving Support', desc: 'Get your queries resolved instantly' },
    { icon: <TrendingUp size={32} className="text-emerald-500" />, title: 'Performance Tracking', desc: 'Detailed analysis of your progress' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">What Students Will Get</h2>
          <div className="w-24 h-1.5 bg-[var(--color-primary)] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="mb-6 p-4 bg-gray-50 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

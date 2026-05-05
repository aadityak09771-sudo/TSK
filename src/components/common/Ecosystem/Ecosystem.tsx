import React from 'react';
import './Ecosystem.css'

const ECOSYSTEM_ITEMS = [
  {
    title: "Concept Mind-Maps",
    desc: "Visualizing complex theories through interconnected nodes for 10x better retention.",
    image: "/assets/images/mind_maps.png"
  },
  {
    title: "Hand-Written Notes",
    desc: "Aesthetic, high-quality handwritten notes that make revision feel like a breeze.",
    image: "/assets/images/mindset.png"
  },
  {
    title: "Digital Smart Notes",
    desc: "Searchable, interactive digital summaries synced across all your devices.",
    image: "/assets/images/digital_notes.png"
  },
  {
    title: "Micro-Learning Bites",
    desc: "High-impact 2-minute videos to master a single concept with absolute clarity.",
    image: "/assets/images/micro_learning.png"
  },
  {
    title: "Personalised Roadmap",
    desc: "AI-generated paths that adapt to your pace and focus on your improvement areas.",
    image: "/assets/images/educators.png"
  },
  {
    title: "Chapter-wise Mock Tests",
    desc: "Master every topic with targeted practice tests designed for board exam readiness.",
    image: "/assets/images/mock_test.png"
  }
];

export const Ecosystem: React.FC = () => {
  return (
    <section className="ecosystem-container">
      <div className="container">
        <div className="text-center mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">Our Learning Ecosystem</h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Beyond just classes, we provide a complete suite of tools designed to 
            ensure conceptual mastery and examination success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ECOSYSTEM_ITEMS.map((item, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1"
            >
              <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

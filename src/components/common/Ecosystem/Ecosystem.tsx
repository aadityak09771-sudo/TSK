import React from 'react';
import { Network, PencilLine, FileText, ClipboardCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { EcosystemCard } from './EcosystemCard';
import './Ecosystem.css';

const ecosystemData = [
  {
    title: "Concept Mind Maps",
    description: "Visualize and connect concepts easily.",
    icon: <Network size={40} />,
    color: "purple" as const
  },
  {
    title: "Handwritten Notes",
    description: "Well-structured notes for quick revision.",
    icon: <PencilLine size={40} />,
    color: "green" as const
  },
  {
    title: "Smart Notes",
    description: "Crisp, point-wise notes made by experts.",
    icon: <FileText size={40} />,
    color: "orange" as const
  },
  {
    title: "Chapter-wise Mock Tests",
    description: "Practice more, score better.",
    icon: <ClipboardCheck size={40} />,
    color: "blue" as const
  }
];

export const Ecosystem: React.FC = () => {
  return (
    <section className="ecosystem-section">
      {/* Decorative Shapes */}
      <div className="ecosystem-decor dots-left"></div>
      <div className="ecosystem-decor dots-right"></div>

      <div className="ecosystem-header">
        <div className="ecosystem-badge">
          <Sparkles size={16} /> Everything You Need to Succeed
        </div>
        <h2 className="ecosystem-title">
          Our <span>Learning</span><br /> Ecosystem
        </h2>
        <p className="ecosystem-subtitle">
          Powerful tools and resources designed to make your learning smarter, faster and more effective.
        </p>
      </div>

      <div className="ecosystem-grid">
        {ecosystemData.map((item, index) => (
          <EcosystemCard 
            key={index} 
            title={item.title} 
            description={item.description} 
            icon={item.icon} 
            colorTheme={item.color} 
          />
        ))}
      </div>

      <div className="ecosystem-features-bar">
        <div className="ecosystem-feature-item">
          <CheckCircle2 size={20} color="#ffffff" /> Exam-focused Content
        </div>
        <div className="ecosystem-feature-item">
          <CheckCircle2 size={20} color="#ffffff" /> Designed by Top Educators
        </div>
        <div className="ecosystem-feature-item">
          <CheckCircle2 size={20} color="#ffffff" /> Regularly Updated
        </div>
        <div className="ecosystem-feature-item">
          <CheckCircle2 size={20} color="#ffffff" /> Accessible Anytime, Anywhere
        </div>
      </div>
    </section>
  );
};

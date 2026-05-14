import React from 'react';
import { Network, PencilLine, FileText, ClipboardCheck } from 'lucide-react';
import './Ecosystem.css';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => (
  <div className="ecosystem-feature-card">
    <div className="feature-icon-wrapper">
      {icon}
    </div>
    <div className="feature-info">
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  </div>
);

export const Ecosystem: React.FC = () => {
  const features = [
    {
      title: "Concept Mind Maps",
      description: "Visualize and connect concepts easily.",
      icon: <Network size={28} />
    },
    {
      title: "Handwritten Notes",
      description: "Well-structured notes for quick revision.",
      icon: <PencilLine size={28} />
    },
    {
      title: "Smart Notes",
      description: "Crisp, point-wise notes made by experts.",
      icon: <FileText size={28} />
    },
    {
      title: "Chapter-wise Mock Tests",
      description: "Practice more, score better.",
      icon: <ClipboardCheck size={28} />
    }
  ];

  return (
    <section className="ecosystem-section">
      <div className="container">
        <h2 className="ecosystem-heading">Our Learning Ecosystem</h2>
        <div className="ecosystem-grid">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

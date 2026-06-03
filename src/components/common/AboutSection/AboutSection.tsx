import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '../../ui/Button';
import './AboutSection.css';

export const AboutSection: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-layout container">
        <div className="about-left">
          <h2 className="font-extrabold text-[#071b4d] mb-6 text-3xl md:text-4xl lg:text-5xl leading-tight">
            Topper's Siksha Kendra –<br className="hidden sm:block" />
            Your Trusted & Affordable<br className="hidden sm:block" />
            <span className="text-[#ff6b1a]">Learning Partner</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div className="feature-card">
              <div className="feature-icon-wrapper"><CheckCircle2 className="text-[#ff6b1a]" size={24} /></div>
              <span className="font-bold text-[#071b4d]">Guidance</span>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper"><CheckCircle2 className="text-[#ff6b1a]" size={24} /></div>
              <span className="font-bold text-[#071b4d]">Personalized Roadmap</span>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper"><CheckCircle2 className="text-[#ff6b1a]" size={24} /></div>
              <span className="font-bold text-[#071b4d]">24x7 Support</span>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper"><CheckCircle2 className="text-[#ff6b1a]" size={24} /></div>
              <span className="font-bold text-[#071b4d]">Expert Faculty</span>
            </div>
          </div>

          <Button variant="solid" className="w-full sm:w-auto shadow-lg shadow-orange-500/30 transition-transform hover:-translate-y-1" style={{ background: '#ff6b1a', borderRadius: '12px', padding: '14px 32px', fontWeight: 800 }}>
            Get Started
          </Button>
        </div>
        <div className="about-right">
          <div className="about-image-wrapper">
            <img 
              src="/assets/images/home/about-student.png" 
              alt="Happy Student" 
              className="about-image" 
              onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x600/f3f4f6/a1a1aa?text=Student+Image'; }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
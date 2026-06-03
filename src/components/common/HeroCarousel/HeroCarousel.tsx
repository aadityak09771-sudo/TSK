import React, { useState, useEffect } from 'react';
import { Button } from '../../ui/Button';
import { CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './HeroCarousel.css';

const banners = [
  {
    id: 1,
    tag: "#1 Learning Platform",
    headingPrefix: "Learn Better with",
    headingHighlight: "India's Trusted Teachers",
    description: "Live classes by expert faculty, smart notes, chapter tests, 24x7 support.",
    image: "/assets/images/home/hero-main.png",
    primaryBtn: "Explore Courses",
    primaryLink: "/courses",
    secondaryBtn: "Start Learning",
    secondaryLink: "/category"
  },
  {
    id: 2,
    tag: "Score Higher",
    headingPrefix: "Crack Your Exams with",
    headingHighlight: "Premium Study Material",
    description: "Access thousands of mock tests, previous year papers, and detailed video solutions.",
    image: "/assets/images/home/about-student.png",
    primaryBtn: "Test Series",
    primaryLink: "/test-series",
    secondaryBtn: "Study Packs",
    secondaryLink: "/study-packs"
  }
];

export const HeroCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-container section-padding">
      {/* Floating Background Shapes */}
      <div className="hero-shape hero-shape-1"></div>
      <div className="hero-shape hero-shape-2"></div>

      <div className="container relative z-10">
        <div className="hero-slider-wrapper">
          <div 
            className="hero-slider-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {banners.map((banner) => (
              <div className="hero-layout" key={banner.id}>
                <div className="hero-left">
                  <div className="inline-block px-4 py-1 rounded-full bg-[#ff6b1a]/10 text-[#ff6b1a] font-bold text-sm mb-6">
                    {banner.tag}
                  </div>
                  <h1 className="hero-heading">
                    {banner.headingPrefix} <br className="hidden sm:block" />
                    <span className="hero-heading-highlight">{banner.headingHighlight}</span>
                  </h1>

                  <p className="hero-description">
                    {banner.description}
                  </p>
                  
                  <div className="hero-buttons">
                    <Button 
                      variant="solid" 
                      className="hero-btn-primary shadow-lg shadow-orange-500/30"
                      onClick={() => navigate(banner.primaryLink)}
                    >
                      {banner.primaryBtn}
                    </Button>
                    <Button 
                      variant="outline" 
                      className="hero-btn-secondary"
                      onClick={() => navigate(banner.secondaryLink)}
                    >
                      {banner.secondaryBtn}
                    </Button>
                  </div>

                  <div className="hero-features">
                    <span className="flex items-center gap-2"><CheckCircle2 size={18} color="#ff6b1a" /> Live Classes</span>
                    <span className="flex items-center gap-2"><CheckCircle2 size={18} color="#ff6b1a" /> Smart Notes</span>
                    <span className="flex items-center gap-2"><CheckCircle2 size={18} color="#ff6b1a" /> Chapter Tests</span>
                    <span className="flex items-center gap-2"><CheckCircle2 size={18} color="#ff6b1a" /> 24x7 Support</span>
                  </div>
                </div>
                
                <div className="hero-right">
                  <div className="relative">
                    <img src={banner.image} alt="Student Learning" className="hero-student-img relative z-10 drop-shadow-2xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Pagination Dots */}
        <div className="hero-dots">
          {banners.map((_, index) => (
            <button 
              key={index}
              className={`hero-dot ${current === index ? 'active' : ''}`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
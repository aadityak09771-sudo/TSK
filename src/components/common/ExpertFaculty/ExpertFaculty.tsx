import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, GraduationCap } from 'lucide-react';
import './ExpertFaculty.css';

interface FacultyCardProps {
  name: string;
  role: string;
  experience: string;
  institute: string;
  image: string;
}

const FacultyCard: React.FC<FacultyCardProps> = ({ name, role, experience, institute, image }) => {
  return (
    <div className="faculty-card">
      <div className="faculty-image-wrapper">
        <img src={image} alt={name} className="faculty-image" />
      </div>
      <div className="faculty-info">
        <h3 className="faculty-name">{name}</h3>
        <p className="faculty-role">{role}</p>
        <div className="faculty-details">
          <div className="detail-item">
            <Clock size={16} className="detail-icon" />
            <span>{experience}</span>
          </div>
          <div className="detail-item">
            <GraduationCap size={16} className="detail-icon" />
            <span>{institute}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ExpertFaculty: React.FC = () => {
  const facultyList = [
    {
      name: "Aariz Verma",
      role: "Physics Expert",
      experience: "10+ Years Exp.",
      institute: "IIT Delhi",
      image: "/assets/images/teacher_1.png"
    },
    {
      name: "Neha Sharma",
      role: "Chemistry Expert",
      experience: "8+ Years Exp.",
      institute: "IIT Bombay",
      image: "/assets/images/teacher_2.png"
    },
    {
      name: "Rahul Mehta",
      role: "Maths Expert",
      experience: "12+ Years Exp.",
      institute: "IIT Kanpur",
      image: "/assets/images/teacher_3.png"
    }
  ];

  return (
    <section className="expert-faculty-section">
      <div className="container">
        <div className="expert-faculty-container-card">
          <div className="expert-faculty-header">
            <h2 className="expert-faculty-heading">Expert Faculty</h2>
            <Link to="/about" className="view-all-link">
              View All Faculty <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="faculty-grid">
            {facultyList.map((faculty, index) => (
              <FacultyCard key={index} {...faculty} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

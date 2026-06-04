import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './PopularCourseCard.css';

export interface PopularCourseCardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  badge?: string;
  backgroundColor: string;
  accentColor: string;
  path: string;
}

export const PopularCourseCard: React.FC<PopularCourseCardProps> = ({
  title, subtitle, icon, badge, backgroundColor, accentColor, path
}) => {
  return (
    <Link to={path} className="popular-card" style={{ background: backgroundColor }}>
      {badge && <div className="board-badge" style={{ background: accentColor }}>{badge}</div>}
      <div className="card-icon" style={{ color: accentColor }}>
        {icon}
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
      <div className="card-arrow" style={{ color: accentColor }}>
        <ArrowRight size={20} />
      </div>
    </Link>
  );
};
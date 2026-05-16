import React from 'react';
import './GoalCard.css';

interface GoalCardProps {
  name: string;
  icon: string;
  color?: string;
  variant?: 'popular' | 'all';
  onClick: () => void;
  isSelected?: boolean;
}

export const GoalCard: React.FC<GoalCardProps> = ({ 
  name, 
  icon, 
  color, 
  variant = 'all', 
  onClick,
  isSelected 
}) => {
  const cardClass = `goal-card goal-card--${variant} ${isSelected ? 'goal-card--selected' : ''}`;
  
  return (
    <div 
      className={cardClass} 
      onClick={onClick}
      style={{ '--goal-bg': color } as React.CSSProperties}
    >
      <div className="goal-card__icon-wrapper">
        <span className="goal-card__icon">{icon}</span>
      </div>
      <span className="goal-card__name">{name}</span>
    </div>
  );
};

import React from 'react';
import './ClassCardModal.css';

interface ClassCardModalProps {
  name: string;
  icon?: string;
  onClick: () => void;
  isSelected?: boolean;
}

export const ClassCardModal: React.FC<ClassCardModalProps> = ({ 
  name, 
  icon = '📚', 
  onClick, 
  isSelected 
}) => {
  return (
    <div 
      className={`class-card-modal ${isSelected ? 'class-card-modal--selected' : ''}`} 
      onClick={onClick}
    >
      <div className="class-card-modal__icon">
        {icon}
      </div>
      <span className="class-card-modal__name">{name}</span>
    </div>
  );
};

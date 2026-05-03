import React from 'react';
import './Spinner.css';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  className?: string;
  text?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({ 
  size = 'md', 
  className = '',
  text
}) => {
  return (
    <div className={`spinner-container ${className}`}>
      <div className={`spinner-ring spinner-${size}`} />
      {text && <span className="spinner-text">{text}</span>}
    </div>
  );
};

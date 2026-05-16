import React from 'react';
import './Skeleton.css';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded';
  width?: string | number;
  height?: string | number;
}

export const Skeleton: React.FC<SkeletonProps> = ({ 
  className = '', 
  variant = 'rectangular',
  width,
  height,
}) => {
  const styles: React.CSSProperties = {
    width: width,
    height: height,
  };

  return (
    <div 
      className={`skeleton skeleton--${variant} ${className}`}
      style={styles}
    />
  );
};

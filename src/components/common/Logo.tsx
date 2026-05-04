import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  light?: boolean;
}

//TODO: REPLACE WITH ACTUAL LOGO
export const Logo: React.FC<LogoProps> = ({ className, light = false }) => {
  return (
    <Link to="/" className={`flex items-center gap-2 text-2xl font-bold transition-transform hover:scale-105 ${className}`}>
      <span className={`flex items-center justify-center w-10 h-10 rounded-lg text-white font-black bg-[var(--color-primary)]`}>
        SK
      </span>
      <span className={light ? 'text-white' : 'text-gray-900'}>
        Siksha<span className="text-[var(--color-primary)]">Kendra</span>
      </span>
    </Link>
  );
};

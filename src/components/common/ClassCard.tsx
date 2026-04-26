import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

interface ClassCardProps {
  grade: string;
}

export const ClassCard: React.FC<ClassCardProps> = ({ grade }) => {
  return (
    <div className="bg-white rounded-[var(--radius-lg)] p-8 text-center shadow-[var(--shadow-md)] border border-[var(--color-border)] transition-all duration-300 hover:shadow-[var(--shadow-hover)] hover:-translate-y-1">
      <div className="w-20 h-20 bg-blue-50 text-[var(--color-primary)] rounded-2xl flex items-center justify-center text-3xl font-black mx-auto mb-6">
        {grade}
      </div>
      <h3 className="text-xl font-bold mb-8">Class {grade}th</h3>
      <Link to={`/course-listing?class=${grade}`}>
        <Button variant="solid" className="w-full">
          ADD
        </Button>
      </Link>
    </div>
  );
};

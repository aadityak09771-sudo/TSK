import React from 'react';
import { SearchX } from 'lucide-react';
import { Button } from '../ui/Button';

interface EmptyStateProps {
  onClear: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ onClear }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <div className="w-24 h-24 bg-gray-50 rounded-[2rem] flex items-center justify-center text-gray-300 mb-8">
        <SearchX size={48} />
      </div>
      <h3 className="text-2xl font-black text-gray-900 mb-4">No courses found</h3>
      <p className="text-gray-500 font-bold max-w-md mx-auto mb-8">
        We couldn't find any courses matching your search. Try another keyword or explore our popular categories.
      </p>
      <Button 
        variant="outline" 
        className="h-12 rounded-xl px-8 border-2 border-gray-100 font-black hover:border-[var(--color-primary)] hover:bg-blue-50/50"
        onClick={onClear}
      >
        Clear Search
      </Button>
    </div>
  );
};

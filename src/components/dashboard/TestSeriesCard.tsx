import React from 'react';
import { FileText, ListChecks } from 'lucide-react';
import type { TestSeries } from '../../config/testSeriesData';

interface TestSeriesCardProps {
  series: TestSeries;
  onViewDetails?: (series: TestSeries) => void;
  onBuyNow?: (series: TestSeries) => void;
}

export const TestSeriesCard: React.FC<TestSeriesCardProps> = ({ series, onViewDetails, onBuyNow }) => {
  return (
    <article className="group bg-white rounded-[20px] shadow-[0_8px_25px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[0_15px_35px_rgba(255,107,0,0.15)] border border-gray-100 flex flex-col h-full cursor-pointer" onClick={() => onViewDetails?.(series)}>
      <div className="relative h-[180px] w-full overflow-hidden">
        <img 
          src={series.image} 
          alt={series.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => { 
            const target = e.target as HTMLImageElement;
            target.onerror = null; 
            target.src = "/assets/images/course.png"; 
          }}
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className="bg-[#ff6b00] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
            {series.category}
          </span>
          <span className="bg-white/90 backdrop-blur-sm text-[#ff6b00] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
            {series.syllabus}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow bg-white">
        <h3 className="text-xl font-bold text-[#071b4d] mb-4 line-clamp-2 min-h-[3.5rem] group-hover:text-[#ff6b00] transition-colors">
          {series.title}
        </h3>

        <div className="flex items-center gap-4 text-gray-500 text-sm mb-6">
          <div className="flex items-center gap-1.5">
            <FileText size={16} className="text-[#ff6b00]" />
            <span className="font-medium">{series.tests} Tests</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ListChecks size={16} className="text-[#ff6b00]" />
            <span className="font-medium">{series.questions} Questions</span>
          </div>
        </div>

        <div className="mt-auto border-t border-gray-100 pt-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-[#071b4d]">₹{series.price}</span>
                <span className="text-sm font-bold text-gray-400 line-through">₹{series.oldPrice}</span>
              </div>
            </div>
            <span className="bg-[#fff1e7] text-[#ff6b00] text-[10px] font-bold px-2.5 py-1 rounded-lg">
              {series.discount}
            </span>
          </div>

          <div className="flex gap-3">
            <button 
              onClick={(e) => { e.stopPropagation(); onViewDetails?.(series); }}
              className="flex-1 py-3 px-4 rounded-[10px] bg-transparent text-[#ff6b00] font-[600] text-sm hover:bg-[#fff1e7] transition-colors"
            >
              Details
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); onBuyNow?.(series); }}
              className="flex-1 py-3 px-4 rounded-[10px] bg-[#ff6b00] hover:bg-[#e55f00] text-white font-[600] text-sm shadow-md shadow-orange-500/20 transition-all text-center"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
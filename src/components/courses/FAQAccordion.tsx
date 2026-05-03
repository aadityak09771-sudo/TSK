import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQ_DATA } from '../../config/courses-data';

export const FAQAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-500">Everything you need to know about our courses and learning platform.</p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => (
            <div key={index} className="border border-gray-100 rounded-[2rem] overflow-hidden transition-all duration-300">
              <button
                className="w-full flex items-center justify-between p-6 md:p-8 text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg font-bold text-gray-900 pr-8">{faq.question}</span>
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  activeIndex === index ? 'bg-[var(--color-primary)] text-white rotate-180' : 'bg-gray-50 text-gray-400'
                }`}>
                  {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                activeIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="p-6 md:p-8 pt-0 text-gray-600 leading-relaxed text-lg border-t border-gray-50 bg-gray-50/30">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

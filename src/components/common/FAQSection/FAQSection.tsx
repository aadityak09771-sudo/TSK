import React from 'react';
import { Plus } from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: "What curriculum does Topper's Siksha Kendra follow?",
    answer: "We currently focus extensively on the CBSE and ICSE board curriculum for classes 9 through 12, heavily integrating NCERT concepts to ensure thorough board and competitive exam readiness."
  },
  {
    question: "How do the live test series work?",
    answer: "Students can enroll directly through the specific course cards. Tests are time-bound to simulate real exam environments, and detailed performance analytics are provided immediately upon completion."
  },
  {
    question: "Do you offer refunds if I am unsatisfied?",
    answer: "Yes, we offer a 7-day money-back guarantee for all our full-course premium programs if you feel our methodology doesn't align with your learning style."
  }
];

export const FAQSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#071b4d]">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, i) => (
            <details key={i} className="group border border-gray-100 rounded-2xl overflow-hidden shadow-sm transition-all hover:shadow-md hover:shadow-orange-500/10 hover:border-orange-200 open:border-orange-200">
              <summary className="flex items-center justify-between p-6 cursor-pointer bg-white group-open:bg-orange-50 transition-colors">
                <span className="font-bold text-gray-900 group-hover:text-orange-600 group-open:text-orange-600 transition-colors">{item.question}</span>
                <Plus className="text-[#ff6b1a] group-hover:text-orange-500 group-open:text-orange-500 transition-all duration-300 group-open:rotate-45" size={24} />
              </summary>
              <div className="p-6 pt-0 text-gray-600 leading-relaxed bg-orange-50 border-t border-transparent group-open:border-orange-100">
                 {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
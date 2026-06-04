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
  },
  {
    question: "Are there printed study materials available?",
    answer: "All our standard modules include comprehensive digital PDFs and interactive online assignments. For select premium tier courses, physical booklets are shipped directly to the student's registered address."
  },
  {
    question: "How do I contact a tutor for doubt resolution?",
    answer: "Premium students have access to a dedicated 24/7 doubt resolution portal where they can submit questions and receive detailed video or text explanations from our faculty within 4 hours."
  }
];

export const Faqs: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="py-24 bg-gray-50/50">
        <div className="container text-center max-w-3xl">
          <h1 className="text-4xl font-black mb-6">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-500">
            Got questions? We've got answers. If you don't see your question here, 
            feel free to contact our support team.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container max-w-3xl">
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, i) => (
              <details key={i} className="group border border-gray-100 rounded-2xl overflow-hidden shadow-sm transition-all hover:shadow-md hover:shadow-orange-500/10 hover:border-orange-200 open:border-orange-200">
                <summary className="flex items-center justify-between p-6 cursor-pointer bg-white group-open:bg-orange-50 transition-colors">
                  <span className="font-bold text-gray-900 group-hover:text-orange-600 group-open:text-orange-600 transition-colors">{item.question}</span>
                  <Plus className="text-[var(--color-primary)] group-hover:text-orange-500 group-open:text-orange-500 transition-all duration-300 group-open:rotate-45" size={24} />
                </summary>
                <div className="p-6 pt-0 text-gray-600 leading-relaxed bg-orange-50 border-t border-transparent group-open:border-orange-100">
                   {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

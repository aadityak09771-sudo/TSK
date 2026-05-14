import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQSection.css';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What courses does SikshaKendra offer?",
    answer: "SikshaKendra offers courses for school classes, foundation batches, board preparation, JEE, NEET, and other competitive exams."
  },
  {
    question: "How are the live classes conducted?",
    answer: "Live classes are conducted online by experienced faculty. Students can attend classes, ask doubts, and access learning materials from their dashboard."
  },
  {
    question: "Can I access the recorded classes later?",
    answer: "Yes, recorded classes are available after the live session so students can revise topics anytime."
  },
  {
    question: "How can I ask doubts?",
    answer: "Students can ask doubts during live classes or through the doubt-support feature available inside the course dashboard."
  },
  {
    question: "Are notes and tests included in the course?",
    answer: "Yes, smart notes, chapter-wise tests, mock tests, and practice materials are included depending on the selected course."
  },
  {
    question: "Is there any refund policy?",
    answer: "Refunds are handled according to the course terms and conditions. Students can contact support for refund-related queries."
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="faq-heading">Frequently Asked Questions</h2>
        <div className="faq-grid">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question-container">
                <h3 className="faq-question">{item.question}</h3>
                <ChevronDown 
                  size={20} 
                  className={`faq-icon ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </div>
              <div className="faq-answer-wrapper">
                <div className="faq-answer-content">
                  <p className="faq-answer">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

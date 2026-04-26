import React from 'react';
import { X, CheckCircle2, Info, BookCheck, Headphones, CalendarDays } from 'lucide-react';
import type { Batch } from '../../types/batches';
import { Button } from '../ui/Button';

interface CourseDetailsModalProps {
  batch: Batch | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CourseDetailsModal: React.FC<CourseDetailsModalProps> = ({ batch, isOpen, onClose }) => {
  if (!isOpen || !batch) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2rem] shadow-2xl relative">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
        >
          <X size={24} className="text-gray-500" />
        </button>

        <div className="p-8 md:p-12">
          <div className="mb-10">
            <span className="bg-blue-50 text-[var(--color-primary)] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] mb-4 inline-block">
              Course Details
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">{batch.title}</h2>
            <p className="text-gray-600 text-lg leading-relaxed">{batch.details.overview}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-10">
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <CheckCircle2 size={20} className="text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Who is it for?</h3>
                </div>
                <ul className="space-y-3">
                  {batch.details.whoIsItFor.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <BookCheck size={20} className="text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Subjects Covered</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {batch.details.subjectsCovered.map((item, idx) => (
                    <span key={idx} className="px-4 py-2 bg-purple-50 text-purple-700 rounded-xl font-bold text-sm border border-purple-100">
                      {item}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <Info size={20} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Course Highlights</h3>
                </div>
                <ul className="space-y-3">
                  {batch.details.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600">
                      <CheckCircle2 size={16} className="text-green-500 mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="space-y-10">
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-orange-50 rounded-lg">
                    <BookCheck size={20} className="text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Test & Practice</h3>
                </div>
                <ul className="space-y-3">
                  {batch.details.testPractice.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-red-50 rounded-lg">
                    <Headphones size={20} className="text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Doubt Support</h3>
                </div>
                <p className="text-gray-600 leading-relaxed bg-red-50/50 p-4 rounded-2xl border border-red-100">
                  {batch.details.doubtSupport}
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <CalendarDays size={20} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Validity</h3>
                </div>
                <p className="text-gray-900 font-bold bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  {batch.details.validity}
                </p>
              </section>
            </div>
          </div>

          <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex flex-col">
                <span className="text-sm text-gray-400 line-through">₹{batch.originalPrice.toLocaleString()}</span>
                <span className="text-3xl font-black text-gray-900">₹{batch.discountedPrice.toLocaleString()}</span>
              </div>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-black">
                Limited Time Offer
              </span>
            </div>
            <div className="flex gap-4 w-full sm:w-auto">
              <Button variant="outline" className="flex-1 sm:px-10 h-14 rounded-2xl" onClick={onClose}>
                Close
              </Button>
              <Button variant="solid" className="flex-1 sm:px-10 h-14 rounded-2xl shadow-xl shadow-blue-500/20">
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

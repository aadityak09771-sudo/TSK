import React from 'react';
import { COURSES_DATA } from '../../config/courses-data';
import { Button } from '../ui/Button';

export const CourseComparisonTable: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">Compare Our Courses</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Choose the best fit for your academic goals by comparing our top-rated courses side-by-side.</p>
        </div>

        <div className="overflow-x-auto pb-8">
          <table className="w-full min-w-[1000px] border-separate border-spacing-y-4">
            <thead>
              <tr className="text-left text-gray-400 uppercase text-xs font-black tracking-widest">
                <th className="px-8 py-4">Course Name</th>
                <th className="px-8 py-4">Target</th>
                <th className="px-8 py-4">Medium</th>
                <th className="px-8 py-4">Lessons</th>
                <th className="px-8 py-4">Price</th>
                <th className="px-8 py-4">Best For</th>
                <th className="px-8 py-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {COURSES_DATA.map((course) => (
                <tr key={course.id} className="bg-white group hover:shadow-xl hover:shadow-blue-500/5 transition-all">
                  <td className="px-8 py-6 rounded-l-[1.5rem] border-y border-l border-gray-100">
                    <span className="font-bold text-gray-900">{course.title}</span>
                    <div className="mt-1">
                      <span className="text-[10px] font-black text-[var(--color-primary)] uppercase tracking-tighter bg-blue-50 px-2 py-0.5 rounded">
                        {course.category}
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-6 border-y border-gray-100 text-gray-600 font-medium">{course.target}</td>
                  <td className="px-8 py-6 border-y border-gray-100 text-gray-600">{course.language}</td>
                  <td className="px-8 py-6 border-y border-gray-100 text-gray-600">{course.lessonsCount}</td>
                  <td className="px-8 py-6 border-y border-gray-100">
                    <span className="font-black text-gray-900">₹{course.price.toLocaleString()}</span>
                  </td>
                  <td className="px-8 py-6 border-y border-gray-100">
                    <span className="text-xs text-gray-500 line-clamp-1">{course.details?.whoIsItFor[0]}</span>
                  </td>
                  <td className="px-8 py-6 rounded-r-[1.5rem] border-y border-r border-gray-100">
                    <Button variant="solid" className="h-10 px-6 text-xs rounded-xl">Enroll</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Layout (Visible only on small screens) */}
        <div className="md:hidden space-y-4">
          {COURSES_DATA.slice(0, 3).map((course) => (
            <div key={course.id} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">{course.title}</h3>
              <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                <div>
                  <p className="text-gray-400 text-xs mb-1 uppercase font-black">Target</p>
                  <p className="text-gray-700 font-bold">{course.target}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-1 uppercase font-black">Price</p>
                  <p className="text-gray-900 font-black">₹{course.price.toLocaleString()}</p>
                </div>
              </div>
              <Button variant="solid" className="w-full h-12 rounded-2xl">Enroll Now</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
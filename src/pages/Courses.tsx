import React, { useState, useMemo } from 'react';
import { 
  MonitorPlay, Video, BookOpen, NotebookPen, ClipboardCheck, Trophy, Headphones, TrendingUp, 
  CheckCircle2, Plus, Award
} from 'lucide-react';
import { CourseCard } from '../components/courses/CourseCard';
import { COURSES_DATA } from '../config/courses-data'; 

const CATEGORIES = ['All', 'CBSE', 'Class 9', 'Class 10', 'Class 11', 'Class 12'];

const FEATURES = [
  { icon: <MonitorPlay size={28} />, title: "Live Interactive Classes", desc: "Engage with expert teachers in real-time." },
  { icon: <Video size={28} />, title: "Recorded Lectures", desc: "Access high-quality recordings anytime." },
  { icon: <BookOpen size={28} />, title: "Study Notes & PDF", desc: "Comprehensive notes for quick revision." },
  { icon: <NotebookPen size={28} />, title: "Daily Practice Problems", desc: "Consistent practice for perfection." },
  { icon: <ClipboardCheck size={28} />, title: "Chapterwise Tests", desc: "Evaluate your chapter-level understanding." },
  { icon: <Trophy size={28} />, title: "Full Mock Tests", desc: "Exam-like environment for final prep." },
  { icon: <Headphones size={28} />, title: "Doubt Solving Support", desc: "24/7 assistance for all your queries." },
  { icon: <TrendingUp size={28} />, title: "Performance Tracking", desc: "Detailed analytics of your progress." },
];

const WHY_CHOOSE = [
  "Complete Syllabus Coverage",
  "Structured Learning Path",
  "Learn From Home",
  "Regular Practice",
  "Better Revision",
  "Exam Focused Preparation",
  "Affordable Learning",
  "Progress Tracking"
];

const FAQS = [
  { question: "How do I access the live classes?", answer: "Once enrolled, you can access all live classes directly from your Student Dashboard under the 'My Courses' tab." },
  { question: "Can I watch the classes if I miss a live session?", answer: "Yes, all live classes are recorded and uploaded to your dashboard within 24 hours for you to watch anytime." },
  { question: "Are the study materials downloadable?", answer: "Absolutely! All PDFs, notes, and practice sheets can be downloaded for offline study." },
  { question: "How can I ask doubts during the class?", answer: "Our live classes feature an interactive chat and a dedicated 'Raise Hand' feature to ask questions directly to the teacher." },
  { question: "Do you provide mock tests for competitive exams?", answer: "Yes, we provide full-length, exam-pattern mock tests for JEE, NEET, and board exams." }
];

export const Courses: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCourses = useMemo(() => {
    if (activeCategory === 'All') return COURSES_DATA;
    return COURSES_DATA.filter(course => 
      course.category?.includes(activeCategory) || 
      course.target?.includes(activeCategory) ||
      course.title?.includes(activeCategory)
    );
  }, [activeCategory]);

  return (
    <div className="w-full bg-[#fffaf6] min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 opacity-[0.4] pointer-events-none hidden md:block" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #ff6b00 2px, transparent 0)', backgroundSize: '20px 20px' }} />
        <div className="absolute bottom-10 right-10 w-32 h-32 opacity-[0.4] pointer-events-none hidden md:block" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #ff6b00 2px, transparent 0)', backgroundSize: '20px 20px' }} />
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#ff6b00]/5 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#fff4eb] text-[#ff6b00] font-[700] text-xs uppercase tracking-[0.15em] mb-6">
            <Award size={16} /> Premium Learning
          </div>
          
          <h1 className="text-[42px] md:text-[56px] font-[800] text-[#0a2458] leading-tight mb-6">
            Our <span className="text-[#ff6b00]">Courses</span>
          </h1>
          
          <p className="text-[17px] text-[#64748b] max-w-2xl mx-auto mb-10 leading-relaxed">
            Discover our expertly crafted courses designed to help you master concepts, practice effectively, and achieve your academic goals.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-[26px] py-[12px] rounded-full border-2 font-[700] text-sm transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-[#ff6b00] border-[#ff6b00] text-white shadow-[0_8px_20px_rgba(255,107,0,0.2)] -translate-y-[3px]' 
                    : 'bg-white border-[#ff6b00] text-[#ff6b00] hover:bg-[#ff6b00] hover:text-white hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(255,107,0,0.2)]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Course Cards Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white relative z-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
            {filteredCourses.length === 0 && (
              <div className="col-span-full py-16 text-center text-[#64748b] font-medium">
                No courses found for the selected category.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* What Students Will Get */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fffaf6]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-[36px] md:text-[42px] font-[800] text-[#0a2458] mb-4">
              What Students <span className="text-[#ff6b00]">Will Get</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feature, i) => (
              <div key={i} className="bg-white rounded-[20px] p-6 border border-[#f5e6d7] transition-all duration-300 hover:-translate-y-[8px] hover:shadow-[0_15px_30px_rgba(255,107,0,0.15)] group">
                <div className="w-[60px] h-[60px] rounded-[18px] bg-[#fff4eb] text-[#ff6b00] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-[800] text-[#0a2458] mb-2">{feature.title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Courses */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-[36px] md:text-[42px] font-[800] text-[#0a2458] mb-4">
              Why Choose <span className="text-[#ff6b00]">Our Courses</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE.map((item, i) => (
              <div key={i} className="bg-[#fffaf6] rounded-[20px] p-6 border border-[#f5e6d7] transition-all duration-300 hover:-translate-y-[8px] hover:border-[#ff6b00] hover:shadow-[0_10px_25px_rgba(255,107,0,0.1)] flex items-center gap-4 group">
                <div className="text-[#ff6b00] bg-white p-2 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="text-base font-[700] text-[#0a2458]">{item}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fffaf6] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#ff6b00]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-[800px] mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-[36px] md:text-[42px] font-[800] text-[#0a2458] mb-4">
              Frequently Asked <span className="text-[#ff6b00]">Questions</span>
            </h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <details key={i} className="group bg-white border border-[#f5e6d7] rounded-[18px] overflow-hidden transition-all duration-300 hover:border-[#ff6b00] hover:shadow-[0_10px_20px_rgba(255,107,0,0.08)] open:bg-[#fff7f1] open:border-[#ff6b00]/30 open:shadow-[0_10px_20px_rgba(255,107,0,0.08)] cursor-pointer">
                <style>{`summary::-webkit-details-marker { display: none; }`}</style>
                <summary className="flex items-center justify-between p-6 outline-none list-none select-none">
                  <span className="font-[700] text-[16px] text-[#0a2458] group-hover:text-[#ff6b00] group-open:text-[#ff6b00] transition-colors pr-4">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 shrink-0 rounded-full bg-[#fff4eb] flex items-center justify-center text-[#ff6b00] group-open:rotate-45 transition-transform duration-300">
                    <Plus size={20} strokeWidth={3} />
                  </div>
                </summary>
                <div className="p-6 pt-0 text-[#64748b] text-[15px] leading-relaxed border-t border-transparent group-open:border-[#ff6b00]/10">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
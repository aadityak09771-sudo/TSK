import type { Course, Category, Lesson } from '../types/courses';

export const DASHBOARD_CATEGORIES: Category[] = [
  { id: '1', name: 'Video Editing', icon: '🎬' },
  { id: '2', name: 'AI & ChatGPT', icon: '🤖' },
  { id: '3', name: 'YouTube Creator', icon: '📹' },
  { id: '4', name: 'Instagram & Social Media', icon: '📱' },
  { id: '5', name: 'Graphic Design', icon: '🎨' },
  { id: '6', name: 'Web Development', icon: '💻' },
];

export const POPULAR_COURSES: Course[] = [
  {
    id: 'b1',
    title: 'Arjuna JEE 2027',
    category: 'Class 11 JEE',
    language: 'HINGLISH',
    target: 'JEE 2027',
    startDate: 'Started on 13 Apr 2026',
    discount: 'Upto 40% off',
    lessonsCount: '120+ lessons',
    price: 4999,
    originalPrice: 8000,
    image: '/assets/images/course.png',
    badge: 'Multiple plans inside: Basic, Pro',
    description: 'Complete syllabus coverage for Class 11th JEE aspirants with top faculty.',
    details: {
      overview: 'Comprehensive program for Class 11 JEE 2027 preparation.',
      whoIsItFor: ['Class 11 Students', 'JEE 2027 Aspirants'],
      subjectsCovered: ['Physics', 'Chemistry', 'Mathematics'],
      whatYouGet: ['Live Classes', 'DPPs', 'Mock Tests'],
      highlights: ['Expert Faculty', 'Doubt Solving', 'Regular Tests'],
      testPractice: ['Weekly Tests', 'Monthly Mocks'],
      doubtSupport: '24/7 Support',
      validity: 'Till JEE 2027'
    }
  },
  {
    id: 'b2',
    title: 'Lakshya JEE 2027',
    category: 'Class 12 JEE',
    language: 'HINGLISH',
    target: 'JEE 2027',
    startDate: 'Started on 26 Mar 2026',
    discount: 'Upto 35% off',
    lessonsCount: '150+ lessons',
    price: 5999,
    originalPrice: 9000,
    image: '/assets/images/course.png',
    badge: 'Pro Pack Included',
    description: 'Targeted course for Class 12th JEE success with intensive practice.',
    details: {
      overview: 'Dedicated course for Class 12 JEE 2027 aspirants.',
      whoIsItFor: ['Class 12 Students', 'JEE 2027 Aspirants'],
      subjectsCovered: ['Physics', 'Chemistry', 'Mathematics'],
      whatYouGet: ['Advanced Practice', 'Recorded Backups'],
      highlights: ['High Weightage Focus', 'Previous Year Questions'],
      testPractice: ['Pattern-based tests', 'AITS'],
      doubtSupport: 'Priority Doubt Solving',
      validity: 'Till JEE 2027'
    }
  },
  {
    id: 'b3',
    title: 'Vidyapeeth 11th JEE 2028',
    category: 'Class 11 + 12 JEE',
    language: 'HINGLISH',
    target: 'JEE 2028',
    startDate: 'Course starting in April',
    discount: 'Upto 40% off',
    lessonsCount: '200+ lessons',
    price: 7999,
    originalPrice: 12000,
    image: '/assets/images/course.png',
    badge: 'Premium Offline Hybrid',
    description: 'Foundation to Advanced hybrid course for long-term JEE preparation.',
    details: {
      overview: '2-Year foundation program for JEE 2028.',
      whoIsItFor: ['Class 11 Students'],
      subjectsCovered: ['Physics', 'Chemistry', 'Mathematics'],
      whatYouGet: ['Hybrid Learning', 'Study Material'],
      highlights: ['Long-term strategy', 'Concept Building'],
      testPractice: ['Foundation Tests', 'Olympiad prep'],
      doubtSupport: 'Dedicated Mentors',
      validity: 'Till June 2028'
    }
  }
];

export const MOCK_LESSONS: Lesson[] = [
  { id: 'l1', lessonNumber: 1, title: 'Introduction to the Course', duration: '10:00', videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', isCompleted: true },
  { id: 'l2', lessonNumber: 2, title: 'Basic Concepts', duration: '45:00', videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', isCompleted: false },
  { id: 'l3', lessonNumber: 3, title: 'Chapter 1: Fundamentals', duration: '55:00', videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', isCompleted: false },
  { id: 'l4', lessonNumber: 4, title: 'Practice Session 1', duration: '30:00', videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4', isCompleted: false },
  { id: 'l5', lessonNumber: 5, title: 'Revision Class', duration: '40:00', videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', isCompleted: false },
  { id: 'l6', lessonNumber: 6, title: 'Mock Test Discussion', duration: '60:00', videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4', isCompleted: false },
];

export const COURSES_DATA = POPULAR_COURSES;

export const FAQ_DATA = [
  {
    question: "What is the mode of classes in these courses?",
    answer: "Most of our courses offer a hybrid experience with live interactive classes and 24/7 access to recorded lectures for revision."
  },
  {
    question: "How can I resolve my doubts after the live class?",
    answer: "We have dedicated doubt-solving sessions, and students can also post their queries on our platform to get them resolved by expert mentors."
  },
  {
    question: "Is study material provided with the course?",
    answer: "Yes, comprehensive digital study material including lecture notes, PDFs, and daily practice problems (DPPs) are provided to all enrolled students."
  },
  {
    question: "Can I watch the classes on my mobile phone?",
    answer: "Absolutely! Our platform is fully responsive and optimized for mobile devices. You can also download our mobile app for a better learning experience."
  },
  {
    question: "What is the validity of the course?",
    answer: "Course validity typically lasts until your target exam date. For example, JEE 2027 courses remain valid until the JEE Advanced 2027 exam is conducted."
  }
];

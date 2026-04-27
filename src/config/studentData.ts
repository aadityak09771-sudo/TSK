import type { EnrolledCourse } from '../types/student';

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Video Editing', icon: '🎬' },
  { id: '2', name: 'AI & ChatGPT', icon: '🤖' },
  { id: '3', name: 'YouTube Creator', icon: '📹' },
  { id: '4', name: 'Instagram & Social Media', icon: '📱' },
  { id: '5', name: 'Graphic Design', icon: '🎨' },
  { id: '6', name: 'Web Development', icon: '💻' },
  { id: '7', name: 'Public Speaking', icon: '🎤' },
  { id: '8', name: 'Personal Finance', icon: '💰' },
];

export interface BatchCourse {
  id: string;
  title: string;
  category: string;
  language: string;
  target: string;
  startDate: string;
  discount: string;
  lessons: string;
  price: string;
  originalPrice: string;
  thumbnail: string;
  description: string;
  highlights: string[];
  subjects: string[];
}

export const BATCH_COURSES: BatchCourse[] = [
  {
    id: 'b1',
    title: 'Arjuna JEE 2027',
    category: 'Class 11 JEE',
    language: 'HINGLISH',
    target: 'JEE 2027',
    startDate: 'Started on 13 Apr 2026',
    discount: 'Upto 40% off',
    lessons: '120+ lessons',
    price: '₹4,999',
    originalPrice: '₹8,000',
    thumbnail: '/assets/images/course.png',
    description: 'Complete preparation for JEE Main & Advanced 2027 with top educators.',
    highlights: ['Live Classes', 'Doubt Support', 'Study Material', 'Weekly Tests'],
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
  },
  {
    id: 'b2',
    title: 'Lakshya JEE 2027',
    category: 'Class 12 JEE',
    language: 'HINGLISH',
    target: 'JEE 2027',
    startDate: 'Started on 26 Mar 2026',
    discount: 'Upto 35% off',
    lessons: '150+ lessons',
    price: '₹5,999',
    originalPrice: '₹9,000',
    thumbnail: '/assets/images/course.png',
    description: 'Master Class 12 syllabus and JEE concepts with intensive practice.',
    highlights: ['Mock Tests', 'Revision Notes', 'DPP Solutions', 'Career Guidance'],
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
  },
  {
    id: 'b3',
    title: 'Vidyapeeth 11th JEE 2028',
    category: 'Class 11 + 12 JEE',
    language: 'HINGLISH',
    target: 'JEE 2028',
    startDate: 'Batch starting in April',
    discount: 'Upto 40% off',
    lessons: '200+ lessons',
    price: '₹7,999',
    originalPrice: '₹12,000',
    thumbnail: '/assets/images/course.png',
    description: 'Long-term foundational course for JEE aspirants starting early.',
    highlights: ['Foundation Building', 'Parent-Teacher Meetings', 'Personalized Mentorship', 'Offline Support'],
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
  },
];

export const ENROLLED_COURSES: EnrolledCourse[] = BATCH_COURSES.map(course => ({
  id: course.id,
  title: course.title,
  description: course.description,
  instructor: 'Top Educators',
  thumbnail: course.thumbnail,
  progress: 0,
  totalLessons: parseInt(course.lessons),
  totalDuration: '300+ Hours',
  lessons: [
    { id: 'l1', lessonNumber: 1, title: 'Introduction to the Course', duration: '15:00', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', isCompleted: true },
    { id: 'l2', lessonNumber: 2, title: 'Basic Concepts', duration: '45:00', videoUrl: 'https://www.w3schools.com/html/movie.mp4', isCompleted: false },
    { id: 'l3', lessonNumber: 3, title: 'Chapter 1: Fundamentals', duration: '60:00', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', isCompleted: false },
    { id: 'l4', lessonNumber: 4, title: 'Practice Session 1', duration: '30:00', videoUrl: 'https://www.w3schools.com/html/movie.mp4', isCompleted: false },
    { id: 'l5', lessonNumber: 5, title: 'Revision Class', duration: '40:00', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', isCompleted: false },
    { id: 'l6', lessonNumber: 6, title: 'Mock Test Discussion', duration: '50:00', videoUrl: 'https://www.w3schools.com/html/movie.mp4', isCompleted: false },
  ]
}));

import type { Course } from '../types';

export const CLASS_METADATA: Record<string, string[]> = {
  '9': ['Science', 'Mathematics', 'English', 'Social Science'],
  '10': ['Science', 'Mathematics', 'English', 'Social Science'],
  '11': ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
  '12': ['Physics', 'Chemistry', 'Mathematics', 'Biology']
};

export const COURSE_DATA: Course[] = [
  {
    id: '3',
    class: '12',
    title: 'Class 12th Board Mastery',
    badge: 'ONLINE',
    language: 'Hinglish',
    audience: 'For Class 12th CBSE students',
    dateStr: 'Starts on 20 Apr, 2026',
    isPremium: true,
    originalPrice: '4,800',
    currentPrice: '3,500',
    discountText: '27% OFF',
    image: './assets/images/course.png'
  },
  {
    id: '3',
    class: '12',
    title: 'Class 12th Physics Crash Course',
    badge: 'RECORDED',
    language: 'Hinglish',
    audience: 'Physics Focused',
    dateStr: 'Flexible Learning',
    isPremium: false,
    originalPrice: '1,999',
    currentPrice: '999',
    discountText: '50% OFF',
    image: './assets/images/course.png'
  },
  {
    id: '2',
    class: '11',
    title: 'Class 11th Foundation Batch',
    badge: 'ONLINE',
    language: 'English',
    audience: 'For Class 11th CBSE students',
    dateStr: 'Starts on 15 May, 2026',
    isPremium: true,
    originalPrice: '5,500',
    currentPrice: '4,200',
    discountText: 'Special Launch Offer',
    image: './assets/images/course.png'
  },
  {
    id: '1',
    class: '10',
    title: 'Class 10th Board Powerpack',
    badge: 'ONLINE',
    language: 'Hinglish',
    audience: 'For Class 10 Board aspirants',
    dateStr: 'Starts on 01 Sep, 2026',
    isPremium: false,
    originalPrice: '2,999',
    currentPrice: '1,999',
    discountText: 'Early Bird Pricing',
    image: './assets/images/course.png'
  },
  {
    id: '6',
    class: '9',
    title: 'Class 9th Baseline Success',
    badge: 'ONLINE',
    language: 'Hinglish',
    audience: '9th Grade Foundation',
    dateStr: 'Starts on 01 Jul, 2026',
    isPremium: false,
    originalPrice: '2,500',
    currentPrice: '1,500',
    discountText: 'New Session 40% OFF',
    image: './assets/images/course.png'
  }
];

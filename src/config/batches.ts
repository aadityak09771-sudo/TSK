import type { Batch } from '../types/batches';

export const BATCHES_DATA: Batch[] = [
  {
    id: '1',
    title: 'Class 10 Complete Online Course 2026-27',
    category: 'School Courses',
    target: 'CBSE Class 10',
    medium: 'Hinglish',
    mode: 'Live',
    duration: '1 Year',
    originalPrice: 5000,
    discountedPrice: 2999,
    image: '/assets/images/course.png',
    tags: ['Live Classes', 'DPPs', 'Mock Tests'],
    features: ['Live Interactive Classes', 'Recorded Lectures', 'Study Notes & PDFs', 'Doubt Support'],
    details: {
      overview: 'Complete comprehensive course for Class 10th students covering all major subjects for CBSE Board 2027.',
      whoIsItFor: ['Students currently in Class 10', 'CBSE Board aspirants'],
      subjectsCovered: ['Mathematics', 'Science', 'Social Science', 'English'],
      whatYouGet: ['Daily Live Classes', 'PDF Notes of every class', 'Chapter-wise DPPs', 'Weekly Mock Tests'],
      highlights: ['Interactive learning experience', 'Top experienced educators', 'Regular performance tracking'],
      testPractice: ['10+ Full length mock tests', '20+ Chapter-wise tests', 'Previous year questions discussion'],
      doubtSupport: '24/7 Doubt solving via app and dedicated live doubt sessions.',
      validity: 'Till March 2027'
    }
  },
  {
    id: '2',
    title: 'Class 11 JEE Foundation Course 2026-27',
    category: 'JEE',
    target: 'JEE 2028',
    medium: 'English',
    mode: 'Hybrid',
    duration: '2 Years',
    originalPrice: 15000,
    discountedPrice: 9999,
    image: '/assets/images/course.png',
    tags: ['JEE Prep', 'Live Classes', 'Doubt Support'],
    features: ['Advanced Problem Solving', 'Personalized Mentorship', 'Live Classes', 'DPPs'],
    details: {
      overview: 'Building strong foundations for JEE Main and Advanced from Class 11th.',
      whoIsItFor: ['Class 11 students aiming for JEE', 'Students wanting strong conceptual clarity'],
      subjectsCovered: ['Physics', 'Chemistry', 'Mathematics'],
      whatYouGet: ['Foundation to Advanced level classes', 'Special JEE focus DPPs', 'Personal mentorship sessions'],
      highlights: ['Special focus on basics', 'Problem solving techniques', 'Time management strategies'],
      testPractice: ['Monthly JEE patterns tests', 'Subject-wise quizzes', 'All India Test Series (AITS)'],
      doubtSupport: 'Dedicated JEE experts for doubt resolution.',
      validity: 'Till June 2028'
    }
  },
  {
    id: '3',
    title: 'Class 12 NEET Target Course 2026-27',
    category: 'NEET',
    target: 'NEET 2027',
    medium: 'Hinglish',
    mode: 'Live',
    duration: '1 Year',
    originalPrice: 12000,
    discountedPrice: 7999,
    image: '/assets/images/course.png',
    tags: ['NEET Special', 'Biology Focus', 'Mock Tests'],
    features: ['NCERT Based Learning', 'Diagram Practice', 'Mock Tests', 'Recorded Backup'],
    details: {
      overview: 'Targeted course for NEET 2027 aspirants focusing on NCERT mastery and speed.',
      whoIsItFor: ['Class 12 students aiming for NEET 2027'],
      subjectsCovered: ['Physics', 'Chemistry', 'Biology'],
      whatYouGet: ['Daily Interactive Classes', 'Digital Mind Maps', 'NCERT Punch Biology Notes'],
      highlights: ['Complete NCERT coverage', 'Shortcut methods for Physics/Chemistry', 'Quick revision notes'],
      testPractice: ['NCERT based tests', 'Full syllabus NEET mock tests', 'OMR practice sessions'],
      doubtSupport: 'Special doubt sessions for complex numericals.',
      validity: 'Till NEET 2027 Exam'
    }
  },
  {
    id: '4',
    title: 'JEE Dropper Batch 2027',
    category: 'Dropper',
    target: 'JEE 2027',
    medium: 'English',
    mode: 'Live',
    duration: '10 Months',
    originalPrice: 20000,
    discountedPrice: 12999,
    image: '/assets/images/course.png',
    tags: ['Intensive', 'Problem Solving', 'Daily DPPs'],
    features: ['Quick Revision', 'Advanced Practice', 'All India Test Series', '24/7 Support'],
    details: {
      overview: 'Accelerated course for droppers to crack JEE 2027 with high rank.',
      whoIsItFor: ['Students taking a gap year for JEE'],
      subjectsCovered: ['Physics', 'Chemistry', 'Mathematics'],
      whatYouGet: ['Fast-track syllabus completion', 'Extensive practice material', 'Rank booster sessions'],
      highlights: ['Focus on high-weightage topics', 'Error analysis sessions', 'Competitive environment'],
      testPractice: ['Weekly JEE Main/Advanced tests', 'Previous year papers in timer mode', 'Predictor tests'],
      doubtSupport: 'Priority doubt clearing for droppers.',
      validity: 'Till JEE Advanced 2027'
    }
  },
  {
    id: '5',
    title: 'NEET Dropper Batch 2027',
    category: 'Dropper',
    target: 'NEET 2027',
    medium: 'Hinglish',
    mode: 'Live',
    duration: '10 Months',
    originalPrice: 18000,
    discountedPrice: 11499,
    image: '/assets/images/course.png',
    tags: ['Fast Track', 'Mock Tests', 'PCB'],
    features: ['Syllabus Completion', 'Practice Sheets', 'Recorded Lectures', 'Doubt Support'],
    details: {
      overview: 'Comprehensive dropper batch for NEET 2027 aspirants.',
      whoIsItFor: ['Students taking a gap year for NEET'],
      subjectsCovered: ['Physics', 'Chemistry', 'Biology'],
      whatYouGet: ['Complete syllabus coverage in 10 months', 'Special biology focus', 'Daily practice problems'],
      highlights: ['Conceptual depth', 'Consistent revision cycles', 'Motivational sessions'],
      testPractice: ['Regular NEET pattern tests', 'Topic-wise practice sheets', 'AITS for NEET'],
      doubtSupport: 'Live doubt sessions and chat support.',
      validity: 'Till NEET 2027'
    }
  },
  {
    id: '6',
    title: 'Class 9 Foundation Course 2026-27',
    category: 'Foundation',
    target: 'NTSE/Olympiads',
    medium: 'Hinglish',
    mode: 'Recorded',
    duration: '1 Year',
    originalPrice: 4000,
    discountedPrice: 1999,
    image: '/assets/images/course.png',
    tags: ['Foundation', 'NTSE', 'Mental Ability'],
    features: ['recorded Lectures', 'Digital Notes', 'Monthly Tests', 'Parent-Teacher Meeting'],
    details: {
      overview: 'Foundation course for Class 9th to prepare for NTSE, Olympiads and Boards.',
      whoIsItFor: ['Class 9 students wanting an early start'],
      subjectsCovered: ['Maths', 'Science', 'SST', 'English', 'Mental Ability'],
      whatYouGet: ['High quality recorded lectures', 'Simplified notes', 'Mental ability sessions'],
      highlights: ['Pre-foundation for JEE/NEET', 'Logical reasoning focus', 'Holistic development'],
      testPractice: ['Foundation level tests', 'Olympiad mock tests', 'Chapter quizzes'],
      doubtSupport: 'Weekly live doubt sessions.',
      validity: 'Till March 2027'
    }
  }
];

export const FAQ_DATA = [
  {
    question: 'Are classes live or recorded?',
    answer: 'Most of our courses feature live interactive classes. However, we also provide recorded versions of these classes for later revision. Some specialized foundation courses are pre-recorded for flexible learning.'
  },
  {
    question: 'Will students get class notes?',
    answer: 'Yes, students will receive comprehensive digital PDF notes after every class. These are accessible through our mobile app and website.'
  },
  {
    question: 'Are mock tests included?',
    answer: 'Absolutely! Every course includes a series of chapter-wise tests, part-syllabus tests, and full-length mock tests based on the latest exam patterns.'
  },
  {
    question: 'Is doubt support available?',
    answer: 'Yes, we provide 24/7 doubt support through our app. Students can also attend dedicated live doubt-clearing sessions with subject experts.'
  },
  {
    question: 'Can students access lectures on mobile?',
    answer: 'Yes, our platform is fully responsive. Students can attend classes and access all study materials on smartphones, tablets, and laptops.'
  },
  {
    question: 'How long will course access be available?',
    answer: 'Access to course materials and recorded lectures is usually available until the final exam of the targeted academic session (e.g., till March 2027 for Class 10th).'
  },
  {
    question: 'Can students attend demo classes?',
    answer: 'Yes, we offer free demo classes for all our premium courses. You can book a free demo using the "Book Free Demo" button on the course page.'
  }
];

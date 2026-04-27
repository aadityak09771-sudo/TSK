export type Batch = {
  id: string;
  title: string;
  category: string;
  target: string;
  language: string;
  startDate: string;
  discount: string;
  lessonsCount: string;
  price: number;
  originalPrice: number;
  image: string;
  badge?: string;
  description?: string;
  details?: BatchDetails;
};

export const Batch = {}; // Runtime dummy export

export interface BatchDetails {
  overview: string;
  whoIsItFor: string[];
  subjectsCovered: string[];
  whatYouGet: string[];
  highlights: string[];
  testPractice: string[];
  doubtSupport: string;
  validity: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Lesson {
  id: string;
  lessonNumber: number;
  title: string;
  duration: string;
  videoUrl: string;
  isCompleted: boolean;
}

// Runtime export to ensure Vite treats this as a valid JS module
export const BatchRuntime = {};

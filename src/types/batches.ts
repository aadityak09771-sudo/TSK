export interface Batch {
  id: string;
  title: string;
  category: 'School Courses' | 'JEE' | 'NEET' | 'Foundation' | 'Dropper';
  target: string;
  medium: string;
  mode: 'Live' | 'Recorded' | 'Hybrid';
  duration: string;
  originalPrice: number;
  discountedPrice: number;
  image: string;
  tags: string[];
  features: string[];
  details: BatchDetails;
}

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

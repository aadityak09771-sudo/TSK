export interface TestSeries {
  id: number;
  title: string;
  category: string;
  syllabus: string;
  tests: number;
  questions: number;
  price: number;
  oldPrice: number;
  discount: string;
  image: string;
}

export const TEST_SERIES_DATA: TestSeries[] = [
  {
    id: 1,
    title: "JEE Main Test Series 2025",
    category: "JEE",
    syllabus: "Full Syllabus",
    tests: 60,
    questions: 12000,
    price: 499,
    oldPrice: 800,
    discount: "38% OFF",
    image: "/assets/images/course.png"
  },
  {
    id: 2,
    title: "NEET Test Series 2025",
    category: "NEET",
    syllabus: "Full Syllabus",
    tests: 50,
    questions: 10000,
    price: 499,
    oldPrice: 700,
    discount: "35% OFF",
    image: "/assets/images/course.png"
  },
  {
    id: 3,
    title: "CUET Test Series 2025",
    category: "CUET",
    syllabus: "Full Syllabus",
    tests: 40,
    questions: 8000,
    price: 299,
    oldPrice: 500,
    discount: "40% OFF",
    image: "/assets/images/course.png"
  }
];
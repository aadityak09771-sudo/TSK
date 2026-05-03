export interface EnrolledLesson {
  id: string;
  lessonNumber: number;
  title: string;
  duration: string;
  videoUrl: string;
  isCompleted: boolean;
}

export interface EnrolledCourse {
  id: string;
  title: string;
  description: string;
  instructor: string;
  thumbnail: string;
  totalLessons: number;
  totalDuration: string;
  progress: number;
  lessons: EnrolledLesson[];
}

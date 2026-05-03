export interface StudentProfile {
  personalDetails: {
    name: string;
    mobileNo: string;
    gender: string;
    email: string;
    city: string;
    state: string;
  };
  academicDetails: {
    class: string;
    board: string;
    exams: string[];
  };
}

export const STUDENT_PROFILE: StudentProfile = {
  personalDetails: {
    name: 'Sachin Karanwal',
    mobileNo: '9876543210',
    gender: 'Male',
    email: 'sachin.k@example.com',
    city: 'New Delhi',
    state: 'Delhi',
  },
  academicDetails: {
    class: 'Class 12',
    board: 'CBSE',
    exams: ['JEE Mains', 'JEE Advanced', 'CUET'],
  },
};

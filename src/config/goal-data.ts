export interface ClassOption {
  id: string;
  name: string;
  icon?: string;
}

export interface Goal {
  id: string;
  name: string;
  icon: string;
  category: 'popular' | 'all';
  classes: ClassOption[];
  color?: string;
}

export const GOALS: Goal[] = [
  {
    id: 'iit-jee',
    name: 'IIT-JEE',
    icon: '🚀',
    category: 'popular',
    color: '#E0F2FE',
    classes: [
      { id: '11', name: 'Class 11' },
      { id: '12', name: 'Class 12' },
      { id: 'dropper', name: 'Dropper' },
    ],
  },
  {
    id: 'neet',
    name: 'NEET',
    icon: '🩺',
    category: 'popular',
    color: '#F0FDF4',
    classes: [
      { id: '11', name: 'Class 11' },
      { id: '12', name: 'Class 12' },
      { id: 'dropper', name: 'Dropper' },
    ],
  },
  {
    id: 'cbse',
    name: 'CBSE',
    icon: '🏫',
    category: 'popular',
    color: '#FFF7ED',
    classes: [
      { id: '6', name: 'Class 6' },
      { id: '7', name: 'Class 7' },
      { id: '8', name: 'Class 8' },
      { id: '9', name: 'Class 9' },
      { id: '10', name: 'Class 10' },
      { id: '11', name: 'Class 11' },
      { id: '12', name: 'Class 12' },
    ],
  },
  {
    id: 'cuet',
    name: 'CUET',
    icon: '🎓',
    category: 'popular',
    color: '#F5F3FF',
    classes: [
      { id: '12', name: 'Class 12' },
      { id: 'ug', name: 'Undergraduate' },
    ],
  },
  {
    id: 'engineering',
    name: 'Engineering',
    icon: '⚙️',
    category: 'all',
    classes: [
      { id: 'jee-main', name: 'JEE Main' },
      { id: 'jee-adv', name: 'JEE Advanced' },
      { id: 'bitsat', name: 'BITSAT' },
    ],
  },
  {
    id: 'medical',
    name: 'Medical',
    icon: '➕',
    category: 'all',
    classes: [
      { id: 'neet', name: 'NEET' },
      { id: 'aiims', name: 'AIIMS' },
    ],
  },
  {
    id: 'school-prep',
    name: 'School Preparation',
    icon: '🎒',
    category: 'all',
    classes: [
      { id: '6', name: 'Class 6' },
      { id: '7', name: 'Class 7' },
      { id: '8', name: 'Class 8' },
      { id: '9', name: 'Class 9' },
      { id: '10', name: 'Class 10' },
      { id: '11', name: 'Class 11' },
      { id: '12', name: 'Class 12' },
    ],
  },
  {
    id: 'commerce',
    name: 'Commerce',
    icon: '📈',
    category: 'all',
    classes: [
      { id: '11', name: 'Class 11' },
      { id: '12', name: 'Class 12' },
    ],
  },
  {
    id: 'ca',
    name: 'CA',
    icon: '⚖️',
    category: 'all',
    classes: [
      { id: 'foundation', name: 'Foundation' },
      { id: 'inter', name: 'Intermediate' },
      { id: 'final', name: 'Final' },
    ],
  },
  {
    id: 'govt-exams',
    name: 'Government Exams',
    icon: '🏛️',
    category: 'all',
    classes: [
      { id: 'ssc', name: 'SSC' },
      { id: 'banking', name: 'Banking' },
      { id: 'railway', name: 'Railway' },
    ],
  },
];

import { clsx } from 'clsx';

export function cn(...inputs) {
  return clsx(inputs);
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function getKathmanduTime() {
  return new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Kathmandu',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });
}

export const SEMESTERS = [
  { id: 1, name: 'Semester 1', available: true },
  { id: 2, name: 'Semester 2', available: true },
  { id: 3, name: 'Semester 3', available: true },
  { id: 4, name: 'Semester 4', available: true },
  { id: 5, name: 'Semester 5', available: true }, // CHANGED TO TRUE
  { id: 6, name: 'Semester 6', available: true }, // CHANGED TO TRUE
  { id: 7, name: 'Semester 7', available: true }, // CHANGED TO TRUE
  { id: 8, name: 'Semester 8', available: true }, // CHANGED TO TRUE
];

// Complete BIT Nepal Syllabus (All 8 Semesters)
export const SYLLABUS = [
  {
    semester: 1,
    subjects: [
      { name: "Fundamentals of IT", creditHours: 3 },
      { name: "Mathematics-I", creditHours: 3 },
      { name: "Technical Communication", creditHours: 3 },
      { name: "Society and Ethics in IT", creditHours: 3 },
      { name: "Programming in C", creditHours: 3 },
      { name: "Project-I", creditHours: 2 }
    ]
  },
  {
    semester: 2,
    subjects: [
      { name: "Mathematics-II", creditHours: 3 },
      { name: "Digital Logic", creditHours: 3 },
      { name: "Discrete Structure", creditHours: 3 },
      { name: "OOP in C++", creditHours: 3 },
      { name: "Financial Management and Accounting", creditHours: 3 },
      { name: "Project-II", creditHours: 2 }
    ]
  },
  {
    semester: 3,
    subjects: [
      { name: "Numerical Methods", creditHours: 3 },
      { name: "Microcontroller", creditHours: 3 },
      { name: "Data Structure and Algorithm", creditHours: 3 },
      { name: "Computer Network and Data Communication", creditHours: 3 },
      { name: "System Analysis and Design", creditHours: 3 },
      { name: "Project-III", creditHours: 3 }
    ]
  },
  {
    semester: 4,
    subjects: [
      { name: "Probability and Statistics", creditHours: 3 },
      { name: "Computer Organization and Architecture", creditHours: 3 },
      { name: "Operating System", creditHours: 3 },
      { name: "Database Management System", creditHours: 3 },
      { name: "Programming in JAVA", creditHours: 3 },
      { name: "Project-IV", creditHours: 3 }
    ]
  },
  {
    semester: 5,
    subjects: [
      { name: "Research Methodology", creditHours: 3 },
      { name: "Computer Graphics", creditHours: 3 },
      { name: "Cryptography and Network Security", creditHours: 3 },
      { name: "Web Technology", creditHours: 3 },
      { name: "Internet of Things", creditHours: 3 },
      { name: "Project-V", creditHours: 3 }
    ]
  },
  {
    semester: 6,
    subjects: [
      { name: "Artificial Intelligence", creditHours: 3 },
      { name: "Management Information System", creditHours: 3 },
      { name: "Data Warehousing and Data Mining", creditHours: 3 },
      { name: "Simulation and Modeling", creditHours: 3 },
      { name: "Software Engineering", creditHours: 3 },
      { name: "Project-VI", creditHours: 3 }
    ]
  },
  {
    semester: 7,
    subjects: [
      { name: "Network Programming", creditHours: 3 },
      { name: "Digital Governance", creditHours: 3 },
      { name: "Specialization-I", creditHours: 3 },
      { name: "Specialization-II", creditHours: 3 },
      { name: "Internship", creditHours: 3 }
    ]
  },
  {
    semester: 8,
    subjects: [
      { name: "Principles of Management and Entrepreneurship in IT", creditHours: 3 },
      { name: "Distributed and Cloud Computing", creditHours: 3 },
      { name: "Specialization-III", creditHours: 3 },
      { name: "Specialization-IV", creditHours: 3 },
      { name: "Apprentice Project", creditHours: 3 }
    ]
  }
];

// Get subjects for ALL semesters
export const SUBJECTS = {
  1: SYLLABUS[0].subjects.map(s => s.name),
  2: SYLLABUS[1].subjects.map(s => s.name),
  3: SYLLABUS[2].subjects.map(s => s.name),
  4: SYLLABUS[3].subjects.map(s => s.name),
  5: SYLLABUS[4].subjects.map(s => s.name),
  6: SYLLABUS[5].subjects.map(s => s.name),
  7: SYLLABUS[6].subjects.map(s => s.name),
  8: SYLLABUS[7].subjects.map(s => s.name),
};

// Important Topics for semesters 1-4 (existing)
export const IMPORTANT_TOPICS = {
  1: {
    "Programming in C": [
      "Pointers and Memory Management",
      "Functions and Recursion",
      "Arrays and Strings",
      "File Handling",
      "Structures and Unions"
    ],
    "Mathematics-I": [
      "Calculus and Derivatives",
      "Integration Techniques",
      "Matrix Operations",
      "Differential Equations",
      "Vector Calculus"
    ],
    "Fundamentals of IT": [
      "Computer System Components",
      "Number Systems and Conversions",
      "Input/Output Devices",
      "Operating System Basics",
      "Computer Networks Introduction"
    ],
  },
  2: {
    "OOP in C++": [
      "Classes and Objects",
      "Inheritance and Polymorphism",
      "Encapsulation and Abstraction",
      "Exception Handling",
      "File I/O Operations"
    ],
    "Digital Logic": [
      "Boolean Algebra",
      "Logic Gates and Circuits",
      "K-Map Simplification",
      "Sequential Circuits",
      "Combinational Circuits"
    ],
  },
  3: {
    "Data Structure and Algorithm": [
      "Linked Lists (Single, Double, Circular)",
      "Stack and Queue Implementation",
      "Binary Trees and BST",
      "Hashing Techniques",
      "Graph Algorithms (BFS, DFS, Dijkstra)"
    ],
    "Microcontroller": [
      "8051 Architecture",
      "Timer and Counter Programming",
      "Interrupt Handling",
      "Serial Communication",
      "Interfacing (LCD, Sensor, Motor)"
    ],
  },
  4: {
    "Operating System": [
      "Process Scheduling Algorithms",
      "Deadlock Detection and Prevention",
      "Memory Management (Paging, Segmentation)",
      "File Systems",
      "Synchronization Mechanisms"
    ],
    "Database Management System": [
      "Normalization (1NF to BCNF)",
      "SQL Queries and Joins",
      "Transactions and ACID Properties",
      "ER Diagrams",
      "Indexing and Optimization"
    ],
  }
};
export interface Class {
  id: number;
  name: string;
  students: Student[];
}

export interface Student {
  id: number;
  code: string;
  name: string;
}

export interface Attendance {
  students: Student;
  turns: boolean[];
}

export interface User {
  id: number;
  name: string;
  userName: string;
  pass: string;
}

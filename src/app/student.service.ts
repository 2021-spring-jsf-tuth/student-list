import { Injectable } from '@angular/core';

export interface Student {
  name: string;
  program: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  students: Student[] = [];

  getStudents(): Student[] {
    return this.students;
  }

  addStudent(s: Student) {
    this.students = [
      ...this.students
      , s
    ];
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService, Student } from '../student.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
    , private studentSvc: StudentService
  ) { }

  students: Student[] = [];

  ngOnInit(): void {
    this.students = this.studentSvc
      .getStudents()
      .sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1);
  }

  addStudent() {
    this.router.navigateByUrl("/add-student");
  }
}

import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(
    private router: Router
    , private location: Location
    , private studentSvc: StudentService
  ) { }

  ngOnInit(): void {
  }

  addStudent() {

    this.studentSvc.addStudent({
      name: this.studentName
      , program: "Unknown"
    });

    //this.router.navigateByUrl("/");
    this.location.back();
  }

  studentName = "";

}

import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StudentDataService } from '../student-data.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(
    private location: Location
    , private studentSvc: StudentDataService 
  ) { }

  ngOnInit(): void {
  }

  studentName = "";

  addStudent() {

    this.studentSvc.addStudent({
      name: this.studentName
      , degreeProgram: "Unknown"
    });

    this.location.back();
  }
}

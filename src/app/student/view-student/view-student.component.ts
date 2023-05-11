import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/model/student.model';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  id: string;
  student:Student
  constructor(private studentService:StudentService,
    private router:Router,
    private route: ActivatedRoute) {
      
     }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.route.params.subscribe(param => {
      this.id=param['id']
      this.setData()
    })

    this.setData()
  }


  setData() {
    this.studentService.entities$.subscribe((students) => {
      this.student = students.find((stud) => stud.id === this.id);
    });
  }

}

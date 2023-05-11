import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student.model';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  form:FormGroup
  constructor(private studentService:StudentService,
    private router:Router) { }

  ngOnInit(): void {

    this.initForm();
  }

  initForm() {
    this.form=new FormGroup({
      name: new FormControl(null, [Validators.required])
    })
  }

  onAddStudent(){
    if(!this.form.valid)
      return
    let form:Student =this.form.value;
    this.studentService.add(form);
    this.router.navigate(['/students'])
  }

}

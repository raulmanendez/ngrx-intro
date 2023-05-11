import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/model/student.model';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  id: string;
  form:FormGroup
  constructor(private studentService:StudentService,
    private router:Router,
    private route: ActivatedRoute) {
      
     }

  ngOnInit(): void {

    this.initForm();
  }

  initForm() {
    this.form=new FormGroup({
      name: new FormControl(null, [Validators.required])
    })

    this.id = this.route.snapshot.params['id'];

    this.route.params.subscribe(param => {
      this.id=param['id']
      console.log(this.id)
      this.setData()
    })

    this.setData()
  }

  setData() {
    this.studentService.entities$.subscribe((students) => {
      const student = students.find((stud) => stud.id === this.id);

      this.form.patchValue({
        name: student?.name
      });
    });
  }

  onUpdateStudent(){
    if(!this.form.valid)
      return
    let form:Student =this.form.value;
    this.studentService.update({...form,id:this.id});
    this.router.navigate(['/students'])
  }

}

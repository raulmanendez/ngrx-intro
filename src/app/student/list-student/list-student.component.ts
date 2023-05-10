import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/model/student.model';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  students$: Observable<Student[]>
  
  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.students$ = this.studentService.entities$
  }

  onDeletePost(id:number) {
    if(confirm ('Are you sure ?')) {
      
    }
  }

}

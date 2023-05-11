import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DefaultDataService, HttpUrlGenerator } from "@ngrx/data";
import { Student } from "../model/student.model";
import { Observable, map } from "rxjs";
import { Update } from "@ngrx/entity";

@Injectable()
export class StudentDataService extends DefaultDataService<Student> {

  constructor(http: HttpClient, httpurlgenerator: HttpUrlGenerator) {
    super('Student', http, httpurlgenerator)
  }


  override getAll(): Observable<Student[]> {
    return this.http.get<Student[]>("https://ng-store-a4630-default-rtdb.firebaseio.com/student.json")
      .pipe(map((data) => {
        const students = [];
        for (let key in data) {
          students.push({
            ...data[key],
            id: key
          })
        }
        return students;
      }));
  }

  override add(student: Student): Observable<any> {
    return this.http.post<{ name: string }>("https://ng-store-a4630-default-rtdb.firebaseio.com/student.json", student)
      .pipe(
        map((data) => {
          return { ...student, id: data.name };
        })
      );
  }

  override update(student: Update<Student>): Observable<Student> {
    return this.http.put<Student>(
      `https://ng-store-a4630-default-rtdb.firebaseio.com/student/${student.id}.json`,
      { ...student.changes }
    );
  }

  override delete(id: string): Observable<string> {
    return this.http
      .delete(`https://ng-store-a4630-default-rtdb.firebaseio.com/student/${id}.json`)
      .pipe(
        map((data) => {
          return id;
        })
      );
  }

}
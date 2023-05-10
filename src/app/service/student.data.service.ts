import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DefaultDataService, HttpUrlGenerator } from "@ngrx/data";
import { Student } from "../model/student.model";
import { Observable } from "rxjs";

@Injectable()
export class StudentDataService extends DefaultDataService<Student> {

    constructor(http:HttpClient,httpurlgenerator:HttpUrlGenerator) {
        super('Student',http,httpurlgenerator)
    }


    override getAll() : Observable<Student[]>{
        return this.http.get<Student[]>("https://ng-store-a4630-default-rtdb.firebaseio.com/student.json");
    }
}
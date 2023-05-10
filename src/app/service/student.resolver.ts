import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, first, map, mergeMap, of, tap } from "rxjs";
import { StudentService } from "./student.service";

@Injectable()
export class StudentResolver implements Resolve<boolean> {

    constructor(private studentService: StudentService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.studentService.loaded$.pipe(
           tap(loaded => {
            if(!loaded){
                this.studentService.getAll();
            }
           }),first()
        )
    }

}
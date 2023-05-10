import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from "@ngrx/data";
import { Student } from "../model/student.model";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn:'root'
})
export class StudentService extends EntityCollectionServiceBase<Student> {

    constructor(factory: EntityCollectionServiceElementsFactory) {
        super('Student',factory);
    }

}
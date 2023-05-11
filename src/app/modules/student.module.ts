import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { ListStudentComponent } from "../student/list-student/list-student.component";
import { AddStudentComponent } from "../student/add-student/add-student.component";
import { EditStudentComponent } from "../student/edit-student/edit-student.component";
import { ViewStudentComponent } from "../student/view-student/view-student.component";
import { StudentDataService } from "../service/student.data.service";
import { EntityDataModule, EntityDataService, EntityDefinitionService } from "@ngrx/data";
import { StudentResolver } from "../service/student.resolver";
import { entityConfig } from '../entity-metadata';


const routes: Routes = [
    {
        path: '', component: ListStudentComponent,resolve: { students:StudentResolver },
         children: [
            { path: 'add', component: AddStudentComponent },
            { path: 'edit/:id', component: EditStudentComponent },
            { path: 'view/:id', component: ViewStudentComponent }
        ]
    }
]

@NgModule({
    declarations: [
        ListStudentComponent,
        AddStudentComponent,
        EditStudentComponent,
        ViewStudentComponent
    ],
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule,RouterModule.forChild(routes)
        
    ],
    providers:[StudentDataService,StudentResolver]
})
export class StudentModule {
 constructor(
    eds: EntityDefinitionService,
    entityDataService:EntityDataService,
    stduentDataService:StudentDataService) {
        eds.registerMetadataMap(entityConfig.entityMetadata);
        entityDataService.registerService("Student",stduentDataService);
    }
}
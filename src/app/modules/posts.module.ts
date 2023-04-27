import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { PostlistComponent } from "../posts/postlist/postlist.component";
import { AddPostComponent } from "../posts/add-post/add-post.component";
import { EditPostComponent } from "../posts/edit-post/edit-post.component";


const routes: Routes = [
    {
        path: '', component: PostlistComponent, children: [
            { path: 'add', component: AddPostComponent },
            { path: 'edit/:id', component: EditPostComponent }
        ]
    }
]

@NgModule({
    declarations: [
        AddPostComponent,
        EditPostComponent,
        PostlistComponent

    ],
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes)
    ]
})
export class PostModule {

}
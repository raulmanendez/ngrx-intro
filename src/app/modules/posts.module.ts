import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { PostlistComponent } from "../posts/postlist/postlist.component";
import { AddPostComponent } from "../posts/add-post/add-post.component";
import { EditPostComponent } from "../posts/edit-post/edit-post.component";
import { StoreModule } from "@ngrx/store";
import { postsReducer } from "../posts/state/posts.reducer";
import { POST_STATE_NAME } from "../posts/state/posts.selector";
import { EffectsModule } from "@ngrx/effects";
import { PostsEffects } from "../posts/state/posts.effects";


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
        CommonModule, FormsModule, ReactiveFormsModule,
        EffectsModule.forFeature([PostsEffects]),
        StoreModule.forFeature(POST_STATE_NAME, postsReducer),
        RouterModule.forChild(routes)
    ]
})
export class PostModule {

}
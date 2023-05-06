import { map, mergeMap } from 'rxjs/operators';
import { addPost, addPostSuccess, deletePost, deletePostSuccess, loadPosts, loadPostsSuccess, updatePost, updatePostSuccess } from './posts.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { PostsService } from 'src/app/service/post.service';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { isLoading } from 'src/app/shared/state/shared.selector';
import { SharedState } from 'src/app/shared/state/shared.state';
import { setLoader } from 'src/app/shared/state/shared.actions';

@Injectable({ providedIn: 'root' })
export class PostsEffects {
    constructor(private actions$: Actions,
        private sharedState:Store<SharedState>,
        private postService: PostsService) { }

    loadPosts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadPosts),
            mergeMap((action) => {
                return this.postService.getPosts().pipe(
                    map((posts) => {
                        return loadPostsSuccess({ posts });
                    })
                );
            })
        );
    });

    addPost$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(addPost),
            mergeMap((action) => {
                return this.postService.addPost(action.post).pipe(
                    map((data) => {
                        const post = { ...action.post, id: data['name'] }
                        return addPostSuccess({ post })
                    })
                );
            })
        );
    });

    updatePost$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updatePost),
            mergeMap((action) => {
                return this.postService.updatePost(action.post).pipe(
                    map((data) => {
                        return updatePostSuccess({ post:action.post })
                    })
                );
            })
        );
    });

    deletePost$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deletePost),
            mergeMap((action) => {
                return this.postService.deletePost(action.id).pipe(
                    map((data) => {
                        return deletePostSuccess({ id:action.id })
                    })
                );
            })
        );
    });
}
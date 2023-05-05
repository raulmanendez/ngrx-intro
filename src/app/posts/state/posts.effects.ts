import { map, mergeMap } from 'rxjs/operators';
import { loadPosts, loadPostsSuccess } from './posts.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { PostsService } from 'src/app/service/post.service';

@Injectable({ providedIn: 'root' })
export class PostsEffects {
    constructor(private actions$: Actions, private postService: PostsService) { }

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
}
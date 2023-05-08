import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostState } from "./posts.state";
import { getCurrentRoute } from "src/app/store/router.selector";
import { RouterStateUrl } from "src/app/store/router.serializer";

export const POST_STATE_NAME = 'posts'

const getPostsState = createFeatureSelector<PostState>(POST_STATE_NAME);

export const getPosts = createSelector(getPostsState, (state) => {
    return state.posts;
});

export const getPostById = createSelector(
    getPosts,
    getCurrentRoute,
    (posts, route: RouterStateUrl) => {
      return posts ? posts.find((post) => post.id === route.params['id']) : null;
    }
  );



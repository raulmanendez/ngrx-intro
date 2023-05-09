import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostState, postAdapter } from "./posts.state";
import { getCurrentRoute } from "src/app/store/router.selector";
import { RouterStateUrl } from "src/app/store/router.serializer";



export const postSelector=postAdapter.getSelectors();

export const POST_STATE_NAME = 'posts'

const getPostsState = createFeatureSelector<PostState>(POST_STATE_NAME);

export const getPosts = createSelector(getPostsState,postSelector.selectAll)
export const getPostEntites = createSelector(getPostsState,postSelector.selectEntities)

export const getPostById = createSelector(
    getPostEntites,
    getCurrentRoute,
    (posts, route: RouterStateUrl) => {
      return posts ? posts[route.params['id']] : null;
    }
  );



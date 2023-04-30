import { createFeatureSelector, createSelector } from "@ngrx/store"
import { SharedState } from "./shared.state";

export const SHARED_STATE_NAME = 'shared'

export const loadingState = createFeatureSelector<SharedState>(SHARED_STATE_NAME);

export const isLoading = createSelector(loadingState,(state) => {
    return state.isLoading;
})
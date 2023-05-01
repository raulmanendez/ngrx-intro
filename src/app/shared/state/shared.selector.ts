import { createFeatureSelector, createSelector } from "@ngrx/store"
import { SharedState } from "./shared.state";

export const SHARED_STATE_NAME = 'shared'

export const sharedState = createFeatureSelector<SharedState>(SHARED_STATE_NAME);

export const isLoading = createSelector(sharedState,(state) => {
    return state.isLoading;
})

export const errorMessage = createSelector(sharedState, (state) => {
    return state.errorMessage;
})
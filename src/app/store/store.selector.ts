import { StoreState } from './reducer';
import { createSelector, Store, createFeatureSelector } from '@ngrx/store';

export const selectStoreState = (state: StoreState) => state;

export const selectStoreCart = (state: StoreState) => state;

export const getStore = createSelector(selectStoreState, (state) => state);

export const getCart = createSelector(selectStoreState, (state) => {
    console.log('selector Cart');
    console.log(state);
    console.log(state.cart);
    return state;
});

const shopFeatureState = createFeatureSelector<StoreState>('myshop');
export const getItemsList = createSelector(
    shopFeatureState,
    state => state.items
);

export const getCartList = createSelector(
    shopFeatureState,
    state => state.cart
);


import { StoreState } from './reducer';
import { createSelector, Store, createFeatureSelector } from '@ngrx/store';

//getting the whole store
export const selectStoreState = (state: StoreState) => state;
export const getStore = createSelector(selectStoreState, state => state);

//getting the items from the store state
export const selectStoreItems = (state: StoreState) => state.items;
export const getCartList = createSelector(selectStoreItems, state => state);

//getting the cart from the store state
export const selectStoreCart = (state: StoreState) => state.cart;
export const getCart = createSelector(selectStoreCart, (state) => {
    console.log('selector Cart');
    console.log(state);
    return state;
});
import { StoreState } from "./reducer";
import { createSelector, Store, createFeatureSelector } from "@ngrx/store";

// >>>>> 1- Create the shop selector <<<<<<<
export const selectShopState = createFeatureSelector<StoreState>("shop");

// getting the whole store
// export const selectStoreState = (state: StoreState) => state;
// export const getStore = createSelector(selectStoreState, (state) => state);

// getting the items from the store state
// export const selectStoreItems = (state: StoreState) => state.items;
// export const getItemList = createSelector(selectStoreItems, (state) => state);

//getting the cart from the store state
// export const selectStoreCart = (state: StoreState) => state.cart;

// >>>> 2- Then pass it here to get the instance of your shop state <<<<<
export const getItems = createSelector(selectShopState, (state) => {
  console.log("selector Item");
  console.log(state);
  return state.items;
});

export const getCart = createSelector(selectShopState, (state) => {
  console.log("selector Cart");
  console.log(state);
  return state.cart;
});
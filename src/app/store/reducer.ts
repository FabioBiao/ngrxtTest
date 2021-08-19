import { ActionsUnion, ActionTypes } from './actions';
import { createSelector, Store, createFeatureSelector } from '@ngrx/store';

export interface StoreState {
    items: any[];
    cart: any[];
}

export const initialState: StoreState = {
    items: [],
    cart: [],
};

// export const todoReducer = createReducer(
//     initialState,
//     on(ActionTypes.LoadSuccess, (state, action) => [
//         ...state,
//         { id: uuid.v4(), text: action.text, todo: true },
//     ]),
//     on(ActionTypes.Add, (state, action) => state.filter((i) => i.id !== action.id)),
//     on(ActionTypes.Remove, (state, action) =>
//         state.map((i) => (i.id === action.id ? { ...i, todo: !i.todo } : i))
//     )
// );

export function ShopReducer(state = initialState, action: ActionsUnion) {
    console.log('reducer');
    console.log(state);
    console.log(action);
    switch (action.type) {
        case ActionTypes.LoadSuccess:
            console.log('reducer load success');

            return {
                ...state,
                items: [...action.payload],
            };

        case ActionTypes.Add:
            console.log('reducer Add');
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };

        case ActionTypes.Remove:
            console.log('reducer Remove');
            return {
                ...state,
                cart: [
                    ...state.cart.filter(
                        (item: any) => item.name !== action.payload.name
                    ),
                ],
            };

        default:
            console.log('reducer default');
            return state;
    }
}

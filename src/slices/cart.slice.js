import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    totals: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCartSuccess(state, action) {
            const { payload } = action;
            const match = state.products.findIndex(item => item.id === payload.id);
            if (match !== -1) {
                return {
                    products: [
                        ...state.products.slice(0, match),
                        {
                            ...state.products[match],
                            amount: state.products[match].amount + payload.amount
                        },
                        ...state.products.slice(match + 1)
                    ],
                    totals: state.totals + payload.amount
                }
            } else {
                return {
                    products: [
                        ...state.products,
                        payload
                    ],
                    totals: state.totals + payload.amount
                }
            }
        },
        addToCartFailure(state, action) {
            return state;
        }
    }
});

const { reducer, actions } = cartSlice;
export const { addToCartSuccess, addToCartFailure } = actions;
export default reducer;

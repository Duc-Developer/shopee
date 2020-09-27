import { put, takeEvery } from 'redux-saga/effects'
import { cartConstants as type } from '../constants';
import { addToCartSuccess } from '../slices/cart.slice';

function* addToCart(action) {
    yield put(addToCartSuccess(action.payload));
}

export function* actionAddToCart() {
    yield takeEvery(type.ADD_TO_CART, addToCart);
}
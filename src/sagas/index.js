import { all } from 'redux-saga/effects';
import { actionLogin } from './auth.saga';
import { actionAddToCart } from './cart.saga';

export default function* rootSaga() {
    yield all([
        actionLogin(),
        actionAddToCart(),
    ])
}
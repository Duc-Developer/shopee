import { all } from 'redux-saga/effects';
import { actionLogin } from './auth.saga';

export default function* rootSaga() {
    yield all([
        actionLogin(),
    ])
}
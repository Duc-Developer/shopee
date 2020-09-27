import { put, takeEvery } from 'redux-saga/effects';
import { loginFailure, loginSuccess } from '../slices/auth.slice';
import { authConstants as type } from '../constants';
import data from '../fakeData.json';

function* loginRequest(action) {
    const {users} = data;
    const {username, password} = action.payload;
    let match = users.find(item => {
        return item.username === username;
    })
    if(!match) {
        yield put(loginFailure("user is not exists!"));
        return;
    }
    if(match.password !== password) {
        yield put(loginFailure("password was wrong!"));
        return;
    }
    yield put(loginSuccess(action.payload));
}

export function* actionLogin() {
    yield takeEvery(type.LOGIN_REQUEST, loginRequest);
}
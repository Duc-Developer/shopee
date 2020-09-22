import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    message: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        loginSuccess(state, action) {
            return {
                user: action.payload,
                message: "Login successful!"
            }
        },
        loginFailure(state, action) {
            return {
                user: null,
                message: "Login failed!"
            }
        }
    }
});

const { actions, reducer } = authSlice;
export const { loginSuccess, loginFailure } = actions;
export default reducer;
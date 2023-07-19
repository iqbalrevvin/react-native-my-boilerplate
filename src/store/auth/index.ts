import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store.types';

const slice: any = createSlice({
    name: 'auth',
    initialState: { user: null, token: null },
    reducers: {
        setCredentials: (state, action) => {
            const { user, access_token } = action.payload;
            state.user = user || null;
            state.token = access_token || null;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
        },
    },
});

export const { setCredentials, logout } = slice.actions;

export const authSelector = {
    user: (state: RootState) => state.auth.user,
    token: (state: RootState) => state.auth.token,
};

export default slice.reducer;


import { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TUser = {
    userId: string;
    email: string;
    role: string;
    iat: number;
    exp: number;
};

type TAuthState = {
    user: null | TUser;
    token: null | string;
};

const initialState: TAuthState = {
    user: null,
    token: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // setUser: (state, action) => {
        //     const { user, token } = action.payload;
        //     state.user = user;
        //     state.token = token;
        // },
        setUser: (state, action: PayloadAction<{ user: TUser; token: string }>) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem('token')
        },
    },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;

export const useCurrentToken = (state: RootState) => state.auth.token;
export const selectCurrentUser = (state: RootState) => state.auth.user;

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// status checking : verifica el estado de la autenticacion del usuario
export type status = 'checking-credentials' | 'not-authenticated' | 'authenticated';

export interface authState {
    status: status;
    uid: string | null;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
}

const initialState: authState = {
    status: 'not-authenticated',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
        },
        logout: (state, action) => {

        },
        checkingCredentials: (state) => {
            state.status = 'checking-credentials'
        }
    },
})

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions
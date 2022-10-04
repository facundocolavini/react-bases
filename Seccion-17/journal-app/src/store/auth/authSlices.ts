import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// status checking : verifica el estado de la autenticacion del usuario
export type status = 'checking-credentials' | 'not-authenticated' | 'authenticated';

export interface authState {
    status: status;
    uid: string | null;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
    errorCode?: null | string;
    errorMessage?: null | string;
}

const initialState: authState   = {
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
        login: (state, { payload }) => {
            state.status = 'authenticated'
            state.uid= payload.uid;
            state.email= payload.email;
            state.displayName= payload.displayName;
            state.photoURL= payload.photoURL;
            state.errorMessage= null;
            state.errorCode= null;
        },
        logout: (state, { payload }) => {
            state.status= 'not-authenticated';
            state.uid= null;
            state.email= null;
            state.displayName= null;
            state.photoURL= null
            state.errorMessage= payload.errorMessage;
            state.errorCode= payload.errorCode;
        },
        checkingCredentials: (state) => {
            state.status = 'checking-credentials'
        }
    },
})

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions
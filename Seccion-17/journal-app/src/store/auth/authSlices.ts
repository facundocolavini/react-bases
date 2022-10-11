import { createSlice } from '@reduxjs/toolkit';

// status checking : verifica el estado de la autenticacion del usuario
export type status = 'checking-credentials' | 'not-authenticated' | 'authenticated';

export interface authState {
    status: status;
    uid: string | null;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
    errorCode?: string | null;
    errorMessage?: string | null;
}

const initialState: authState   = {
    status: 'checking-credentials',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorCode: null,
    errorMessage: null

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
            state.errorMessage= payload?.errorMessage;
            state.errorCode= payload?.errorCode;
        },
        logout: (state, { payload }) => {
            state.status= 'not-authenticated';
            state.uid= null;
            state.email= null;
            state.displayName= null;
            state.photoURL= null;
            state.errorMessage= payload?.errorMessage;
            state.errorCode= payload?.errorCode;
        },
        checkingCredentials: (state) => {
            state.status = 'checking-credentials'
        },
        reset : (state)=>{
            state.status= 'not-authenticated';
            state.uid= null;
            state.email= null;
            state.displayName= null;
            state.photoURL= null
            state.errorMessage= null;
            state.errorCode= null;
        }
    },
})

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials, reset } = authSlice.actions
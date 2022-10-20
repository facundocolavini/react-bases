// Initial State Slice Auth Reducer 

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

export const initialState: authState   = {
    status: 'checking-credentials',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorCode: null,
    errorMessage: null
}

// Estado cuando este autenticado 
export const initialStateAuthenticated: authState   = {
    status: 'authenticated',
    uid: '123ABC',
    email: 'test@gmail.com',
    displayName: 'Test User',
    photoURL: 'https://',
    errorCode: null,
    errorMessage: null
}

// Estado cuando no estoy autenticado 
export const initialStateNotAuthenticated: authState   = {
    status: 'not-authenticated',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: undefined,
    errorCode: undefined,
}

export const testUser : authState = {
    status: 'authenticated',
    uid: '123ABC',
    email: 'demo@gmail.com',
    displayName: 'Demo User',
    photoURL: 'https://',
    errorCode: null,
    errorMessage: null
} 

export const userLogoutWithError : authState = {
    status: 'not-authenticated',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: 'Error in credentials',
    errorCode: '401',
}

export const userLoginWithError : authState = {
    status: 'not-authenticated',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: 'Un error en Google',
    errorCode: '401',
}

export const userLoginWithGoogleError : authState = {
    status: 'not-authenticated',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: 'Un error en Google',
    errorCode: '401',
}
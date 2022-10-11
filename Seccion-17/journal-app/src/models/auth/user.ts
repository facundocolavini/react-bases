export interface User {
    email: string;
    password: string ;
    displayName: string;
}

export interface LoginUser {
    email: string;
    password: string;
}

export const initialLogin: LoginUser = {
    email: '',
    password: ''
}

export type RegisterUser = User 

export const initialRegister: User = {
    email: '',
    password: '',
    displayName: '',
}


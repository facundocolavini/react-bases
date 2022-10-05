export interface User {
    email: string;
    password: string;
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

export const initialRegister: RegisterUser = {
    email: '',
    password: '',
    displayName: '',
}

/* export const formData: RegisterUser<User> = {
    email: 'facu_colavini@hotmail.com',
    password: '123456',
    displayName: 'Facundo Colavini'
}

*/
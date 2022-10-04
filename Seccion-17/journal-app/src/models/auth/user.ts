export interface User {
    email: string;
    password: string;
}
export interface  registerUser {
    email: string;
    password: string;
    displayName: string;
}

export const initialLogin: User = {
    email: '',
    password: ''
}

export const formData: registerUser = {
    email: 'facu_colavini@hotmail.com',
    password: '123456',
    displayName: 'Facundo Colavini'
}

export const initialRegister: registerUser ={
    email: '',
    password: '', 
    displayName: '',
}
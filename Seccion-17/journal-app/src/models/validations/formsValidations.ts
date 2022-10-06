

export interface FormValidations {
    [key: string]:  any;
} 

export interface formCheckedValues {
    displayNameValid: null | string;
    emailValid: null | string;
    passwordValid: null | string;
}


export const formRegisterValidator = {
    email: [(value: string): boolean => value.includes('@'), 'El correo debe de tener una @'],
    displayName: [(value: string): boolean => value.length >= 1, 'El nombre es requerido'],
    password: [(value: string): boolean => value.length >= 6, 'El password debe de tener mas de 6 letras'],
} 


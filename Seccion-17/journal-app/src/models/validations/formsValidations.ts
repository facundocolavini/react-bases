
export interface FormValidations {
    [key: string]: [Function, string];
    // displayName: Array<Function | string> | string;
    // password: Array<Function | string> | string;
}

export interface formCheckedValues {
    [key: string]: null | string;
}

export const formRegisterValidator: FormValidations = {
    email: [(value: string): boolean => value.includes('@'), 'El correo debe de tener una @'],
    displayName: [(value: string): boolean => value.length >= 1, 'El nombre es requerido'],
    password: [(value: string): boolean => value.length >= 6, 'El password debe de tener mas de 6 letras'],
}
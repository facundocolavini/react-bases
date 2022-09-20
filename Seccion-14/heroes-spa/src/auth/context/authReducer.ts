import { State } from '../interfaces/auth-interfaces';
import { Actions } from '../types/types';

const initialState = {
    logged: false,
    name: 'Facundo'     
}

export const loginReducer = ( state:  State = initialState, action = {}) =>{

    switch ( action) {
        case 'login':

            return state;
        case 'logOut':

            return state;

        default:
            return state;
    }
}


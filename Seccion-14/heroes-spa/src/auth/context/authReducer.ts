import { AuthState } from '../interfaces';
import { LoginAction } from '../types/actions';

/* 
IMPORTANTE: Los use reducer no llaman a funcionalidades externas :
Ejemplos:  
- No se puede llamar a local storage. 
- No se llama a una api.
- No se llama a funciones externas.

  Todo lo resuelve con el state y la action que le llega.
*/

export const authReducer = ( authState: AuthState, action: LoginAction) =>{
    
    switch ( action.type) {
        case 'login': 
            return{
                ...authState,
                isLoggedIn:true,
                user: action.payload
            }
        
        case 'logout':
            return {
                ...authState,
                isLoggedIn:false,
                user: action.payload
            }
        
        case 'field':
            return {
                ...authState,
                [action.fieldName]: action.payload
            }
        
        default:
            return authState;
    }
}


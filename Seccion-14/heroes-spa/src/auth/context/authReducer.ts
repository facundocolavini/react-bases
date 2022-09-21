import { AuthState } from '../interfaces';
import { LoginAction } from '../types/actions';

// No llamar al localstorage en el reducer ni console.log

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


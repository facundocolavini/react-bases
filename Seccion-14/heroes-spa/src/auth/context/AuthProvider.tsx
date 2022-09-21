import { useReducer } from 'react';

import { AuthState, User } from '../interfaces';
import { LoginAction } from '../types/actions';
import { authReducer } from './authReducer';
import { AuthContext } from './authStore';

// Crea el INITIAL_STATE con el types AuthState  el store debe de respetar el mismo tipo al iniciar el context
// No es persistente si sse refresca la pagina vuelve a cargar el inistial state 
const INITIAL_STATE:AuthState = {
    isLoggedIn: false,
    user: {
        id: '',
        name: '',
        lastname: ''
    },    
    variant: 'login' 
}


interface AuthProps {
    children: JSX.Element | JSX.Element[]
}
// Inicializar nuestro estado para mantener la persistencia del user
const init = () => {
    // const user = JSON.parse(localStorage.getItem('user'))

    return {
        isLoggedIn:false,
        user: null,
    }  as AuthState
}

export const AuthProvider = ({ children }: AuthProps) => {
    // Conectamos y utilizamos mi useReducer dentro de mi Context AuthProvider 
    const [ authState, dispatch] = useReducer( authReducer, INITIAL_STATE, init )
    

 
    // Realizamos una funcion login para poder mandarsela a cualquier componente si necesita logearse y extraer authState despachando la action al reducer
    // Manejamos los valores que vamos a tener en los payload si la action tiene payload.
    const userlogin =  ({name, lastname}: User) => {
            //User
    const user : User ={
        id: '1',
        name:name,
        lastname:lastname
    }
        const action: LoginAction = {
            type: 'login',
            payload: user
        }
       
        dispatch( action )
    }

    const userLogOut = () =>{
        const action: LoginAction = {
            type: 'logout',
        }
        dispatch( action )
    }
    // Si cambiamos el store devemos cambiar el value del context sino arroja error de types 
    return <AuthContext.Provider value={{
        authState,
        login: userlogin,
        logout: userLogOut
    }}> 
        {children}
    </AuthContext.Provider>;
}


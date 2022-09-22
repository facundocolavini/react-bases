import { useReducer } from 'react';
import { getUserFromLocal, setUserToLocal } from '../helpers';

import { AuthState, User } from '../interfaces';
import { LoginAction } from '../types/actions';
import { authReducer } from './authReducer';
import { AuthContext } from './authStore';
import { clearUserFromLocal } from '../helpers/userLocal';

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
const userInit:User = {
    id: '',
    name: '',
    lastname: ''
} 

interface AuthProps {
    children: JSX.Element | JSX.Element[]
}

// Inicializar nuestro estado para mantener la persistencia del user
// El estado inicial en el useReduce es opcional si hacemos un init
const init = () => {
   
    //Lo obtenemos y vemos si  existe 
    const user: User = getUserFromLocal('user') 

    return {
        isLoggedIn: !!user?.id,
        user: user,
    }  as AuthState
}

export const AuthProvider = ({ children }: AuthProps) => {
    // Conectamos y utilizamos mi useReducer dentro de mi Context AuthProvider 
    const [ authState, dispatch] = useReducer( authReducer, {} , init )
    
 
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
        // Agregamsos el user al local
        setUserToLocal("user", user)
        dispatch( action )
    }

    const userLogOut = () =>{
        clearUserFromLocal("user"); // Limpiamos el local del usuario anterior 
        setUserToLocal("user",userInit) // setemos el  usuario inicial en el local
        const action: LoginAction = {
            type: 'logout',
            payload: userInit
        };

        dispatch( action );
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


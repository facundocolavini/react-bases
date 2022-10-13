import { loginUserWithEmailAndPassword, logOutFirebase, registerUserWithEmailAndPassword, signInWithGoogle } from "../../firebase/providers"
import { RegisterUser, LoginUser } from "../../models"
import { AppThunk } from "../store"
import { checkingCredentials, login, logout, reset } from "./authSlices"

export const checkingUserAuthentication = (email: string, password: string): AppThunk => {
    return async (dispatch) => {
        // Dispatch de mi accion para poner mi status en checking
        dispatch(checkingCredentials())
    }
}

// Tarea asincrona
export const startGoogleSignIn = (): AppThunk => {
    return async (dispatch) => {
        // Chequea las credenciales
        dispatch(checkingCredentials())
        const result = await signInWithGoogle();
        console.log(result)
        // Cambiamos el status a authenticated cuando se autorize al usuario
        //Si sale mal y no se autentica sale un error
        if(!result.ok) return dispatch(logout(result));
        return dispatch(login(result))
    }
}


export const startCreatingUserWithAndEmailPassword = ({ email, password, displayName }: RegisterUser ):AppThunk =>{
    return async(dispatch) =>{
        dispatch(checkingCredentials())

        const { ok , uid, errorMessage, photoURL } = await registerUserWithEmailAndPassword({ email, password, displayName })
        // console.log(errorMessage, 'desde el thunk');
        
        //Mensaje de error como payload 
        if(!ok) return dispatch(logout({ errorMessage }));  
        return dispatch(login({ uid,displayName,email,photoURL }))
    }
}


export const startLoginWithEmailAndPassword = ( { email:mail, password }: LoginUser ):AppThunk=> {
    return async (dispatch) =>{
        dispatch(checkingCredentials())
        const { ok ,uid ,errorMessage ,photoURL ,displayName ,email } = await loginUserWithEmailAndPassword( {email:mail, password })
        if(!ok) return dispatch(logout({ errorMessage }));
        return dispatch(login({ uid,displayName,email,photoURL }))
    }
}

export const startLogOutUser = (): AppThunk<void> =>{
    return async (dispatch) =>{
        await logOutFirebase()
        dispatch(logout({}))
    }
}
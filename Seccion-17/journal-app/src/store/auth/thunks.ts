import { signInWithGoogle } from "../../firebase/providers"
import { AppThunk } from "../store"
import { checkingCredentials, login, logout } from "./authSlices"

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

        // Cambiamos el status a authenticated cuando se autorize al usuario
        console.log(result);
        //Si sale mal y no se autentica sale un error
        if(!result.ok) return dispatch(logout(result));
        return dispatch(login(result))
    }
}
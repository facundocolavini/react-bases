import { signInWithGoogle } from "../../firebase/providers"
import { AppThunk } from "../store"
import { checkingCredentials } from "./authSlices"

export const checkingUserAuthentication = (email: string, password: string): AppThunk => {
    return async (dispatch) => {
        // Dispatch de mi accion para poner mi status en checking
        dispatch(checkingCredentials())
    }
}

// Tarea asincrona
export const startGoogleSignIn = (): AppThunk => {
    return async (dispatch) => {
        dispatch(checkingCredentials())
        const result = signInWithGoogle();
    }
}
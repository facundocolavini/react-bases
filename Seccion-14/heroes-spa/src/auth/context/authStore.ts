import { createContext } from "react";
import { AuthState, User } from "../interfaces";

//Exporto mi esquema de mi AutState y defino que va a tener mi Contexto.
export type AuthContextProps= {
    authState: AuthState,
    login?: (user: User) => void
    logout?: () => void
}
// Especificamos la informacion que va a tener mi contexto
export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);


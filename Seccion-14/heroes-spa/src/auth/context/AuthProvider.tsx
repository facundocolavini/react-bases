import * as React from 'react';

import { AuthContext } from "./AuthContext";
import { Login, LogOut } from "../interfaces/auth-interfaces";


// Crea el proveedor de informacion
const INITIAL_STATE :  Login = {
    logged:false
}


interface AuthProps {
    children: JSX.Element | JSX.Element[]
}


export const AuthProvider = ({ children }: AuthProps) => {
    const [ user, setUser ] = React.useState()
 
    return <AuthContext.Provider value={{ user, setUser }}>
        {children}
    </AuthContext.Provider>;
}


import React, { createContext } from "react";
import { UserContextType } from "../Types/User";

//Usar en otro archivo externo para types e interfaces 



export const UserContext = React.createContext<UserContextType | null>(null);


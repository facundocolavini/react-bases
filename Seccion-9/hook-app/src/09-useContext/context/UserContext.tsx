import React, { createContext } from "react";
import { UserContextType, userTesting } from "../Types/User";

//Usar en otro archivo externo para types e interfaces 



export const UserContext = React.createContext<UserContextType | userTesting | null>(null);


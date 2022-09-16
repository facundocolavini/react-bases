import { UserContext } from "./UserContext";
import * as React from 'react';
import { User, userTesting } from "../Types/User";




export const UserProvider: React.FC<React.PropsWithChildren> = ({ children }: React.PropsWithChildren) => {
    const [ user, setUser ] = React.useState<User>()
 
    return <UserContext.Provider value={{ user, setUser }}>
        {children}
    </UserContext.Provider>;
}


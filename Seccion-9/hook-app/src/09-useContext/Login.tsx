
import { Route } from "react-router-dom";
import * as React from 'react';
import { UserContext } from "./context/UserContext";
import { UserContextType } from "./Types/User";

interface LoginPage {

}

export const LoginPage: React.FC<LoginPage> = () => {
  const { user, setUser } = React.useContext( UserContext ) as UserContextType; 

  return (
   <>
    <h1>LoginPage</h1>
    <hr/>
    <pre>
      { JSON.stringify(user, null ,3)}
    </pre>
    <button className="btn btn-primary" onClick={()=>setUser({
        id:123,
        name:'Facundo',
        lastname:'Colavini'
      })
    }
    >
      Establecer usuario
    </button>
   </>
  )
}

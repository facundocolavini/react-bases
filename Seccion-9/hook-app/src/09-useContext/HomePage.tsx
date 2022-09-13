import React from "react";
import { UserContext } from "./context/UserContext";
import { UserContextType } from "./Types/User";

type Props = {}
interface HomePage {

}

export const HomePage: React.FC<HomePage> = (props: Props) => {
  const { user } = React.useContext( UserContext ) as UserContextType; 

  return (
    <>
      <h1>HomePage : <small>{user?.name} {user?.lastname}</small></h1>
      <hr/>
      <pre>
        { JSON.stringify(user, null ,3)}
      </pre>

    </>
  )
}

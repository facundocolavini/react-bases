import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../auth"

type Props = {
    children: JSX.Element | JSX.Element[]
}

export const PublicRoute = ({ children }: Props) => {
  const { authState } = useContext(AuthContext)
  const { isLoggedIn } = authState;

  return (!isLoggedIn) 
    ? <> { children } </> 
    : <Navigate to='/marvel'/>

}
import { useContext, useEffect, useMemo } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../auth"

type Props = {
    children: JSX.Element | JSX.Element[]
}

export const PrivateRoute = ({ children }: Props) => {
  const { authState } = useContext(AuthContext)
  const { isLoggedIn } = authState;
  const { pathname, search } = useLocation()

  const pathMemo = useMemo(()=>{
    const lastPath : string = pathname + search;
    localStorage.setItem("lastPath", lastPath)
  
  },[pathname, search])
  
  // Si el search cambia o el pathname cambia se vuelve a redibujar

  useEffect(()=>{
    pathMemo
  },[pathname, search])
 
  return (isLoggedIn) ? <> { children } </> : <Navigate to='auth/login'/>

}
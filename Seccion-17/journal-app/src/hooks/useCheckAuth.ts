import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { FirebaseAuth } from "../firebase/config";
import { AppDispatch, RootState } from "../store";
import { authState, login, logout } from "../store/auth";
import { useDispatch, useSelector } from 'react-redux';



export const useCheckAuth = () => {
    const { status }: authState = useSelector((state: RootState) => state.auth);
    const dispatch: AppDispatch = useDispatch();
  
    useEffect(()=>{
      onAuthStateChanged( FirebaseAuth, async( user ) =>{
        if( !user ) return dispatch(logout({}))
        const { uid , displayName ,email ,photoURL } = user
        dispatch(login({ uid, displayName, email, photoURL}))
      })
    },[])

    return {
        status
    }
}
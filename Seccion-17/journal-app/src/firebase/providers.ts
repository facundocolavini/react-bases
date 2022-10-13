import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { RegisterUser, LoginUser } from "../models";
import { handlerErrorsMessage } from "../utils";
import { FirebaseAuth } from "./config";


const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const resp = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(resp);
        const { displayName, email, photoURL, uid } = resp.user 
        
        return { 
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }
    } catch (error: any) {
        console.log(error)
        const errorCode = error.code;
        const errorMessage = error.message;
        // The AuthCredential type that was used.
        
        
        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }
}

export const registerUserWithEmailAndPassword = async ({email, password, displayName}: RegisterUser ) => {
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth ,email ,password )
        const { uid, photoURL } = resp.user
        //Obtengo el usuario actual y actualizo su nombre
        // console.log(FirebaseAuth?.currentUser,'CURRENT ');
        if(FirebaseAuth.currentUser !== null){
            await updateProfile(FirebaseAuth.currentUser ,{ displayName })
        }

        return {
            ok: true,
            uid,
            displayName,
            email,
            photoURL
        }
    } catch(error: any) {
        
        return {
            ok: false,
            errorMessage: handlerErrorsMessage(error.message)
        }   
    }
}


export const loginUserWithEmailAndPassword = async({email:mail,password}:LoginUser) =>{
    try{
        const resp = await signInWithEmailAndPassword(FirebaseAuth, mail, password)
        const { displayName, email, photoURL, uid } = resp.user 
        console.log(resp.user,'User Logged');
        
        return {
            ok: true,
            uid,
            displayName,
            email,
            photoURL
        }

    }catch(error:any){
        console.log(error);
        
        return {
            ok: false,
            errorMessage: handlerErrorsMessage(error.message)
        }   
        
    }
}


export const logOutFirebase = async ()=>{
    return await FirebaseAuth.signOut();
}
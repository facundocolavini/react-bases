import { GoogleAuthProvider, OAuthCredential, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        const { displayName, email, photoURL, uid } = result.user 
        
        return { 
            ok: true,
            displayName,
            email,
            photoURL
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
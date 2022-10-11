import { REGISTER_ERRORS, LOGIN_ERRORS } from "./constants";

export const handlerErrorsMessage = (firebaseError: string) =>{
   
    
    switch(firebaseError){
        case 'Firebase: Error (auth/email-already-in-use).':
            return REGISTER_ERRORS.emailAlreadyExist
        case 'Firebase: Error (auth/user-not-found).':
            return LOGIN_ERRORS.emailNotFound
        case 'Firebase: Error (auth/invalid-email).':
            return LOGIN_ERRORS.emailInvalid
        default: 
            return 'Hubo un error intententelo nuevamente'
    }

}
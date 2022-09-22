import { AuthState, User } from "../interfaces";

export const setUserToLocal = (key: string, value: User) =>{
    localStorage.setItem(key,JSON.stringify(value));   
}

export const getUserFromLocal = ( key: string ) =>{
    return JSON.parse(localStorage.getItem(key) || '') 
} 

export const clearUserFromLocal = ( key : string) => {
    localStorage.removeItem(key)
}


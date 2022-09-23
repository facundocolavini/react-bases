
// Handler Actions Types for loginReducer

import { User } from "../interfaces";


export type LoginAction = 
    | { type: 'login'; payload: User } 
    | { type: 'logout'; payload: User }
    | { type: 'default'}
  
export const testAuthTypes = {
   login: 'login',
   logout: 'logout',
   def: 'default',
}
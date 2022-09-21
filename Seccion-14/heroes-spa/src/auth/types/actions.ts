
// Handler Actions Types for loginReducer

import { User } from "../interfaces";

export type LoginAction = 
    | { type: 'login'; payload: User} 
    | { type: 'logout'}
    | { type: 'field'; fieldName: string; payload: string }


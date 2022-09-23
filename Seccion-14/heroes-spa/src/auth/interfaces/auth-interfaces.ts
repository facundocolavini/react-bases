// State base 
export interface AuthState {   
    isLoggedIn: boolean;
    user: User | null ;
}


export interface User {
    id: string;
    name: string;
    lastname: string;
}
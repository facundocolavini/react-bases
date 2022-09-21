// State base 
export interface AuthState {   
    isLoggedIn: boolean;
    user: User | null ;
    variant: 'login' | 'forgetPassword' | 'logOut'  // Manejar el tipo de action 
}


export interface User {
    id: string;
    name: string;
    lastname: string;
}
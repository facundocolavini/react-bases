export interface Login {
    logged: boolean;
}

export interface LogOut {
    logged: boolean;
}

export type State = {
    logged: boolean,
    name: string
}
  

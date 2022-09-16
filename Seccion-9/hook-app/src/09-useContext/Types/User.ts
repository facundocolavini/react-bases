export interface  User {
    id: number,
    name: string,
    lastname: string
}

export type UserContextType = {
    user: User | null | undefined,
    setUser: (user: User) => void 
}

export interface userTesting {
    user: User | null | undefined,
    setUser?: (user: User) => void 
}
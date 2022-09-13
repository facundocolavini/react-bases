export interface  IUser {
    id: number,
    name: string,
    lastname: string
}

export type UserContextType = {
    user: IUser,
    setUser: (user: IUser) => void
}
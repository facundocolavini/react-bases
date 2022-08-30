
type User  = {
    uid: string;
    username: string;
}

export const getUser = ():User => (
    {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
);

// Tarea
export const getUsuarioActivo = ( nombre:string ):User =>({
    uid: 'ABC567',
    username: nombre
})




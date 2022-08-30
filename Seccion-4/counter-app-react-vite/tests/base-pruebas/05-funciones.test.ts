import { describe, expect, test } from '@jest/globals';
import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('Pruebas en  05-Funciones',()=>{
    test('getUser debe retornar retornar un objeto',()=>{
        // Inicializacion
        type User  = {
            uid: string;
            username: string;
        }

        const userObj: User = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        //Estimulo 
        const user: User = getUser();
        // console.log(user)
        expect(userObj).toStrictEqual(user)
    })

    test('getUsuarioActivo debe retornar un objeto',()=>{
        type User  = {
            uid: string;
            username: string;
        }

        const name: string = 'Facundo'
        const userObj: User = {
            uid: 'ABC567',
            username: name
        }
        const activeUser: User =  getUsuarioActivo(name);
        
        // console.log(activeUser,'ACTIVEUSER');
        expect(activeUser).toStrictEqual(userObj)
    })
})
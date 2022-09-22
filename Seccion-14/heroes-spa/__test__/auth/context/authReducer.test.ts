import { describe, test, expect } from '@jest/globals';
import { AuthState } from '../../../src/auth/interfaces';
import { LoginAction } from '../../../src/auth/types/actions';
import { User } from '../../../src/auth/interfaces/auth-interfaces';
import { authReducer } from '../../../src/auth/context'
describe("Pruebas en mi authReducer",()=>{
    //Variables mocks
    const userInit:User = {
        id: '',
        name: '',
        lastname: ''
    } 
    const initialState : AuthState = {
        isLoggedIn: false,
        user: userInit,
    }

    const initialAction :  LoginAction ={
        type: 'logout', payload: userInit
    }
    test("Debe de retornar el estado por defecto",()=>{
        //Estado inicial 
        const newState: AuthState = authReducer(initialState, initialAction);
        expect( newState ).toEqual(initialState)
    })
    test("Debe de llamar (login) autenticar y establecer el user",()=>{
        
    })
    test("Debe de llamar (logout) borrar el obj user y establecer loggedIn en false",()=>{
        
    })
})
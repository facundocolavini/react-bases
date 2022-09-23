import { test, describe, expect, jest } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { AuthState } from '../../../src/auth/interfaces';
import { LoginAction } from '../../../src/auth/types/actions';
import { User } from '../../../src/auth/interfaces/auth-interfaces';
import { authReducer } from '../../../src/auth/context'
import { useReducer } from 'react';



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


    test("Debe de retornar el estado por defecto",()=>{
        //Estado inicial 
        const authstate = authReducer(initialState, {type:'default'} )
        expect( authstate ).toEqual({
            isLoggedIn: false,
            user: userInit,
        })
        // screen.debug()
    })

    test("Debe de llamar (login) autenticar y establecer el user",()=>{
        const userLogin:User = {
            id: "1",
            name: 'Facundo',
            lastname: 'Colavini'
        } 
    
        const loginAction :  LoginAction ={
            type: 'login', payload: userLogin
        }
        const userLoggedState : AuthState = {
            isLoggedIn: true,
            user: {
                id: "1",
                name: "Facundo",
                lastname: "Colavini"
            }
        }
        const authstate = authReducer(initialState, loginAction )

        expect( authstate ).toEqual({
                isLoggedIn: expect.any(Boolean),
                user:{
                    id: expect.any(String), 
                    lastname: expect.any(String), 
                    name: expect.any(String), 
                }
            }
        )
        expect( authstate ).toStrictEqual( userLoggedState );
        
    })
    test("Debe de llamar (logout) borrar el obj user y establecer loggedIn en false",()=>{

    
        const loginAction :  LoginAction ={
            type: 'logout', payload: userInit
        }
        const userLogOut : AuthState = {
            isLoggedIn: false,
            user: {
                id: "",
                name: "",
                lastname: ""
            }
        }
        const authstate = authReducer(initialState, loginAction )

        expect( authstate ).toEqual({
                isLoggedIn: expect.any(Boolean),
                user:{
                    id: expect.any(String), 
                    lastname: expect.any(String), 
                    name: expect.any(String), 
                }
            }
        )
        expect( authstate ).toStrictEqual( userLogOut );
    })
})
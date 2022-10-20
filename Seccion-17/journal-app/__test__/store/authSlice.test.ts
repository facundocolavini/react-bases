import { describe, test, expect } from '@jest/globals';
import { AnyAction } from '@reduxjs/toolkit';
import { authSlice, login, logout, checkingCredentials } from '../../src/store/auth/authSlices';
import { initialState,initialStateAuthenticated,initialStateNotAuthenticated,testUser,userLogoutWithError } from '../fixtures';


describe('Pruebas en authSlice', () =>{
    test('Debe de regresar el estado initial y el nombre del authSlice debe llamarse "auth"', () =>{
        // console.log(authSlice)
        const state =  authSlice.reducer(initialState,{} as AnyAction);
        // console.log(state)
        expect(authSlice.name).toBe('auth');
        expect(state).toEqual(initialState);
    })

    test('Debe de realizar la autenticacion del Usuario', () =>{
        //Action Login
        // console.log(login(testUser));
        
        const state =  authSlice.reducer(initialState,login(testUser) as AnyAction);

        // console.log(state)
        expect(state).toEqual({
            status: 'authenticated',
            uid: testUser.uid,
            email: testUser.email,
            displayName: testUser.displayName,
            photoURL: testUser.photoURL,
            errorCode: testUser.errorCode,
            errorMessage: testUser.errorMessage
        })
    })

    test('Debe de realizar el LogOut del Usuario', () =>{
        //Action Login
        // console.log(logout(testUser));
        // errorMessage y errorCode empiezan como undefined cuando estamos como logOut
        const state =  authSlice.reducer(initialStateAuthenticated,logout({}) as AnyAction);
        console.log(state)
        expect(state).toEqual(initialStateNotAuthenticated)
    })
    test('Debe de realizar el LogOut del Usuario y mostrar un error', () =>{
        const errorMessage = 'Error in credentials';
                
        const state =  authSlice.reducer(initialStateAuthenticated,logout({errorMessage}));

       
        expect(state.errorMessage).toBe(errorMessage)
    })

    test('Debe de cambiar  el estado a checking', () =>{
        const errorMessage = 'Error in credentials';
                
        const state =  authSlice.reducer(initialStateAuthenticated,checkingCredentials());

       
        expect(state.status).toBe('checking-credentials')
    }) 
})
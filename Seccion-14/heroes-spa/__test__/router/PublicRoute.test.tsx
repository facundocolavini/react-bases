import { test, describe, expect, jest } from '@jest/globals';
import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext, AuthContextProps } from '../../src/auth';
import { AuthState } from '../../src/auth/interfaces';
import { PublicRoute } from '../../src/router/PublicRoute';

import React  from 'react';

describe('Pruebas en mi <PublicRouter />', () => { 
    let authStateInit: AuthState = {
        isLoggedIn: false,
        user: null
    }
    const contextValueState: AuthContextProps = {
        authState: authStateInit,
        login: ()=>{},
        logout: ()=>{},
    }     

    test('Debe de mostrar el {children} si no esta autenticado', () => {

        render(
        <AuthContext.Provider value={contextValueState} >
                <PublicRoute>
                    <h1>Ruta publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )
        expect(screen.getByText('Ruta publica')).toBeTruthy()
        screen.debug()
    })

    test('Debe de navegar si esta autenticado',()=>{
        const authUserLogged={
            isLoggedIn: true,
             user: {name:'Facundo', lastname: 'Colavini', id:'1'}
        }
        const contextValueState: AuthContextProps = {
            authState: authUserLogged ,
            login: ()=>{},
            logout: ()=>{},
        }
        render(
            <AuthContext.Provider value={contextValueState} >
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="marvel" element={<h1>Marvel page</h1>}/>
                        <Route path="login" element={
                            <PublicRoute>
                            <h1>Ruta publica</h1>
                            </PublicRoute>
                        }/>
                       
                    </Routes>
                    
                </MemoryRouter>
                
            </AuthContext.Provider>
        )     
        screen.debug();
        expect(screen.getByText('Marvel page')).toBeTruthy()
    })
 })
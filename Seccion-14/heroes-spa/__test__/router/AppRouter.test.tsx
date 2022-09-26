import { expect, beforeEach, describe, jest, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext, AuthContextProps } from '../../src/auth';
import { AuthState } from '../../src/auth/interfaces';
import { AppRouter } from '../../src/router/AppRouter';

import React from 'react';

describe('Pruebas en mi <PrivateRoute />', () => { 
    const SetlocalStorageMock =  Storage.prototype.setItem = jest.fn();
    let authStateInit: AuthState = {
        isLoggedIn: false, 
        user: {
            name: '',
            lastname: '',
            id: '',
        }
    }
    const contextValueState: AuthContextProps = {
        authState: authStateInit,
        login: ()=>{},
        logout: ()=>{},

    }     
    beforeEach(()=>{
        jest.clearAllMocks
    })
 
    test('Debe de mostrar el login si no esta autenticado', () => { 
        render(
            <MemoryRouter initialEntries ={['/marvel']}>
                <AuthContext.Provider value={ contextValueState } >
                        <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )
        expect( screen.getAllByText('Login').length ).toBe(2)
        // screen.debug()
    })

    test('Debe de mostrar el componente de Marvel si esta autenticado', () => { 
        let authStateLogged: AuthState = {
            isLoggedIn: true, 
            user: {
                name: 'facundo',
                lastname: 'colavini',
                id: '1',
            }
        }
        const contextValueState: AuthContextProps = {
            authState: authStateLogged,
            login: ()=>{},
            logout: ()=>{},
        }     
        render(
            <MemoryRouter initialEntries ={['/marvel']}>
                <AuthContext.Provider value={ contextValueState } >
                        <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )
        // screen.debug()
        console.log(screen.getByRole('heading',{level:1}).innerHTML)
        expect(screen.getByRole('heading',{level:1}).innerHTML).toContain('Marvel Heroes')
        expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1)
    })
})

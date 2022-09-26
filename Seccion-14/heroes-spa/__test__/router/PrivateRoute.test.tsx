import { beforeEach, describe, expect, jest, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext, AuthContextProps } from '../../src/auth';
import { AuthState } from '../../src/auth/interfaces';
import { PrivateRoute } from '../../src/router/PrivateRoute';

import React from 'react';

describe('Pruebas en mi <PrivateRoute />', () => { 
    const SetlocalStorageMock =  Storage.prototype.setItem = jest.fn();
    let authStateInit: AuthState = {
        isLoggedIn: true, 
        user: {
            name: 'admin',
            lastname: 'admin',
            id: 'admin',
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
 
    test('Debe de mostrar el {children} si no esta autenticado', () => {

        //Esto es igual que localstorage.setItem , mockeamos la funcion
     /*    Storage.prototype.setItem = jest.fn(); */

        render(
            <AuthContext.Provider value={ contextValueState } >
                <MemoryRouter initialEntries ={['/search?q=batman']}>
                    <PrivateRoute>
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        expect(screen.getByText('Ruta privada')).toBeTruthy()
        expect( SetlocalStorageMock ).toHaveBeenCalledWith("lastPath","/search?q=batman"),
        screen.debug()
    })
})
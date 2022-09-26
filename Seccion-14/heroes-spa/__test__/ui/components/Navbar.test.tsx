import { beforeEach, describe, expect, jest, test } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext, AuthContextProps } from '../../../src/auth';
import { AuthState, User } from '../../../src/auth/interfaces';
import { Navbar } from '../../../src/ui';

// Mock de libreria react router dom para mockear useNavigate
const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom')  as any, 
    __esModule: true,
    useNavigate: () => mockUseNavigate
}))

describe('Pruebas en mi <Navbar />', () => { 
    
    beforeEach(()=>{
        jest.clearAllMocks
    })

    test('Debe de mostrar el nombre del usuario',()=> {
        const userLogged : User = {
            name: 'Facundo',
            lastname: 'Colavini',
            id: '1'
        }
        let authStateInit: AuthState = {
            isLoggedIn: true, 
            user: userLogged
        }
        const contextValueState: AuthContextProps = {
            authState: authStateInit,
            login: jest.fn(),
            logout: jest.fn(),
        } 
        // const { authState }: AuthContextProps = React.useContext( AuthContext )
        render( 
            <AuthContext.Provider value={ contextValueState } >
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        ) 
        const spanUser: HTMLSpanElement = screen.getByTestId('user-span')
    
        expect(spanUser.innerHTML).toContain('Facundo Colavini')
        // screen.debug()
    })

    test('Debe de llamar el logout y navigate cuando se hace click en el boton de logout',()=> {
        const logOutmock = jest.fn()
        const useNavigateMock = jest.fn() 
      
        const userLogOut : User = {
            name: '',
            lastname: '',
            id: ''
        }
        let authStateInit: AuthState = {
            isLoggedIn: false, 
            user: userLogOut,
        }
        const contextValueState: AuthContextProps = {
            authState: authStateInit,
            login: ()=>{},
            logout: logOutmock,
        } 
      
        // const {  logout:logout }: AuthContextProps = React.useContext( AuthContext )
        render( 
            <AuthContext.Provider value={ contextValueState } >
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        ) 
        // const navigateMock = useNavigate()
        const btnLogOut: HTMLSpanElement = screen.getByTestId('btn-logout')
        fireEvent.click( btnLogOut ) 

        expect( contextValueState.logout ).toHaveBeenCalled()
        expect( mockUseNavigate ).toHaveBeenLastCalledWith('/auth/login',{
            replace:true
        })
        expect( contextValueState.authState.user ).toEqual({
            name: '',
            lastname: '',
            id: ''
        })

        screen.debug()
    })
 })
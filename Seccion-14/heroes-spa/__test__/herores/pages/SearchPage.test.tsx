import { describe, expect, jest, test, beforeEach } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../../src/auth';
import { SearchPage } from '../../../src/heroes/pages';
import { AuthContextProps } from '../../../src/auth/context/authStore';
import { AuthState } from '../../../../../../.history/react-bases/Seccion-14/heroes-spa/src/auth/interfaces/auth-interfaces_20220922165350';
import { User } from '../../../src/auth/interfaces';

// Mock de libreria react router dom para mockear useNavigate



const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom')  as any, 
    __esModule: true,
    useNavigate: () => mockUseNavigate
}))
describe('Pruebas en mi <SearchPage />', () => { 

    beforeEach(()=>{
        jest.clearAllMocks
    })

    test('Debe de mostrarse correctamente con los valores por defecto',()=> {
        const { container } = render(
            <MemoryRouter>
                   <SearchPage/>
            </MemoryRouter>
        )
     
        // expect( container ).toMatchSnapshot();
    })
    test('Debe de mostrarse batman en el input con el valor del queryString',()=> {
        const heroesFind = {
            alter_ego:  "Bruce Wayne",
            characters: "Bruce Wayne",
            first_appearance: "Detective Comics #27",
            id: "dc-batman",
            publisher: "DC Comics",
            superhero: "Batman"
        }

        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        )
        const inputSearch : HTMLInputElement = screen.getByTestId('text-input');
  

        const btnSubmit : HTMLButtonElement = screen.getByRole('button', {name: 'Search'})
        // const img : HTMLImageElement = screen.getByRole('img')
        fireEvent.change(inputSearch,{target:{ name: 'searchText', value:'batman'}})
        fireEvent.submit( btnSubmit );

        
        const { src }: HTMLImageElement = screen.getByRole('img');
        expect( src ).toContain('/assets/heroes/dc-batman.jpg')
        expect ( inputSearch.value ).toBe('batman');
        // expect( alertS.innerHTML ).toBe( 'Found with: <b></b>' )
        // screen.debug()

    })
    test('Debe de mostrar un error si no se encuentra un heroe (batman123) ', () => { 
        // render(
        //     <MemoryRouter initialEntries={['/search?q=batman123']}>
        //         <SearchPage />
        //     </MemoryRouter>
        // )
        //     screen.debug()
        // const alert = screen.getByLabelText('alert-danger')
        // expect( alert.style.display ).toBe('')
    })

    test('Debe de llamar al navigate a la pantalla nueva', () => { 
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
        const inputValue: string = 'superman'
        render(
            <AuthContext.Provider value={ contextValueState } >
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage />
            </MemoryRouter>
            </AuthContext.Provider>
        )
        const inputSearch : HTMLInputElement = screen.getByTestId('text-input');
        fireEvent.change(inputSearch,{target:{ name: 'searchText', value: inputValue }})
        console.log(inputSearch.value);
      
        const form = screen.getByRole('form')
        console.log(form);
         
        fireEvent.submit( form )
        // expect( mockUseNavigate ).toHaveBeenCalledWith('/search?q=superman')
        // screen.debug()
    })
 })
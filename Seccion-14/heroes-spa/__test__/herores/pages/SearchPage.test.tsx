import { beforeEach, describe, expect, jest, test } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext, AuthContextProps } from '../../../src/auth';
import { AuthState, User } from '../../../src/auth/interfaces';
import { SearchPage } from '../../../src/heroes/pages'

// Mock de libreria react router dom para mockear useNavigate
const mockUseNavigate = jest.fn();
const mockUseLocation = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom')  as any, 
    __esModule: true,
    useNavigate: () => mockUseNavigate,
    useLocation: () => mockUseLocation
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
        screen.debug()
        // expect( container ).toMatchSnapshot();
    })
    test('Debe de mostrarse batman en el input con el valor del queryString',()=> {
        render(
            <MemoryRouter initialEntries={['/search','?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        )
        const input : HTMLInputElement = screen.getByTestId('text-input');
        // const btnSubmit: HTMLButtonElement = screen.getByTestId('searchTextQuery');

        // fireEvent.click( btnSubmit );
        // input.value='batman'
        const img : HTMLImageElement = screen.getByRole('img')
        expect( img.src ).toContain('/assets/heroes/dc-batman.jpg')
        expect ( input.value ).toBe('batman');
        
        screen.debug()

    })

 })
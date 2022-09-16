import { describe, expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { MainApp } from '../../src/09-useContext/MainApp';



describe('Pruebas en <MainApp />', () => { 
    test('Debe de mostrar el HomePage', () => {
        render(
            //initialEntries  tiene el segmento de la url donde me encuentro
        <MemoryRouter initialEntries={['/']} >
            <MainApp />
        </MemoryRouter>
        );
        screen.debug()
        expect( screen.getByText('HomePage')).toBeTruthy()
     })

     test('Debe de mostrar el LoginPage', () => {
        render(
            //initialEntries  tiene el segmento de la url donde me encuentro
        <MemoryRouter initialEntries={['/login']} >
            <MainApp />
        </MemoryRouter>
        );
        screen.debug()
        expect( screen.getByText('LoginPage')).toBeTruthy()
     })

     test('Debe de mostrar el AboutPage', () => {
        render(
            //initialEntries  tiene el segmento de la url donde me encuentro
        <MemoryRouter initialEntries={['/about']} >
            <MainApp />
        </MemoryRouter>
        );
        screen.debug()
        expect( screen.getByText('AboutPage')).toBeTruthy()
     })
 })
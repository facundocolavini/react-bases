import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { MultipleCustomHook } from '../../../src/03-examples/MultipleCustomHook';
import { useFetch } from '../../../src/hook/useFetch';
import { Quote } from '../../../src/interfaces';

jest.mock('../../../src/hook/useFetch')

describe('Pruebas en <MultipleCustomHook />', () => { 
    let renderInstance; 
    type PropsFetch = {
        data: Quote[] | null, 
        isLoading: boolean , 
        hasError: string | null,
      }
    let quoteMock: Quote = {
        quote:  'Facundo',
        author:   'Hola Mundo'
    }
    let url : string = `https://www.breakingbadapi.com/api/quotes/1`;
    const mockedInitalState: PropsFetch = {   
        data: [quoteMock],
        isLoading: true,
        hasError : null,
    }
    

    beforeEach(() =>{
        renderInstance = render(<MultipleCustomHook />)
    })
    // Nos aseguramos de limpiar los mocks 
    afterEach(()=>{
        jest.clearAllMocks
    })
    

    test('Debe de mostrar el componente MultipleCustomHook y cargar correctamente su estado inicial', () => { 
        
        // Forma 1 de hacer el render del componente
        // expect(renderInstance).toBeTruthy;
        
        // Forma 2 de hacer el test del render del componente
        //Aseguramos que los textos que se cargan en el primer renderizado esten correctos
        expect( screen.getByText('Loading...'))
        expect( screen.getByText('Breaking Bad Quotes'))

        // Asegurar que el boton este deshabilitado
        const nextQuoteBtn : HTMLButtonElement = screen.getByRole('button', {name: 'Next quote'})
        expect( nextQuoteBtn.disabled ).toBeTruthy()

        // screen.debug()
     }); 
     
    test('Debe de mostrar un Quote',()=>{
        //Vamos a simular un mock completo del useFetch y simulemos los valores de retorno 
        useFetch(url).mockReturnValue({
            mockedInitalState
        })

        // Evaluamos cuando cambia el loading

         // screen.debug()
    })   
})
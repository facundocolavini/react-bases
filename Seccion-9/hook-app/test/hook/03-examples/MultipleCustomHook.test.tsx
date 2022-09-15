import { beforeEach, describe, expect, jest, test } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';
import { MultipleCustomHook } from '../../../src/03-examples/MultipleCustomHook';
import { useCounter } from '../../../src/hook/useCounter';
import { useFetch } from '../../../src/hook/useFetch';
import { Quote } from '../../../src/interfaces';


jest.mock('../../../src/hook/useFetch');
jest.mock('../../../src/hook/useCounter');

describe('Pruebas en <MultipleCustomHook />', () => { 
    type PropsFetch = {
        data: Quote[] | null, 
        isLoading: boolean , 
        hasError: string | null,
    }

    let renderInstance; 
    let quoteMock: Quote = {
        quote_id: 12,
        quote:  'Facundo',
        author: 'Hola Mundo',
        series: 'Breaking Bad'
    }
    let url : string = `https://www.breakingbadapi.com/api/quotes/1`;
        
    // Mocks
    //Voy a tener en todas las pruebas este mock 
    const mockIncrement = jest.fn()
    useCounter.mockReturnValue({
        counter: 10,
        increment: mockIncrement,
    })

    //Antes de cada prueba
    beforeEach(() =>{

        jest.clearAllMocks
    })
    // Nos aseguramos de limpiar los mocks 
/*     afterEach(()=>{
        jest.clearAllMocks
    }) */
    

    test('Debe de mostrar el componente MultipleCustomHook y cargar correctamente su estado inicial', () => { 
        //Ejecutamos el mock en mi ejecucio de mi custom hook
        // Data initial de mi hook
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        })
        render(<MultipleCustomHook />)
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
        useFetch.mockReturnValue({
            data: [{
                quote:  'Facundo',
                author: 'Hola Mundo',          
            }],
            isLoading: false,
            hasError : null,
        })
        render(<MultipleCustomHook />)

        const nextQuoteBtn : HTMLButtonElement = screen.getByRole('button', {name: 'Next quote'})

        expect( nextQuoteBtn.disabled ).toBeFalsy() // El disable va a ser false por lo tanto se espera que no exista
        expect(screen.getByText('Hola Mundo')).toBeTruthy()
        expect(screen.getByText('Facundo')).toBeTruthy()
        screen.debug()
    })   
    test('Debe de llamar a la funcion incrementar',()=>{
        useFetch.mockReturnValue({
            data: [{
                quote:  'Facundo',
                author: 'Hola Mundo',          
            }],
            isLoading: false,
            hasError : null,
        })
   

        render(<MultipleCustomHook />)
        const nextQuoteBtn : HTMLButtonElement = screen.getByRole('button', {name: 'Next quote'})
        fireEvent.click( nextQuoteBtn )
        //Evaluamos cuando es llamada la funcion increment
        expect( mockIncrement ).toHaveBeenCalled()
   
    })
})
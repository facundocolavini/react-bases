import React from 'react';
import { describe, expect, test, jest } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';


describe('Pruebas en AddCategory', () => {
    test('Debe de cambiar el valor de la caja de texto', () => {
        type Props = {
            onNewCategory: (newCategory: string) => void,
        }
        render(<AddCategory onNewCategory={ ()=> {}} />);
        // Obtener el input
        const input : HTMLInputElement = screen.getByRole('textbox') 
        // Le pasamos el value que va a tener el input (disparamos el evento)
        fireEvent.input( input , { target: { value : 'Saitama'}} )
        // Obtenemos el valor del input
        expect( input.value ).toBe('Saitama')

        screen.debug()
    })

    test('Debe de llamar onNewCategory si el input tiene un valor',()=>{
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn()

        render(<AddCategory onNewCategory={ onNewCategory } />);

        const input : HTMLInputElement = screen.getByRole('textbox');
        //Para obtener el formulario se debe poner un aria-label al form
        const form = screen.getByRole('form')

        // Disparamos el evento del input para establecer el valor 
        fireEvent.input( input , { target: { value : inputValue }} )
        // Disparamos el evento del formulario 
        fireEvent.submit( form )
        // Nos aseguramos que cuando mandamos el form se limpie el input a vacio
        expect(input.value).toBe('')
        
        //Evalua que la funcion haya sido llamada
        expect( onNewCategory ).toHaveBeenCalled()
        // Evalua que solo se llame una vez onNewCategory
        expect( onNewCategory ).toHaveBeenCalledTimes(1)
        // Evalua que se le llamo con el valor de nuestro inputValue 'Saitama'
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue )
        // screen.debug()
    })

    test( 'No debe de llamar el onNewCategory si el input esta vacio',()=>{
        const onNewCategory = jest.fn();
   
        render(<AddCategory onNewCategory={ onNewCategory } />);    
 
        const input : HTMLInputElement = screen.getByRole('textbox');
        const form = screen.getByRole('form')

        //Disparamos los eventos
        fireEvent.submit( form )


        expect(input.value).toBe('')
        expect( onNewCategory ).toHaveBeenCalledTimes(0)
        expect( onNewCategory ).not.toHaveBeenCalled()
    })

})
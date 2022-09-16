import { describe, expect, jest, test } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';
import { AddCategory } from '../../src/components';
import GiftExpertApp from '../../src/GifExpertApp';


/* 
 - No se prueba el GifGrid
 - No voy a probar que el componente renderize lo que tiene que renderizar

 Pruebas :
 Asegurar que cuando carge el componente tenga el titulo en un h1 y que sea el texto correspondiente 
 Asegurar que la primera vez el texto sea cargando en el h2 y dragon ball en el h3
 Escribir en el input
 Postear el formulario 
 Que pasa si mando una misma categoria
 Matchear con el snapshot
*/

describe('Prueba en GifExpertApp',()=>{
    const titleText: string = 'GifExpertApp';

    test('Debe de mostrar el Titulo en un H1', () => { 
        render(<GiftExpertApp/>)
        expect(screen.getByText(titleText))
        expect(screen.getByRole('heading',{level:1}).innerHTML).toContain(titleText)
    })

    test("Debe mostrar la primera vez el Cargando en un h2 y la categoria dragon ball en un h3", () => {
        const loadingText: string = 'Cargando...';
        const category: string =  'Dragon Ball'; 

        render(<GiftExpertApp/>)
        expect(screen.getByText(loadingText))
        expect(screen.getByRole('heading',{level:2}).innerHTML).toContain(loadingText)
        expect(screen.getByText(category))
        expect(screen.getByRole('heading',{level:3}).innerHTML).toContain(category)
 
    })

    test('Escribir en el input una categoria', ()=>{
        const inputValue = 'Saitama';
       

        render(<GiftExpertApp/>)
  
        const input : HTMLInputElement = screen.getByRole('textbox');
        fireEvent.input( input , { target: { value : inputValue }} )
        expect(input.value.length).toBeGreaterThan(1)
               
        screen.debug()
    })

    test('Se debe pasar a addCategorie una categoria', ()=> {
        const inputValue = 'Saitama';
        const addCategorie = jest.fn()
        render(<AddCategory onNewCategory={addCategorie}/>)
        const input : HTMLInputElement = screen.getByRole('textbox');
        fireEvent.input( input , { target: { value : inputValue }});
    })

    test('Posteamos el formulario una nueva categoria',()=>{
        const inputValue = 'Saitama';
        const addCategorie = jest.fn()
        render(<AddCategory onNewCategory={addCategorie}/>)

        const input : HTMLInputElement = screen.getByRole('textbox');
        const form = screen.getByRole('form')

        fireEvent.input( input , { target: { value : inputValue }} )
        fireEvent.submit( form )

        expect(input.value).toBe('')
        
        //Evalua que la funcion haya sido llamada
        expect( addCategorie ).toHaveBeenCalled()
        // Evalua que solo se llame una vez onNewCategory
        expect( addCategorie ).toHaveBeenCalledTimes(1)
        // Evalua que se le llamo con el valor de nuestro inputValue 'Saitama'
        expect( addCategorie ).toHaveBeenCalledWith( inputValue )
    })
})
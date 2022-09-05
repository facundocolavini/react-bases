
import * as React from 'react'
import { describe, expect, test } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem'

/*
Cosas a probar  en el componente GifItem
    1. añadir propTypes 
        a. title obligatorio 
        b. url obligatorio 
        c. id es opcional (de momento)

    2. Probar sin las propsTypes 
        a. hacer prueba si no se le envia el titulo
        b. hacer una prueba si no se le envia url

    3. Evaluar el snapshot

*/ 

describe('Trabajando en el componente <GifItem/>', () => {
    const title: string = 'Saitama';
    const url: string = 'http://localhost:8080/';
    

   
    test('Debe de hacer match con el snapshot',()=>{
       const{ container } = render(<GifItem title={title} url={url} />)

       // Evaluacion 
       expect( container ).toMatchSnapshot();
    })

    test('Debe de mostrar la imagen con el URL y el ALT indicado', ()=>{
        render(<GifItem title={title} url={url} />)
        
        // Obtener un atributo de mi elemento  
        // expect( screen.getByRole('img').getAttribute('src')?.valueOf()).toBe( url );
        // expect( screen.getByRole('img').getAttribute('alt')?.valueOf()).toBe( title );

        // otra forma de evaluar los atributos de un elemento
        const {src , alt}: HTMLImageElement = screen.getByRole('img');
        
        expect( src ).toBe( url);
        expect( alt ).toBe( alt );


        screen.debug();
    })

    test('Debe mostrar el titulo en el componente', ()=>{
        render(<GifItem title={title} url={url} />);
        expect( screen.getByText( title )).toBeTruthy();
    })
   
})

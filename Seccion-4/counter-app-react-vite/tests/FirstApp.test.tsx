
import * as React from 'react'
import { describe, expect, test } from '@jest/globals';
import { render } from '@testing-library/react';
import { FirtsApp } from '../src/FirstApp';

describe('Prueba en <FirstApp/>',()=>{
    // Match con el snapshot significaria como tomarle una fotografia a mi componente

    // test('Debe de hacer match con el snapshot',()=>{

    //     const title: string = 'Hola, Soy Goku';
    //     const { container } = render( <FirtsApp title={title}/> )
        
    //     expect ( container ).toMatchSnapshot();
    // })

    test('Debe de mostrar el titulo en un H1 ',()=>{
       
        const title: string = 'Hola, Soy Goku';
        const { container, getByText } = render( <FirtsApp title={title}/> )

        // Lo que estamos  evaluando es que exista el contenido para el titulo 
        expect( getByText(title) ).toBeTruthy();
        //No recomendado 
        //Seleccionamos el H1 de mi Componente
        const h1: HTMLHeadElement | null = container.querySelector('h1');
        
        // expect( h1?.innerHTML).toBe(title)
        expect( h1?.innerHTML).toContain(title)
    })
    
    test('Obtener un elemento H1 por su atributo',()=>{
        const title: string = 'Hola, Soy Goku';
        const { container, getByText, getByTestId } = render( <FirtsApp title={title}/> )

        expect(getByTestId('test-title')).toBeTruthy();//Que exista ese atributo
        // expect(getByTestId('test-title').innerHTML).toBe(title);//Que exista y sea igual al contenido del HTML DA ERROR de espacios
        expect(getByTestId('test-title').innerHTML).toContain(title);//Que exista y sea igual al contenido del HTML
    })

    test('Debe de mostrar el subtitulo enviado por props',()=>{
        const title: string = 'Hola, Soy Goku';
        const subTitle: string = 'Soy, un subtitulo';
        const { getAllByText } = render( 
            <FirtsApp 
                title={title}
                subTitle={subTitle}
            />
        )
        expect( getAllByText(subTitle).length ).toBe(2)
    })
})
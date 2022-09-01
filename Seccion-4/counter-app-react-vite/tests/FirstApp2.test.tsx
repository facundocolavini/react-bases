
import * as React from 'react'
import { describe, expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { FirtsApp } from '../src/FirstApp';

describe('Prueba en <FirstApp/>',()=>{
    //Podemos declarar las variables o constantes aca para no repetir codigo 
    const title: string  =  'Hola , Soy Goku';
    const subTitle: string = 'Soy un subtitulo';

    test('Debe hacer match con el snapshot',()=>{
        const { container } =  render(<FirtsApp title={title}/>)
        expect(container).toMatchSnapshot()
    })

    test('Debe de mostrar el mensaje "Hola , Soy Goku"', () => { 
        // No hace falta el container para esta prueba
        render(<FirtsApp title={title}/>)        

        expect(screen.getByText(title)).toBeTruthy()

    })

    test("Debe mostrar el titulo en un H1" ,()=>{
        render(<FirtsApp title={title}/>)
        expect(screen.getByRole('heading',{level:1}).innerHTML).toContain(title) // Va buscar el primer H1 de nivel 1 de mi html.
    })

    test('Debe mostrar el subtitulo enviado por props',()=>{
        render(<FirtsApp title={title} subTitle={subTitle}/>)
        expect( screen.getAllByText(subTitle).length ).toBe(2)
    })
})
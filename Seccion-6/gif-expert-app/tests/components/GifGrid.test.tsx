import * as React from 'react'
import { GifGrid } from '../../src/components';
import { describe, expect, test, jest } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

type Gif = {
    id?: string;
    title : string;
    url : string;
}

interface useFetchReturn {
    isLoading :  boolean,
    images: Gif[]
}

// Inicializamos el mock de nuestro custom hook 
jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en <GifGrid/>', () => { 
    const category: string = 'One Punch';
    const loading: boolean = true;
    const gifs: Gif[] = [
        {
            id: 'ABC',
            url: 'https://localhost/onepunch/saitama.jpg',
            title: 'Saitama'
        },
        {
            id: '123',
            url: 'https://localhost/dragonball/goku.jpg',
            title: 'Goku'
        }
    ]


    test('Debe de mostrar el Loading inicialmente', () => {
        
        // Defino Return de mi Custom Hook 
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        })

        render(<GifGrid category={category} />)


        // Por defecto el componente va a tener estos textos 
        expect(loading).toBeTruthy()
        expect(screen.getByRole('heading',{level:2}).innerHTML).toContain('Cargando...')
        expect(screen.getByRole('heading',{level:3}).innerHTML).toContain( category )
        // Otra forma de hacer esta prueba
        // screen.debug(  )
        // expect(screen.getByText( 'Cargando...' ))
        // expect(screen.getByText( category ))
    })
    
    test('Debe mostrar items cuando se cargan las  imagenes useFetchGifs',()=>{
        // Para evaluar esto suponemos qeu mi custom hook esta funcionando no nos metenmos a evaluar el useFetchGif internamente
        // El GifGrid no tiene la responsabilidad de evaluar el hook
         // Defino Return de mi Custom Hook 
         useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        })

        render(<GifGrid category={category} />)

        screen.debug(  )
        // Espero mas de un elemento de mi array
        expect(screen.getAllByRole('img').length).toBe(2)
            
    })
 })
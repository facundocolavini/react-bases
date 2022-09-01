
import * as React from 'react'
import { describe, expect, test } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';



describe('Trabajando en el componente CounterApp', () => {
    const initialValue: number = 10; 
    const newReset: number = 100;

    test("Debe de hacer match con el snapshot", () => {
        const { container } =  render(<CounterApp value={initialValue}/>)
        expect(container).toMatchSnapshot()
    }) 

    test("El contador debe de mostrar como valor inicial 100 en su elemento H2", ()=>{
        render(<CounterApp value={100}></CounterApp>)

        expect(screen.getByText(newReset)).toBeTruthy()
        expect(screen.getByRole('heading',{level:2}).innerHTML).toContain('100')
    })

    // Testing de botones e interacciones
    test("Debe de incrementar con el boton +1",()=>{
        // Sujeto de pruebas
        render(<CounterApp value={initialValue}></CounterApp>)

        //Obtenemos
        const btnIncrement: HTMLElement = screen.getByText('+1')
        
        //Evento  Click (Simulo darle click al boton incrementar)
        fireEvent.click( btnIncrement )
        
        //Ascercion 
        expect(screen.getByText('11')).toBeTruthy()
        screen.debug()
    })

    test("Debe de decrementar con el boton -1",()=>{
        // Sujeto de pruebas
        render(<CounterApp value={initialValue}></CounterApp>)

        //Obtenemos
        const btnDecrement: HTMLElement = screen.getByText('-1')
        
        //Evento  Click (Simulo darle click al boton incrementar)
        fireEvent.click( btnDecrement )
        
        //Ascercion 
        expect(screen.getByText('9')).toBeTruthy()

        screen.debug()
    })

    test("Debe de reiniciar el contador al clickear el boton reset",()=>{
        render(<CounterApp value={initialValue}></CounterApp>)
        
        // const btnIncrement: HTMLElement = screen.getByText('+1') //Sin arial-label
        // const btnResetCounter: HTMLElement = screen.getByText('Reset')
        const btnIncrement: HTMLElement = screen.getByRole('button', { name: 'btn-increment' })
        const btnResetCounter: HTMLElement = screen.getByRole('button', { name: 'btn-reset' })
        const counter: HTMLHeadElement = screen.getByTestId('counter')// Con data-testid
        
        fireEvent.click( btnIncrement ) 
        fireEvent.click( btnIncrement ) 
        fireEvent.click( btnIncrement ) 
        
        // Reset Button
        fireEvent.click(btnResetCounter)
        // expect(screen.getByRole('heading', { level: 2}).innerHTML).toContain(initialValue.toString())
        expect(counter.innerHTML).toContain(initialValue.toString())
       
        screen.debug()
    })
})




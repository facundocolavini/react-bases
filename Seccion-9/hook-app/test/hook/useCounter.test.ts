import { describe, expect, test, jest } from '@jest/globals';
import { act, fireEvent, render, renderHook, screen, waitFor } from '@testing-library/react';
import { useCounter } from '../../src/hook/useCounter';


describe("Pruebas en el hook useCounter", ()=>{

   test("Debe de retornar los valores por defecto", ()=>{
        const initialCounter: number = 10; 
        const { result } = renderHook( ()=> useCounter())
        const { counter, increment, decrement, reset } = result.current;

        expect( counter ).toBe(initialCounter)
        //Esperar una funcion
        expect ( increment ).toEqual( expect.any( Function ))
        expect ( decrement ).toEqual( expect.any( Function ))
        expect ( reset ).toEqual( expect.any( Function ))
   })

   test("Debe de generar el counter  con el valor de 100",()=>{
        const initialCounter: number = 100; 
        const { result } = renderHook( ()=> useCounter( initialCounter ))
        const { counter } = result.current;
         
        expect( counter ).toBe( initialCounter )
   })

   test("Debe de poder generar el mismo valor por defecto",()=>{
        const initialCounter: number = 10; 
        const { result } = renderHook( ()=> useCounter( initialCounter ))
        const { counter } = result.current;
         
        expect( counter ).toBe( initialCounter )
   })

   // Ejecutando funciones del custom hook
   test("Debe de incrementar el counter",()=>{
        const initialCounter: number = 10; 
        const { result } = renderHook( ()=> useCounter( initialCounter ))
        const { counter, increment } = result.current;
        //El act es una funcion que recibe una funcion de callback 
        act(()=>{
            increment()
            increment(2)
        })
        expect(result.current.counter).toBe(13)
   })

   test("Debe de decrementar el counter",()=>{
        const initialCounter: number = 10; 
        const { result } = renderHook( ()=> useCounter( initialCounter ))
        const { counter, decrement } = result.current;
        //El act es una funcion que recibe una funcion de callback 
        act(()=>{
            decrement()
            decrement(2)
        })
        expect(result.current.counter).toBe(7)
    })

    test("Debe de restablecerlo en el valor predefinido en el counter",()=>{
        const initialCounter: number = 10; 
        const { result } = renderHook( ()=> useCounter( initialCounter ))
        const { counter, reset,  decrement, increment } = result.current;
        //El act es una funcion que recibe una funcion de callback 
        act(()=>{
            decrement()
            increment()
            reset()
        })
        expect(result.current.counter).toBe(initialCounter)
    })

}) 
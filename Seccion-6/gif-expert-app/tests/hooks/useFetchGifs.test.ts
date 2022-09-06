import * as React from 'react'
import { describe, expect, test, jest } from '@jest/globals';
import { fireEvent, render, renderHook, screen, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';


describe('Pruebas en useFetchGifs',()=>{
    test('Debe de regresar el estado inicial', ()=>{
        const { result } = renderHook(()=> useFetchGifs('One Punch'))
        // Destructuramos lo que tiene  el hook en ese momento
        const { images, isLoading } = result.current;
        expect( images.length ).toBe(0)
        expect( isLoading ).toBeTruthy() 
    })

    test('Debe de regresar un arreglo de imagenes y el isLoading en false', async ()=>{
        const { result } = renderHook(()=>useFetchGifs('One Punch'))
        // Obtener el siguiente valor cuando se cargen las imagenes , espera a que algo suceda
        await waitFor(() => { 
           expect(result.current.images.length).toBeGreaterThan(0)
        })

        // Me da el valor actual del hook
        const {images, isLoading} = result.current;

        expect( images.length ).toBeGreaterThan(0)
        expect( isLoading ).toBeFalsy() 
    })
})
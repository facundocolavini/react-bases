import { describe, expect, test, jest } from '@jest/globals';
import { act, fireEvent, render, renderHook, screen, waitFor } from '@testing-library/react';
import { useForm } from '../../src/hook/useForm';
import { FormLoginType } from '../../src/interfaces';
import { ChangeEvent } from 'react';
import * as React from 'react';




describe("Pruebas en el hook useForm",()=>{
    const initialValue : FormLoginType = {
        username: '',
        email: '',
        password: '',
    }

    test("Debe de regresar los valores por defecto ",()=>{
        const { result } = renderHook( ()=> useForm(initialValue))
        const { formState } = result.current;
        console.log(result.current)
        expect( formState ).toStrictEqual( initialValue )

        //Tambien se puede hacer asi prueba
        expect(result.current).toEqual({
            
            username: initialValue.username ,
            email: initialValue.email,
            password: initialValue.password,
            formState: initialValue,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function )
            
        })
    })

    test("Debe de cambiar el nombre del formulario",()=>{
        //Montar el hook
        // onInputChange() // act, event
        // expect 
        const newInputValueName : string = 'Facundo';
        const { result } = renderHook( ()=> useForm( initialValue ))
        const { onInputChange, onResetForm} = result.current;
        
        //El act es una funcion que recibe una funcion de callback 
        act(()=>{
            // onInputChange({target:{ name:'name' , value: newInputValueName }:EventTarget} );
            onResetForm()
            
        })

        expect(result.current).toEqual({
            
            username: initialValue.username ,
            email: initialValue.email,
            password: initialValue.password,
            formState: initialValue,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function )
            
        })
    })
})
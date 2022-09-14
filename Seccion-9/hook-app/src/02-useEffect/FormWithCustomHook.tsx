import React, { useEffect, useState } from 'react';
import { useForm } from '../hook/useForm';
import { FormLoginType } from '../interfaces';


interface FormData {
    username: string,
    email: string,
    password: string,
}


export const FormWithCustomHook = () => {
    const initialState : FormData = {
        username: '',
        email: '',
        password: '',
    }
    const { username, password, email, onInputChange, onResetForm } = useForm<FormData>( initialState )


    // const { username, email, password } = formState

    // Effectos

    return (
        <>
            <h1>Formulario con Custom Hook</h1>
            <hr/>
            <input 
                type="text"
                className='form-control'
                placeholder='Username'
                name="username"
                value={ username }
                onChange={ onInputChange }
            />

            <input 
                type="email"
                className='form-control mt-2'
                placeholder='Email'
                name="email"
                value={ email }
                onChange={ onInputChange }
            />

            <input 
                type="password"
                className='form-control mt-2'
                placeholder='Contraseña'
                name="password"
                value={ password }
                onChange={ onInputChange }
            />

            <button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button>
        </>
    );
};
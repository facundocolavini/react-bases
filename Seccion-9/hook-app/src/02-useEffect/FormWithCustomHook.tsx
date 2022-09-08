import React, { useEffect, useState } from 'react';
import { useForm } from '../hook/useForm';


type Props = {};

export const FormWithCustomHook = (props: Props) => {
    
    const { formState , username, password, email, onInputChange, onResetForm } = useForm({
        username: '',
        email: '',
        password: '',
    })

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
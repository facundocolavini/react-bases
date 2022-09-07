import React, { useEffect, useState } from 'react';
import { Message } from './Message';

type Props = {};

export const SimpleForm = (props: Props) => {
    const [formState, setFormState] = useState({
        username: 'facundo',
        email: 'facundo@gmail.com',
    });
    
    const { username, email } = formState; 

    //Inputs Handlers
    const onInputChange = ({target} :React.ChangeEvent<HTMLInputElement>):void=>{
        const { name, value }  = target
        setFormState({
            ...formState, // Si hay mas campos
            [ name ]: value, // Cambiando el estado 
        })
    }

    // Effectos
    // useEffect(() => {
    //     console.log('USEEFFECT CALLED!');
    // },[])
    
    // useEffect(() => {
    //     console.log('FORMSTATE CHANGE!');
    // },[formState])

    // useEffect(() => {
    //     console.log('EMAIL CHANGE!');
    // },[email])

    // Unmount and cleanup 


    return (
        <>
            <h1>Formulario Simple</h1>
            <hr/>
            <input 
                type="text"
                className='form-control'
                placeholder='Username'
                name="username"
                onChange={ onInputChange }
            />

            <input 
                type="email"
                className='form-control mt-2'
                placeholder='Email Address'
                name="email"
                onChange={ onInputChange }
            />

            {username === 'facundo2' && <Message/>} 
        </>
    );
};
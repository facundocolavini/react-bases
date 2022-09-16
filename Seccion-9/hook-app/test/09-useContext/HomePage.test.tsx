import { describe, expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { HomePage } from '../../src/09-useContext/HomePage';
import { User } from '../../src/09-useContext/Types/User';



describe('Pruebas en <HomePage />',()=>{
    const userF : User = {
        id: 1,
        name: 'Facundo',
        lastname: 'Colavini'
    } 

 
   
    test('Debe de mostrar el componente sin el usuario', ()=>{

        render(
            <UserContext.Provider value={{user:null}}>
                <HomePage />
            </UserContext.Provider>
        );
    
        const preTag: HTMLSpanElement = screen.getByLabelText('pre-test')
        console.log( preTag.innerHTML );
        expect(preTag.innerHTML).toBe('null')
        screen.debug()
    })
    test('Debe de mostrar el componente con el usuario', ()=>{
        render(
            <UserContext.Provider value={{user:userF}} >
                <HomePage />
            </UserContext.Provider>
        );
        const preTag: HTMLSpanElement = screen.getByLabelText('pre-test')
        console.log( preTag.innerHTML );
        expect(preTag.innerHTML).toContain(userF.name)
        expect(preTag.innerHTML).toContain(userF.lastname)
        expect(preTag.innerHTML).toContain(userF.id.toString())
        screen.debug()
    })
})
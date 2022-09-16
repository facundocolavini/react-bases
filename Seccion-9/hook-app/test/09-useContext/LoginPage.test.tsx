import { beforeEach, describe, expect, jest, test } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../src/09-useContext/LoginPage';
import { User } from '../../src/09-useContext/Types/User';

jest.mock('../../src/hook/useTodo')

describe('Pruebas en <LoginPage />',()=>{
    const userF : User = {
        id: 123,
        name: 'Facundo',
        lastname: 'Colavini'
    } 

 
    beforeEach(()=>{
        jest.clearAllMocks
    })

    test('Debe de mostrar el componente sin el usuario', ()=>{

        render(
            <UserContext.Provider value={{user:null}}>
                <LoginPage />
            </UserContext.Provider>
        );
    
        const preTag: HTMLSpanElement = screen.getByLabelText('pre-test-login')
        console.log( preTag.innerHTML );
        expect(preTag.innerHTML).toBe('null')
        // screen.debug()
    })
/*     test('Debe de mostrar el componente con el usuario', ()=>{
        render(
            <UserContext.Provider value={{user:userF}} >
                <LoginPage />
            </UserContext.Provider>
        );
        const preTag: HTMLSpanElement = screen.getByLabelText('pre-test-login')
        console.log( preTag.innerHTML );
        expect(preTag.innerHTML).toContain(userF.name)
        expect(preTag.innerHTML).toContain(userF.lastname)
        expect(preTag.innerHTML).toContain(userF.id.toString())
        // screen.debug()
    }) */

    test('Debe de llamar a la funcion setUser cuando se hace click en el boton', ()=>{
       //Establecemos el setUser mediante una constante de mi context
        const handleSetUserMock = jest.fn();
        render(
            <UserContext.Provider value={{user:userF, setUser:handleSetUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        );
            
        
        const buttonElement: HTMLButtonElement = screen.getByLabelText('button-test-login');
        const preTag: HTMLSpanElement = screen.getByLabelText('pre-test-login')
        fireEvent.click( buttonElement )
        expect( handleSetUserMock ).toHaveBeenCalled()
        expect( handleSetUserMock ).toHaveBeenCalledWith( userF )
        expect(preTag.innerHTML).toContain(userF.name)
        expect(preTag.innerHTML).toContain(userF.lastname)
        expect(preTag.innerHTML).toContain(userF.id.toString())

        

        screen.debug()
    })
})
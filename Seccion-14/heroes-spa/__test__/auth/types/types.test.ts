import { testAuthTypes } from './../../../src/auth/types/actions';
import { describe, test, expect } from '@jest/globals';
import { User } from '../../../src/auth/interfaces';



describe("Pruebas en mi types actions",()=>{
    const userInit:User = {
        id: '',
        name: '',
        lastname: ''
    } 

    test("Debe de regresar estos types",()=>{

        expect(testAuthTypes).toEqual({
            login:"login",
            logout:"logout",
            def: "default"
        })
  
    })
})

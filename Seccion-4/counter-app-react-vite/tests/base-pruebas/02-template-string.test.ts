

import { getSaludo } from '../../src/base-pruebas/02-template-string'
import { describe, expect, test } from '@jest/globals';

describe('Pruebas en 02-template-string',()=>{
    test('getSaludo debe retornar "Hola Facundo"',()=>{
        // Inicializacion 
        const name:string = 'Emiliano';
        // 2 Estimulo
        const message:string = getSaludo(name)     
        //3 Observar Comportamiento
        expect(message).toBe(`Hola ${name}`) 
    })
})
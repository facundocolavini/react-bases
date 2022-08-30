import { describe, expect, test } from '@jest/globals';
import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr';

describe('Pruebas en 07-deses-arr', ()=>{
    test('retornaArreglo debe devolver un string y un number ', ()=>{

        const arrMethod : [string, number] = retornaArreglo();
        const [letters, num] =  arrMethod;

        //Pruebas para ver si le envio al metodo una tupla erronea
        const arr:[number, string] = [123,'ABC'];
        
        // Evaluamos que nos venga el tipo y el valor exacto
        expect(letters).toBe('ABC') 
        expect(num).toBe(123)

        // Evaluar que pueda recibir cualquier tipo de string (es igual que la de abajo)
        expect((typeof letters)).toBe('string')
        expect((typeof num)).toBe('number')

        // Se espera que pueda recibir cualquier tipo de string para evaluar la igualdad ('number')
        expect(letters).toStrictEqual(expect.any(String))
    })
})
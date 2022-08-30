import { describe, expect, test } from '@jest/globals';
import { getHeroesByOwner, getHeroeById } from '../../src/base-pruebas/08-imp-exp';

//Casos 1: Si existe devuelve el Heroe
describe('Pruebas en 08-imp-exp.test', ()=>{
    test('getHeroeById debe recibir un Id de tipo numero', ()=>{
        interface Heroe {
            id: number;
            name: string;
            owner: string;
          }
        const id: number = 2;
         
        // Enviar un Id como parametro el id es del tipo number
        expect(id).toStrictEqual(expect.any(Number));
    })
    test('getHeroeById debe devolver un Objeto de Tipo Heroe por su id', ()=>{

        // Inicializacion 
        interface Heroe {
            id: number;
            name: string;
            owner: string;
          }
          const id: number = 2;
          const hero: Heroe | undefined = getHeroeById( id );
         

        expect(hero).toEqual({ id: 2, name: 'Spiderman', owner: 'Marvel' })
    }) 

     // Caso 2: Si no existe devolvemos un undefined
     test('getHeroeById debe devolver un "undefined" al mandarle un Id que no exista', ()=>{
        interface Heroe {
            id: number;
            name: string;
            owner: string;
          }
          const id: number = 200;
          const hero: Heroe | undefined = getHeroeById( id );

          expect( hero ).toBeFalsy()
     })

     // Debe retornar un  Array  con los Heroes de DC
    // Length === 3 Que sean 3
    // Evaluar con toEqual el arreglo filtrado
    //  Debe de retornar un arreglo con los heros de Marvel
    //  Length === 2
})
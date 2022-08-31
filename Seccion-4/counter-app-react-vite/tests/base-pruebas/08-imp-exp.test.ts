import { describe, expect, test } from '@jest/globals';
import { getHeroesByOwner, getHeroeById } from '../../src/base-pruebas/08-imp-exp';
import { HeroeI  } from '../../src/data/heroes';

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
          const id: number = 2;
          const hero: HeroeI | undefined = getHeroeById( id );
         

        expect(hero).toEqual({ id: 2, name: 'Spiderman', owner: 'Marvel' })
    }) 

     // Caso 2: Si no existe devolvemos un undefined
     test('getHeroeById debe devolver un "undefined" al mandarle un Id que no exista', ()=>{

          const id: number = 200;
          const hero: HeroeI | undefined = getHeroeById( id );

          expect( hero ).toBeFalsy()
     })

     // Debe retornar un  Array  con los Heroes de DC
    // Length === 3 Que sean 3
    // Evaluar con toEqual el arreglo filtrado
    //  Debe de retornar un arreglo con los heros de Marvel
    //  Length === 2

    test('getHeroesByOwner retornar un array que tengan 3 heroes de DC', ()=>{

      const ownerDC: string = 'DC'
      const quantityHeroOwner: number = getHeroesByOwner(ownerDC).length;
      const arrHeroOwner: HeroeI[] =  getHeroesByOwner(ownerDC)
      console.log(arrHeroOwner);
      
      // Enviar un Id como parametro el id es del tipo number
      expect(ownerDC).toStrictEqual(expect.any(String));
      expect( quantityHeroOwner ).toBe( 3 );
      expect(arrHeroOwner[0]).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
      expect(arrHeroOwner[1]).toEqual({ id: 3, name: 'Superman', owner: 'DC' })
      expect(arrHeroOwner[2]).toEqual({ id: 4, name: 'Flash', owner: 'DC' })

      //Otra solucion
      const owner: string = 'DC';
      const heroes =  getHeroesByOwner(owner);
      expect(heroes.length).toBe( 3 );
      expect(heroes).toEqual(
        [
          { id: 1, name: 'Batman', owner: 'DC' },
          { id: 3, name: 'Superman', owner: 'DC' },
          { id: 4, name: 'Flash', owner: 'DC' }
        ]
      )
      // O tambien asi se puede hacer RECOMENDABLE
      expect(heroes).toEqual(heroes.filter( (heroe: HeroeI) => heroe.owner === owner ))
    })

    test('getHeroesByOwner retornar un array que tengan 3 heroes de Marvel', ()=>{

      const ownerMarvel: string = 'Marvel'
      const quantityHeroOwner: number = getHeroesByOwner(ownerMarvel).length;
      const arrHeroOwner: HeroeI[] =  getHeroesByOwner(ownerMarvel)
      console.log(arrHeroOwner);
      
      // Enviar un Id como parametro el id es del tipo number
      expect(ownerMarvel).toStrictEqual(expect.any(String));
      expect( quantityHeroOwner ).toBe( 2 );
      expect(arrHeroOwner[0]).toEqual({ id: 2, name: 'Spiderman', owner: 'Marvel' })
      expect(arrHeroOwner[1]).toEqual(  { id: 5, name: 'Wolverine', owner: 'Marvel' })


      //Otra solucion
      const owner: string = 'Marvel';
      const heroes =  getHeroesByOwner(owner);
      expect(heroes.length).toBe( 2 );
      expect(heroes).toEqual(
        [
          { id: 2, name: 'Spiderman', owner: 'Marvel' },
          { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ]
      )
      // O tambien asi se puede hacer RECOMENDABLE
      expect(heroes).toEqual(heroes.filter( (heroe: HeroeI) => heroe.owner === owner ))
    })
})
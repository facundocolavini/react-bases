import { describe, expect, test } from '@jest/globals';
import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';
import heroes,{ HeroeI}   from '../../src/data/heroes';

describe('Pruebas en 09-promesas.test', ()=>{
    test('getHeroeByIdAsync debe retornar una heroe', (done)=>{
        const id:number= 1;
        getHeroeByIdAsync( id )
            .then((heroe)=>{
                expect(heroe).toEqual(
                    {
                        id: 1,
                        name: 'Batman',
                        owner: 'DC'
                    }
                )
                done()
            })

    })  

    test('getHeroeByIdAsync debe retornar un error si no existe el heroe', (done)=>{
        const id:number= 100; //id de heroe que no existe
        getHeroeByIdAsync( id )
            // Si el heroe existiera (esta demas esto del then)
            .then((heroe)=>{
                expect(heroe).toBeFalsy();
                done();
            })
            .catch((error)=>{
                console.log(error)
                expect(error).toBe(`No se pudo encontrar el héroe ${id}`)
                done()
            })
    })
})

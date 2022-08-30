import { describe, expect, test } from '@jest/globals';
import { usContext } from '../../src/base-pruebas/06-deses-obj';



describe('Pruebas en el 06-deses-obj',()=>{
    test('usContext debe retornar un objeto heroe',()=>{

        type Latlng = {
            lat?: number,
            lng?:number
        }
        
        type Heroe = {
            nombre: string,
            edad: number,
            clave: string,
            rango: string,
            latlng?: Latlng
        };
        
        const hero: Heroe = {
            nombre: 'Spiderman',
            edad: 23,
            rango: 'Cabo',
            clave: 'A2CL',
            latlng: {lat:2},
        }
         const newHero: Heroe = usContext(hero)
         console.log(newHero,'newHero')
         expect(hero).toStrictEqual(newHero)
    })
})



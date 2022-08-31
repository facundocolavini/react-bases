import { describe, expect, test } from '@jest/globals';
import { getImagen } from '../../src/base-pruebas/11-async-await';
import heroes,{ HeroeI}   from '../../src/data/heroes';



describe('Pruebas en 11-async-awaits.test', ()=>{
    test('getImagen debe retornar una URL de la imagen', async ()=>{
        const resp: string | object = await getImagen() 
        console.log(resp);


        expect(typeof resp).toBe('string')
    })

    test('getImagen debe retornar un mensaje de error',async ()=>{
        // Si no existiera el api Key
        const resp: string | object = await getImagen() 
        console.log(resp);


        expect( resp ).toBe('No se encontro la imagen')
    })  
})
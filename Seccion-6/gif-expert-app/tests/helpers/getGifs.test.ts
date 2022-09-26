
import { describe, expect, test } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { getGifs } from '../../src/helpers/getGifs';



describe(' Pruebas en getGifs()', () => {
    interface Gif {
        id: string,
        title: string,
        url: string,
    }

    test('Debe  de retornar un arreglo de gifs', async() => {
        const category: string = ' One Punch';
        const gifs: Gif[] =  await getGifs(category);

        // Con esto evaluamos que el arreglo tenga mas de un elemento
        expect(gifs.length).toBeGreaterThan( 0 )
        expect( gifs[0] ).toEqual({
            id: expect.any(String), // Siempre y cuando sea un string no importa que id sea
            title: expect.any(String), // Siempre y cuando sea un string no importa que title sea
            url: expect.any(String), // Siempre y cuando sea un string no importa que utl sea
        })
    })
});
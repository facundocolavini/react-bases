import { fileUploadToCloudDinary } from './../../src/helpers/fileUpload';
import { describe, test, expect } from '@jest/globals';
describe('Pruebas en fileUpload', () => {
    test('Debe de subir el archivo correctamente a cloudinary', async () => {
        const imageUrl = 'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg'
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');
        const url = await fileUploadToCloudDinary(file) // Devuelve string o un null
        console.log(url);

        // expect(typeof url).toEqual(expect.any(String))
        expect(typeof url).toBe('string')
    })
})
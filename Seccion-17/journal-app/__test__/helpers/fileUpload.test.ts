import { fileUploadToCloudDinary } from './../../src/helpers/fileUpload';
import { describe, test, expect } from '@jest/globals';
import { v2 as cloudinary } from 'cloudinary'

// Config cloudinary
cloudinary.config({
    cloud_name:'dmryevz5s',
    api_key:'424346355171824',
    api_secret:'r0RBQKGWf8uewHegswPb93P-_Kw',
    secure: true,

})

describe('Pruebas en fileUpload', () => {
    test('Debe de subir el archivo correctamente a cloudinary', async () => {
        const imageUrl = 'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg'
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');
        const url = await fileUploadToCloudDinary(file) // Devuelve string o un null
        const folder = 'journal';
        const url_segment =  url?.split('/');
        const imageId =url_segment?.find(index => index.includes(`jpg`))?.replace('.jpg', '')

        const cloudREsp = await cloudinary.api.delete_all_resources([`${folder}/${imageId}`],()=>{resource_type:'image'})

        console.log({cloudREsp})
        // expect(typeof url).toEqual(expect.any(String))
        expect(typeof url).toBe('string')
    })

    test('Debe de devolver null al subir una imagen', async ()=>{
        const file = new File([], 'foto.jpg');
        const url = await fileUploadToCloudDinary(file)
        expect( url ).toBe(null)

    })

})


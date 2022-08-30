import {describe, expect, test} from '@jest/globals';

describe('Pruebas en <DemoTest/>', () => {
        test('Esta prueba no debe de fallar', () => {
                // 1 Inicializacion
                const message1: string = 'Hola mundo';
                // 2 Estimulo
                const message2: string = message1.trim();

                // 3 Observar  el comportamiento ...esperado
                //Condicion para que pase la prueba
                expect(message1).toBe(message2);
        })
})



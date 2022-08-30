## Temas de esta seccion

# Introducion a Testing y ambiente de pruebas

La idea de las pruebas es que este lo mas limpiamente posible y depurada antes de pasarla a produccion.

Esta sección de pruebas es sumamente importante porque nos dará la base de las pruebas que estaremos haciendo durante el curso, las pruebas irán creciendo en complejidad, por lo que les recomiendo que nos aseguremos de comprender bien todos estos conceptos para que nos sea más fácil las siguientes secciones de pruebas.

# Introduccion a las pruebas unitarias y de integración

## Que son las pruebas?

Hay 2 tipos de pruebas unitarias y de integración:

- Unitarias estan enfocadas en pequeñas funcionalidades.
- Integracion: Enfocadas en como reaccionan varias piezas en conjunto.

Se sugiere comenzar con pequeñas pruebas unitarias

## Caracteristicas de las pruebas

- Fácil de escribir
- Fáciles de leer
- Confiables
- Rápidas
- Principalmente unitarias

Nos enfocamos en que las pruebas trabajen entre si.

Estos pasos se conocen como AAA
## AAA

Son caracteristicas que nosotros deveriamos de aplicar
en nuestras pruebas.

- Arrange (Arreglar) : Es el paso en el que establecemos el estado inicial (el sujeto a probar), inicializamos variables, hacemos importaciones necesarias y preparamos el ambiente a probar.

- Act (Actuar) : Aplicamos acciones o estimulos al sujeto de pruebas. Donde llamamos metodos, simulamos clicks, realizamos acciones sobre el paso anterior.

- Assert (Afirmar): Observamos el comportamiento resultante. Son los resultados esperados.
  Ej: Que algo cambie , algo incremente o bien que nada suceda.

Generalmente las pruebas son locales.

## Mitos en las pruebas

- Hace que mi app tenga errores (no es cierto)
- Las pruebas no pueden fallar (No es cierto pueden arrojar falsos positivos o negativos)
- Hacen lenta la app (Corren directamente en la maquina de desarrollo)
- Perdida de tiempo  
- Probar todo (Tomara mucho tiempo, las pruebas las programamos)

Recomendaciones a hacer pruebas :

- Hacer pruebas de las Rutas criticas
- Probar caracterisiticas principales
- Probar otras caracteristicas adicionales
  
Las pruebas generalmente en un proyecto al integrar nuevas funcionalidades se vuelven mas complejas por lo que se sugiere realizar pruebas a medida que el proyecto va escalando.

# Configurar las pruebas en Vite
  
  Si inicializamos el proyecto con vite , hay que instalar las librerias de testing.

  Instalar jest : [JEST](https://jestjs.io/)

```bash
  //Javascript solo este comando
   npm install --save-dev jest
  
  //Con TypeScript deberemos instalar este preprocesador con este comando 
  npm install --save-dev jest typescript ts-jest @types/jest
  ```

  Agregamos el siguiente script a nuestro **package.json**
  
```json
{
  "script":{ 
    "test": "jest"
  }
}
```

Para ejecutarlo abrimos una terminal y ejecutamos el siguiente comando:

```bash
npm run test
```

<br>
<br>

# Creando nuestra primera prueba 

Crearemos nuestra carpeta de pruebas en 

```bash
  touch src/tests
```

En esta carpeta tendremos los test de cada componente que integra en nuestro proyecto.

Cuando creamos nuestro archivo de test lo hacemos de la siguiente forma:

```js
  demo.test.js
```

Al crearlo nos arrojara un error en consola ya que no tenemos pruebas dentro del archivo demo.Por lo que deberemos proseguir a crear la prueba.

La prueba se escribe de la siguiente manera:

```js
  test('Esta prueba no debe de fallar',()=>{})
```

Cuando realizamos pruebas debemos hacer acerciones , evaluar algo.

```js
test('Esta prueba no debe de fallar',()=>{
    if(0 === 0){
        throw new Error('No se puede dividir por 0')
    }
})
```
Caso de error de un test:

![image](https://user-images.githubusercontent.com/54385792/187432860-59c21118-e41d-42b6-8b46-b9d590915c8b.png)

Caso en el que el test pasa:

```js
test('Esta prueba no debe de fallar',()=>{
    if(1 === 0){
        throw new Error('No se puede dividir por 0')
    }
})
```

![image](https://user-images.githubusercontent.com/54385792/187433201-7d350eed-d624-4016-bd84-b579ca45cea1.png)


Podemos agregar el comando watch para refrescar lo cambios:


```json
//Javascript
{
  "script":{ 
    "test": "jest --watchAll"
  }
}
```
<!-- Con TypeScript -->
```bash 

npx ts-jest config:init

```


# Aplicando AAA a nuestro test 

Cuando realizamos nuestro test nos enfocamos en los 3 pasos:

- 1 Inicializacion. 
- 2 Estimulo.
- 3 Observar el comportamiento ... esperado.

```js
  
  test('Esta prueba no debe de fallar',()=>{
        // 1 Inicializacion
        const message1 = 'Hola mundo    ';
        // 2 Estimulo
        const message2 = message1.trim();

       // 3 Observar  el comportamiento ...esperado
        //Condicion para que pase la prueba
        expect( message1 ).toBe( message2 );
})
```

- Instalamos la ayuda del instelligence de vs para ayudarnos con las pruebas:

```bash
  npm add -D @types/jest

   o
  //TypeScript
  npm install --save-dev @types/jest
``` 


Agrupar las pruebas por un nombre de referencia.

```js
describe('Pruebas en <DemoTest/>',()=>{ 
        test('Esta prueba no debe de fallar',()=>{
                // 1 Inicializacion
                const message1 = 'Hola mundo';
                // 2 Estimulo
                const message2 = message1.trim();

                // 3 Observar  el comportamiento ...esperado
                //Condicion para que pase la prueba
                expect(message1).toBe(message2);
        })
})
``` 

 **RECOMENDACION:** Realizar un describe en cada archivo de test por separado.

![image](https://user-images.githubusercontent.com/54385792/187440180-63a6e889-6035-462d-aed0-c23e20ed009c.png)


## Probamos nuestros archivos 

No se podran probar archivos que no estan siendo exportados.

## Filtrar tests por nombre de archivo

Si tenemos otros tests que se ejecutan cuando estamos realizando determinado test.

Podemos filtrar por archivo con la opcion de filtrar por el nombre de un archivo tocando la tecla "w" y luego la opcion que dice "p" y escribimos el nombre de nuestro archivo que queremos testear.

# Test con Js moderno

**NOTA IMPORTANTE:** Si utilizamos cra (create-react-app) esto ya viene configurado.Saltear estos pasos.

A la hora de hacer test no podremos utilizar modulos o sintaxis con javascript moderno dentro de nuestros test.Por lo que debemos hacer la siguiente configuracion.
Para esto configuraremos babel siguiendo estos pasos:

```bash
  // JavaScript 
    npm install --save-dev babel-jest @babel/core @babel/preset-env

 // TypeScript
    npm install --save-dev @babel/preset-typescript
``` 

Creamos el siguiente archivo en la raiz de nuestro proyecto a la altura del package.json.

```js
babel.config.cjs //cjs es lo que se aplica a Nodejs cuando se usa "type"="module"
```
Con:

```js 
 // JavaScript
  module.exports = {
    presets: [
      ['@babel/preset-env', {targets: {node: 'current'}}]
    ],
  };

//TypeScript 
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript',
  ],
};

```

Reiniciar todas las consolas.

## toEqual

Si queremos evaluar un objeto se utilizat el toEqual o toStrictEqual

El toStrictEqual es mas estricto que el equal,cuando tenemos 2 objetos.Un objeto puede tener las mismas propiedades pero apuntan a un espacio de memoria distinto y eso hace que no sea el mismo objeto.

## toBe

El toBe se encarga tambien de evaluar el tipo de datos

Received : Es el valor recibido a evaluar.
Expected : Es el valor que se espera evaluar.


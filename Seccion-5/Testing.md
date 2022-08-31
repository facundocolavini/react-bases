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
  "script": {
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
demo.test.js;
```

Al crearlo nos arrojara un error en consola ya que no tenemos pruebas dentro del archivo demo.Por lo que deberemos proseguir a crear la prueba.

La prueba se escribe de la siguiente manera:

```js
test('Esta prueba no debe de fallar', () => {});
```

Cuando realizamos pruebas debemos hacer acerciones , evaluar algo.

```js
test('Esta prueba no debe de fallar', () => {
  if (0 === 0) {
    throw new Error('No se puede dividir por 0');
  }
});
```

Caso de error de un test:

![image](https://user-images.githubusercontent.com/54385792/187432860-59c21118-e41d-42b6-8b46-b9d590915c8b.png)

Caso en el que el test pasa:

```js
test('Esta prueba no debe de fallar', () => {
  if (1 === 0) {
    throw new Error('No se puede dividir por 0');
  }
});
```

![image](https://user-images.githubusercontent.com/54385792/187433201-7d350eed-d624-4016-bd84-b579ca45cea1.png)

Podemos agregar el comando watch para refrescar lo cambios:

```json
//Javascript
{
  "script": {
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
test('Esta prueba no debe de fallar', () => {
  // 1 Inicializacion
  const message1 = 'Hola mundo    ';
  // 2 Estimulo
  const message2 = message1.trim();

  // 3 Observar  el comportamiento ...esperado
  //Condicion para que pase la prueba
  expect(message1).toBe(message2);
});
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
describe('Pruebas en <DemoTest/>', () => {
  test('Esta prueba no debe de fallar', () => {
    // 1 Inicializacion
    const message1 = 'Hola mundo';
    // 2 Estimulo
    const message2 = message1.trim();

    // 3 Observar  el comportamiento ...esperado
    //Condicion para que pase la prueba
    expect(message1).toBe(message2);
  });
});
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
babel.config.cjs; //cjs es lo que se aplica a Nodejs cuando se usa "type"="module"
```

Con:

```js
// JavaScript
module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
};

//TypeScript
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
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
Lo utilizamos para evaluar numeros , strings, etc.

Received : Es el valor recibido a evaluar.
Expected : Es el valor que se espera evaluar.

## Testear promesas

- Cuando testeamos en jest a la hora de ejecutar las pruebas.Estas las toma como sincronas (secuenciales) por eso al principio parece que la prueba pasa sin error.
  Pero lo que debemos hacer es esperar la respuesta de esa promesas para saber verdadera el resultado del test a una promesa.

  Para que no suceda eso utilizamos el done.

  ## Done :

  Es una funcion que mandamos a llamar para decirle a jest que espere a que la promesa tenga una respuesta y controlar la ejecucion de nuestro codigo.
  Se manda a llamar cuando terminamos de ejecutar nuestro codigo.

  ```ts
  test('getHeroeByIdAsync debe retornar una heroe', (done) => {
    const id: number = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      //Nuestro codigo
      done(); //Fin de ejecucion
    });
  });
  ```

  Si no utilizamos el done tendremos un error ya que jest se quedara esperando esa respuesta y despues de determinado tiempo arrojara un error.

  ![image](https://user-images.githubusercontent.com/54385792/187692679-2af1bc1f-8daa-42f8-bc73-c6a686e12486.png)

  <br>

  ## Async-Awaits

  Al testear promesas con async y await en nuestros test ya no es necesario utilizar el done.
  Puede que si no tenemos una version igual o mayor a la 18 de nodejs tengamos algunos errores por el fetch API.Hay 2 alternativas una instalar la version 18 y la otra es configurar el fetch para que utilice otra cosa (libreria externa).

  **Opcion 1**: Actualizar Nodejs.

  **Opcion 2: Configurar jest.config**:

  <br>

  ## Configurar jest.config

  Este archivo se utiliza para configurar pruebas mas avanzadas o pruebas que necesiten cierta inicializacion previa entonces lo podemos configurar en este archivo.

  - Crearemos un jest.config.js a la altura raiz del proyecto (si utilizamos typescript la extension debera ser .cjs)

  - Ese jest.config.js tendra la siguiente configuracion:

    ```js
    module.exports = {
      testEnvironment: 'jest-environment-jsdom',
      setupFiles: ['./jest.setup.cjs'], // Configuracion global cuando ejecutamos los test suites
    };
    ```

  - instalar jest-environment-jsdom,node-fetch o npm i -D whatwg-fetch (no se usa en prod por eso se instala como dev dependecy).

    ```bash
    npm i -D jest-environment-jsdom
    npm i -D whatwg-fetch "o este" npm i -D node-fetch
    npm i -D @babel/preset-react
    ```

  - importar node-fetch o whatwg-fetch dentro del archivo jest.setup.js

    ```js
    // este arhivo se ejecuta previamente a los test
    import 'whatwg-fetch';
    ```

  ## Para CRA:

  Si iniciamos el proyecto con create react app todas las configuraciones previas no son necesarias ya que nos crea un archivo setup.test.js que viene configurado para ejecutarse a la hora de hacer pruebas.

<br> <br> <br>

# Testing con React

<br>

## Pruebas sobre componentes de react

Para testear se utilizara [testing library](https://testing-library.com/) que trabaja muy bien junto a jest.

## Diferencias entre TL y Jest:

Jest : El codigo que escribimos de nuestras pruebas (expect, toBe,toEqual) es lo mas fuerte que tiene pero no es tan bueno para hacer pruebas con componentes de React.
Es mas orientado a hacer acersiones y de hacer ciertos mocks de funciones que yo necesito evaluar.

Testing Library: Es muy bueno para manejar el DOM.Es como si tuvieramos todo nuestro componente montado en memoria y poder hacer evaluaciones y aserciones.
Podremos hacer simulaciones de clicks y de todo lo que hacemos de forma manual.
Esta mas basado en lo que sucede despues de hacer las interacciones.

## Instalacion React testing Library

**CRA (create react app) :**

Si iniciamos el proyecto con creacte react app por defecto ya viene con el test render.
Pero no es recomendable usar Jest para realizar pruebas con el DOM.

Instalacion de Testing Library

```bash
  npm install --save-dev @testing-library/react

  // Con yarn
  yarn add --dev @testing-library/react
```

## Testing con testing library

- Crearemos una nueva carpeta en "src/test" dentro pondremos los test que realicemos de nuestros componentes.

- render()
  Es una funcion que literalmente renderiza el componente en memoria
  Actualizar el objeto screen
  Retorna un objeto que expone ciertas propiedades es muy parecido a un Document object module (DOM)

- Snapshots:
  Se crea una carpeta en el mismo nivel donde estamos trabajando el archivo de prueba llamada **snapshots**.
  La primera vez que se ejecuta el snapshot toma una fotografia del componente y lo deja almacenado en el archivo snap.
  Esto nos sirve para ver si hubo cambios en mi archivo de test y saber cuales fueron los cambios. nos arrojara esos cambios por consola.Esto es util cuando un componente no cambia tanto.

  Se puede actualizar el snapshot para cambiar el archivo dentro de la carpeta snapshot.Presionando la tecla u.
  Nos ayuda a asegurar a que si alguien agrega codigo en nuestro componente de react no se lo permita si el archivo snapshot es distinto.

  Eventualmente vamos a hacer la prueba del snapshot hasta que ya sabemos que el componente no va a recibir modificaciones.
  **Si estamos en desarrollo no hacer el test con snapshot.**

  ## Metodos :

  Testing library tiene metodos para analizar el dom estas son:

  getByText: Busque algo que haga match con un texto.Solo devuelve un elemento.
  toContain: Es parecido al === es una igualdad estricta, no me importa si hay letras antes o despues tiene que contener esa palabra.
  toBe: Se asegura que sean identicos , mismo espacios, mismo tipo
  getByTestId: nos ayuda a tomar elementos por su atributo.
  getAllByText: Si estamos esperando mas de un elemento

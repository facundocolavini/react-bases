## Testing - Probando la aplicación de GifExpert

- Vamos a testear nuestra app creada de gif con jest y testing library
  
- Vamos a testear custom hook que es lo mas complicado.

- Seguir el camino de las pruebas

- Pruebas en componentes específicos

- Pruebas en componentes de forma individual

- Pruebas con customHooks

- Esperar cambios en un customHook

- Simular eventos en inputs y formularios

- Simular llamadas a funciones

- Evaluar si existen elementos en el componente

## Configurar el ambiente de pruebas

Instalamos todas las configuraciones y las librerias si utilizamos vite ver el siguiente link.
Ver : https://gist.github.com/Klerith/ca7e57fae3c9ab92ad08baadc6c26177

## Implementando PropTypes

Cuando empezamos a testear una app en react se deben seguir estas recomendaciones:

- Trazar la ruta critica de todo el procedimiento que tenemos que probar.Es lo que necesitamos probar para que la aplicación por lo menos salga a produccion con la funcionalidad que necesitamos probar.

- Empezar el testing por los componentes que menos dependencias tienen (las piezas mas pequeñas).Ej: GridItem no tiene dependencias externas.


## Obtener un input y su evento onchange

Para obtener un input y su evento:

Debemos disparar el input 

```js

    //Esto es equivalente a esto 
    fireEvent.input( input //aca va el elemento html en el que voy a estar disparando el evento ,  evento que recibe mi funcion)

    /* Handlers */
    const onHandleChange = ({target}):void=>{
        setInputValue( target.value );
    }

```

## Evaluar funciones en Jest 

Cuando testeamos una funcion queremos ver :

 - Cuando fue llamada.
 - Con que valor fue llamada.
 - Asegurarnos de que fue llamada una vez

Para eso necesitamos enviar una funcion especial :

```js
    jest.fn()
```
Esto es un mock de jest sigue siendo una funcion.
Un mock es una simulacion es decir no es una implementacion real de esa funcion.Pero al ser un mock tengo el control absoluto de esa funcion.

Nos aseguramos de que sea llamada utilizando toHaveBeenCalled()

## Haciendo mock completo de un custom Hook

Vamos a simular el useFetchGif me regrese una imagen cualquiera y su estado loading mockeando la funcion con jest.

- Antes de renderizamos nuetro componente vamos a hacer el mock del hook.

```js
 jest.mock( PATH )

 //Ej:
 jest.mock('../../src/hooks/useFetchGifs')

```

Esto sirve para hacer mocks de mis librerias y de librerias de terceros.
Con esto estamos diciendole que haga un mock completo de la path que le pasemos por parametro.

Al hacer un mock la prueba va a fallar , por que jest espera que la implementacion ya esta realizada del hook e intenta hacer la desctructuracion de un undefined.


- Luego tenemos que decirle a mi test suite como va a funcionar ese hook.
  

```js
   test('Debe de mostrar el Loading inicialmente', () => {
        // Custom Hook
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })//Este objeto es lo que voy a simular lo que esta devolviendo esta funcion)
   })
```

## Probando un Custom Hook
Evaluamos el comportamiento del Hook basado en su retorno o en las acciones que las funciones van a tener.
Usualmente con los hooks lo que vamos a evaluar son los argumentos de entrada y la salida.
Los hooks solo pueden ser llamados dentro del cuerpo de un functional component.Y necesitan parte del ciclo de vida de los componentes de react.

- Lo primero a evaluar es cual es el estado inicial de nuestr hook.
- Las mismas funciones del hook cambian el estado

Para eso tenemos la funcion renderHook de testing library , esta funcion devuelve 3 propiedades:
    - result: Es el resultado que regresaria el hook cuando ya se monta.
    - renderer: Cuando rerenderizamos el hook.
    - unmount:El resultado que se dispara cuando el hook es desmontado.

```js
 const { result } = renderHook(
    ()=>{// Mandamos a llamar a nuestro hoook por un callback)
       useFetchGifs('One Punch')
    })
    
```

Cuando tengamos cambios y querramos ver los nuevos resultados que nos trae el hook utilizamos el waitFor :
Podemos especificarle el tiempo en el cual se va a ejecutar.Por default el waitFor tiene un 1 segundo.
Tambien tiene un setInterval en el cual le especificamos el tiempo en el cual se va a volver a ejecutar.    

```js
   await waitFor(() => { // Callback async  espera a que ... 

            // Utilizamos una expresion de jest para saber cuando sucede el cambio
            //Esto quiere decir que espera a que el resultado sea mayor a 0
            expect(result.current.images.length).toBeGreaterThan(0) 
        },
        //Aca le podemos pasar el timeout 
        {
            timeout: 1000 ,
            setInterval:1000
        },
    )

```
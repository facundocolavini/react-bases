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

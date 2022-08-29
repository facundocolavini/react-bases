## Que es un componente React?

    Es una  pequeña pieza de codigo encapsulada re-utilizable que puede tener estado o no.
    Se utilizar upperCamelcase para darle nombres a los componentes ej:"MenuItems".

    Router nos ayuda a navegar por las paginas sin hacer refresh del navegador web.

    Mediante agreguemos mas y mas componentes vamos a generar un arbol de componentes
    cada componente tiene una accion en especifico.
    Los componente tiene un componente hijo y un padre.
    Los componentes reciben props como parametro para la comunicacion entre componente
    padre e hijo.

    El flujo de los datos en un arbol de componentes es bidirectional siempre va en direccion
    de padre a hijo en el arbol de componentes.

# Estado de un componente

    El estado es como se encuentra la informacion del componente en un punto determinado en el tiempo.

    La primera vez que renderiazmos un componente tiene un estado inicial.
    Cuando es mostrado o renderizado la primera vez.Ese estado inicial es como se encuentra la informacion
    de ese componente la primera vez.

    Cuando modificamos el html eso cambia el estado de componente.

# Iniciar una app de react con vite

```bash
npm create vite@latest

```

- Con npx:

```bash
    npx create-react-app my-app --template typescript
```

## Props

Las props es un objeto que se le envia nuestro componente
Nos ayuda a comunicarnos con el componente padre a hijo
NULL UNDEFINED Y FALSE no se renderiza en nuestro componente.

## PropsTypes

PropsTypes es una forma de tipar y validar el manejo de las props que enviamos a nuestros componentes.
Si utilizamos js es una buena practica utilizarlo ya que no es fuertemente tipado.

- Si iniciamos nuestra app de react con vite esto no viene instalado para utilizarlo hay instalarlo en nuestro proyecto e importarlo en nuestro componente.

```bash
    npm i prop-types
```

## Default Types

- Podremos definir valores por default a nuestras props con defaultProps.
- Crear props nuevas
- Se cargan antes que los propsTypes

# Eventos

- Si la funcion no tiene ninguna funcion en particular con el componente se recomiendo realizarla un modulo por fuera del componente.
  Esto es para que cuando el componente se vuelva a renderizar no vuelva a asignar ese espacio en memoria a esa funcion.

- Utilizar funciones flechas para los handlers de eventos

- Cuando tenemos este caso obviamos la referencia a la funcion.
  onClick ={(event)=>hanleAdd(event)}

- Siendo lo mismo asi
  onclick ={handleAdd}

- Si necesitamos mandar otro valor a la funcion como parametro ahi si se utiliza esta forma:
  onClick= {(event)=>handleAdd(event,'Hola')}

# Renderizados y (Hook) UseState

- Los hooks son funciones
- El useState recibe un valor y una funcion que se desestructura en un array para utilizarlas
- useState se utiliza para cambiar el estado de nuestro componente.
- useState es asyncronico
- El state se actualiza al terminar de ejecutar el handler y luego vuelve a renderizar con el nuevo estado.
- Importante: Si el estado cambia el componente se vuelve a ejecutar.

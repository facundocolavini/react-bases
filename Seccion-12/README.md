# Pruebas unitarias y de integracion - Hooks

Esta seccion esta especializada en realizar pruebas sobre nuestros custom hooks.
Lo que vamos a evaluar con los hooks que ya vienen en react es probar sus efectos.
Ejemplo
Tenemos un efecto implementado con un useEffect que modifica una variable cuando algo sucede.Vamos a probarar y disparar todo ese efecto que va a modificar la variable y vamos probar el resultado de ese efecto.

Para evaluar los custom hooks tenemos que utilizar otra libreria para ayudarnos , ya que jest en la condicion actual es mas complejo para lograr un prueba de hook.
Por lo tanto vamos ayudarnos con otra libreria y jest para poder probar los custome hooks.

Vamos a realizar pruebas a nuestros useReducer que son funciones normales y sincronas.

No vamos a probar el Router.

- Pruebas sobre Hooks y CustomHooks

<hr>

## Objectivo de esta seccion

<br>

Ese es el tema principal, demostrar cómo podemos evaluar cada unos de los hooks aplicados anteriormente con sus casos reales de uso.

Hay varios extras, como la prueba de un Reducer, que realmente no es nada complicado, también quiero aclarar qué nos toca evaluar a nosotros y qué no es responsabilidad nuestra.

<br>
<hr>
<br>

## Pruebas sobre Hooks

Empezamos instalando las configuracione para el ambiente de prueba

[Instalaciones para testing](https://gist.github.com/Klerith/ca7e57fae3c9ab92ad08baadc6c26177)

## Testing useCounter

Empezamos probando useCounter

Ejecutando funciones de mi custom Hooks

Para poder ejecutar funciones y testear su resultado debemos utilizar act de react testing library.
El act es una funcion que recibe una funcion de tipo callback.
Hay que tener cuidado de no pensar que nos da un falso positivo al usar act.

Hay que tener cuidado con los valores primitivos que extraemos (numeros, string, booleanos).
Para evitar este problema de que no pasa la prueba por que no cambia el valor dentro de mi prueba utilizamos.

En vez de poner esto asi al extraer mi funciones de mi hook:

```ts
// ASI NO!
act(() => {
  increment();
});
expect(counter).toBe(11);
```

Ponerlo asi que toma el valor actual que vamos a tener:

```ts
act(() => {
  increment();
});
expect(result.current.counter).toBe(11);
```

Tambien podria pasar que al hacer otra ejecucion de mi increment en mi funcion act una segunda vez, no tome el valor anterior de mi counter.

```ts
act(() => {
  // Nos va a tomar el valor anterior 12  y no 13
  increment();
  increment(2);
});
expect(result.current.counter).toBe(13);
```

Esto sucede por que cuando se vuelve a llamar est afuncion devuelve el valor actual y le suma que le mandamos por argumento.
Para que debemos hacer ese cambio? para no depender del renderizado en el test (para actualizar el state) ya que pasandole el callback al setState ya tenemos el valor anterior.

```ts
const increment = (value: number = 1) => {
  // Si necesito incrementarlo por alguna cantidad especifica por eso mandamos value
  setCounter((current) => current + value);
};

// Al poner el estado asi mi counter podemos hacerlo de esta forma mi act
act(() => {
  increment();
  increment(2);
});
```

## Pruebos sobre useForm

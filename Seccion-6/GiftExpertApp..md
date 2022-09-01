# Gif expert app


Giphy

Esta es una aplicación pequeña pero muy ilustrativa que explica cómo utilizar React + customHooks para poder resolver necesidades en específico que podremos re-utilizar después.


## Arbol de componentes 

Esta aplicacion esta dividida en 3 partes:  

- TitleComponent 
- InputComponent 
- ListGifComponent
  

  ### Componente ListGifComponente
    - Este componente contendra otro componente que sea el que mueste el item. (GifItem)
  

  ## Estados 

  Los estados de react son posicionales por lo que no se debe poner condiciones y dentro un state.
  Ya que react perderia la relacion y la referencia a que state esta trabajando.

```js
  //No se recomienda esto por que react pierde la referencia a los estados que maneja.
  if(true){
    const [categories, setCategories] = useState(['One punch','Dragon Ball'])
  }
```

## Cosas a tomar en cuenta al cambiar el estado: 

Si queremos añadir un elemento nuevo a un array **EVITAR EL METODO PUSH** ya que esto hace mutar al array y react trata de evitar a eso. 

Hay varias formas de insertar un nuevo elemento a un array:

```js

  //Copia e insercion  del nuevo elemento
  setCategories([...categories, newCategorie])

  // Otra forma es usando el callback que podemos mandarle a la funcion useState
  setCategories(categories => [...categories, newCategorie])


```

Cuando trabajamos con un input podemos enviarle en sus atributos su value.
Este input puede ser del tipo onChange donde va cambiar el valor por lo que le escribamos dentro o readOnly que es de tipo 
solo lectura y no se puede modificar.

## Escuchar eventos enviando una funcion: 


onClick={myFuncion} // por referencia 

//Con funcion anonima 
onClick = {(e)=>{myFunction(e)}} // De esta forma podemos pasarle parametros a mi funcion en este caso un evento 

// Tambien podemos hacer la siguiente forma 
Es destructurando el event entonces obviamos de mandarle el argumento a la funcion.
Podemos mandar la referencia a esa funcion-

```javascript
  const onHandleChange = ({target} :React.ChangeEvent<HTMLInputElement>):void=>{

  }
```

```html
      <input 
          type="text"
          value={inputValue}
          onChange={{onHandleChange}}
          placeholder="Buscar gifs"
      />
```


## Evitar el Two-ways data binding  

  Respetamos la practica de react que todos los cambios sucedan en una sola via , el  two-ways databinding.


  ## Envio de props entre componentes

  Cuando deseamos enviar un dato de un componente a otro utilizamos  las props para comunicarlos.
  Entendiendo desde base que la comunicacione en react es bidireccional podemos enviar variables , funciones como props.Salvo objetos.

  En este ejemplo comunicamos de un componente padre a un hijo enviandole por props una funcion.

```js
  // En esta forma estamos enviando la referencia a la funcion por props.

  // Componente Padre

  const [categories, setCategories] = useState<string[]>(['One punch','Dragon Ball'])
  const addCategorie = (newCategorie:string):void => {
    setCategories([newCategorie, ...categories])
  } 

    //Enviamos una funcion  como prop  a nuestro componente hijo
  <AddCategory onAddCategories={ addCategorie }/>

```
  
```js
  // Componente hijo  

  // Definimos las props que va recibir nuestro componente hijo  en este caso la funcion que enviamos por prop desde el padre
  type Props = {
    onAddCategories: (newCategorie: string) => void
  }
  //Mandamos a ejecutar nuestra funcion que enviamos por prop y esta ejecuta la funcion del padre addCategorie.
  const submitForm = (e: React.FormEvent) =>{ 
        e.preventDefault()
        console.log(inputValue)
        onAddCategories(inputValue) 
       

    }
```

```js
    // De esta forma utilizamos en vez de una funcion el mismo setState del estado del padre que enviamos como prop (setCategories). 
    <AddCategory setCategories={ setCategories }/>

    // Definimos el types para las props que va a recibir nuestro componente hijo
    type Props = {
      setCategories: Dispatch<SetStateAction<string[]>>
    }

    //tambien se puede hacer asi con el callback de useState 

    const submitForm = (e: React.FormEvent) =>{ 
        e.preventDefault()
        setCategories(categories =>[inputValue, ...categories])
    }
 ```
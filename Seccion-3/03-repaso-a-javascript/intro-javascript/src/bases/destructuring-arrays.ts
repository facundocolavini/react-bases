/* Destructuring Arrays */
let personajes : string[] = ['Goku','Vegeta','Trunks'];
const [goku] = personajes
/* Ignore first element of array */
const [, vegeta] = personajes
const [, trunks] = personajes

console.log(goku)
console.log(vegeta)
console.log(trunks)

/* Arrays for tuple */

const user:[string,number] = ['Facundo', 27]
const [userName, age] = user 
console.log(userName, age)

const stateFunction = (valor:string): [string, Function] =>{
    return [valor, ()=>{ console.log('Hola soy '+ valor)}]
}
//const arr = stateFunction('Goku');
// arr[1]() //Ejecuto la funcion del array sin destructurarlo

const [nombre,setSaludo] = stateFunction('Goku');
console.log(nombre) 
setSaludo()

export{}
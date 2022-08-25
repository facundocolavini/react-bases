// Var and Const 

const nombre: string = 'Facundo';
const num: number = 5;

let apellido: string = 'Colavini'
let num2 : number = 5;

console.log(num,nombre,apellido,num2)

/* Scope */
if(true) {
  const nombre: string = 'Peter';
  let num : number = 20; 


  console.log(nombre ,num,'Dentro del if')
}
console.log(num,nombre, 'Global Scope')

export {}

'Operadores ternarios'

const active: boolean = true;

//let message: string = '';

// if(active){
//     message = 'Activo';
// }else {
//     message = 'Inactivo';
// }

// Con operadores ternarios 

// const message =  (active) ? 'Activo' : 'Inactivo';
// const message =  (active) ? 'Activo' : null; 
const message = (active) && 'Activo'; //Forma resumida


console.log(message);

export {}
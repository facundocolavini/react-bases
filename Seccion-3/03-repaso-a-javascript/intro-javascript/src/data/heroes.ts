export interface Heroe {
    id: number;
    name: string;
    owner: string;
  }
/* Export default */

/* Export default */
// Al usar export default no hace falta ponerle nombre a la variable a exportar
// En el archivo donde la usamos podemos nombrarla como querramos 
// No hace falta poner export {} al final del archivo
/* export default []= [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
]; */

// Con variable   
// Se pone el export { nombrevar} al final del archivo
// Al importar el archivo se importa los nombres del archivo con import {nombrevar}
// Se pone const y la variable y luego se agrega al final de archivo export {nombrevar}
const heroes: Heroe[]= [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];
//Export default al final del arhivo  (Recomendado)
//Es igual que con variable solo que al final exportamos asi 
// export default heroes 
// Solo se exportaria esa constante 

//Export individual 
// En el import sera import {owner} es una importacion individual del mismo archivo
export const owners = ['DC','Marvel'];

export default heroes;


//Export en una sola linea
/* export {
    heroes as default
    ,owners
}  */
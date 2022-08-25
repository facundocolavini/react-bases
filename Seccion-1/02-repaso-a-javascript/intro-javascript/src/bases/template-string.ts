const nombre: string = 'facundo';
const apellido: string = 'colavini';

/* Template String */

const nombreCompleto: string = `${nombre} ${apellido}`;


console.log(nombreCompleto)

function getName(nombre:string): string {
    return nombre;
}

console.log(`Que tal ${getName(nombre)}`)
export {}
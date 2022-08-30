
// Desestructuración
// Asignación Desestructurante

type Latlng = {
    lat?: number,
    lng?:number
}

type Heroe = {
    nombre: string,
    edad: number,
    clave: string,
    rango: string,
    latlng?: Latlng 
};


export const usContext = ({ clave, nombre, edad, rango = 'Capitán', latlng }: Heroe ):Heroe => {

    return {
        nombre : nombre,
        edad :  edad,
        clave:  clave,
        rango:  rango,
        latlng: latlng
    }
    

}



/* Promises */
import { getHeroeById } from "../bases/imports-exports";

interface Heroe {
    id: number;
    name: string;
    owner: string;
  }

/* const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const hero = getHeroeById(2)
        // resolve(hero);// Al enviarle un parametro al resolve automaticamente se lo pasa al then
        reject('No se pudo encontrar el héroe')
        console.log('2 segundos despues');
    }, 2000);
})
promesa.then((h)=>{
    console.log(h,'Then')
}).catch((err)=>{
    console.log(err,'Error')
}) */


const getHeroByIdAsync = (id:number):Promise<Heroe> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let hero = getHeroeById(id)
            if(hero){
                resolve(hero)
            }else{
                reject('No hero found')
            }
        },2000)
    })
}
getHeroByIdAsync(12)
    .then(console.log) // Mando la referencia de heroe al log evitamos heroe => {console.log('Heroe',heroe)}
    .catch(console.error)
   

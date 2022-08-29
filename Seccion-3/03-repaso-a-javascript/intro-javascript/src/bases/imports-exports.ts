/* Imports , Export and Functions */
/* Imports , Export and Functions */
// import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes';

// console.log(owners,'Export individual');

export const getHeroeById = (id:number) => {
    return heroes.find( hero =>hero.id === id)
}
// console.log(getHeroeById(3))

// const getHeroesByOwner = (owner:string) => {
//     return heroes.filter( hero => hero.owner.toLocaleLowerCase() === owner.toLocaleLowerCase())
// }

// console.log(getHeroesByOwner('DC'))
// console.log(getHeroesByOwner('Marvel'))


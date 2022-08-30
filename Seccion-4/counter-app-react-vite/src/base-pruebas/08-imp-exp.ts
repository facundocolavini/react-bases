// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';
// import heroes, { owners } from '../data/heroes';
import heroes, { HeroeI }  from '../data/heroes';


// console.log( owners );



export const getHeroeById = (id:number): HeroeI | undefined  => { 
    return heroes.find( (heroe : HeroeI) => heroe.id === id );
}

// console.log( getHeroeById(2) );

export const getHeroesByOwner = ( owner:string ): HeroeI[] => {
    return heroes.filter( (heroe: HeroeI) => heroe.owner === owner );
}

// console.log( getHeroesByOwner('Marvel') );



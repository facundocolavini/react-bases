import { heroes } from "../data"
import { Hero, queryParams } from '../models';



export const getHeroesByName = (  q : any ): Hero[] => {
    q = q?.toLowerCase().trim();
    if ( q?.length === 0 ) return [] as Hero[]
  
    
    return heroes.filter((hero: Hero) => hero.superhero.toLowerCase().includes(q))   
} 
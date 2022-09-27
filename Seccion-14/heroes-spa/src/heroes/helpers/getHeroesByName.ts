import { heroes } from "../data"
import { Hero, queryParams } from '../models';



export const getHeroesByName = (  searchText : string ): Hero[] => {
    searchText = searchText?.toLowerCase().trim();
    if ( searchText?.length === 0 ) return [] as Hero[]
  
    
    return heroes.filter((hero: Hero) => hero.superhero.toLowerCase().includes(searchText))   
} 
import { heroes } from "../data"

export const getHeroById = (id: string| undefined) =>{
   return heroes.find(hero => hero?.id === id);
}
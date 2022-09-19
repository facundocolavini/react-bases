import { heroes } from "../data";

import { PublisherHeroType } from '../models'

export const getHeroesByPublisher = (publisher : PublisherHeroType ) => {    
/*     const validPublisher  = ['DC Comics', 'Marvel Comics'];

    if (!validPublisher.includes( publisher )){
        throw new Error(`Invalid publisher ${publisher}`)
    }   
 */
    return heroes.filter( heroe => heroe.publisher === publisher);
}
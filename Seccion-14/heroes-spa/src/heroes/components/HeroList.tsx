import { getHeroesByPublisher } from '../helpers';
import { Hero, PublisherHeroType } from '../models';
import { HeroCard } from '../components';
import { useMemo } from 'react';


type Props = {
    publisher: PublisherHeroType
}

export const HeroList = ({ publisher }: Props) => {    

  //  const heroes = getHeroesByPublisher( publisher );
  const heroes = useMemo(
    () => getHeroesByPublisher( publisher )
  
    ,[ publisher ]
  ); // Solo va a volver a ejecutar getHeroesByPublisher si las dependencias cambian
    

  return (
    <>
    <div className='row row-cols-1 row-cols-md-3 g-3'>
      {
        heroes.map((hero:Hero) =>(
          <HeroCard 
            key={hero.id} 
            { ...hero }
          />
        ))
      }
    </div>
    </>
  )
}
import { Link } from 'react-router-dom';
import { Hero } from "../models"

interface HeroCard extends Hero {
    
}

const CharactersByHero = ({alter_ego, characters}: any) =>{
  // if (alter_ego === characters) return (<></>);
  // return  <p>{ characters }</p>   
  return (alter_ego === characters) ? <></>: <p>{ characters }</p>
}
export const HeroCard = ({ 
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters } : HeroCard) => {

  // const charactersByHero  = (<p>{ characters }</p>);   
  const  heroImageUrl = `./assets/heroes/${id}.jpg`;

  return (
    <div className="col animate__animated animate__fadeIn p-1 mt-2">
      <div className="card" key={id}>
        <div className="row">
          <div className="col-4">
             <img src={heroImageUrl} alt={ superhero } className="card-img" />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{ superhero }</h5>
              <p className="card-text">{ alter_ego }</p>
              {/* {
                (alter_ego !== characters ) && charactersByHero
              } */}
              <CharactersByHero characters={ characters } alter_ego= { alter_ego }/> 
              <p className="card-text">
                <small className="text-muted">{ first_appearance }</small>
              </p>
              <Link to={`/hero/${id}`}>
                Más..
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
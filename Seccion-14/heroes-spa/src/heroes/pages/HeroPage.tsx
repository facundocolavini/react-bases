import { useMemo } from "react";
import { Navigate ,useParams, useNavigate } from "react-router-dom";
import { getHeroById } from "../helpers"; 

type Props = {}

export const HeroPage = (props: Props) => {
  const navigate = useNavigate()
  const { id } = useParams();

   const hero = useMemo(()=> getHeroById( id )
  ,[ id ])// Solo va a disparar la funcion getHeroById si las dependencias cambian

  const onBack = ()=>{
    navigate(-1);
  }

  

  // Redirige a otra vista que existe
  if(!hero) return <Navigate to="/marvel" />;
  const heroImageUrl = `/assets/heroes/${id}.jpg`;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
          src={heroImageUrl}
          alt={ hero.superhero} 
          className="img-thumbnail animate__animated animate__fadeInLeft" 
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: {hero.alter_ego}</b>
          </li>
          <li className="list-group-item">
            <b>Alter ego: {hero.publisher}</b>
          </li>
          <li className="list-group-item">
            <b>First Appearence: {hero.publisher}</b>
          </li>
        </ul>
        <h5 className="mt-3"> Characters </h5>
        <p> {hero.characters}</p>
        <button   
        className="btn btn-outline-primary"
        onClick= { onBack }
        type="button"
        >
          Back
        </button>
      </div>
    </div>
  )
}
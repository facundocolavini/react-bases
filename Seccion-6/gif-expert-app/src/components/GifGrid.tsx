import { useFetchGifs } from "../hooks/useFetchGifs"
import { GifItem } from "./GifItem"
import PropTypes from 'prop-types';


type Props = {
    category: string,
}

type Gif = {
  id?: string;
  title : string;
  url : string;
}

export const GifGrid = ({ category }: Props): JSX.Element => {
  const {images, isLoading } = useFetchGifs( category )

  return (
    <>
      <h3>{category}</h3>  
      { isLoading }
      { isLoading && <h2> Cargando...</h2> }
      <div className="card-grid">
        
        {/* Tarea colocar dinamicamente el titulo de cada gif */}
        {
          images.map((image: Gif) =>(
            <GifItem  key={image.id}{...image} />
          ))
        }
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category:  PropTypes.string.isRequired
}
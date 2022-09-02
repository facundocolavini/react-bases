import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"


type Props = {
    category: string,
}



interface imageOptionsI  {
  downsized_medium: urlImageI 
}

interface urlImageI {
  urlImg: string,
  weight: string,
  height: string,
}

interface Gif {
  id: string,
  title: string,
  url: urlImageI,
}




export const GifGrid = ({ category }: Props):  JSX.Element => {
  const [image, setImages] = useState<string[]>([])
  const getImages = ()=>{

  }

  // useEffect(() => {
  //   getGifs(category)
  //   .then((res) =>setImages(res))
  // }, [])
  

  
  return (
    <>
      <h3>{category}</h3>  
      <ol>

        {/* Tarea colocar dinamicamente el titulo de cada gif */}
        <li>titulo</li>
        <li>titulo</li>
        <li>titulo</li>
        <li>titulo</li>
      </ol>
    </>
  )
}

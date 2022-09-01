import { Dispatch, useState } from 'react';
import AddCategory from './components/AddCategory';
type Props = {
  
}

export default function GifExpertApp({}: Props): JSX.Element {
  const [categories, setCategories] = useState(['One punch','Dragon Ball'])

  // Add categorie 

  const addCategorie = (newCategorie:string):void => {
      setCategories([newCategorie, ...categories])
  } 

  return (
    <>
        {/* Title */}
        <h1>GifExpertApp</h1>

        {/*  Input Categorie */}
        <AddCategory setCategories={ setCategories }/>

        {/* List Gifs */}
        <button type="submit">Agregar</button>
        <ol>
          {categories.map((c, index) => {
            return(
              <li key={index}>
                {c}
              </li>
            )
          })}
        </ol>
      
    </>
  )
};
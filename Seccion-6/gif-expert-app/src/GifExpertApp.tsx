import { Dispatch, useState } from 'react';
import AddCategory from './components/AddCategory';
import {GifGrid}  from './components/GifGrid';

type Props = {
  
}

export default function GifExpertApp({}: Props): JSX.Element {
  const [categories, setCategories] = useState<string[]>(['Dragon Ball'])

  // Add categorie 

  const addCategorie = (newCategorie:string):void => {
      if (categories.includes(newCategorie)) return;
      setCategories([newCategorie, ...categories])
  } 


  return (
    <>
      
        <h1>GifExpertApp</h1>
        <AddCategory 
          onNewCategory={ addCategorie }
          currentCategory={ categories }
        />
        <button type="submit">Agregar</button>
        {categories?.map((c) =>
          (
            <GifGrid 
              key={c} 
              category={c}
            />
          )
        )}
    </>
  )
};
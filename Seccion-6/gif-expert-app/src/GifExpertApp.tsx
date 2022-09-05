import { useState } from 'react';
import { AddCategory , GifGrid } from'./components'


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
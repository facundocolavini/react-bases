import { useEffect, useState } from 'react';

import { Quote } from '../interfaces/brakingBadI';

type PropsFetch = {
  data: Quote[] | null, 
  isLoading: boolean , 
  hasError: string | null,
}
 
export const useFetch = ( url: string ) => { 
    const [state, setState] = useState<PropsFetch>({ 
      data: null, 
      isLoading: true, 
      hasError: null,
    })

    const getFetch = async () =>{
        
        setState({
          ...state,
          isLoading: true
        })
        try{
          const resp : Response = await fetch( url )
          const  data  =  await resp.json();
  
          setState({
            ...state,
            data,
            isLoading: false,
            hasError: null
          })
        }catch(e){
          setState({
            ...state,
            hasError: 'Error on fetch quotes'
          })
        }

    }

    useEffect(() => {
      // Disparamos el fetch a la api 
      getFetch()
    }, [url])
    

    return {
      ...state,
      // Para mejor lectura se hace asi
      data: state.data,
      isLoading: state.isLoading,
      hasError: state.hasError
    }
}
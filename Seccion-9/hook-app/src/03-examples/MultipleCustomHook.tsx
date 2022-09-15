import { useFetch, useCounter } from "../hook/index"
import { Quote } from "../interfaces";

import { ErrorQuotes, Quotes, LoadingQuotes } from "./components";
import { QuotData } from '../../../../../.history/react-bases/Seccion-9/hook-app/src/interfaces/brakingBadI_20220915083240';


export const MultipleCustomHook= (): JSX.Element => {
  // Los hooks no deben cargarse de forma condicional nunca ponerlo dentro de un if o anteponer un if y luego el hook
  // Los hooks siempre van primero y arriba
  type PropsFetch = {
    data: Quote[] | null, 
    isLoading: boolean, 
    hasError: string | null,
  }
   
  const { counter, increment } = useCounter(1)
  const { data , isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
  
  type dataFetch = {
    data : Quote | null
  }

 let quoteData = !!data && data[0];

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr/>

      {
        hasError !== null
          ? <ErrorQuotes error={hasError}/> 
          :    isLoading
          ? <LoadingQuotes/>
          : quoteData && <Quotes {...quoteData}/>     
      }

      <button 
        className="btn btn-primary" 
        onClick={ ()=>increment() } 
        disabled={ isLoading }
      >
        Next quote
      </button>
    </>
  )
}
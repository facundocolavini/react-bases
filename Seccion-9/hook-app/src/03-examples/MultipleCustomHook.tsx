import { useFetch, useCounter } from "../hook/index"
import { Quote } from "../interfaces";

import { ErrorQuotes, Quotes, LoadingQuotes } from "./components";


export const MultipleCustomHook= (): JSX.Element => {
  // Los hooks no deben cargarse de forma condicional nunca ponerlo dentro de un if o anteponer un if y luego el hook
  // Los hooks siempre van primero y arriba
  const { counter, increment } = useCounter(1)
  const { data , isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
  const {author, quote, quote_id, series }= !!data && data[0];
 

  console.table({counter, data, isLoading, hasError})
  console.log(data,'DATA')
  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr/>

      {
        hasError !== null
          ? <ErrorQuotes error={hasError}/> 
          : isLoading 
            ? <LoadingQuotes/>
            : <Quotes author={author} quote={quote} quote_id={quote_id} series={series}/>
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
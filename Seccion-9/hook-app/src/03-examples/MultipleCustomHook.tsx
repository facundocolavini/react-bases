import { useFetch, useCounter } from "../hook/index"
import { ErrorQuotes, Quotes, LoadingQuotes } from "./components";


export function MultipleCustomHook(): JSX.Element{
  // Los hooks no deben cargarse de forma condicional nunca ponerlo dentro de un if o anteponer un if y luego el hook
  // Los hooks siempre van primero y arriba
  const { counter, increment } = useCounter(1)
  const { data , isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
  // const { author, quote }: Quote = !!data && data[0]
  const quoteData = !!data && data[0]

  // console.table({counter, data, isLoading, hasError})
 
  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr/>

      {
        hasError !== null
          ? <ErrorQuotes error={hasError}/> 
          : isLoading 
            ?  <LoadingQuotes/>
            :  <Quotes {...quoteData} />
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
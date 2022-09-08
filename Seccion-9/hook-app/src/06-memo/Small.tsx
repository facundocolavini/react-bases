import React from "react"


type Props = {
    count:number
}

export const Small = React.memo(({count}: Props) => {

  console.log('me volvi a dibujar :(')  
  return (
    <small>{ count }</small>
  )
})
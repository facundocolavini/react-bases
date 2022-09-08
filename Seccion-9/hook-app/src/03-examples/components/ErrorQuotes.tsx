import React from 'react'

type Props = {
    error: string
}

export const ErrorQuotes = ({error}: Props): JSX.Element => {
  return (
    <div className='alert alert-danger'>{error}</div>
  )
}
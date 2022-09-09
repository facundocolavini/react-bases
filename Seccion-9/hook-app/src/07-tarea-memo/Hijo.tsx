import React from 'react'

type Props = {
    incrementar: (param:number) => void,
    numero: number

} 

export const Hijo = React.memo(({ numero, incrementar }: Props): JSX.Element => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})

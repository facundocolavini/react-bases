import React, { useCallback, useMemo } from 'react'
import { Hijo } from './Hijo'
import { useState } from 'react';




/* 
    Objectivo de la tarea:

    - Evitar que se vuelvan a redibujar los componentes una vez renderizados la primera vez.
    - En este caso hay 5 botones que se redibujan cuando apreto alguno de los 5.
    - Evitar su redibujado y memorizar el componente.

*/

export const Padre = (): JSX.Element => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    // const incrementar = ( num ) => {
    //     setValor( valor + num )
    // }

    const incrementMemo = useCallback(
      (num : number) => {
        setValor((oldValue) => oldValue + num )
      },
      [] // No hace falta  que se vuelva a dibujar en este caso,
    )
    

    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementMemo }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}

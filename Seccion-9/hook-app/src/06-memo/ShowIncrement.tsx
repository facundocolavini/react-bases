import React from 'react';
import { SetStateAction } from 'react';

type Props = {
    increment: (param:number)=> void
}

export const ShowIncrement = React.memo( ({increment} : Props): JSX.Element => {
    
    console.log('Me volvi a generar :(');
    

    return (
        <button 
            className="btn btn-primary" 
            onClick={()=> increment( 5 )}
        >
            +1
        </button>
    )
})


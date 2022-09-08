import  { HTMLAttributeReferrerPolicy, useRef } from 'react'

type Props = {}

export const FocusScreen = (props: Props): JSX.Element=> {
    const inputRef: React.MutableRefObject<HTMLInputElement> = useRef()
    const onFocusInput = () =>{
        inputRef.current.select()
    }


  
    return (
        <>
            <h1>Focus Screen</h1>
            <hr/>

            <input 
                ref={ inputRef }
                type="text"
                placeholder="Ingrese su nombre"
                className="form-control"
             />

             <button className="btn btn-primary mt-2" onClick={ onFocusInput }>Set Focus</button>
        </>
    )
}
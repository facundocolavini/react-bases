import { useState } from "react";


export const useForm = (initialForm) => {
    const [formState, setFormState] = useState( initialForm );
    
    //Inputs Handlers
    const onInputChange = ({target} :React.ChangeEvent<HTMLInputElement>):void=>{
        const { name, value }  = target
        setFormState({
            ...formState, // Si hay mas campos
            [ name ]: value, // Cambiando el estado 
        })
    }

    const onResetForm = (): void => {
        setFormState( initialForm )
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
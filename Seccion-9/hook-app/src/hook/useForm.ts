import { useState } from "react";
import { FormLoginType } from '../interfaces';

export const useForm = <T>(initialValues: T) => {
    const [formState, setFormState] = useState<T>( initialValues );
    
    //Inputs Handlers
    const onInputChange = ({target} :React.ChangeEvent<HTMLInputElement>):void=>{
        const { name, value }  = target
        setFormState({
            ...formState, // Si hay mas campos
            [ name ]: value, // Cambiando el estado 
        })
    }

    const onResetForm = (): void => {
        setFormState( initialValues )
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
import React, { useCallback, useState } from "react";



export const useForm = <T extends Object>(initialValues: T) => {
    const [formState, setFormState] = useState<T>( initialValues );
    interface inputF {
        name: string,
        value: string
    }
    //Inputs Handlers
    const onInputChange = useCallback(({ target }:React.ChangeEvent<HTMLInputElement> ):void=>{
        const { name, value } = target  as  inputF
        setFormState(
            (prev) => ({
                ...prev, // Campos anteriores
                [name]: value // Valor del input o de campos
             })
        )
    },[])

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
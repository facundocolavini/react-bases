import { useState } from "react";


type FormProps = {
    username: string,
    email:string,
    password:string
}

export const useForm = (initialForm: FormProps) => {
    const [formState, setFormState] = useState( initialForm );
    
    //Inputs Handlers
    const onInputChange = ({target} :React.ChangeEvent<HTMLInputElement>):void=>{
        const { name, value }  = target
        setFormState({
            ...formState, // Si hay mas campos
            [ name ]: value, // Cambiando el estado 
        })
    }

    return {
        ...formState,
        formState,
        onInputChange,
    }
}
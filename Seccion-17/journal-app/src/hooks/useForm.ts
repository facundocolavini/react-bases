import { useEffect, useState } from 'react';
import { regiterFormValidations } from '../models';
interface initFormValues {
    [key:string]: string
}


export const useForm = (initialValues: initFormValues, formValidations=<regiterFormValidations>{} ) => {
    const [formState, setFormState] = useState<initFormValues>(initialValues );
    const [formValidation, setValidations] = useState({} as regiterFormValidations);

    useEffect(() => {
        createValidators()
    }, [formState])
    

    interface inputF {
        name: string,
        value: string
    }
    //Inputs Handlers
    const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = target as inputF
        setFormState(
            (prev) => ({
                ...prev, // Campos anteriores
                [name]: value // Valor del input o de campos

            })
        )
    }

    const onResetForm = (): void => {
        setFormState(initialValues)
    }

    // Toma el objeto formValidations y crea un nuevo estado donde se va a saber si los inputs son validos o no
    const createValidators = () => {
        const formCheckedValues:regiterFormValidations = {}
        // Recorro mi objeto formValidations 
        for (const formField of Object.keys( formValidations )){
            // console.log( formValidations[formField] );
            
           const [fn,errorMessage ]  = formValidations[formField] 
           // Creo una propiedad computada
           console.log( fn(formState[formField]));
           
            formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;
            setValidations(formCheckedValues)
        }
    }
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
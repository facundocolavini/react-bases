import { formCheckedValues } from './../models/validations/formsValidations';
import { useEffect, useState } from 'react';
import { FormValidations, RegisterUser } from '../models';

interface initFormValues {
    [key: string]: string
}
interface inputF {
    name: string,
    value: string
}

export const useForm = <T extends Object>(initialValues: T, formValidations = <FormValidations>{}) => {
    // console.log(initialValues, 'INITIALVALUES');

    const [formState, setFormState] = useState(initialValues);//{email: '', password: '', displayName: '',} RegisterUser = T
    const [formValidation, setValidations] = useState({});

    useEffect(() => {
        createValidators()
    }, [formState])



    //Inputs Handlers
    const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value }: inputF = target
        setFormState(
            (prev) => ({
                ...prev, // Campos anteriores
                [name]: value // Valor del input o de campos {email: , password: , displayName:}
            })
        )
    }

    const onResetForm = (): void => {
        setFormState(initialValues)
    }

    // Toma el objeto formValidations y crea un nuevo estado donde se va a saber si los inputs son validos o no
    const createValidators = () => {
        const formCheckedValues: formCheckedValues = {} // {emailValid: null | 'Error Mensaje']}
        // Recorro mi objeto formValidations 
        for (const formField of Object.keys(formValidations)) { // email , password , displayName
            const [fn, errorMessage] = formValidations[formField]; // {email:[f:boolean,'']}


            // formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;
            setValidations(formCheckedValues)
        }
    }
    return {
        ...formState,
        formState: formState,
        ...formValidation,
        onInputChange,
        onResetForm,

    }
}
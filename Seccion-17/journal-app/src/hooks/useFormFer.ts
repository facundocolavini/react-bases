import { useEffect, useMemo, useState } from 'react';

export const useFormFer = (initialForm = {} as any, formValidations = {} as any) => {

    const [formState, setFormState] = useState(initialForm);
    const [formValidation, setFormValidation] = useState({} as any);

    useEffect(() => {
        createValidators();
    }, [formState])

    useEffect(() => {
        setFormState(initialForm);
    }, [initialForm])


    const isFormValid = useMemo(() => {

        for (const formValue of Object.keys(formValidation)) {
            if (formValidation[formValue] !== null) return false;
        }

        return true;
    }, [formValidation])


    const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    const createValidators = () => {

        const formCheckedValues = {} as any;

        for (const formField of Object.keys(formValidations)) {
            const [fn, errorMessage] = formValidations[formField as keyof any];

            formCheckedValues[`${formField}Valid`] = fn(formState[formField as keyof any]) ? null : errorMessage;
        }

        setFormValidation(formCheckedValues);
    }



    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

        ...formValidation,
        isFormValid
    }
}
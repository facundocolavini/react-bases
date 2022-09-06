import { useState } from 'react';
import PropTypes from 'prop-types';

type Props = {
    onNewCategory: (newCategory: string) => void,
}

export const AddCategory = ({onNewCategory}: Props): JSX.Element => {
   
    const [inputValue, setInputValue] = useState<string>('') 

    /* Handlers */
    const onHandleChange = ({target} :React.ChangeEvent<HTMLInputElement>):void=>{
        setInputValue( target.value );
    }

    const submitForm = (e: React.FormEvent) =>{
        e.preventDefault()
        const newInputValue = inputValue.trim() 
        if( newInputValue.length <= 1) return;
        onNewCategory(newInputValue)
        setInputValue('')
    }
    
  return (    
    <form onSubmit={ submitForm } aria-label="form">
        <input 
            type="text"
            value={inputValue}
            onChange={ onHandleChange }
            placeholder="Buscar gifs"
        />
    </form>
  )
};

AddCategory.propTypes = {
    onNewCategory : PropTypes.func.isRequired 
}

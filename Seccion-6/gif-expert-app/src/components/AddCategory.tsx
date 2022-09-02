import { ChangeEvent, ChangeEventHandler, useState, Dispatch, SetStateAction } from 'react';

type Props = {
    onNewCategory: (newCategory: string) => void,
    currentCategory : string[]
}

const AddCategory = ({onNewCategory, currentCategory}: Props) => {
   
    const [inputValue, setInputValue] = useState<string>('') 

    /* Handlers */
    const onHandleChange = ({target} :React.ChangeEvent<HTMLInputElement>):void=>{
        console.log(target.value);
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
    <form onSubmit={ submitForm }>
        <input 
            type="text"
            value={inputValue}
            onChange={ onHandleChange }
            placeholder="Buscar gifs"
        />
    </form>
  )
};


export default AddCategory;
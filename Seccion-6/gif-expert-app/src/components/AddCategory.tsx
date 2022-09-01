import { ChangeEvent, ChangeEventHandler, useState, Dispatch, SetStateAction } from 'react';

type Props = {
    setCategories: Dispatch<SetStateAction<string[]>>
}

const AddCategory = ({setCategories}: Props) => {
   
    const [inputValue, setInputValue] = useState<string>('Keyboard') 

    /* Handlers */
    const onHandleChange = ({target} :React.ChangeEvent<HTMLInputElement>):void=>{
        console.log(target.value);
        setInputValue( target.value );
    }

    const submitForm = (e: React.FormEvent) =>{ 
        e.preventDefault()
        setCategories(categories =>[inputValue, ...categories])
    }
    
  return (    
    <form onSubmit={submitForm}>
        <input 
            type="text"
            value={inputValue}
            onChange={onHandleChange}
            placeholder="Buscar gifs"
        />
    </form>
  )
};


export default AddCategory;
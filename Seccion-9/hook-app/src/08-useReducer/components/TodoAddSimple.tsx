import { TodoStateI } from '@/interfaces'
import React, { useState } from 'react'

type Props = {
  onNewTodo: (todo: TodoStateI) => void;   
}
export interface TodoAddSimple {
  onNewTodo: (todo: TodoStateI) => void;  
}

const TodoAddSimple: React.FC<TodoAddSimple> = ({onNewTodo}: Props ): JSX.Element => {
  const [description,setDescription] =  useState<string>('')
  const [newTodo, setNewTodo] = useState<TodoStateI>({
      id: null,
      description: '',
      done: false
  }) 

  const onChangeInput = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value }  = target
    setNewTodo({
        ...newTodo, // Si hay mas campos
        [ name ]: value, // Cambiando el estado 
    })
    setDescription(value)
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newDescription = description.trim()
    if(newDescription.length <= 1) return
    onNewTodo({
      id: new Date().getTime() * 3 ,
      description:description,
      done: false,

    })
    setDescription('')
  }



  return (
    <form onSubmit= { onSubmit }>
        <input 
            type="text" 
            placeholder="Agregar Tarea"
            className="form-control"
            onChange={ onChangeInput }
            name= "description"
            value = { description }
        />
        <button 
            type="submit"
            className="btn btn-outline-primary mt-1"
        >
            Agregar
        </button>
    </form>
  )
}


export default TodoAddSimple;
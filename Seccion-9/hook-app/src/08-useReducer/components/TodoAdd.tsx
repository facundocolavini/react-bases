import { useForm } from '../../hook';
import { FormAddTodoType, TodoStateI } from '@/interfaces'
import React, { useState } from 'react'

type Props = {
  onNewTodo: (todo: TodoStateI) => void;   
}
export interface TodoAdd {
  onNewTodo: (todo: TodoStateI) => void;  
}

const TodoAdd: React.FC<TodoAdd> = ({ onNewTodo }: Props ): JSX.Element => {
  const initialState: FormAddTodoType = {description:''}
  const { description, onInputChange, onResetForm } = useForm(initialState)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newDescription = description.trim()
    if(newDescription.length <= 1) return

    const newTodo : TodoStateI = {
      id: new Date().getTime() * 3 ,
      description:description,
      done: false,
    }

    onNewTodo(newTodo)
    onResetForm()
  }

  return (
    <form onSubmit= { onSubmit }>
        <input 
            type="text" 
            placeholder="Agregar Tarea"
            className="form-control"
            onChange={ onInputChange }
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


export default TodoAdd;
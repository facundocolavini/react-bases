import React from 'react'
import { TodoStateI } from '../../interfaces'


export interface TodoItem {
  todo: TodoStateI,
  onDeleteTodo:  (id: number) => void; 
  onToggleTodo: (id: number) => void;
}
type Props = {
  todo: TodoStateI,
  onToggleTodo: (id: number) => void;
  onDeleteTodo:  (id: number) => void; 
}
const TodoItem: React.FC<TodoItem> = ( {todo, onDeleteTodo,onToggleTodo}: Props) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
        <span 
          className={`align-self-center  ${todo.done ? 'text-decoration-line-through' : '' }`}
          onClick={ ()=> onToggleTodo(todo.id)}
          >
            { todo.description }
        </span>
        <button 
          onClick={()=>onDeleteTodo(todo.id)}
          className="btn btn-danger"
        >
          Borrar
        </button>
    </li> 
  )
}

export default TodoItem
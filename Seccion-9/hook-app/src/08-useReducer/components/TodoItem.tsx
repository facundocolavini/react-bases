import React from 'react'
import { TodoState } from '../../interfaces'

 interface TodoItem {
  todo: TodoState,
  onDeleteTodo:  (id: number) => void; 
  onToggleTodo: (id: number) => void;
}
type Props = {
  todo: TodoState,
  onToggleTodo: (id: number) => void;
  onDeleteTodo:  (id: number) => void; 
}

export const TodoItem: React.FC<TodoItem> = ( {todo, onDeleteTodo,onToggleTodo}: Props): JSX.Element=> {
  return (
    <li className="list-group-item d-flex justify-content-between">
        <span 
          aria-label="span-test"
          className={`align-self-center  ${todo.done ? 'text-decoration-line-through' : '' }`}
          onClick={ ()=> onToggleTodo(todo.id)}
          >
            { todo.description }
        </span>
        <button 
          test-id="btn-delete"
          onClick={()=>onDeleteTodo(todo.id)}
          className="btn btn-danger"
        >
          Borrar
        </button>
    </li> 
  )
}


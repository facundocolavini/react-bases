import { TodoState } from '../../interfaces';
import React from 'react';

import { TodoItem } from '../components';

type Props = {
  onDeleteTodo:  (id: number) => void; 
  onToggleTodo: (id: number) => void;
  todos : TodoState[],

}

export interface TodoList {
    todos : TodoState[],
    onToggleTodo: (id: number) => void;
    onDeleteTodo:  (id: number) => void; 
}

const TodoList: React.FC<TodoList>  = ({ todos  = [], onDeleteTodo, onToggleTodo }: Props): JSX.Element => {
  return (
    <ul className="list-group">
        {
            todos.map( (todo: TodoState) => (
                <TodoItem 
                  key={todo.id}
                  todo={ todo }
                  onDeleteTodo = {onDeleteTodo}
                  onToggleTodo = { onToggleTodo }
                  />                               
            ))
        }
    </ul>
  )
}

export default TodoList;
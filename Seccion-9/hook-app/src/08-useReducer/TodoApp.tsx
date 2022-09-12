import { useTodo } from "../hook"
import { TodoList } from "./components"
import TodoAdd from "./components/TodoAddSimple"

export const TodoApp = () => {
        /* Hacer custom hook useTodo 
        hacer un custom hook  llamado useTodo 
        metodos que va a retornar nuestro hook handleDeleteTodo, handleToggleTodo, handleNewTodo
    
    */
   const { todos ,todosCount , pendingTodosCount ,handleTodoDelete ,handleToggleTodo ,handleNewTodo } = useTodo()


    return (
        <>
            <h1>TodoApp: { todosCount }, <small>Pendientes: { pendingTodosCount }</small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    {/* TodoList */}
                    <TodoList 
                        todos={todos}
                        onDeleteTodo = { handleTodoDelete }
                        onToggleTodo = { handleToggleTodo }
                    />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr/>
                    {/* TodoAdd */}
                   <TodoAdd 
                        onNewTodo = { handleNewTodo }
                    />
                </div>
            </div>
        </>
    )
}
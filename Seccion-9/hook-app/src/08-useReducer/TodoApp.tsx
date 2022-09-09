import { useReducer } from "react"
import { TodoStateI, ActionType } from '../interfaces/todoI'
import { todoReducer } from "./todoReducer"

type Props = {}

//  Estado inicial del Reducer
const initialState: TodoStateI[]= [
    {
        id: new Date().getTime(),
        todo: 'Recolectar la piedra de Alma',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        todo: 'Recolectar la piedra de Poder',
        done: false,
    }
]



export const TodoApp = (props: Props) => {
    const [ todos, dispatchTodoAction ] = useReducer( todoReducer, initialState)

    return (
        <>
            <h1>TodoApp: 10, <small>Pendientes:2</small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <ul className="list-group">
                        {
                            todos.map( todo => (
                                <li key={todo.id} className="list-group-item d-flex justify-content-between">
                                    <span className="align-self-center">{todo.todo}</span>
                                    <button className="btn btn-danger">Borrar</button>
                                </li>                                
                            ))
                        }
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr/>
                    <form>
                        <input 
                            type="text" 
                            placeholder="Agregar Tarea"
                            className="form-control"
                        />
                        <button 
                            type="submit"
                            className="btn btn-outline-primary mt-1"
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
           
        </>
    )
}
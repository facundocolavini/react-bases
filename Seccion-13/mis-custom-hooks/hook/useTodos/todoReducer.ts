import { TodoState } from "./interfaces"


export const todoReducer = (initialState: TodoState[] = [], action: any ) =>{
    switch (action.type) {//accion del tipo ...
        case 'add-todo':// Disparo la accion de add todo 
            return [...initialState, action.payload] // Y esta accion tiene que tener el payload de esa accion
        case 'delete-todo':// Disparo la accion de remove todo 
            return initialState.filter(todo => todo.id !== action.payload)
        case 'toggle-todo':// Disparo la accion de toggle todo 
            return initialState
                .map((todo: TodoState) => {
                        if(todo.id === action.payload ){
                            return{
                                ...todo,
                                done:!todo.done
                            }
                        }
                        return todo;
                    }
                )
        default:
            return initialState;
    }
 
}
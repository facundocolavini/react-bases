
import { ActionDeleteTodoType, ActionNewTodoType ,ActionToggleTodoType , TodoState } from "./interfaces";
import React, { Dispatch, useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { getTodoToLocal, setTodoToLocal } from "./localStorage";


export const useTodo = () => {
    //  Estado inicial del Reducer
    const initialState: TodoState[] = [] 
    // Funcion para cargar en el reducer con todos que tengo en mi local storage
    const init = ()=>{
        return getTodoToLocal('todos') || [] as TodoState[] // Si devuelve null me pone un array vacio []
    }

    const [ todos  , dispatchTodoAction ] = useReducer( todoReducer, initialState, init)

    // Efecto para guardar en localStorage
    useEffect(()=>{
        setTodoToLocal('todos', todos)
    },[todos])

    const handleNewTodo = (todo: TodoState):void =>{
        const action: ActionNewTodoType = {
            type: 'add-todo',
            payload: todo,
        }

        //Mandamos la accion al reducer con el dispatch    
        dispatchTodoAction(action)
    }

    // Eliminar una tarea
    const handleTodoDelete = ( id: number):void =>{
        const action: ActionDeleteTodoType = {
            type: 'delete-todo',
            payload: id,
        }

        dispatchTodoAction(action)
    }

    // Cambiar una tarea a realizada o no realizada
    const handleToggleTodo = ( id: number):void =>{
        const action: ActionToggleTodoType = {
            type: 'toggle-todo',
            payload: id,
        }

        dispatchTodoAction(action)
    }
    
    const pendingTodosCount: number = todos.filter((todo: TodoState) => !todo.done).length 
    const todosCount: number = todos.length


    return {
        todos: todos as TodoState[],
        todosCount,
        pendingTodosCount,
        handleTodoDelete,
        handleToggleTodo,
        handleNewTodo
    }
}
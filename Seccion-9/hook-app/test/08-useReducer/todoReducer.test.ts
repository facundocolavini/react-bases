import { describe, expect, test } from '@jest/globals';
import { todoReducer } from '../../src/08-useReducer/todoReducer';
import { ActionDeleteTodoType, ActionNewTodoType, ActionToggleTodoType, TodoState } from '../../src/interfaces/todoI';



describe("Pruebas en el todoReducer",()=>{
    //Es un arreglo o un objeto con el estado inicial
    const initialState : TodoState[] = [{
        id: 1,
        description: 'Lavar la ropa',
        done: false
    }]

    test("Debe de regresar el estado inicial",()=>{
        // Recordar que los objetos pasan por referencia del
        // Ya que el reducer nos devuelve el objeto con el estado inicial
        const newState = todoReducer(initialState, {})
        expect( newState ).toBe(initialState)
        // screen.debug()
        
    })

    test('Debe de agregar un TODO ',()=>{
        const actionAddTodo: ActionNewTodoType = {
            type: 'add-todo',
            payload: {
                id: 2,
                description: 'Pasear al perro',
                done: false
            },            
        }
   
        //Agrega el nuevo todo a mi state y tenemos un nuevo state
        const newState =  todoReducer(initialState, actionAddTodo )

        expect( newState.length ).toBe( 2 )
        //Evalua que el arreglo newState tenga el objecto action.payload
        expect( newState ).toContain( actionAddTodo.payload )

        // screen.debug()
    })

    test('Debe de eliminar un TODO',()=>{
        const actionAddTodo: ActionNewTodoType = {
            type: 'add-todo',
            payload: {
                id: 2,
                description: 'Pasear al perro',
                done: false
            },            
        }
        const actionDeleteTodo : ActionDeleteTodoType = {
            type: 'delete-todo',
            payload:2
        }
        const initialState :TodoState[] = [
            {
                id: 1,
                description: 'Lavar la ropa',
                done: false
            },
            {
                id: 3,
                description: 'Hacer ejercicio',
                done: false
            }
        ]
        

        const addTodoState = todoReducer(initialState, actionAddTodo )
        expect( addTodoState.length ).toBe( 3 )
        console.log(addTodoState)

        const deleteTododState = todoReducer(initialState,actionDeleteTodo)
        expect( deleteTododState.length ).toBe( 2 )
        console.log(deleteTododState)


    })


    test('Debe de cambiar la propiedad done de una tarea',()=>{

        const actionToggleTodo :  ActionToggleTodoType = {
            type: 'toggle-todo',
            payload: 1
        }

        const toggleTodoToTrue = todoReducer(initialState, actionToggleTodo )
        expect( toggleTodoToTrue[0].done).toBe( true )
        console.log(toggleTodoToTrue)

        const toggleTodoToFalse = todoReducer(toggleTodoToTrue, actionToggleTodo )
        expect( toggleTodoToFalse[0].done).toBe( false )
        console.log(toggleTodoToFalse)

    })

})
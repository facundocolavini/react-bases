import { beforeEach, describe, jest, test } from '@jest/globals';
import { render } from '@testing-library/react';
import * as React from 'react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodo } from '../../src/hook/useTodo';

jest.mock('../../src/hook/useTodo')

describe("Pruebas en <TodoApp />", ()=>{

    const handleTodoDeleteMock = jest.fn();
    const handleToggleTodoMock = jest.fn();
    const handleNewTodoMock = jest.fn();

    beforeEach(()=>{
        jest.clearAllMocks
    })
    test("debe de mostrar el componente correctamente",()=>{
        render(<TodoApp/>)
        //Realizamos el jest mock del useTodos()
        //mockReturnValue es el resultado cuando se manda a llamar el hook con el estado que yo quiero que tenga.
        // { todos ,todosCount , pendingTodosCount ,handleTodoDelete ,handleToggleTodo ,handleNewTodo } 
        useTodo.mockReturnValue({
            todos:[
                {
                    id:1,
                    description: "Piedra del Alma",
                    done: false
                },
                {
                    id:2,
                    description: "Sacar al Perro",
                    done: true
                }
            ],
            todosCount:2,
            pendingTodosCount: 1,
            handleTodoDelete: jest.fn(),
            handleToggleTodo: jest.fn(),
            handleNewTodo:jest.fn(),
        });
    })
})
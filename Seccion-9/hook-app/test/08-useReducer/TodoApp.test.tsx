import { beforeEach, describe, expect, jest, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
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

    useTodo.mockReturnValue({
        todos:[
            {
                id:1,
                description: "Todo #1",
                done: false
            },
            {
                id:2,
                description: "Todo #2",
                done: true
            }
        ],
        todosCount:2,
        pendingTodosCount: 1,
        handleTodoDelete: handleTodoDeleteMock,
        handleToggleTodo: handleToggleTodoMock,
        handleNewTodo: handleNewTodoMock,
    });

    test("debe de mostrar el componente correctamente",()=>{
        render(<TodoApp/>)
        //Realizamos el jest mock del useTodos()
        //mockReturnValue es el resultado cuando se manda a llamar el hook con el estado que yo quiero que tenga.
        // { todos ,todosCount , pendingTodosCount ,handleTodoDelete ,handleToggleTodo ,handleNewTodo } 
        expect(screen.getByText("Todo #1")).toBeTruthy();
        expect(screen.getByText("Todo #2")).toBeTruthy();
        expect(screen.getByRole("textbox")).toBeTruthy();
        screen.debug();
    })
})
import { describe, expect, test, jest, beforeEach } from '@jest/globals';
import { TodoState } from '../../../src/interfaces/todoI';
import { render, screen, fireEvent } from '@testing-library/react';
import { TodoItem } from "../../../src/08-useReducer/components";
import * as React from 'react';

export interface TodoItem {
    todo: TodoState,
    onDeleteTodo:  (id: number) => void; 
    onToggleTodo: (id: number) => void;
}

type Props = {
    todo: TodoState,
    onToggleTodo: (id: number) => void;
    onDeleteTodo:  (id: number) => void; 
}


describe("Pruebas en <TodoItem /> ",()=>{
    const todo:TodoState = {
        id:1 ,
        description:"Piedra del Alma",
        done: false
    };
    const onToggleTodoMock = jest.fn() 
    const onDeleteTodoMock = jest.fn()

    beforeEach(()=>{
        jest.clearAllMocks
    })
    test("Debe de mostrar el TODO pendiente de completar",()=>{
        render(<TodoItem 
            todo={todo} 
            onToggleTodo={onToggleTodoMock} 
            onDeleteTodo={onDeleteTodoMock}
        />)

        const liElement : HTMLDListElement = screen.getByRole('listitem') 
        const spanElement: HTMLSpanElement = screen.getByLabelText('span-test')
        //Aseguramos que tengamos las className de cada elemento HTML
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between')
        expect( spanElement.className ).toContain('align-self-center')
        expect( spanElement.className ).not.toContain('text-decoration-line-through')
        // screen.debug()
    })

    test("Debe de mostrar el TODO completado",()=>{
        todo.done =  true;// No recomendado por que muta el objeto declarar un nuevo todo

        render(<TodoItem 
            todo={todo} 
            onToggleTodo={onToggleTodoMock} 
            onDeleteTodo={onDeleteTodoMock}
        />)

        const spanElement: HTMLSpanElement = screen.getByLabelText('span-test')
        //Aseguramos que tengamos las className de cada elemento HTML
        expect( spanElement.className ).toContain('text-decoration-line-through')
        screen.debug()
    })

    test("El span debe de llamar al toggleTodo cuando se hace onclick",()=>{

        render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock}/>)
        const spanElement: HTMLSpanElement = screen.getByLabelText('span-test')
        fireEvent.click( spanElement )
        //Probamos solamente que se llame el onToggleTodo   
        expect(onToggleTodoMock).toHaveBeenCalledWith( todo.id ) // Se llamo a la funcion y el argumento que se le mando es el id 
        // screen.debug()
    })
    test("El button debe de llamar al onDeleteTodo",()=>{

        render(<TodoItem todo={todo} onToggleTodo={ onToggleTodoMock } onDeleteTodo={ onDeleteTodoMock }/>)
        const buttonDelete: HTMLButtonElement = screen.getByTestId('btn-delete')
        console.log(buttonDelete)
        fireEvent.click( buttonDelete )
        //Probamos solamente que se llame el onToggleTodo   
        expect(onDeleteTodoMock).toHaveBeenCalledWith( todo.id ) // Se llamo a la funcion y el argumento que se le mando es el id 
        console.log(todo)
        screen.debug()
    })
})
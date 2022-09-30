import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// Cuando creamos un createApi  nos creara customs Hooks
// En ester caso nos va a crear un useGetTodosQuery
//

export const todosApi = createApi({
    // Nombre del reducer
    reducerPath: 'todos',
    baseQuery: fetchBaseQuery({  // Es una funcion donde se define la url base de mi api
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),
    // Son las diferentes funciones que vamos a llamar para traer la informacion
    endpoints: (builder) => ({
        getTodos: builder.query({
            // Mutations: sirve para hacer posteos
            query: () => '/todos' // le concatena a mi baseUrl el /todos
        }),
        getTodo: builder.query({
            // Mutations: sirve para hacer posteos
            query: (todoId: number) => `/todos/${todoId}` // le concatena a mi baseUrl el /todos
        })

    })
})



export const { useGetTodosQuery, useGetTodoQuery } = todosApi;


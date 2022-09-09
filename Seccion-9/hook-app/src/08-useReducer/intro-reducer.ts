// Los tipos del estado a usarse en el initialState

interface TodoState {
    id: number;
    todo: string;
    done: boolean;
}

// Estado inicial del Reducer
const initialState: TodoState[]= [
    {
        id: 1,
        todo: 'Recolectar la piedra de Alma',
        done: false,
    }
]
// El tipo de accion que se puede lanzar

type Action = {
    type?: string,
    payload?: TodoState,
}


// Reducer
    //Action: Es quien va a decirle al todoReducer como quiero que cambie el stado
    //Siempre devuelve un nuevo stado
    // Se utilizan los reducer cuando tenemos un objeto elaborado (initialState) y queremos manipular el estado
const todoReducer =  ( state: TodoState[] = initialState, action :Action = {} ): TodoState[] => {
    switch(action.type){
        case 'add-todo': // Se que viene un payload en esta accion y no usar push
            return [ ...state, action.payload ];
    }
    return state; 
}

let todos: Array<TodoState> = todoReducer(); // Devuelve un array [{}]

// Agregamos  un todo a la lista de todos
const newTodo: TodoState = {
    id:2,
    todo: 'Recolectar la piedra del poder',
    done: false
}

// Accion para agregar un nuevo todo a la lista de todos
const addTodoAction: Action = {
    type: 'add-todo',
    payload: newTodo
} 

todos = todoReducer( todos, addTodoAction )

console.log({state: todos});


export{}


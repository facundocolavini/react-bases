export interface TodoState {
    id: number  ;
    description: string;
    done: boolean;
}

export type ActionNewTodoType = {
    type?: string,
    payload?: TodoState,
}

export type ActionDeleteTodoType = {
    type?: string,
    payload?: number,
}

export type ActionToggleTodoType = {
    type?: string,
    payload?: number,
}
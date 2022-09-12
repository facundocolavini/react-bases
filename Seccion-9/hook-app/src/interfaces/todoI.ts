export interface TodoStateI {
    id: number | null ;
    description: string;
    done: boolean;
}

export type ActionNewTodoType = {
    type?: string,
    payload?: TodoStateI,
}

export type ActionDeleteTodoType = {
    type?: string,
    payload?: number,
}

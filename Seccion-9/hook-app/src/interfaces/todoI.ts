export interface TodoStateI {
    id: number;
    todo: string;
    done: boolean;
}

export type ActionType = {
    type?: string,
    payload?: TodoStateI,
}

import { ActionType, TodoStateI } from "../interfaces"

export const todoReducer = (initialState: TodoStateI[] = [], action :ActionType = {}) =>{
    switch (action.type) {
        case 'ABC':
           throw new Error('Action.type = ABC no esta implementada');
        default:
            return initialState;
    }
 
}
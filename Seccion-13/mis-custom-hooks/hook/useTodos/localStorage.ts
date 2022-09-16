export const setTodoToLocal = (key: string, value: any) =>{
    localStorage.setItem(key,JSON.stringify(value));   
}

export const getTodoToLocal = (key: string) =>{
    return JSON.parse(localStorage.getItem(key))
} 


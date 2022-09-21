export const setUserToLocal = (key: string, value: any) =>{
    localStorage.setItem(key,JSON.stringify(value));   
}

export const getUserToLocal = (key: string) =>{
    JSON.parse(localStorage.getItem(key));
} 


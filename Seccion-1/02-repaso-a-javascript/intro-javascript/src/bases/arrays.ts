// Arrays 
let arr : number[] = [1,2,3]; 
console.log(arr,'arr');

let arr2 : number[] = [...arr, 4];
console.log(arr2,'arr2');

const arr3 = (arrParam : number[]) => arrParam.map(a => {return a * 2}); 

console.log(arr3(arr2),'arr3');

export {}
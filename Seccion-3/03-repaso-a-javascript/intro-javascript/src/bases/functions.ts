// Functions 
interface User {
    uid: number;
    name: string;
}
interface Student extends User  {
    courses: string[];
}
type Edad = string | number ;

function getAge (age: Edad) : Edad {
    return age; 
}

let myAge : Edad = getAge('25'); 
console.log(typeof myAge);

myAge = getAge(30)
console.log(typeof myAge);

let user1: User = {
    uid: 1,
    name: 'John'
}
const createStudent = (student: User, course: string) : Student => {
    return {
        uid: student.uid,
        name: student.name,
        courses: [course]
    }
}

console.log(createStudent(user1,'Matematica'),'User Created')
console.log(createStudent(user1,'Fisica'),'User Created')
console.log(createStudent(user1,'Robotica'),'User Created')
console.log(createStudent(user1,'Electronica'),'User Created')

export {}
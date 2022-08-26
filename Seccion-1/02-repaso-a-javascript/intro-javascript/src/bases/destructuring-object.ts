/* Destructuring Object */
enum ROLES {
    ADMIN = 'ADMIN',
    EDITOR = 'EDITOR',
    USER = 'USER',
}

interface ALLROLES {
    ADMIN: string,
    EDITOR: string,
    USER: string,
}
/* type Persona = {
    name: string;
    age: number;
    gender: string;
    role: ROLES;
    allRoles?: ALLROLES; 
};  
ES IGUAL A LO DE ABAJO PERO UNA INTERFACE SE PUEDE EXTENDER A DIFERENCIA DE TYPE
Importante:Al definir la persona como type y querer crear una nueva persona al devolver un type persona no dejaba destructurar allRoles
*/

interface Persona {
    name: string;
    age: number;
    gender: string;
    role: ROLES;
}
interface PersonaAllRoles extends Persona {
   allRoles:ALLROLES
}

let user1: Persona = {
    name: "Facundo",
    age: 20,
    gender: "male",
    role: ROLES.USER,
}

let user2: PersonaAllRoles = {
    name: "Micaela",
    age: 20,
    gender: "female",
    role: ROLES.ADMIN,
    allRoles: ROLES,
}
/* Assignment desctructure */
const {name, role,age}: Persona = user1
console.log(name, role,age)

/* Desctructurin in parameter */
const retornaNombrePersona = ({name}:Persona):string | number =>{
    return  name
}
console.log(retornaNombrePersona(user1))

const setNewPeople = ({name,role,age,gender,allRoles}: PersonaAllRoles): PersonaAllRoles => {
    let newPeople:PersonaAllRoles = {
        name: name,
        age: age,
        gender: gender,
        role: role,
        allRoles: allRoles, //Object con type no dejaba destructurarse
    }
    return newPeople
}
console.log(setNewPeople(user2),'USUARIO 2');

const {name:nameuser2,allRoles:{ADMIN}} = setNewPeople(user2); //Con interface si deja
console.log(nameuser2 ,ADMIN,'TODOS LOS ROLES USUARIO 2');


const checkRole = (currentUser: Persona,...role: string[]): boolean =>{
    // console.log(role)
    if(role.includes(currentUser.role))
    {
        return true
    }
    else{
        return false
    }
}

console.log(checkRole(user1,ROLES.ADMIN ))
console.log(checkRole(user1,ROLES.EDITOR ))
console.log(checkRole(user1,ROLES.USER ))

console.log(checkRole(user2,ROLES.ADMIN ))
console.log(checkRole(user2,ROLES.EDITOR ))
console.log(checkRole(user2,ROLES.USER ))

export {}
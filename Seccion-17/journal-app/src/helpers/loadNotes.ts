import { collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from "../firebase/config";
import { GetNotes } from "../models";

export const loadNotes = async ( uid:string = '') => {
    if(!uid) throw  new Error ( "El UID del usuario no existe");

    const collectionRef =  collection(FirebaseDB,`${uid}/journal/notes`)
    const docs = await getDocs(collectionRef) //Se le puede añadir condiciones como filtros o orden desc o ascendente
    const notes: Array<GetNotes> = [];
    docs.forEach(doc => {
        notes.push({
            id: doc.id,
            ...doc.data()
        } as GetNotes)
    })
    
    return notes
}
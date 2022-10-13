import { doc, getDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';

export const getActiveNote = async ( uid:string | null = '' , idNote:string = '') => {
    if(!idNote) throw  new Error ( "El ID de la nota no existe");
    if(!uid) throw  new Error ( "El ID de usuario no existe");
    const url = `${uid}/journal/notes`;
    const docRef = doc(FirebaseDB, url, idNote);    // const docs = await getDocs(documentRef.)
    try {
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()) {
            return docSnap.data();
        } else {
            console.log("Document does not exist")
        }
    
    } catch(error) {
        console.log(error)
    }
}
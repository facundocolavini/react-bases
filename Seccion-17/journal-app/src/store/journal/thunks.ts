import { collection, doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from "../../firebase/config"
import { getActiveNote, loadNotes } from "../../helpers"
import { CreateNote } from "../../models"
import { AppThunk } from "../store"
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } from "./journalSlice"

export const startNewNote = (): AppThunk => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth; // Saco el id del usuario desde el store
        dispatch(savingNewNote())

        const newNote: CreateNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }
        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`))
        newNote.id = newDoc.id;
        await setDoc(newDoc, newNote)
        dispatch(addNewEmptyNote(newNote))
        dispatch(setActiveNote(newNote))

    }
}

export const startLoadingNotes = ():AppThunk => {
    return async (dispatch, getState) =>{
        const { uid } = getState().auth;
        if(!uid) throw  new Error ( "El UID del usuario no existe");
        const notes = await loadNotes(uid)
        dispatch(setNotes(notes));
    }
}

//Mi solucion para cambiar a mi nota activa actual cuandos e clickea una nota
export const startActiveNote = (idNote:string): AppThunk => {
    return async (dispatch, getState) =>{
        const { uid } = getState().auth;
        const noteActive = await getActiveNote(uid,idNote);
        dispatch(setActiveNote(noteActive));
    }
}
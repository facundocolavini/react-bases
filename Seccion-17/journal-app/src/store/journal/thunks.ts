import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from "../../firebase/config"
import { fileUploadToCloudDinary, getActiveNote, loadNotes, promiseAll } from "../../helpers"
import { CreateNote } from "../../models"
import { AppThunk } from "../store"
import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSavingNote, updatedNote } from "./journalSlice"

export const startNewNote = (): AppThunk => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth; // Saco el id del usuario desde el store
        dispatch(savingNewNote())

        const newNote: CreateNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
            imageUrls: []
        }
        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`))
        newNote.id = newDoc.id;
        await setDoc(newDoc, newNote)
        dispatch(addNewEmptyNote(newNote))
        dispatch(setActiveNote(newNote))

    }
}

export const startLoadingNotes = (): AppThunk => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        if (!uid) throw new Error("El UID del usuario no existe");
        const notes = await loadNotes(uid)
        dispatch(setNotes(notes));
    }
}

//Mi solucion para cambiar a mi nota activa actual cuandos e clickea una nota
export const startActiveNote = (idNote: string): AppThunk => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const noteActive = await getActiveNote(uid, idNote);
        dispatch(setActiveNote(noteActive));
    }
}

// Save and Update Note
export const startSaveNote = (): AppThunk => {
    return async (dispatch, getState) => {
        dispatch(setSavingNote())

        const { uid } = getState().auth;
        const { active: activeCurrentNote } = getState().journal;

        const updateNoteActive = { ...activeCurrentNote }
        // Eliminamos una propiedad de un objetco
        //delete updateNoteActive.id
        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${activeCurrentNote?.id}`);
        //Grabamos en Firebase
        await setDoc(docRef, updateNoteActive, { merge: true })
        dispatch(updatedNote(activeCurrentNote))
    }
}


// UploadFiles con Promise normal y Promise All
export const startUploadingFiles = (files: FileList): AppThunk => {
    return async (dispatch) => {
        dispatch(setSavingNote()) // Estado de carga bloquea botones
        console.log('UPLOAD FILES');
        // Subir un archivo a la vez
        // await fileUploadToCloudDinary(files[0])

        // Subir varios archivos en multiples peticiones de forma simultanea
        const fileUploadPromises: Array<Promise<string | null>> = [];
        for (const file of files) {
            fileUploadPromises.push(fileUploadToCloudDinary(file))
        }



        const photosUrls = await promiseAll(fileUploadPromises);
        dispatch(setPhotosToActiveNote(photosUrls))

    }
}


export const startDeleteNote = (): AppThunk => {
    return async (dispatch, getState) => {
        dispatch(setSavingNote())

        const { uid } = getState().auth;
        const { active: activeCurrentNote } = getState().journal;


        // Eliminamos una propiedad de un objetco
        //delete updateNoteActive.id
        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${activeCurrentNote?.id}`);
        //Grabamos en Firebase
        await deleteDoc(docRef)
        dispatch(deleteNoteById(activeCurrentNote?.id))

    }
}
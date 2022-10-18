
import { createSlice } from '@reduxjs/toolkit'
import { GetNotes, GetActiveNote, Note } from '../../models'

export interface journalState {
  isSaving: boolean,
  messageSaved: string,
  notes: Array<GetNotes>,
  active: GetActiveNote | null
}

const initialState: journalState = {
  isSaving: false,
  messageSaved: '',
  notes: [],
  active: null
}

export const journalSlice = createSlice({
  name: 'journal',
  initialState,
  reducers: {
    // Estado de loading al crear una nota para que el usuario no este creando notas tan rapidamente 
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
      state.notes = [...state.notes, action.payload]
      state.isSaving = false;
    },
    /* Nota seleccionada  */
    setActiveNote: (state, action) => {
      state.active = action.payload
      state.messageSaved = ''
    },
    /* Establece las notas */
    setNotes: (state, action) => {
      state.notes = action.payload
    },
    setSavingNote: (state) => {
      state.isSaving = true;
      state.messageSaved = ''
    },
    updatedNote: (state, action) => {
      state.isSaving = false;
      state.notes = state?.notes.map((note: GetNotes) => (note?.id === action.payload.id ? action.payload : note));
      state.messageSaved = `${action.payload.title}, actualizada correctamente`
    },
    deleteNoteById: (state, action) => {
      state.isSaving = false;
      state.messageSaved = '';
      state.active = null;
      
      state.notes = state.notes.filter(note => note.id !== action.payload )
    },
    setPhotosToActiveNote: (state, action) => {
      if(state.active === null) return
      state.active.imageUrls = [...state.active.imageUrls , ...action.payload]
      state.isSaving = false;
    },
    clearNotesLogOut: (state) =>{
      state.isSaving  = false,
      state.messageSaved = '',
      state.notes = [],
      state.active = null
    }
  },
})

// Action creators are generated for each case reducer function
export const { addNewEmptyNote, setActiveNote, setNotes, setSavingNote, updatedNote, deleteNoteById, savingNewNote, setPhotosToActiveNote, clearNotesLogOut } = journalSlice.actions

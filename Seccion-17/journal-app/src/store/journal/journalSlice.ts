
import { createSlice } from '@reduxjs/toolkit'
import { GetNotes, MessageSavedTypes, Note } from '../../models'

export interface journalState {
  isSaving: boolean,
  messageSaved: MessageSavedTypes,
  notes: Array<GetNotes>,
  active: GetNotes | null
}

const initialState: journalState = {
  isSaving: false,
  messageSaved: 'not-saved',
  notes: [],
  active: null,
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
    },
    /* Establece las notas */
    setNotes: ( state, action ) => {
      state.notes = action.payload
    },
    setSavingNote: (state, action) => {

    },
    updateNote: (state, action) => {

    },
    deleteNoteById: (state, action) => {

    }
  },
})

// Action creators are generated for each case reducer function
export const { addNewEmptyNote, setActiveNote, setNotes, setSavingNote, updateNote, deleteNoteById, savingNewNote } = journalSlice.actions

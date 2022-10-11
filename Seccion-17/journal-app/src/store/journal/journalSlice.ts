
    import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MessageSavedTypes, Note } from '../../models'
    
    export interface journalState {
      isSaving: boolean,
      messageSaved: MessageSavedTypes,
      notes: Array<any>,
      active: null | Note 
    }
    
    const initialState: journalState = {
      isSaving: false,
      messageSaved: 'not-saved'
    }
    
    export const journalSlice = createSlice({
      name: 'journal',
      initialState,
      reducers: {
        addNewEmptyNote : (state) => {

        }
      },
    })
    
    // Action creators are generated for each case reducer function
    export const {  } = journalSlice.actions
 
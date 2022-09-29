// Peticiones https , funciones o tareas asyncronas

import { Action, AnyAction, Dispatch, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import { AppDispatch, RootState, store } from "../../store";
import { startLoadingPokemons } from "./pokemonSlice"
import { AnyAsyncThunk } from '@reduxjs/toolkit/dist/matchers';


// Despacha una accion cuando termine la peticion o de resolverse la funcion asincrona

export const getPokemons = ( page:number = 0 ): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch: Dispatch , getState: any) => {
 
        
        dispatch( startLoadingPokemons() );
        // TODO Realizar peticion http
        
    }
}

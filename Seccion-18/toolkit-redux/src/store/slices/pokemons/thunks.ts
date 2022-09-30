// Peticiones https , funciones o tareas asyncronas

import { pokemonApi } from "../../../api/pokemonApi";
import { AppThunk } from "../../store";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";



// Despacha una accion cuando termine la peticion o de resolverse la funcion asincrona

export const getPokemons = (page: number = 0): AppThunk => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPokemons());
        // TODO Realizar peticion http

        // Fetch API
        // const URL: string = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`;
        // const resp: Response = await fetch(URL);
        // const { results = [] as Pokemon[] } = await resp.json();

        // Axios
        const { data } = await pokemonApi.get(`pokemon?limit=10&offset=${page * 10}`)
        console.log(data);


        // Disparamos nuestra accion el payload puede ser cualquier cosa
        // dispatch de mi action con su payload
        dispatch(setPokemons({
            pokemons: data.results,
            nextPage: page + 1,
            error: null,
            isLoading: false
        }))
    }
}

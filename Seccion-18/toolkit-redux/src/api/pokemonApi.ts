import axios from 'axios';

export interface DataFetch {
    count: number;
    next: string;
    previous: null;
    results: Result[];
}

export interface Result {
    name: string;
    url: string;
}
// Creamos mi instancia
export const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})
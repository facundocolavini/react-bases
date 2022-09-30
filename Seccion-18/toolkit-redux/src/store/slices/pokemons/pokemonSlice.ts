import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Pokemon {
  name: string,
  url?: string
}
export interface PokemonState {
  pokemons: Array<Pokemon>,
  nextPage: number,
  isLoading: boolean,
  error: string | null;
}

const initialState: PokemonState = {
  pokemons: [],
  nextPage: 0,
  isLoading: false,
  error: null
}
// Reducers para hacer peticiones sincronas
export const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action: PayloadAction<PokemonState>) => {
      state.isLoading = action.payload?.isLoading;
      state.nextPage = action.payload?.nextPage;
      state.error = action.payload?.error;
      state.pokemons = action.payload?.pokemons;
    }
  },
})

// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions
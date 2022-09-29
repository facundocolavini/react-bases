import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Pokemon {
    name: string
}
export interface pokemonState {
  pokemons: Array<Pokemon>,
  page: number,
  isLoading: boolean
}

const initialState: pokemonState = {
  pokemons: [],
  page:0,
  isLoading:false
}
// Reducers para hacer peticiones sincronas
export const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
   startLoadingPokemons: (state) => {
    state.isLoading = true;
   },
   setPokemons:(state, action: PayloadAction)=>{
    console.log(action);
   }
  },
})

// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions
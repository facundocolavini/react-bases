import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';
import { getPokemons, Pokemon, PokemonState } from './store/slices/pokemons';

type Props = {};

export const PokemonApp = (props: Props) => {
	//Dispatch para disparar cualquier accion y esta memorizada
	const dispatch: AppDispatch = useDispatch();
	const { pokemons, isLoading, nextPage }: PokemonState = useSelector(
		(state: RootState) => state.pokemons
	);

	useEffect(() => {
		// Disparamos mi accion  asyncrona
		dispatch(getPokemons());
	}, []);

	return (
		<>
			<h1>PokemonApp</h1>
			<hr />
			<span>Loading:{isLoading ? 'True' : 'False'}</span>
			<ul>
				{pokemons.map(({ name }: Pokemon) => (
					<li key={name}>
						<span>{name}</span>
					</li>
				))}
			</ul>
			<button
				disabled={isLoading}
				onClick={() => dispatch(getPokemons(nextPage))}
				style={{ border: '1px solid black' }}
			>
				Next
			</button>
		</>
	);
};

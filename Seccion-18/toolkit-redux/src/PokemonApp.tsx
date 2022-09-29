import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemons } from './store/slices/pokemons';

type Props = {}
export const PokemonApp = (props: Props) => {

    //Dispatch para disparar cualquier accion y esta memorizada
    const dispatch = useDispatch()

    
    useEffect(() => {
        // Disparamos mi accion  asyncrona
        dispatch(getPokemons(10));
    }, [])
    

    return (
        <>  
            <h1>PokemonApp</h1>
            <hr />

            <ul>
                <li>Hola</li>
                <li>Hola</li>
                <li>Hola</li>
            </ul>
        </>
    )
}
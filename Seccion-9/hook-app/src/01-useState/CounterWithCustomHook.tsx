import { useCounter } from '../hook/useCounter';

type Props = {

}

export const CounterWithCustomHook = (props: Props): JSX.Element => {
    
    const { counter, increment, decrement, reset} = useCounter(10);
    
    return (
        <>
            <h1>Counter with Hook: {counter}</h1>
            <hr/>
            <button onClick={ ()=>decrement(5) } type="button" className="btn btn-primary" >-1</button>
            <button onClick={ reset } type="button" className="btn btn-secondary" >Reset</button>
            <button onClick={ ()=>increment(5) } type="button" className="btn btn-primary" >+1</button>
        </>
    )
}
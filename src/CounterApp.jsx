import { useState } from 'react';
import PropTypes from 'prop-types';


export const CounterApp = ({value}) => {


    const [counter, setCounter] = useState(value)

    const handleAdd = ()=>{
       // setCounter( counter + 1);
       //otra opcion
       setCounter((c)=> c + 1);
    }

    const handleSub = ()=>{
        setCounter((c)=> c - 1);
    }

    const handleReset = ()=>{
        setCounter((c)=> c = value);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }>
                +1
            </button>
            <button onClick={ handleSub }>
                -1
            </button>
            <button aria-label='btn-reset' onClick={ handleReset }>
                Reset
            </button>
        </>
    )
}


CounterApp.propTypes={
    value: PropTypes.number.isRequired
}

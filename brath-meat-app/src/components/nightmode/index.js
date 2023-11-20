import React, { useState } from 'react'

function Nightmode( {setNightmode} ) {

    const [state, setState] = useState(false);
    const [symbol, setSymbol] = useState(true)

    const windowExpander = () => {
        setState((prevState) => !prevState)
    }
    const clickHandler = () => {
        setNightmode((prevState) => !prevState)
        setSymbol((prevState) => !prevState)
        setState(false)
    }

    return (
        <div 
            className='nightmode'
        >
            <div 
            onClick={windowExpander}
            className='night-button'
            style={state ? {} : {transform: "translateY(50px)"}}
            >
                {
                state ? 
                <span className="expand material-symbols-outlined">expand_more</span>
                :
                <span className="expand material-symbols-outlined">expand_less</span>}
            </div>
            <div 
                className='nightmode-container'
                style={state ? {} : {transform: "translateY(50px)"}}
            >
                <span 
                onClick={clickHandler}
                className="moon-symbol material-symbols-outlined">
                    {symbol ? "light_mode" : "dark_mode"}</span>
            </div>
        </div>
    )
}

export default Nightmode
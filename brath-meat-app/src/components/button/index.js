import React, { useState } from 'react'

function Button({text, look}) {

    const [button, setButton] = useState(false);

const clickHandler = () => {
    setButton(true)
    setTimeout(() => {
        setButton(false)
    }, 150)
}


    return (
        <>
        <div 
            className={`my-button ${button ? `${look}-click` : `${look}`}`}
            onClick={clickHandler}
            >{text}</div>
        </>
    )
}

export default Button

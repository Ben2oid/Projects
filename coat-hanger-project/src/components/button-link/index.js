import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import AllValuesNeeded from '../../hooks';


function ButtonLink() {

    const { setRecievedData } = useContext(AllValuesNeeded);

    const [click, setClick] = useState(false);
    const clickHandler = () => {
        setRecievedData()
        setClick(true)
        setTimeout(() => {setClick(false)}, 100)
}

    return (
    <>
        <Link to={"/stats"} className='link'>
            <button 
                className='blue-button'
                onMouseDown={clickHandler}
                style = {
                click ? {filter: "brightness(0.5)"} : {}
                }
            >
            <div className='big-text'>
                ELKÜLDÖM
            </div>
            </button>              
        </Link>
    </>
    )
}

export default ButtonLink
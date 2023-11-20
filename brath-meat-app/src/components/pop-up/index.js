import React, { useEffect, useState } from 'react'
import Button from '../button';

function PopUp() {

    const [state, setState] = useState(false)
    const clickHandler = () => {
        setState(false)
    }

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setState(true)
        }, 5000)

        return () => {
            clearTimeout(timeOut)
        };
    }, []);


    return (
        <div 
            className='popup'
            style={
                state ? {display: "flex"} : {display: "none"}
            }
        >
            <div className='popup-container'>
                <div 
                    className='exit-container'
                    onClick={clickHandler}
                    >
                    <span className="exit material-symbols-outlined">
    close
    </span>
                </div>
                <h1>Get 15% percent off by signing up!</h1>
                <form className='email-form'>
                    <label htmlFor="email">Email:</label>
                    <input type={"email"} id="emial" name="email" required></input>
                    <Button text={<p>Subscribe</p>} look={"filled"} />
                </form>
            </div>
        </div>
    )
}

export default PopUp
import React, { useEffect, useState } from 'react'
import Button from '../button';

function Parallax({image}) {

    const [scrollY, setScrollY] = useState();
    const [innerWidth, setInnerWidth] = useState()

    useEffect(() => {
        const measureHeight = () => setScrollY(window.scrollY)
        const measureInnerWidth = () => setInnerWidth(window.innerWidth)

        measureHeight()
        measureInnerWidth()

        window.addEventListener("scroll", measureHeight)
        window.addEventListener("resize", measureInnerWidth)

        return () => {
            window.removeEventListener("scroll", measureHeight)
            window.removeEventListener("resize", measureInnerWidth)
        };
    }, []);

    const widthFunc = () => {
        if (innerWidth > 1380) {
            return {transform: `translateY(${(scrollY-scrollY+300)-(scrollY/10)**1.2}px)`}
        } else if (innerWidth > 680) {
            return {transform: `translateY(${(scrollY-scrollY+200)-(scrollY/10)}px)`}
        } else {
            return {transform: `translateY(${(scrollY-scrollY+400)-(scrollY/10)}px)`}
        }
    }

  return (
    <>
        <div className='parallax-container'>
            <div className='parallax-inner'>
                <img
                    alt='meat'
                    className='parallax-image' 
                    src={image}
                    style={widthFunc()}
                >
                    </img>
            </div>
        </div>
    </>
  )
}

export default Parallax
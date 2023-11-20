import React, { useEffect, useState } from 'react'
import CarouselItems from '../carousel-items'

function TextCarousel() {

  const [count, setCount] = useState(2);
  const [numOfItems, setNumOfItems] = useState(0);
  const [width, setWidth] = useState(window.innerWidth)

  const addNumber = () => {
    setCount((count + 1) % numOfItems)
  }
  const remNumber = () => {
    if (count <= 0) {
      setCount(numOfItems - 1)
    } else {
      setCount(count - 1)
    }
  }
  

  useEffect(() => {
    const ScreenWidth = () => setWidth(window.innerWidth)
    window.addEventListener("resize", ScreenWidth)

    return () => {
      window.removeEventListener("resize", ScreenWidth)
    };
  }, []);

  const widthOfComments = () => {
    if (width < 650) {
      return 300
    } else {
      return 400
    }
  } 
  const marginSize = 40
  const setDistance = widthOfComments() + (marginSize * 2)

  return (
    <div className='text-carousel-main'>
        <div 
        className='main-text-container'
        style={{transform: `translateX(${setDistance*((numOfItems-1)*0.5)-setDistance*count}px)`}}
        >
          <CarouselItems count={count} setNumOfItems={setNumOfItems} widthOfComments={widthOfComments()} marginSize={marginSize}/>
        </div>
        <div className='txtcarousel-buttons-container'>
            <div className='txtcarousel-buttons'>
              <div 
                className='txtcarousel-prv'
                onClick={remNumber}>
                <span className="txtbtn material-symbols-outlined">
    arrow_circle_left
    </span>
              </div>
              <div 
                className='txtcarousel-fwd'
                onClick={addNumber}
                >
                <span className="txtbtn material-symbols-outlined">
    arrow_circle_right
    </span>
              </div>
            </div>
          </div>
          <div className='comment-coverer'>
            <div className='cover'>
            </div>
            <div className='trans-cover'>
            </div>
            <div className='cover'>
            </div>
          </div>
    </div>
  )
}

export default TextCarousel
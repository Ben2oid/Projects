import React, { useContext, useEffect, useState } from 'react'
import {v4 as uuid} from "uuid"
import AllValuesNeeded from '../../hooks';

const sweaters = [
  {num: 0, name: "sweater-blue", src: "./assets/sweater1.png", altSrc: "./assets/sweater-blue.png"},
  {num: 1, name: "sweater-darkgreen", src: "./assets/sweater2.png", altSrc: "./assets/sweater-darkgreen.png"},
  {num: 2, name: "sweater-white1", src: "./assets/sweater3.png", altSrc: "./assets/sweater-white.png"},
  {num: 3, name: "sweater-red", src: "./assets/sweater4.png", altSrc: "./assets/sweater-red.png"},
  {num: 4, name: "sweater-green", src: "./assets/sweater5.png", altSrc: "./assets/sweater-green.png"},
  {num: 5, name: "sweater-white2", src: "./assets/sweater6.png", altSrc: "./assets/sweater-white.png"},
  {num: 6, name: "sweater-beige", src: "./assets/sweater7.png", altSrc: "./assets/sweater-beige.png"},
  {num: 7, name: "sweater-lightgreen", src: "./assets/sweater8.png", altSrc: "./assets/sweater-lightgreen.png"},
  {num: 8, name: "sweater-maroon", src: "./assets/sweater9.png", altSrc: "./assets/sweater-maroon.png"},
  {num: 9, name: "sweater-green2", src: "./assets/sweater10.png", altSrc: "./assets/sweater-green2.png"},
  {num: 10, name: "sweater-blue", src: "./assets/sweater11.png", altSrc: "./assets/sweater-blue.png"},
  {num: 11, name: "sweater-lightblue", src: "./assets/sweater12.png", altSrc: "./assets/sweater-lightblue.png"},

]

function CoatHanger( ) {

  const {width, setDropped, setSweater, setDrag, removables, drag } = useContext(AllValuesNeeded);

  const [position1, setPosition1] = useState();
  const [position2, setPosition2] = useState();
  const [position3, setPosition3] = useState();
  const [position4, setPosition4] = useState();

  const [selectedSweaterPos, setSelectedSweaterPos] = useState({x: 0, y: 0})

  //This function checks the position of the shelves

  useEffect(() => {

    const getPositions = () => {
      setTimeout(() => {
        const element0 = document.querySelector(`.shelf0`)
        const rect0 = element0.getBoundingClientRect()
        setPosition1({x: rect0.left + rect0.width / 2, y: rect0.top + rect0.height/2, width: rect0.width, height: rect0.height})
      const element1 = document.querySelector(`.shelf1`)
        const rect1 = element1.getBoundingClientRect()
        setPosition2({x: rect1.left + rect1.width / 2, y: rect1.top + rect1.height/2, width: rect1.width, height: rect1.height})
      const element2 = document.querySelector(`.shelf2`)
        const rect2 = element2.getBoundingClientRect()
        setPosition3({x: rect2.left + rect2.width / 2, y: rect2.top + rect2.height/2, width: rect2.width, height: rect2.height})
      const element3 = document.querySelector(`.shelf3`)
        const rect3 = element3.getBoundingClientRect()
        setPosition4({x: rect3.left + rect3.width / 2, y: rect3.top + rect3.height/2, width: rect3.width, height: rect3.height})
      }, 100)
    }
    getPositions()
  }, [selectedSweaterPos]);

  const allPositions = [position1, position2, position3, position4]

  const [offset, setOffset] = useState({x: 0, y: 0});
  const [selected, setSelected] = useState("");

  //these functions are responsible for handling the touch events of the sweaters. When they are being clicked, dragged and released.

  const handlePointerDown = (e, item) => {
    setDrag(true)
    setMouseUp(false)
    setDropped(null)
    setSelected(item)
    setSweater(item)
    const element = document.querySelector(`.sweater${item.num}`)
    document.addEventListener("pointermove", handlePointerMove)
    document.addEventListener("pointerup", handlePointerUp)
    const rect = element.getBoundingClientRect()
    setOffset({x: e.clientX, y: e.clientY})
    element.setPointerCapture(e.pointerId)
    setSelectedSweaterPos({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
      })
  }

  const handlePointerMove = (e) => {
      setOffset({x: e.clientX, y: e.clientY})
  }

  const handlePointerUp = () => {
    setDrag(false)
    setMouseUp(true)
    document.removeEventListener("pointermove", handlePointerMove)
    document.removeEventListener("pointerup", handlePointerUp)
  }

  const [mouseUp, setMouseUp] = useState(true)

  //this code is responsible to figure out if the dragged sweater is above one of the shelves.

  useEffect(() => {
    const sweaterOnShelf = () => {
      if (allPositions[3]) {
        allPositions.forEach((_, index) => {
          if (offset.x - allPositions[index].x < allPositions[0].width / 2
          &&
          offset.x - allPositions[index].x > (- allPositions[0].width / 2)
            && 
            (- (offset.y - allPositions[index].y)) < allPositions[0].height/2
            && 
            (- (offset.y - allPositions[index].y)) > - allPositions[0].height/2
            ) {
              setDropped(`${index}`)
            } else if (
              (width > 960)
              &&
              (((- (offset.y - allPositions[3].y)) > allPositions[3].height * 1.1)
              || 
              (- (offset.y - allPositions[index].y)) < - allPositions[3].height)
            ) {
              setDropped(null)
            }  else if (
              ((- (offset.y - allPositions[3].y)) > allPositions[3].height * 1.1)
              ||
              (offset.x - allPositions[3].x < allPositions[0].width /2
              &&
              offset.x - allPositions[3].x < -(allPositions[0].width /2))
            ) {
              setDropped(null)
            }
          })
        }
          }
      sweaterOnShelf()
  })


  return (
    <div draggable={false} className='coat-hanger-container'>
      <div draggable={false} className='coat-hanger'>
        <img draggable={false} alt="coat-hanger" src='./assets/background02.png'></img>
        <div draggable={false} className='sweater-container'>
          <div draggable={false}  className='sweaters'>
            {sweaters.map((sweater) => {
              return(
                  <div
                    key={uuid()} 
                    className={`sweater`}
                    >                    
                    <img 
                      draggable={false}
                      style={
                          (removables.includes(sweater.num))
                          ?
                          {display: "none"}
                          :
                          (selected.num === sweater.num && !mouseUp) 
                          ?
                          {left: `${offset.x - selectedSweaterPos.x}px`,
                            top: `${offset.y - selectedSweaterPos.y}px`}
                          :
                          {}
                        }
                      onPointerDown={(e) => handlePointerDown(e, sweater)}
                      alt={sweater.name} 
                      src={sweater.src}
                      className={
                        `sweater${sweater.num}`
                      }></img>
                  </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoatHanger
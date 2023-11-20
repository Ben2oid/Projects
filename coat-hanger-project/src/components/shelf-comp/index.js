import React, { useContext, useEffect, useState } from 'react'
import {v4 as uuid} from "uuid"
import AllValuesNeeded from '../../hooks';

function ShelfComp( { shelf } ) {

  const { shelvesData, setShelvesData } = useContext(AllValuesNeeded);

  const [lengths, setLengths] = useState(shelf.items.length)

  useEffect(() => {
      setLengths(shelf.items.length)
  }, [shelf, lengths, shelvesData]);

  const handlePointerDown = () => {
    const droppedIndex = parseInt(shelf.num);
    const updatedShelvesData = [...shelvesData];

    updatedShelvesData[droppedIndex].items.pop()
    updatedShelvesData[droppedIndex].itemToRemove.pop()

    setShelvesData(updatedShelvesData)
  }

  return (
    <div className={`shelf-comp`}>
      <div className='shelf-container'
        onPointerDown={handlePointerDown}
      >
        <div className='clothes-container'>
          <div 
            className='clothes'
            >  
              {shelf.items.slice().reverse().map((item) => {
                return(
                  <img alt="sweater" key={uuid()} src={item}></img>
                )
              })}
          </div>
        </div>
        <img
          draggable={false} 
          alt={`shelf${shelf.num}`} 
          className={`shelf shelf${shelf.num}`} 
          src='./assets/shelf.png'
          > 
        </img>
      </div>
      <div className='big-number'>
        {lengths}
      </div>
      <div className='descrip'>
        {shelf.descrip}
      </div>
    </div>
  )
}

export default ShelfComp
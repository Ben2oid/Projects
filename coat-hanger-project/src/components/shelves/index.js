import React, { useContext, useEffect } from 'react'
import ShelfComp from '../shelf-comp'
import {v4 as uuid} from "uuid"
import AllValuesNeeded from '../../hooks';



function Shelves( ) {

  const { drag, dropped, sweater, setShelvesData, shelvesData, setSweater} = useContext(AllValuesNeeded);

  useEffect(() => {
    if (drag === false && Boolean(dropped) && sweater) {
      shelvesData[parseInt(dropped)].items.push(sweater.altSrc)
      shelvesData[parseInt(dropped)].itemToRemove.push(sweater.num)
      setSweater()  
    }
    setShelvesData(shelvesData)
  }, [drag, dropped, shelvesData, sweater, setShelvesData, setSweater]);

  return (
    <div className='shelves-container'>
      {shelvesData.slice().reverse().map((shelf) => {
        return(
          <div className='shelf-comp-main' key={uuid()}>
            <ShelfComp shelf={shelf}/>
          </div>
        )
      })}
    </div>
  )
}

export default Shelves
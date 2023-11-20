import React, { useContext, useState } from 'react'
import AllValuesNeeded from '../../hooks';

function Button() {

  const [click, setClick] = useState(false);

  const {setShelvesData, setRemovables, removables} = useContext(AllValuesNeeded)

  const clickHandler = () => {
    setClick(true)
    setTimeout(() => {setClick(false)}, 100)
    setRemovables([])
    setShelvesData([
      {num: 0, items: [], itemToRemove: [], descrip: "Lámpás ’92 Közhasznú Alapítvány"},
      {num: 1, items: [], itemToRemove: [], descrip: "Autizmus Alapítvány"},
      {num: 2, items: [], itemToRemove: [], descrip: "NOÉ Állatotthon Közhasznú Alapítvány"},
      {num: 3, items: [], itemToRemove: [], descrip: "Szent István Király Zenei Alapítvány"},
    ])
  }

  return (
    <button 
    onMouseDown={clickHandler}
    style = {
      removables.length === 0 ?
      {opacity: 0}
      :
      click 
      ? 
      {filter: "brightness(0.5)"} 
      :
      {}
    }
    >
      <div className='big-text'>
        VISSZAÁLLÍTÁS
      </div>
    </button>
  )
}

export default Button
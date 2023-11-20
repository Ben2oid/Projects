import React, { useContext } from 'react'
import CoatHanger from '../coat-hanger'
import Shelves from '../shelves'
import ButtonLink from '../button-link';
import Button from '../button';
import AllValuesNeeded from '../../hooks';

function MainComp() {

  const { removables } = useContext(AllValuesNeeded);

  return (
    <div draggable={false} className='main-container'>
        {removables.length > 11 ? 
          <ButtonLink />
        : ""}
        <CoatHanger />
        <Shelves />
        <Button />
        
    </div>
  )
}

export default MainComp
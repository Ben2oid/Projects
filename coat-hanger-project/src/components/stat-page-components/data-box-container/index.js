import React, { useContext, useEffect, useState } from 'react'
import StatData from '../../../hooks/StatContext';
import DataBox from '../data-box-comp'
import {v4 as uuid} from "uuid"

function DataBoxContainer() {

  const {dataBox, formattedDate} = useContext(StatData);

  return (
    <div className='data-box-container-main'>
      {dataBox.map((item) => {
        return(
          <DataBox key={uuid()} item={item}/>
        )
      })}
      <div className='date-main'>
        <div style={{color: "black"}} className='description-databox big-text'>
          {`Utolsó adat elküldve: `}
        </div>
        <p>
          {`${formattedDate}`}
        </p>          
      </div>
    </div>

  )
}

export default DataBoxContainer
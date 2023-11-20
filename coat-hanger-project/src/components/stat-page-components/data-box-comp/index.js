import React from 'react'

function DataBox( {item} ) {

  return (
    <div className='databox-main'>
      <div style={{color: "black"}} className='description-databox big-text-databox'>
        {item.descrip}
      </div>
      <div className='big-number-databox'>
        {item.value}
      </div>          
    </div>      
  )
}

export default DataBox
import React from 'react'


function CompLeft( {left, leftBackgroundColor, leftBackground, leftPosition} ) {


  return (
    <div 
        className='container-left'
        style={
            (leftBackground === "none") 
            ? {
              backgroundColor: leftBackgroundColor,
              float: leftPosition,
            }
            : {
              background: `url("${leftBackground}")`,
              float: leftPosition
            }
        }
    >
        {left}
    </div>
  )
}

export default CompLeft

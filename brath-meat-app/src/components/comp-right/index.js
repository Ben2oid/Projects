import React from 'react'

function CompRight({right, rightBackgroundColor, rightBackground, rightPosition}) {
  return (
    <div className='container-right'
      style={
        (rightBackground === "none") 
        ? {
          backgroundColor: rightBackgroundColor,
          float: rightPosition
        }
        : {
          background: `url("${rightBackground}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          float: "right",
        }
      }      
    >
      {right}
    </div>
  )
}

export default CompRight

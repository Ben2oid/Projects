import React from 'react'
import CompLeft from '../comp-left'
import CompRight from '../comp-right'

function CompMain( {left, right, main, mainBackgroundColor, leftBackgroundColor, leftBackground, leftPosition, rightBackgroundColor, rightBackground, rightPosition} ) {

    return (
        <div
            className='container-main'
            style={{
                backgroundColor: mainBackgroundColor
            }}
        >
            {main}
            <CompLeft 
                left={left}
                leftBackgroundColor={leftBackgroundColor}
                leftBackground={leftBackground}
                leftPosition={leftPosition}
             />
            <CompRight 
                right={right}
                rightBackgroundColor={rightBackgroundColor}
                rightBackground={rightBackground}
                rightPosition={rightPosition}
            />
        </div>
    )
}

export default CompMain

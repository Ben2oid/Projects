import React from 'react'
import DataBoxContainer from "../data-box-container"
import ScoreBoard from "../score-board"
import ColumnStat from "../column-stat"

function StatMainPage() {

  return (
    <div className='stat-main'>
      <div className='top-part'>
        <DataBoxContainer />
        <ScoreBoard />
      </div>
      <div className='bottom-part'>
        <ColumnStat />
      </div>
    </div>
  )
}

export default StatMainPage
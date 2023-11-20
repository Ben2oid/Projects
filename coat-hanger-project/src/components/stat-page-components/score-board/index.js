import React, { useContext, useEffect, useState } from 'react'
import StatData from '../../../hooks/StatContext';
import DataRow from '../data-row';
import {v4 as uuid} from "uuid"

function ScoreBoard() {


  const [click, setClick] = useState(1);
  const [nextPage, setNextPage] = useState(1);
  const {dataArray, sort, setSort} = useContext(StatData);

  const clickAdd = () => {
    if (click < (Math.round(dataArray.length / 10))) {
      setClick(click + 1)
    } else {
      setClick((Math.round(dataArray.length / 10)))
    }
  } 
  const clickTake = () => {
    if (click > 1) {
      setClick(click - 1)
    } else {
      setClick(1)
    }
  }
  const pagClickHandler = (index) => {
    setClick(index + 1)
  }
  const clickHandler = () => {
    setSort(prevState => !prevState)
  }
  
  const handleNextPage = () => {
    setNextPage(nextPage + 1)
  }
  const handleNextPageBack = () => {
    setNextPage(nextPage - 1)
  }

  useEffect(() => {
    setClick(1 + ((nextPage-1) * 10))
  }, [nextPage])

  useEffect(() => {
    if (nextPage !== parseInt(((click - 1) / 10) + 1)) {
      setNextPage(parseInt(((click - 1) / 10) + 1))
    }
  }, [click])

  return (
    <div className='scoreboard-main'>
      <h2>Beküldők adatai</h2>
      <div className='scrbrd-dscrp'>
          <h6>Num</h6>
          <h6>Beküldő/Alapítvány</h6>
          <h6>IP cím</h6>
          <h6 
            className='btn'
            onClick={clickHandler}
            style={{
              cursor: "pointer",
              backgroundColor: "grey",
            }}
          >{sort ? <span className="material-symbols-outlined">expand_more</span> : <span className="material-symbols-outlined">expand_less</span>}</h6>
          <h6>Töröl</h6>
        </div>
      <div className='datasheet-panel'>
        {!sort 
          ?
          dataArray.map((item, index) => {
            if (index >= 10 * (click - 1) && index < 10 * click) {
              return (
                <div key={uuid()} className='datarow-container'>
                  <DataRow item={item} index={index}/>
                </div>
              )
            }
          })
          :
          dataArray.slice().reverse().map((item, index) => {
            if (index >= 10 * (click - 1) && index < 10 * click) {
              return (
                <div key={uuid()} className='datarow-container'>
                  <DataRow item={item} index={index}/>
                </div>
              )
            }
          })
      }
      </div>
      <div className='button-main'>
        <div className='button-container'>
          <div className='btn-prev btn' onClick={clickTake}>
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </div>
          <div 
            className='expand-dots btn'
            onClick={handleNextPageBack}
            >
            {dataArray.length > 10 && nextPage > 1 ?
            <h6>...</h6>
            : ""
            }
          </div>
          <div className='pagination'>
            {dataArray.map((_, index) => {
              if (index < Math.round(dataArray.length /10)) {
                if (index >= 10 * (nextPage - 1) && index < 10 * nextPage) {
                  return(
                    <span
                      key={uuid()}
                      className="material-symbols-outlined pag btn"
                      style={index === click -1 ? {color: "white"} : {}}
                      onClick={() => pagClickHandler(index)}
                    >
                    radio_button_unchecked</span>
                  )
                }
              }
            })}
          </div>
          <div className='expand-dots btn'
          onClick={handleNextPage}
          >
            {dataArray.length > 10 && dataArray.length / 100 > nextPage ?
            <h6>...</h6>
            : ""
            }
          </div>
          <div className='btn-frwd btn' onClick={clickAdd}>
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </div>
        </div>
        <div className='pag-pages'>
            {`${nextPage}/${Math.round(dataArray.length / 100)}`}
        </div>
      </div>
    </div>
  )
}

export default ScoreBoard
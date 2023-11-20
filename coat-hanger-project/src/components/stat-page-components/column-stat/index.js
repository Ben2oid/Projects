import React, { useContext } from 'react'
import {v4 as uuid} from "uuid"
import StatData from '../../../hooks/StatContext';

function ColumnStat() {

  const {lengthOfjsonAllData, recievedData, szent, noé, autizmus, lámpás} = useContext(StatData);


  var value = 0
  let bigValue = 0

  const checkValue = () => {
    recievedData.sumData.allSends.map((num) => {
      if (num > bigValue) {
        bigValue = num
      }
      value = bigValue / 30
    })
  }

  checkValue()

  return (
    <div className='column-main'>
      <div className='column-container'>
        <h1>Column stat</h1>
        <div className='data-container'>
          <div className='columns'>
            <div className='colum-container'>
              <p>{lengthOfjsonAllData}</p>
              <div key={uuid()} className='column'
                style={{height: `${lengthOfjsonAllData / value}vw`}}
              >
              </div>
              <h5>Összes beküldő</h5>
            </div>
            <div className='colum-container'>
              <p>{szent}</p>
              <div key={uuid()} className='column'
                style={{height: `${szent / value}vw`}}
              >
              </div>
              <h5>Szent István Király Zenei Alapítvány</h5>
            </div>
            <div className='colum-container'>
              <p>{noé}</p>
              <div key={uuid()} className='column'
                style={{height: `${noé / value}vw`}}
              >
              </div>
              <h5>Noé Állatotthon Közhasznú Alapítvány</h5>
            </div>
            <div className='colum-container'>
              <p>{autizmus}</p>
              <div key={uuid()} className='column'
                style={{height: `${autizmus / value}vw`}}
              >
              </div>
              <h5>Autizmus Alapítvány</h5>
            </div>
            <div className='colum-container'>
              <p>{lámpás}</p>
              <div key={uuid()} className='column'
                style={{height: `${lámpás / value}vw`}}
              >
              </div>
              <h5>Lámpás '92 Közhasznú Alapítvány</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColumnStat
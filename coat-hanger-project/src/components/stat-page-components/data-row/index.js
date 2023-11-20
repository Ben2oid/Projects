import React from 'react'
import DelButton from '../del-button';

function DataRow( {item, index} ) {

  const inputDate = new Date(item[1]);

  const year = inputDate.getFullYear();
  const month = new Intl.DateTimeFormat("hu-HU", { month: "short" }).format(inputDate);
  const day = String(inputDate.getDate()).padStart(2, "0");
  const hour = String(inputDate.getHours()).padStart(2, "0");
  const minute = String(inputDate.getMinutes()).padStart(2, "0");
  const second = String(inputDate.getSeconds()).padStart(2, "0");

  const formattedDate = `${year} ${month} ${day}. ${hour}:${minute}:${second} CEST`;

  return (
    <div className='datarow-main'>
        <div className='parcell'>
          <p>{index + 1}</p>
        </div>
        <div className='org-name-by-user parcell'>
          <div className='organization'>
            <p>Szent</p>
            <div className='number-of-vote'>
              <p>{item[2]}</p>
            </div>
          </div>
          <div className='organization'>
            <p>Noé</p>
            <div className='number-of-vote'>
              <p>{item[3]}</p>
            </div>
          </div>
          <div className='organization'>
            <p>Autizmus</p>
            <div className='number-of-vote'>
              <p>{item[4]}</p>
            </div>
          </div>
          <div className='organization'>
            <p>Lámpás</p>
            <div className='number-of-vote'>
              <p>{item[5]}</p>
            </div>
          </div>                      
        </div>
        <div className='ip-address parcell'>
          <p>{item[0]}</p>
        </div>
        <div className='time-date parcell'>
          <p>{formattedDate}</p>
        </div>
        <div className='delete-button parcell'>
          <DelButton index={index} />
        </div>
    </div>
  )
}

export default DataRow
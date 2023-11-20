import React, { useContext } from 'react'
import StatData from '../../../hooks/StatContext';

function DelButton( {index} ) {

  const { setDataArray, dataArray, sort, lengthOfjsonAllData, setLengthOfjsonAllData, setSzent, setNoé, setAutizmus, setLámpás, szent, noé, autizmus, lámpás } = useContext(StatData);

  const handleClick = () => {

    var dataToDel
    const updatedArray = [...dataArray]
    console.log(updatedArray)
    if (sort) {
      dataToDel = lengthOfjsonAllData + 3 - index
      setSzent(szent - updatedArray[lengthOfjsonAllData - 1 - index][2])
      setNoé(noé - updatedArray[lengthOfjsonAllData - 1 - index][3])
      setAutizmus(autizmus - updatedArray[lengthOfjsonAllData - 1 - index][4])
      setLámpás(lámpás - updatedArray[lengthOfjsonAllData - 1 - index][5])
      updatedArray.splice(lengthOfjsonAllData - 1 - index, 1)
      setDataArray(updatedArray)
      setLengthOfjsonAllData(lengthOfjsonAllData - 1)
      
    } else {
      dataToDel = index + 4
      setSzent(szent - updatedArray[index][2])
      setNoé(noé - updatedArray[index][3])
      setAutizmus(autizmus - updatedArray[index][4])
      setLámpás(lámpás - updatedArray[index][5])
      updatedArray.splice(index, 1)
      setDataArray(updatedArray)
      setLengthOfjsonAllData(lengthOfjsonAllData - 1)
    }

    var formData = new FormData()

    formData.append("rowToDelete", dataToDel)

    const url = `https://script.google.com/macros/s/AKfycbytnSueZFxe3nFq31mZ20_Eenax1gZPBG3mQTycIeBQp-txu9gBcACwau0QQ2N6evBw/exec`

    fetch(url, {
      redirect: "follow",
      method: "POST",
      body: formData
    }).then(res => res.json).catch(err => console.log(err, "Error"))
  }

  return (
    <div className='btn'>
        <span onClick={handleClick} className="material-symbols-outlined closebtn">close</span>
    </div>
  )
}

export default DelButton
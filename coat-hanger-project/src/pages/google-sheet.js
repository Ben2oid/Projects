import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import StatMainPage from '../components/stat-page-components/stat-main-page';
import AllValuesNeeded from '../hooks';
import StatData from '../hooks/StatContext';

const id = "AKfycbxStUMVKK6byhT_gKfmxip8cxc0R-g3yq-jt0VZlzjElTmyIlBgRZasfFT8TBk0gysf"

function GoogleSheet() {

    const [sort, setSort] = useState(false);
    const [dataArray, setDataArray] = useState([])
    const [formattedDate, setFormattedDate] = useState();
    const [lengthOfjsonAllData, setLengthOfjsonAllData] = useState(0)
    const [szent, setSzent] = useState(0)
    const [noé, setNoé] = useState(0)
    const [autizmus, setAutizmus] = useState(0)
    const [lámpás, setLámpás] = useState(0)

    const {shelvesData, recievedData, setRecievedData} = useContext(AllValuesNeeded);


    //Sending off and gathering information to the Google Sheet document

    useEffect(() => { 
        const postData = () => {
            setRecievedData()
            if (!shelvesData) {
                return <Navigate to="/"/>
            } else {
            const capture = shelvesData
            var formData = new FormData()
        
            capture.map((array) => {
                return formData.append(array.num, array.items.length)
            })

            const url = `https://script.google.com/macros/s/${id}/exec`
    
            fetch(url, {
                redirect: "follow",
                method: "POST",
                body: formData
            })
            .then(res => res.json())
            .then(res => setRecievedData(res))
            .catch(error => console.log(error.message))
        }}

        postData()
    }, [shelvesData, setRecievedData])

    //Gathering values to send over to StatData useContext element

    let dataBox = []
    let values = {}

    useEffect(() => {
        if (recievedData) {
            setLengthOfjsonAllData(Object.entries(recievedData.jsonAllData).length)
        }
    }, [recievedData])
    
    useEffect(() => {
        if (recievedData) {
            const newDataArray = [];
            for (let i = 0; i < Object.entries(recievedData.jsonAllData).length; i++) {
                newDataArray.push(recievedData.jsonAllData[i]);
            }
            setDataArray(newDataArray);
            console.log(dataArray)
        }
    }, [recievedData]);
    
    const calculateFormattedDate = () => {
        if (recievedData && dataArray.length > 0) {
            let inputDate = new Date(recievedData.jsonAllData[dataArray.length - 1][1]);
            let year = inputDate.getFullYear();
            let month = new Intl.DateTimeFormat("hu-HU", { month: "short" }).format(inputDate);
            let day = String(inputDate.getDate()).padStart(2, "0");
            let hour = String(inputDate.getHours()).padStart(2, "0");
            let minute = String(inputDate.getMinutes()).padStart(2, "0");
            let second = String(inputDate.getSeconds()).padStart(2, "0");
            
            setFormattedDate(`${year} ${month} ${day}. ${hour}:${minute}:${second} CEST`);
        } else {
            setFormattedDate("No data to show")
        }
    }

    useEffect(() => {
        calculateFormattedDate()
    }, [dataArray, recievedData]);

    useEffect(() => {
        if (recievedData) {
            setSzent(recievedData.sumData.allSends[0])
            setNoé(recievedData.sumData.allSends[1])
            setAutizmus(recievedData.sumData.allSends[2])
            setLámpás(recievedData.sumData.allSends[3])
        }
    }, [recievedData])

    

    if (recievedData) {

        dataBox = [
          {num: 0, descrip: "Küldők száma: ", value: lengthOfjsonAllData},
          {num: 1, descrip: "Szent István Király Zenei Alapítvány: ", value: szent},
          {num: 2, descrip: "Noé Állatotthon Közhasznú Alapítvány: ", value: noé},
          {num: 3, descrip: "Autizmus Alapítvány: ", value: autizmus},
          {num: 4, descrip: "Lámpás '92 Közhasznú Alapítvány: ", value: lámpás},
        ]

          values = {
            setSzent,
            szent,
            setNoé,
            noé,
            setAutizmus,
            autizmus,
            setLámpás,
            lámpás,
            setSort,
            sort,
            recievedData,
            dataBox,
            setLengthOfjsonAllData,
            lengthOfjsonAllData,
            setDataArray,
            dataArray,
            id,
            formattedDate
        }
      }

      

    return (
        <div className='main-stat-container'>
            {recievedData && Boolean(recievedData.dataLog.dataWasLogged)
            ?
            <>
                <StatData.Provider value={values}>
                    <StatMainPage />
                </StatData.Provider>
                <button><Link to="/"><div className='big-text'>VISSZA</div></Link></button>
            </>
            :
            recievedData && Boolean(recievedData.dataLog.sentEarly)
            ?
            <div
                className='error-message'>
                <h3>Nem telt el 10 perc az utolsó beküldés óta, kérem próbálja meg később</h3>
                <button><Link to="/"><div className='big-text'>VISSZA</div></Link></button>
            </div>
            :
            <div className='loader-container'>
                <div className='loader'>
                </div>
                <h3>Kérem várjon...</h3>
            </div>            
            

            }
        </div>
    )
}

export default GoogleSheet
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import AllValuesNeeded from './hooks';
import GoogleSheet from './pages/google-sheet';

const shelves = [
  {num: 0, items: [], itemToRemove: [], descrip: "Lámpás ’92 Közhasznú Alapítvány"},
  {num: 1, items: [], itemToRemove: [], descrip: "Autizmus Alapítvány"},
  {num: 2, items: [], itemToRemove: [], descrip: "NOÉ Állatotthon Közhasznú Alapítvány"},
  {num: 3, items: [], itemToRemove: [], descrip: "Szent István Király Zenei Alapítvány"},
]

function Index() {

  const [width, setWidth] = useState(window.innerWidth)
  const [drag, setDrag] = useState(false)
  const [dropped, setDropped] = useState(null)
  const [sweater, setSweater] = useState()
  const [shelvesData, setShelvesData] = useState([])
  const [removables, setRemovables] = useState([])
  const [recievedData, setRecievedData] = useState();

  const values = {
    recievedData,
    setRecievedData,
    width,
    setRemovables,
    removables,
    setShelvesData,
    shelvesData,
    setDrag,
    drag,
    setDropped,
    dropped,
    setSweater,
    sweater,
    shelves,
  }

  useEffect(() => {
    setShelvesData(shelves)
  }, []);

  //checking the sweaters that will be removed

  useEffect(() => {
    const sweatersToRemove = () => {
      let removables = []
      shelvesData.forEach((item) => {
        item.itemToRemove.forEach((num) => {
          removables.push(num)
        })
        }
      )
      setRemovables(removables)
    }
    sweatersToRemove()
  }, [drag, shelvesData]);

  //Checking the width of the screen

  useEffect(() => {
    const checkWidht = () => {
      setWidth(window.innerWidth)
    }
    checkWidht()
    window.addEventListener("resize", checkWidht)
    return(() => {
      window.removeEventListener("resize", checkWidht)
    })
  }, [])

  return (
    <>
      <AllValuesNeeded.Provider value={values}>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<App/>} />
              <Route path='/stats' element={<GoogleSheet />}/>
            </Routes>
          </BrowserRouter>
      </AllValuesNeeded.Provider>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);

import Header from "./components/header"
import MainComp from "./components/main-comp";
import './styles/styles.css';

function App() {

  return (
    <>
        <div draggable={false} className='app'>
          <div draggable={false} className='app-container'>
            <Header />
            <div draggable={false} className='coat-hanger-top'>
              <img draggable={false} alt="coat-hanger" src='./assets/background02-top.png'></img>         
            </div>
            <MainComp />
          </div>
        </div>
    </>
  );
}

export default App;

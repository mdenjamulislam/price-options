import './App.css'
import DaisyNav from './components/Daisynav/Daisynav'
import LineChart from './components/LineChart/LineChart'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {

  return (
    <>
      <div className='container mx-auto' data-theme="dark">
        {/* <DaisyNav></DaisyNav> */}
        <NavBar></NavBar>

        <PriceOptions></PriceOptions>


        <LineChart></LineChart>
      </div>
      
      
    </>
  )
}

export default App

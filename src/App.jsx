import './App.css'
import DaisyNav from './components/Daisynav/Daisynav'
import LineChart from './components/LineChart/LineChart'
import NavBar from './components/NavBar/NavBar'
import Phones from './components/Phones/Phones'
import PriceOptions from './components/PriceOptions/PriceOptions'
import Slider from './components/Slider/Slider'

function App() {

  return (
    <>
      <div className='container mx-auto' data-theme="dark">
        {/* <DaisyNav></DaisyNav> */}
        <NavBar></NavBar>

        <PriceOptions></PriceOptions>

        <LineChart></LineChart>

        <Phones></Phones>

        <Slider></Slider>
      </div>
      
      
    </>
  )
}

export default App

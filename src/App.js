import "./App.css";
import TopButtons from "./components/TopButtons"
import Inputs from "./components/Inputs"
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import getFormatedWeatherData from './services/WeatherService';

export default function App() {

  const fetchWeather = async()=>{
    const data=await getFormatedWeatherData({q:"london"});
    console.log();
  }
  fetchWeather();

  return (

    <div className="mx-auto my-5 max-w-screen-md mt-4 py-5 px-20 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
    <TopButtons/>
    <Inputs/>
    <TimeAndLocation/>
    <TemperatureAndDetails/>
    <Forecast title="Hourly forecast"/>
    <Forecast title="Daily forecast"/>
    </div>
  
  )
}

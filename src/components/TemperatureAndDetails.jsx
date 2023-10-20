import React from 'react'
import{
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
  
}from '@iconscout/react-unicons'

function TemperatureAndDetails() {
  return (
    <div>
        <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
           <p>cloudy or whatever</p>
        </div>
        <div className='flex flex-row items-center justify-between py-3 text-white '>
            <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            className="w-20"
            />
            <p className="text-5xl">34°C</p>
            <div className="flex flex-col space-y-2">
              <div className ="flex font-light text-sm items-center justify-center">
                <UilTemperature size={18} className="mr-2"/>
                Real feel
                <span className="font-medium ml px-2">32°</span>
                
              </div>
              <div className ="flex font-light text-sm items-center justify-center">
                <UilTear size={18} className="mr-2"/>
                Humidity
                <span className="font-medium ml px-2">65%</span>
                
              </div>
              <div className ="flex font-light text-sm items-center justify-center">
                <UilWind size={18} className="mr-2"/>
                Wind
                <span className="font-medium ml px-2">11 km/h</span>
                
              </div>
            </div>
        </div>
        <div className="flex flex-row items-center justify-center space-x-1 text-white text-sm py-3">
          <UilSun/>
          <p className = "font-light">
            Rise <span className="font-medium ml-1 ">06:45 am </span>

          </p>
          <p classsName="font-light">|</p>

          <UilSunset/>
          <p className = "font-light">
            sewt <span className="font-medium ml-1 ">06:45 am </span>

          </p>
          <p classsName="font-light">|</p>

          <UilSun/>
          <p className = "font-light">
            High <span className="font-medium ml-1 ">06:45 am </span>

          </p>
          <p classsName="font-light">|</p>

          <UilSun/>
          <p className = "font-light">
            Low <span className="font-medium ml-1 ">06:45 am </span>

          </p>
         

        </div>

    </div>
  )
}

export default TemperatureAndDetails
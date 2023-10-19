import React from 'react'

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
            <div>
                
            </div>

        </div>

    </div>
  )
}

export default TemperatureAndDetails
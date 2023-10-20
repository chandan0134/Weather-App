import React from 'react'
import { UilSearch,UilLocationPoint } from '@iconscout/react-unicons'
function Inputs() {
  return (
    
    <div className='flex flex-row justify-center my-6'>
        <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
            <input
            type="text"
            placeholder="search for city..."
            className="text-xl  font-light rounded-md  p-2 w-full shadow-xl"  
            />
            <UilSearch size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"/>
            <UilLocationPoint size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"/>

        </div>
        <div className=" flex flex-row w-1/4 items center justify-center">
          <button className=" text-xl text-white font-light">°C</button>
          <p className="text-white my-6 p-1">|</p>
          <button className=" text-xl text-white font-light">°F</button>

        </div>

       
    </div>
  )
}

export default Inputs
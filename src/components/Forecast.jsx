import React from 'react'
import { useState,useEffect } from "react";

function Forecast({title}) {

  const[WeatherData,setWeatherData]=useState([]);

  useEffect(() => {
    async function weather() {
      try {
        let url = `https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=139b7a6925514050b84cb59636618f97&include=minutely`;
  
        let response = await fetch(url);
        let parsedData = await response.json();
        console.log(parsedData)
      
        // Update the data state with the fetched articles

        
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    weather();
  }, []);


  return (
    <div>
        <div className=" flex flex-col justify-start justify-center mt-6">
            <p className=" text-white font-medium uppercase">{title}</p>
        </div>
        <hr className="my-2"/>
        <div className=" flex flex-row items-center justify-between text-white">
          <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">04:30 PM</p>
             <img 
             src=" http://openweathermap.org/img/wn/01d@2x.png"
             className="w-12 my-1"
             alt=""
             />
             <p className="font-medium ">22°</p>

          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">04:30 PM</p>
             <img 
             src=" http://openweathermap.org/img/wn/01d@2x.png"
             className="w-12 my-1"
             alt=""
             />
             <p className="font-medium ">22°</p>

          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">04:30 PM</p>
             <img 
             src=" http://openweathermap.org/img/wn/01d@2x.png"
             className="w-12 my-1"
             alt=""
             />
             <p className="font-medium ">22°</p>

          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">04:30 PM</p>
             <img 
             src=" http://openweathermap.org/img/wn/01d@2x.png"
             className="w-12 my-1"
             alt=""
             />
             <p className="font-medium ">22°</p>

          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">04:30 PM</p>
             <img 
             src=" http://openweathermap.org/img/wn/01d@2x.png"
             className="w-12 my-1"
             alt=""
             />
             <p className="font-medium ">22°</p>

          </div>

        </div>
    </div>
  )
}

export default Forecast
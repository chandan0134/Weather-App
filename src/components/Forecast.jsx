import React from 'react';
import { useState,useEffect } from "react";
import Inputs from "./Inputs";


function Forecast({title,type,query}) {

  const[WeatherData,setWeatherData]=useState([]);

  useEffect(() => {
    async function weather() {
      try 
      {
        let url = `https://api.weatherbit.io/v2.0/current?&city=${encodeURIComponent(query)}&key=139b7a6925514050b84cb59636618f97&include=${type}`;
  
        let response = await fetch(url);
        let parsedData = await response.json();
        console.log(parsedData);
        setWeatherData(parsedData.data)

      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    weather();
  }, [query, type]);


  return (
    <div>
        <div className=" flex flex-col justify-start justify-center mt-6">
            <p className=" text-white font-medium uppercase">{title}</p>
        </div>
        <hr className="my-2"/>
        <div className=" flex flex-row items-center justify-between text-white">
          {WeatherData.map((data)=>
            <div className="flex flex-col items-center justify-center">
              <p className="font-light text-sm">
              {data.ob_time.split(' ')[1]}
              </p>
             <img 
             src=" http://openweathermap.org/img/wn/01d@2x.png"
             className="w-12 my-1"
             alt=""
             />
             <p className="font-medium ">{data.app_temp}°</p>

          </div>
          
          )}

      
          
        </div>
    </div>
  )
}

export default Forecast
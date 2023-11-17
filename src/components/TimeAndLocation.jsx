import React from 'react'
import Inputs from "./Inputs";
import { useState, useEffect } from "react";
function TimeAndLocation({type,query}) {

    const [currWeatherData, setCurrWeatherData] = useState(null);

    useEffect(() => {
        async function currWeather() {
          try {
            let url = `https://api.weatherbit.io/v2.0/current?&city=${encodeURIComponent(query)}&key=139b7a6925514050b84cb59636618f97&include=${type}`;
    
            let response = await fetch(url);
            let parsedData = await response.json();
            console.log(parsedData);
            setCurrWeatherData(parsedData.data[0]);
          } catch (error) {
            console.error("Error fetching data: ", error);
          }
        }
    
        currWeather();  
      }, [query,type]);

      if (!currWeatherData) {
        return <div>Loading...</div>;
      }
    


  return (
    <div>
        <div className="flex items-center justify-center my-6">
            <p className=" text-white text-xl font-extralight">
                {currWeatherData.city_name},{currWeatherData.datetime} | Localtime: {currWeatherData.ob_time} am

            </p>

        </div>
        <div className="flex items-center justify-center my-6">
            <p className=" text-white text-3xl font-medium">
            {currWeatherData.city_name},{currWeatherData.country_code}

            </p>

        </div>

    </div>
  )
}

export default TimeAndLocation
import React, { useState, useEffect } from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

function TemperatureAndDetails({ type }) {
  const [currWeatherData, setCurrWeatherData] = useState(null);

  useEffect(() => {
    async function currWeather() {
      try {
        let url = `https://api.weatherbit.io/v2.0/current?&city=Delhi&key=139b7a6925514050b84cb59636618f97&include=${type}`;

        let response = await fetch(url);
        let parsedData = await response.json();
        console.log(parsedData);
        setCurrWeatherData(parsedData.data[0]);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    currWeather();
  }, [type]);

  if (!currWeatherData) {
    return <div>Loading...</div>;
  }


  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{/* Add the appropriate content here */}</p>
      </div>
      <div className="flex flex-row items-center justify-between py-3 text-white ">
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          alt=""
          className="w-20"
        />

        <p className="text-5xl">{currWeatherData.app_temp}°</p>

        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-2" />
            Real feel
            <span className="font-medium ml px-2">{currWeatherData.app_temp}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-2" />
            Humidity
            <span className="font-medium ml px-2">{currWeatherData.rh}%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-2" />
            Wind
            <span className="font-medium ml px-2">{currWeatherData.wind_spd} km/h</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-1 text-white text-sm py-3">
        <UilSun />
        <p className="font-light">
          Rise <span className="font-medium ml-1">{currWeatherData.sunrise} </span>
        </p>
        <p className="font-light">|</p>

        <UilSunset />
        <p className="font-light">
          set <span className="font-medium ml-1">{currWeatherData.sunset} </span>
        </p>
        <p className="font-light">|</p>

        <UilSun />
        <p className="font-light">
          High <span className="font-medium ml-1">06:45 am </span>
        </p>
        <p className="font-light">|</p>

        <UilSun />
        <p className="font-light">
          Low <span className="font-medium ml-1">06:45 am </span>
        </p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;

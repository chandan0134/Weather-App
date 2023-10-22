

const API_KEY = "7ce1afde7fb8c7e578d04482d84ef5c5";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, searchparams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchparams, appid: API_KEY });

  console.log(url);
  return fetch(url)
    .then((res) => res.json());
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  return { lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, country, sunrise, sunset, weather, speed };
};

const getFormatedWeatherData = async (searchParams) => {
  const formatedCurrentWeather = await getWeatherData('weather', searchParams).then(formatCurrentWeather);

  return formatedCurrentWeather;
};

export default getFormatedWeatherData;

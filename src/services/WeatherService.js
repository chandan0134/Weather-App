const API_KEY = "7ce1afde7fb8c7e578d04482d84ef5c5"
const BASE_URL="https://api.openweathermap.org/data/2.5"

const getWeatherData=(infoType,searchparams) => {
    const url=new URL(BASE_URL+"/"+infoType);
    url.search=new URLSearchParams({...searchparams,appid:API_KEY});

    console.log(url);
    return fetch(url)
        .then((res)=>res.json())
        .then((data) =>data);
    



};

export default getWeatherData;


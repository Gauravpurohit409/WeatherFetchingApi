import React, { useEffect } from 'react';

import CityInput from "./components/CityInput";
import CityWeather from "./components/CityWeather";
const App = () => {
  const[city,setCity] = React.useState("");
  const [cityWeather,setCityWeather] = React.useState({});
  const fetchCityWeather =() =>{
     fetch(
       `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4c496af33d732297c30b641b3b235e47`
     ).then((response) => {
      // console.log(typeof(response))
     return response.json();
      })
     .then ((result) => {
      //  console.log("Result is ",result,typeof(result),result.weather);
        setCityWeather(result);
     
      })
      .catch((err) =>{
        console.log("There is no city");
      });
  }

  return (
    <>
      <CityInput city = {city} setCity = {setCity} fetchCityWeather = {fetchCityWeather} />
      {/* use cityweather data to show it on the screen */}
      <CityWeather  weather = {cityWeather} />
    </>
  );
};

export default App;
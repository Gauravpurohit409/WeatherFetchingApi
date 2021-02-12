import React, { useEffect } from 'react';

const CityWeather = ({weather}) => {
    console.log("in cityweather",weather,typeof(weather),Object.keys(weather).length)
    
    function change()
    {    
        if (Object.keys(weather).length >0)
        {
            const p = document.querySelector("#data");
            p.innerHTML = `Temperature is : ${weather.main['temp']}
            Weather is    : ${weather.weather[0].main}
            Visibility is : ${weather.visibility}
                         Wind is flowing at a speed of ${weather.wind.speed}`;
        }
    }    
  
        useEffect(() => {
                 change()    
        },[weather]);  
    

    // useEffect({
        
    // },[weather]);
    return (
        <div id = "weatherdata" className ="p-5" >
            <p id= "data"> </p>
        </div>
       );
};

export default CityWeather;
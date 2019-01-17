import React from 'react';
import WeatherIcons from 'react-weathericons';


const icons = {
    sunny: "day-sunny",
    fog: "day-fog"

}


const getWeatherIcons = weatherstate => {
    const icon = icons[weatherstate];
    if(icon)
        return <WeatherIcons name={icon} size="2x"/>
    else
        return <WeatherIcons name={"day-sunny"} size="2x"/>
}



const Weathertemperature = ({temperature, weatherstate}) => (
    <div>
        {getWeatherIcons(weatherstate)}
        <span>{`${temperature}`}</span>
     
    </div>
)

export default Weathertemperature
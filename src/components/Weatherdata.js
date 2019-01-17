import React from 'react';
import Weatherextrainfo from './Weatherextrainfo';
import Weathertemperature from './Weathertemperature';


const Weatherdata = () => (
    <div>WeatherData


        <Weathertemperature />
        <Weatherextrainfo humidity={80} wind={"10 m/s"}/>
    </div>
  

)

export default Weatherdata;
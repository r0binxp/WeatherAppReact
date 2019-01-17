import React from 'react';
import Weatherextrainfo from './Weatherextrainfo';
import Weathertemperature from './Weathertemperature';


const Weatherdata = () => (
    <div>WeatherData


        <Weathertemperature temperature={20} weatherstate={'fog'}/>
        <Weatherextrainfo humidity={80} wind={"10 m/s"}/>
    </div>
  

)

export default Weatherdata;
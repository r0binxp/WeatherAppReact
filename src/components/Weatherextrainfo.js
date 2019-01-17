import React from 'react';

const Weatherextrainfo = ({humidity, wind}) => (

    <div>
        <span>{` ${humidity} % - `}</span>
        <span>{`${wind} Viento`}</span>

    </div>
)

export default Weatherextrainfo
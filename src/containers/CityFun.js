import React, { useState } from 'react';

function CityFun({id, country_Name,Place_Name}) {
    const [CityName,setCityName] = useState("Surat");
    const [placeName,setplaceName] = useState("Dutch Garden");

    const changeCityName = () => {
        setCityName("Rajkot");
        setplaceName("Jubilee Garden");
    }

    return (
        <div>
            <p>{CityName} {placeName}</p>
            <button onClick={() => changeCityName()}>Change City Name</button>
            <p>{id} {country_Name} {Place_Name}</p>
        </div>
    );
}

export default CityFun;
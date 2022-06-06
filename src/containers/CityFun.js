import React, { useState } from 'react';

function CityFun({id, country_Name}) {
    const [CityName,setCityName] = useState("Surat");

    const changeCityName = () => {
        setCityName("Rajkot");
    }

    return (
        <div>
            <p>{CityName}</p>
            <button onClick={() => changeCityName()}>Change City Name</button>
            <p>{id} {country_Name}</p>
            <p>{CityName === "Surat" ? "Famous Place Dutch Garden" : "Jubilee Garden"}</p>
        </div>
    );
}

export default CityFun;
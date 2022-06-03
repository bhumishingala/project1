import React, { useState } from 'react';

function CityFun(props) {
    const [CityName,setCityName] = useState("Surat");

    const changeCityName = () => {
        setCityName("Rajkot");
    }

    return (
        <div>
            <p>{CityName}</p>
            <button onClick={() => changeCityName()}>Change City Name</button>
        </div>
    );
}

export default CityFun;
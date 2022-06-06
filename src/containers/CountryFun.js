import React, { useState } from 'react';
import CityFun from './CityFun';

function CountryFun(props) {
    const [countryName,setcountryName] = useState("India");
    const [placeName,setplaceName] = useState("Taj-Mahal");

    const changeCountry = () => {
        setcountryName("US");
        setplaceName("Waikiki");
    }

    return (
        <div>
            <p>{countryName} {placeName}</p>
            <button onClick={() => changeCountry()}>Change Country</button>
            <CityFun id="105" country_Name={countryName} Place_Name={placeName}/>
        </div>
    );
}

export default CountryFun;
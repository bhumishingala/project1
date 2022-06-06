import React, { useState } from 'react';
import CityFun from './CityFun';

function CountryFun(props) {
    const [countryName,setcountryName] = useState("India");

    const changeCountry = () => {
        setcountryName("US");
    }

    return (
        <div>
            <p>{countryName}</p>
            <button onClick={() => changeCountry()}>Change Country</button>
            <CityFun id="105" country_Name={countryName}/>
            <p>{countryName === "India" ? "Famous Place Taj Mahal" : "Waikiki"}</p>
        </div>
    );
}

export default CountryFun;
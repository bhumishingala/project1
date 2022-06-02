import React, { useState } from 'react';

function CountryFun(props) {
    const [countryName,setcountryName] = useState("India");

    const changeCountry = () => {
        setcountryName("US");
    }

    return (
        <div>
            <p>{countryName}</p>
            <button onClick={() => changeCountry()}>Change Country</button>
        </div>
    );
}

export default CountryFun;
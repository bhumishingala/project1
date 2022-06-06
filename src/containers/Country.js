import React, { Component } from 'react';
import City from './City';

class Country extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            countryName : 'India',
        }
    }

    changeCountry = () => {
        this.setState({
            countryName : 'US',
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.countryName} {this.state.placeName}</p>
                <button onClick={() => this.changeCountry()}>change Country</button>
                <City id={101} Country_Name={this.state.countryName}/>
                <p>{this.state.countryName === "India" ? "Famous Place Taj Mahal" : "Millennium Park"}</p>
            </div>
        );
    }
}

export default Country;
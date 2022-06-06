import React, { Component } from 'react';
import City from './City';

class Country extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            countryName : 'India',
            placeName : 'Taj-Mahal'
        }
    }

    changeCountry = () => {
        this.setState({
            countryName : 'US',
            placeName: 'Millennium Park'
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.countryName} {this.state.placeName}</p>
                <button onClick={() => this.changeCountry()}>change Country</button>
                <City id={101} Country_Name={this.state.countryName} Place_Name={this.state.placeName}/>
            </div>
        );
    }
}

export default Country;
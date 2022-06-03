import React, { Component } from 'react';

class City extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            CityName : "Surat"
        }
    }

    changeCityName(){
        // console.log("Hello");
        this.setState({
            CityName : "Rajkot"
        })
    }
    
    render() {
        return (
            <div>
                <p>{this.state.CityName}</p>
                <button onClick={() => this.changeCityName()}>Change City Name</button>
            </div>
        );
    }
}

export default City;
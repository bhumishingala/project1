import React, { Component } from 'react';

class City extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            CityName : "Surat"
        }
    }

    changeCityName(){
        this.setState({
            CityName : "Rajkot"
        })
    }
    
    render() {
        return (
            <div>
                <p>{this.state.CityName} {this.state.Place_Name}</p>
                <button onClick={() => this.changeCityName()}>Change City Name</button>
                <p>{this.props.id} {this.props.Country_Name}</p>
                <p>{this.state.CityName === "Surat" ? "Famous Place Dutch Garden" : "Jubilee Garden"}</p>
            </div>
        );
    }
}

export default City;
import React, { Component } from 'react';

class City extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            CityName : "Surat",
            Place_Name : "Dutch Garden"
        }
    }

    changeCityName(){
        this.setState({
            CityName : "Rajkot",
            Place_Name : "Jubilee Garden"
        })
    }
    
    render() {
        return (
            <div>
                <p>{this.state.CityName} {this.state.Place_Name}</p>
                <button onClick={() => this.changeCityName()}>Change City Name</button>
                <p>{this.props.id} {this.props.Country_Name} {this.props.Place_Name}</p>
            </div>
        );
    }
}

export default City;
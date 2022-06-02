import React, { Component } from 'react';

class City extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            CityName : "Surat"
        }
    }
    
    render() {
        return (
            <div>
                <p>{this.state.CityName}</p>
            </div>
        );
    }
}

export default City;
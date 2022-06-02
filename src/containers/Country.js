import React, { Component } from 'react';

class Country extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            countryName : 'India',
        }
    }

    changeCountry = () => {
        this.setState({
            countryName : 'US'
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.countryName}</p>
                <button onClick={() => this.changeCountry()}>change Country</button>
            </div>
        );
    }
}

export default Country;
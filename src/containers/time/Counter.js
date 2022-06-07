import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            counter : 0
        }
    }

    inc = () => {
        if(this.state.counter < 10){
            this.setState ({
                    counter : (this.state.counter+1) 
            })
        }
    }

    dec = () => {
        if(this.state.counter > 0){
            this.setState ({
                    counter : (this.state.counter-1) 
            })
        }
    }
    
    render() {
        return (
            <div>
                <button onClick={() => this.inc()}>+</button>
                <span>{this.state.counter}</span>
                <button onClick={() => this.dec()}>-</button>
            </div>
        );
    }
}

export default Counter;
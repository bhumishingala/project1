import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import React, { Component } from 'react';

class Time extends Component {
    constructor(props) {
        super(props);

        // 1.Used to initial value to the component        
        this.state ={
            time : new Date()
        }
    }

    tick = () => {
        this.setState ({
            time : new Date()
        })
    }

     //3. Used to request data from server
    componentDidMount = () => {

        this.timeI = setInterval(() => this.tick(),1000);
    }

    //4. Called whenever particular state/props updated
    componentDidUpdate = (prevprops,prevstate) => {
        if(this.state.time !== prevstate.time){
            console.log("componentDidUpdate");
        }
    } 
    
    //5. Called whenever we move to another component(Used to re;ease the resources)
    componentWillUnmount = () => {
        clearInterval(this.timeI);
    }

    //2. Called whenever state value changed
    render() {
        return (
            <div>
                <p>{this.state.time.toLocaleTimeString()}</p>
            </div>
        );
    }
}

export default Time;
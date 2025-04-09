import React, { Component } from "react";

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            state1: 'state1',
            state2: 'state2'
        };
    }
    render() {
        // example props
        const { name, heroName, children } = this.props;
        // example state
        const {state1, state2} = this.state;
        return (<div>
                <h1>Welcome {name} a.k.a {heroName} </h1>
                {children} 
            </div>);
    }
}

export default Welcome
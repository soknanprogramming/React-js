import React, { Component } from "react";

class Welcome extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // example props
        const { name, heroName, children } = this.props;
        return (<div>
                <h1>Welcome {name} a.k.a {heroName} </h1>
                {children} 
            </div>);
    }
}

export default Welcome
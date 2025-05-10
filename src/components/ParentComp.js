import React, {Component} from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";

class ParentComp extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: "Soknan"
        }
    }

    componentDidMount(){
        setInterval(() =>{
            this.setState({
                name: "Hello"
            })
        },
            2000);
    }

    render(){
        console.log('**********************Parent Component');
        return(
            <div>
                Parent Component
                <RegComp name={this.state.name}/>
                <PureComp name={this.state.name}/>
            </div>
        );
    }
}

export default ParentComp;
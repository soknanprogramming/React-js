import React, {Component} from 'react';

class Message extends Component {
    constructor(){
        super();
        this.state = {
            message: 'Welcome Visitor',
            buttonText: 'Subscribe'
        }
    }
    changeMessage(){
        if(this.state.buttonText === 'Subscribe'){
            this.setState({
                message: 'Thank you for subscribing',
                buttonText: 'Unsubscribe'
            });
        }
        else{
            this.setState({
                message: 'Please subscribe',
                buttonText: 'Subscribe'
            });
        }
    }

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>{this.state.buttonText}</button>
            </div>
        );
    }
}

export default Message;
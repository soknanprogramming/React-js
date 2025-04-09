import React, { Component } from 'react';
import Greet from './components/Greet';
import Welcome from './components/Welcome'
// import Hello from './components/Hello'
// import Message from './components/Message';
// import Counter from './components/Counter';

class App extends Component{
  render(){
    return (
      <div>
        <Greet name="Bruce" heroName="Batman">
          <p>This is children props</p>
        </Greet>
        <Welcome name="Clark" heroName="Superman">
          <p>This is children props</p>
        </Welcome>
      </div>
    )
  }
}

export default App;

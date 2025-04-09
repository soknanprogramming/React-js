import React, { Component } from 'react';
import Greet from './components/Greet';
import Welcome from './components/Welcome'
// import Hello from './components/Hello'

class App extends Component{
  render(){
    return (
      <div>
        <Greet name="Bruce" heroName="Batman">
          <p>This is children props</p>
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Diana" heroName="Wonder Womam"/>
        <Welcome name="Bruce" heroName="Batman"/>
        <Welcome name="Clark" heroName="Superman"/>
        <Welcome name="Diana" heroName="Wonder Woman"/>
      </div>
    );
  }
}

export default App;

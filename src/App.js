import React, { Component } from 'react';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome'
// import Hello from './components/Hello'
// import Message from './components/Message';
// import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

class App extends Component{
  render(){
    return (
      <div>
        <FunctionClick/>
        <br/>
        <ClassClick/>
      </div>
    )
  }
}

export default App;

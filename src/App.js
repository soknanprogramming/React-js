import React, { Component } from 'react';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome'
// import Hello from './components/Hello'
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import styles from './App.module.css';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import NumberList from './components/NumberList'; 
// import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import styles from './appStyles.module.css';

class App extends Component{ 
  render(){
    // console.log("API KEY:", process.env.REACT_APP_API_KEY);
    return (
      <div>
        <Inline />
        <h1 className={styles.error} >Error</h1>
        <h1 className={styles.success} >Success</h1>
      </div>
    )
  }
}

export default App;

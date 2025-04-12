import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: true
        }
    }
  render() {
    // Way 1
    /*
    if(this.state.isLoggedIn){
        return (
            <div>
                Welcome Vishwas
            </div>
        )
    }
    else{
        return (
            <div>
                Welcome Guest
            </div>
        )
    }
    */
   // Way 2
   /*
   let message
   if(this.state.isLoggedIn){
    message = <div>Welcome Vishwas</div>
   }
   else{
    message = <div>Welcome Guest</div>
   }
   console.log(message);
   return <div>{message}</div>;
  }
   */
  //Way 3
  // return this.state.isLoggedIn ? (<div>Welcome Vishwas</div>) : (<div>Welcome Guest</div>);
  //Way 4
  // when isLoggedIn false is return nothing
  return this.state.isLoggedIn && <div>Welcome Soknan</div>;
  }
}

export default UserGreeting

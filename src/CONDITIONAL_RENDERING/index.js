import React, { Component } from 'react'
import Home from './home'
import Login from './login'
class CONDITIONAL_RENDERING extends Component {
  constructor(props) {
      super(props)
  
      this.state = {
           isloggedin : true
      }
  }
  
    render() {
        const {isloggedin} = this.state
        // let element;
        // element = isloggedin ? <Home /> : <Login />

        return(
            <div>
                 {/* {element} */}
                 {/* only ternary operator can use in jsx */}
                 {isloggedin ? <Home /> : <Login />}
            </div>

        )
    }
}
export default CONDITIONAL_RENDERING;
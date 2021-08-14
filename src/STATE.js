import React, { Component } from 'react'
import './style.css'
export default class STATE extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0,
             n : 1
        }
    }

    handleIcrement = () =>{

        this.setState({
            count : this.state.count + 1
        })
    }

    handleDecrement = () =>{

        this.setState({
            count : this.state.count - 1
        })
    }

    handleReset = () =>{

        this.setState({
            count : 0
        })

    }
    
    render() {
        const {count, n} = this.state
        return (
            <div>
               <h1>Count : {count}</h1>
               <button className = "button" onClick = {this.handleIcrement}>+</button>
               <button className = "button" onClick = {this.handleDecrement} disabled = {count === 0 ? true : false}>-</button>
               <button className = "button" onClick = {this.handleReset}>Reset</button>
            
            </div>
        )
    }
}
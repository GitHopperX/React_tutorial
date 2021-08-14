import React, { Component } from 'react'

export default class Event_Handler_Class extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             changedvalue : ''
        }
    }
    
    // handleClick = () =>{
    //     console.log("clicked");
    handleOnChange = (e) => {
        this.setState({
            changedvalue : e.target.value
        }, () => {
            console.log(this.state.changedvalue)
        })
       }
    render() {
        return (
            <div>
                {/* <button className = "button" onClick = {this.handleClick}>click</button> */}
            <input type = "text" onChange = {this.handleOnChange}/>
            <p>{this.state.changedvalue}</p>
            </div>
        )
    }
}

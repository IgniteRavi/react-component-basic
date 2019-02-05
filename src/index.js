import React, { Component } from 'react'
import {render} from 'react-dom'

class Message extends Component{
    render(){
        return (
            <div>
                <h1 style={{color: this.props.color}}>{this.props.msg}</h1>
                <p>We will call you back in {this.props.minutes} minutes.</p>
            </div>
        )
    }
}

render(
    <Message color="blue" msg="How are you?" minutes={5}/>,
    document.getElementById('root')
)
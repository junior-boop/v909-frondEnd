import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Moto extends Component{
    render(){
        console.log(this.props)
        return(
            <div >
                <Link >bonjour</Link>
                <div style = {{margin : 24}}>
                  
                </div>
            </div>
        )
    }
}


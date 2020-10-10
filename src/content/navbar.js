import React from 'react';
import logo from './v909.jpg'
import './content.css'
import { NavLink } from 'react-router-dom';

export default function NavBar(){
    return(
        <div className = "nav"> 
            <div className = "container">
                <div className ="logo">
                    <img src={logo} alt ="logo"/>
                </div>
                <div className ="nav-block">
                    <ul className ="menu" >
                        <li><NavLink to = {{
                            pathname : '/'
                        }}> Achat</NavLink> </li>
                        <li><NavLink to = "/location"> Locations</NavLink> </li>
                        <li><NavLink to = "/contact"> Contactez-nous</NavLink> </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
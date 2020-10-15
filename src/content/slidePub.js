import React from 'react';
import './content.css'
import car from './images/landing.jpg'
import car_2 from './images/car_3.jpg'

export default function SlidePub(props){
    if(window.screen.width <= 500){
        return(
            <div className ="slideBar" onScroll = {scroll()}>
                <div className = "imgsBar">
                    <img src= {car_2} alt ="images"/>
                </div>
                <div className ="desc">
                    <p className = "p-desc"> Découvrez tous les véhicules de location actuellement disponible</p>
                    <a className ="link" href ="/" >Cliquez ici</a>
                </div>
            </div>
        )
    } else {
        return(
            <div className ="slideBar" onScroll = {scroll()}>
                <div className = "imgsBar">
                    <img src= {car} alt ="images"/>
                </div>
                <div className ="desc">
                    <p className = "p-desc"> Visitez nos véhicules en Location</p>
                    <a className ="link" href ="/" >Cliquez ici</a>
                </div>
            </div>
        )
    }
    
}


function scroll(){
    const move = window.scrollY
    console.log(move) 
}

scroll()
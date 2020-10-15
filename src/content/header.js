import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './content.css';
import car from './images/pub_1.png'

function Size(){
    const size = useWindowSize()
    return console.log(size.width , size.height)
}


function useWindowSize(){
    const [windowSize, setWindowSize] = useState({
        width : undefined,
        height : undefined,
    })

    useEffect(() => {
        function handleResize(){
            setWindowSize({
                width : window.innerWidth,
                height : window.innerHeight,
            })
        }
        window.addEventListener('resize', handleResize)
        handleResize();

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowSize
}
export default function Header(){
    if(window.screen.width <= 500){
        return(
            <div className = 'slideBar'>
                <div className = 'pub'>
                    <img src = {car} alt = 'pub_1'/>
                    <div className = 'cover'>
                        <div className = 'content'>
                            <p>Achetez une</p>
                            <p className ='name'>Toyota Yaris 2002</p>
                            <p className = 'prix'>3 500 000 FCFA</p>
                        </div>
                    </div>
                    <div className = 'desc'>
                        <div className = 'content'>
                            <p>Découvrez plus de vehicule dans achat</p>
                            <Link to ='/achat'>
                                Achat
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return(
            <div className = 'SlidePub'>
                <div style = {images}>
                    <img src = {car} alt = 'pub_1'/>
                </div>
            </div>
        )
    }

}

const images = {
    display : 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}


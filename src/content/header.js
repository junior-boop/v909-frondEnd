import React, { Component, useEffect, useState } from 'react'
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
    return(
        <div className = 'slideBar'>
            <div style = {images}>
                <img src = {car} alt = 'pub_1'/>
            </div>
        </div>
    )
}

const images = {
    display : 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './content.css';
import car from './images/pub_1.png'
import promo from './images/20201022_135638.jpg'

// function Size(){
//     const size = useWindowSize()
//     return console.log(size.width , size.height)
// }


// function useWindowSize(){
//     const [windowSize, setWindowSize] = useState({
//         width : undefined,
//         height : undefined,
//     })

//     useEffect(() => {
//         function handleResize(){
//             setWindowSize({
//                 width : window.innerWidth,
//                 height : window.innerHeight,
//             })
//         }
//         window.addEventListener('resize', handleResize)
//         handleResize();

//         return () => window.removeEventListener('resize', handleResize)
//     }, [])

//     return windowSize
// }
export default function Header(){
    if(window.screen.width <= 500){
        return(
            <div className = 'slideBar'>
                <div className = 'pub'>
                    <img src = {promo} alt = 'pub_1'/>
                    <div className = 'cover'>
                        <div className = 'content'>
                            <p>Achetez une</p>
                            <p className ='name'>Toyota Rav  2005</p>
                            <p className = 'prix'>4 000 000 FCFA</p>
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


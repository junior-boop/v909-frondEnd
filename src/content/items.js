import React, { Component } from 'react';
import './content.css';
import image from './images/car_2.jpg'
import anns from '../design/icons8-today-50.png';
import gaz from '../design/icons8-gas-station-50.png'
import arg from '../design/icons8-expensive-price-50.png'
import bv from '../design/icons8-gearbox-64.png';
import loop from '../design/icons8-place-marker-50.png'
import { Link } from 'react-router-dom';
import clim from '../design/icons8-fresh-air-50.png';

const Style = {
    display : 'flex'
}

export default class Items extends Component{
    render(){
        const _ = this.props
        const db = _.db
        let prix = new Intl.NumberFormat('fr-FR', {style: 'currency', currency:'XAF'}).format(db.prix_vent)

        let imag = db.imgs;
        let imgName = imag[0].img
    return(
        <Link 
        to = {{
            pathname : _.route.url,
            search : `?modal=true `, 
            state : db
        }} >
            <div className ="items" style = {Style}>
                <div className ="imgs-contain">
                    <div className ="imgs"><img src = {imgName}   alt = {imgName}  /></div>
                    <div className = "cover"><p>{db.mark} {db.model} </p></div>
                </div>
                <div className ="desc">
                    <div className = "grid-2">
                        <p className = "p-desc"><img src={anns} width = '18px' alt ="images"/>  {db.ans}</p>
                        <p className = "p-desc"><img src={gaz} width = '18px' alt ="images"/>  {db.carb}</p>
                    </div>
                    <div className = "grid-2">
                        <p className = "p-valeur"><img src={arg} width = '18px' alt ="images"/><strong>{prix}</strong></p>
                        <p className = "p-prix"><img src={bv} width = '18px' alt ="images"/> {db.bv}</p>
                        <p className = "p-prix"><img src={loop} width = '18px' alt ="images"/> {db.ville}</p>
                    </div>
                </div>
               {!db.vendu 
               ? null 
               : (  <div  className = 'vendu' >
                        <h4 className = 'paque'>Vendu</h4>
                    </div>)  }
            </div>
        </Link>
    )
    }
}

export class LittleItem extends Component {
    render(){
        const _ = this.props
        const db = _.db
        let prix = new Intl.NumberFormat('fr-FR', {style: 'currency', currency:'XAF'}).format(db.prix_vent)
        
        console.log(db)
        
        let imag = db.imgs;
        let imgName = imag[0].img;

        
        return(
            <Link to = {{
                pathname : _.route.url,
                search : `?modal=${db.id} `, 
                state : db
                
            }} className = 'it'>
                <div className ="liteItem">
                    <div className ="imgs-contain">
                        <div className ="imgs"><img src = {imgName}  height ="195px" alt = {imgName} /></div>
                        <div className = "cover"><p>{db.mark} {db.model} </p></div>
                    </div>
                    <div className ="desc">
                        <div className = "grid-2">
                            <p className = "p-valeur"><img src={arg} width = '18px' alt ="images"/><strong>{prix}</strong></p>
                            <p className = "p-prix"><img src={bv} width = '18px' alt ="images"/> {db.bv}</p>
                        </div>
                    </div>
                   {!db.vendu 
                   ? null 
                   : (  <div style = {vendu} >
                            <h4 style = {paque}>Vendu</h4>
                        </div>)  }
                </div>
            </Link>

        )
    }
}

export class Location extends Component {
    render(){
        const _ = this.props
        const data = _.data
        const prix = new Intl.NumberFormat('fr-FR', {style:'currency', currency : 'XAF'}).format(data.prix_location)
        const match =  _.route;
        const location = _.location;
        const history = _.history

        function Clim(){
            if(data.clim){
                return 'Oui'
            } else {
                return 'Non'
            }
        }

        return(
            <div className = 'location'>
                <div className = 'imgs'>
                    <div>
                       
                    </div>
                    <div className = 'cover' >
                        <div className = 'T' ><p className = 'p' >{data.mark} {data.model}</p></div>
                        <div className = "T"><p>note : <strong>{data.note} / 5 </strong></p></div>
                    </div>
                    
                </div>
                <div className = 'descr' >
                    <div className = 'grid-3' >
                        <p className = "p"><img src={bv}  alt ="images"/> {data.bv}</p>
                        <p className = 'p'><img src={clim}  alt ="images"/>{Clim()}</p>
                        <p className = 'p'><img src={anns}  alt ="images"/>{data.ans}</p>
                    </div>
                </div>
                <div className = 'descript' >
                    <div className = 'grid' >
                        <div className = "p-valeur">
                            <img src={arg}  alt ="images"/>
                            <div>
                                <p className = 'pj'>Prix par jour</p>
                                <p className = 'prix'><strong>{prix}</strong></p>
                            </div>
                        </div>
                        <Link 
                            to = {{
                                pathname : match.url,
                                search : `?lite=true `, 
                                state : data
                            }}
                        >Reserver</Link>
                    </div>
                </div>
            </div>
        )
    }
}

const vendu = {
    position : 'absolute',
    width : '195px',
    fontFamily: 'Montserrat',
    height : '310px',
    display : 'flex',
    justifyContent: 'center',
    alignItems : 'center',
    backgroundColor : '#00000018',
    borderRadius : '12px',
    color : 'white',
}

const paque = {
    padding : '12px 26px',
    backgroundColor : 'rgba(250, 128, 114, 0.7)'
}

if (window.innerWidth <= 800){
    paque.fontSize = 38
}


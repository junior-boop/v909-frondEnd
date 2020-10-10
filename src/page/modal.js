import React, {Component, useState} from 'react';
import '../content/content.css';
import anns from '../design/icons8-today-50.png';
import gaz from '../design/icons8-gas-station-50.png'
import km from '../design/icons8-speedometer-50.png'
import bv from '../design/icons8-gearbox-64.png';
import loop from '../design/icons8-place-marker-50.png';
import clim from '../design/icons8-fresh-air-50.png';

import {motion, AnimatePresence} from 'framer-motion';
import {modalTransition} from './cars'

import close from '../design/icons8-delete-50.png'
import db from '../db.json'
import Items, { LittleItem } from '../content/items';
import { Link } from 'react-router-dom';
import logo from '../content/v909.jpg'
import arg from '../design/icons8-expensive-price-50.png'


import car_2 from '../content/images/car_2.jpg'

const images = [
    {
        id : 1,
        img : 'https://images.caradisiac.com/logos/0/1/4/4/260144/S7-nouvelles-aides-a-l-achat-d-une-voiture-pas-avant-la-rentree-182926.jpg'
    },
    {
        id : 2,
        img : 'https://lh3.googleusercontent.com/OJeH0xpOGB4Pup7hX5Wxx5TKWIu1row34ACwS3-njVOLtiGuBrF4A9YDC7t2s8_x0ic4qg5lmWxEQVT9E-gwDJAWUZUaEFt9oeEmWJul0l63c6YJ3asgQ75K334hEWg8HUVOSp-SBV0-PlKoS36uaf4mBuG-7re1M7optwCn8R9pa72eGqTTPa4B0UNWo3EYcIgKy-H06hdzsLS0J8w4UbE26uHZAblyxAzWcQ-TSD5KDh7l5UdVWrtK17YtN6-9jiOlhfy8iNcsKg6XINLnjkgWmEgU5MEPjrBqbZgtMX0LDPmlvGRlragnqCJMTACDEkhVzu7w4hxVHk2WdYtuF13iU7t_4hzm5aMvDYzyF2Y-yforHDYc9YkFMWMHJVA6RefdCquFDxIIaN_cKlhuYIi7kYpxQVW34oJYyz0Nco9WTdURK34YQb1ZP0Q2aDfMmqL8dwsmOHe8Zvb9yNwB49uPZgFHcUV9NqFQoVWTbyRu8uMV7678OAq99_MpVFx9Vlh2CCPPy_Qo4B6ctZZxD7e1ShvHzhvaLmrgp-Y0a0jhVnzQeo-CvxuZXR9VsEGEmUo2i6wLJWDSYHm072YHf2hEs_sio2_2UvoqtpJHllLVbqwz9TqFsW9hRuY8bwwV6j8l0iut19eBcfxXgNKJH7LSxIGXy2rVX9tqacwWM_xQ9MhhqEB5Xjt-AKqR=w474-h396-no?authuser=0'
    },
    {
        id : 3,
        img : 'https://z-p3-scontent.fdla2-1.fna.fbcdn.net/v/t1.0-9/52668757_2267802920174406_7659397367174529024_o.jpg?_nc_cat=109&_nc_sid=8bfeb9&_nc_eui2=AeEcIl-Xn8M65DSzqWZDNjVHzmQ4Nt8KoVnOZDg23wqhWXBuuE5_KgRLdCiA8mYPVHhyptNUoCsdrYqAOLp4drb7&_nc_ohc=LID9GDtAOjUAX8OtcM4&_nc_ht=z-p3-scontent.fdla2-1.fna&oh=03bc0c77a7dc90b4facadd1ab3898c6b&oe=5FA05CA3'
    },
    {
        id : 4,
        img : 'https://lh3.googleusercontent.com/enu2xETnZN10ygNpMc_Nmd-8ZumbkKy7CqEVyRJp4tA07W2iqKpt-36qHHxeWGI6VqGpA0EbCsXpdYXwrkRZVFD11FHIJdAtPpApPoxsQUtASt4e-McdwEXq2QVvqTK-RT7f65iFrQi4J23DE_Qf55PAtDJGE2m_F9bto9wZnld1xQTQkz0O86CH1aAeTkhxs3X2_SvG3hbLRtx_zSs4O9tub1kTq_MEzZ7tJ7XNZcjGvGec2DLF8CZ33D-52bNDIBlzOUPjWwqGO3EBzNsvo-broUsoXYZtQOX1RA7o0kzRfH73F6Dg5TVHHlW3ykO9HolSdTlO97truxxpXC2AChYgH8ryPvytIjQpDJ8b3SyTOGpn-c2HXnhzwb5QV6FvcrnC8Z-5xQNlvMLWRniBsm7BCyVYL0neqB2vwH9xHqm59DV83cJnmQc7PsSfprGy4ShSM9u2J38NECncxESZgYn2cQQrJTs6t8RRuMiRPASXUXpA9FgxbUf9hYyZjYOkIES5ZaDMknqdnaUI1fPoetpWdq9ZXrkoLqjLgtVnL7r_t5DW24aEiqhfWEJAmlfLCGqVmCs3if9In9b5R02fZ3_alUc71C3teRCYYjNPyln3x8Htio2CXK4SgIKC6HtBCl9xvTuAP6rx1WbxvwB3NsL8lxi6oxF4qgZxoO_eGAOz-_1FAJKgkBv6rKmG=w895-h667-no?authuser=0'
    },
    {
        id : 5,
        img : '../images/car_2.jpg'
    },
    {
        id : 6,
        img : '../images/car_3.jpg'
    },
    {
        id : 7,
        img : '../images/imgs6.jpg'
    },
    {
        id : 8,
        img : '../images/yaris1_1.jpg'
    }
]

const marque = 'Toyota';
const modele = 'Yaris'

export default class Infos extends Component{
    render(){
        const _ = this.props;
        const location =_.location;
        const match = _.route
        const data = _.db
        const prix = new Intl.NumberFormat('fr-FR', {style : 'currency', currency : 'XAF'}).format(data.prix_vent)
        const current  = data.marque;
        const model = data.modele;

    return(
        <motion.div id ='spaceModal' role = 'button' 
            exit = "out"
            initial = "out"
            animate = "in"
            variants = {modalTransition}
        >
            <div className = 'modal'>
                <div className = 'header'>
                    <p className="titleModel">{data.marque} {data.modele}</p>
                    <div className = 'autres'>
                        { data.vendu 
                        ?   (<p className = "prix">Vendu </p>)
                        :   (<p className = "prix">{prix} </p>) }
                        <Link className = 'close' >
                           <img src={close} alt='close'/>
                        </Link>
                    </div>
                </div>
                <div className = 'description'>
                    <div>
                        <Diapos db = {data}/>
                        <div className='contact'>
                            <div className='descrit'>
                                <h3>Description</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et pulvinar sapien, eu consectetur enim. Sed rhoncus, lorem nec blandit dignissim, libero est rutrum purus, vitae iaculis libero turpis vel turpis. Nam convallis ullamcorper mollis</p>
                            </div>
                            <div className ="ctn">
                                <h3>Contactez nous</h3>
                                <a href ={`https://wa.me/23755733765?text=je%20suis%20intéressé%20par%20votre%20voiture%20de%20marque%20${marque}%20${modele}`} className='wa'>Via WhatsApp</a>
                            </div>
                            
                        </div>
                        <div className = 'infos'>
                                <h4>NB</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et pulvinar sapien, eu consectetur enim. Sed rhoncus, lorem nec blandit dignissim, libero est rutrum purus, vitae iaculis libero turpis vel turpis. Nam convallis ullamcorper mollis</p>
                        </div>
                        
                    </div>
                    <div className = 'sugContent'>
                            <h3 style ={{
                                margin :'30px 0 24px 0'
                            }}>Quelques produits Similaires</h3>
                        </div>
                    <div className = 'suggection'>
                        
                        <div className = 'content'>
                          <div>
                            {Suggect(current, model, match, location)}
                          </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </motion.div>
    )
    }
}




function Diapos(props){
    const data = props.db
    let BV = '' ;
    if (data.bv === 'automatique' || data.bv === 'Automatique'){
        BV = 'Auto.'
    } else  {
        BV = 'Manu.'
    }
    const [current, setCurrent] = useState(images[0].img)

    const th = (i) => {
        let view  = i.img;
        return (
            <div>
                <div role='button' className ='thund' style={{cursor : 'pointer'}} onClick = {() => setCurrent(view)} >
                    <img src={view} alt={i.id} />
                </div>
            </div>
        )
       
    }

    return(
        <div id='slide' className ='slide'>
            <div className='slideShow'>
                <div className = 'view'>
                    <AnimatePresence exitBeforeEnter>
                        <motion.img 
                            alt = {current} 
                            key={current}
                            src={current}
                            initial={{ opacity: 0, x: 200 }}
                            animate={{ opacity: 1, x:0}}
                            exit={{ opacity: 0, x:-200 }}
                        />
                    </AnimatePresence>
                </div>
            </div>
            <div className='descript'>
                <div className ='details'>
                    <div className='det'><p>Détails véhicules</p></div>
                    <p className = "p-det"><img src={anns} width = '30px' alt ="images"/>{data.ans} </p>
                    <p className = "p-det"><img src={km} width = '30px' alt ="images"/>  {data.km_count} km</p>
                    <p className = "p-det"><img src={bv} width = '30px' alt ="images"/> {BV}</p>
                    <p className = "p-det"><img src={gaz} width = '30px' alt ="images"/>  {data.carburant}</p>
                    <p className = "p-det"><img src={clim} width = '30px' alt ="images"/>{data.clim}</p>
                    <p className = "p-det"><img src={loop} width = '30px' alt ="images"/>{data.ville}</p>
                </div>
                <div className ='contentImg'>
                    {images.map((el, key) => (th(el)))}
                </div>
            </div>
        </div>
    )
}


const take = (n, arr) => {
    let NArr = []
    let i = 0;
    for(i; i < n; i++){ if (arr[i] !== undefined) {NArr.push(arr[i]) } }
    return NArr
}

function takeWithoutSell(n, ar){
    const takeAll = () =>{
        const Ar = []
        for(let a of ar){if(!a.vendu){Ar.push(a)}}
        return Ar
    }

    const takeN = (m) => {
        const Ar = [];
        let i = 0;
        for(i;i<n;i++){if(m[i] !== undefined){Ar.push(m[i])}}
        return Ar
    }

    return takeN(takeAll());
}

function Suggect(current, model, match, location){
    const name = db.products
    const Ar = []
  name.filter((el, key) => { 
    if(el.marque === current || el.modele === model) {
       Ar.push(el)
    }
  })
   return(
       <div className = 'grid-5'> 
            {takeWithoutSell(5, Ar).map((el, key) => <LittleItem db = {el} route = {match} location = {location}/>)}
       </div>
   )

}


const suggect = {
   display : 'flex', 
   flexDirection : 'column',
   alignItems: 'flex-start',
   margin : '0 24px'
}

export class LittleModal extends Component{
    constructor(props){
        super(props)
        this.state = {name : '', ville : '', eventType : '', dayNbrs : ''}
        this.nameChange = this.nameChange.bind(this);
        this.villeChange = this.villeChange.bind(this)
        this.typeChange = this.typeChange.bind(this)
        this.dayNbrsChange = this.dayNbrsChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    nameChange(event){
        this.setState({name : event.target.value})
    }

    villeChange(event){
        this.setState({ville : event.target.value})
    }

    typeChange(event){
        this.setState({eventType : event.target.value})
    }

    dayNbrsChange(event){
        this.setState({dayNbrs : event.target.value})
    }

    handleSubmit(event){
        console.log(this.state.name, this.state.ville, this.state.eventType, this.state.dayNbrs)
        event.preventDefault()
    }

    render(){
        const dateNow = Date.now()
        const date = new Date(dateNow)

        const eventType = this.state.eventType
        const dayNbrs = this.state.dayNbrs

        console.log()
        const _ = this.props
        const data = _.db
        const prix = new Intl.NumberFormat('fr-FR', {style : 'currency', currency : 'XAF'}).format(data.prix_location)

        const content = {
            customer : this.state.name,
            ville : this.state.ville,
            ans : data.ans,
            eventType : calcDate(eventType, dayNbrs),
            dayNbrs : Format(eventType),
        }
        const opacity = {
            opacity : 0.7
        }
        
        const bloc = {
            display : 'block',
            position : 'absolute',
            width : '464px',
            height : '50px', 
        }

        if (this.state.eventType && this.state.dayNbrs){
            
            bloc.display = 'none' ;
            opacity.opacity = 1
        }
        
        function calcDate(d1, d2){
            const date1 = new Date(d1).getTime()
            const date2 = new Date(d2).getTime()

            let dif_date = date2 - date1
            let jour = dif_date / 86400000;
            
            return jour
        }
        function Format(day){
           if (day){
            let datDay = new Date(day)
            const options = {
                weekday :'long', 
                year :'numeric',
                month :'long',
                day :'numeric'
            }

            let d = new Intl.DateTimeFormat('fr-FR', options).format(datDay)
            return d
           }
        }

        function calcPrix(){
            const val2 = calcDate(eventType, dayNbrs)

            const un = () => {
                if(val2 > -1 && val2 <= 1){
                    let dat = 1;
                    return dat
                } else {
                    return val2
                }
            }
            const Nprix = data.prix_location
            const prix_total = Nprix * un()

            const prix = new Intl.NumberFormat('fr-FR', {style : 'currency', currency : 'XAF'}).format(prix_total)
            return prix
        }

        function UseDate(){
            let datDay = Date.now()
            let jour1 = new Date(eventType).getTime()
            let jour2 = new Date(dayNbrs).getTime()
            let debut  = Format(eventType)
            let fin = Format(dayNbrs)
            const val1 = calcDate(datDay, jour1)
            const val2 = calcDate(jour1, jour2)

            const un = () => {
                if(val2 > -1 && val2 <= 1){
                    let dat = 1;
                    return dat
                } else {
                    return val2
                }
            }

            if (val1 <= -1){
                return(
                    <div style = {{display : 'flex', width : '100%', borderRadius : 7, padding : '16px 0', justifyContent : "center", alignItems : 'center', backgroundColor : 'rgba(255, 0, 0, 0.222)' }}>
                        <p style = {{color : 'rgb(129, 0, 0)'}} >La séléction ne peut se faire avec des journées déjà passé</p>
                    </div>
                )
            } else if(val2 <= -1){
                return(
                    <div style = {{display : 'flex', width : '100%', borderRadius : 7, padding : '16px 0', justifyContent : "center", alignItems : 'center', backgroundColor : 'rgba(255, 0, 0, 0.222)' }}>
                        <p style = {{color : 'rgb(129, 0, 0)'}}>La séléction ne peut se faire <strong>Négativement</strong></p>
                    </div>
                )
            } else if (jour1 && jour2 && val2 > -1){
                return(
                    <div>
                        <p>La location s'étalera sur un durée de <strong>{un()} jour(s) </strong></p>
                        <p>Du <strong>{debut}</strong> au <strong>{fin}</strong> </p>
                        <p></p>
                        <p style = {CalPrix}>Prix Total de la Location {calcPrix()} </p>
                    </div>
                )
            }

        }

        function Boite(){
            
            if (data.bv === 'Manu'){
               let BV = 'Manuelle'
                return  BV
            } else {
                let BV = 'Automatique';
                return BV
            }
        }

        


        return(
            <div 
                className = 'littleModal'
            >
                <motion.div className = 'lite' 
                    exit = "out"
                    initial = "out"
                    animate = "in"
                    variants = {modalTransition}
                >
                    <div className = 'headerDesc'>
                        <div className = 'imgs'>
                            <img src = {car_2} height = {choice} alt = 'Images'/>
                        </div>
                        <div className = 'desc'>
                            <div>
                                <p className ='mark'>{data.marque} </p>
                                <p className ='model'>{data.modele} </p>
                                <br/>
                                <div className = 'fourLogo'>
                                    <p className = 'fournis'>fornisseur : {'V909-Rent'} </p>
                                    <p>Note : <strong>{data.note} / 5</strong></p>
                                    <img src = {logo} alt = 'logo' />
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = 'module' >
                        <p className = "p"><img src={bv} style = {imgs} alt ="images"/> {Boite()}</p>
                        <p className = 'p'><img src={clim} style = {imgs} alt ="images"/>{data.clim}</p>
                        <p className = 'p'><img src={anns} style = {imgs} alt ="images"/>{data.ans}</p>
                        <p className = "p"><img src={arg} style = {imgs} alt ="images"/><strong>{prix} </strong> /jr</p>
                    </div>
                    <div className = 'des'>
                        <p className = 'ti'>Description du service</p>
                        <p>Véhicule offert avec un Chauffeur, pour vos deplacements - La prise en charge du chauffeur est a vos soins - <strong>Kilométrage limité par jour :</strong> 250 Km </p>
                    </div>
                    {/* <div className = 'nb'>
                        <p><strong>NB :</strong>  Suite à certains problèmes techniques, nous vous proposont de continuer la discusion via WhatsApp</p>
                    </div> */}
                    <div className = 'form' >
                        <form onSubmit = {this.handleSubmit}>
                            <label>Nom et Prénom</label>
                            <input className ='text' type ='text' value = {this.state.name} onChange = {this.nameChange} />
                            <label>Ville de Résidence</label>
                            <input className = 'text' type ='text' value = {this.state.ville} onChange ={this.villeChange} />
                            <label>Date</label>
                            <div className = 'grid-2bis' >
                                <div className = 'T'>
                                    <input type = 'date' className = 'date'
                                    min = {date.toLocaleDateString()} 
                                    value = {this.state.eventType}
                                    onChange = {this.typeChange}
                                    style = {input} />
                                </div>
                                <div className = 'T'>
                                    <input type = 'date' className = 'date'
                                    min = {date.toLocaleDateString('fr-FR')} 
                                    value = {this.state.dayNbrs}
                                    onChange = {this.dayNbrsChange}
                                    style = {input} />
                                </div>
                            </div>
                                {UseDate()}
                            <div>
                                <div className = 'bottom' style = {opacity} >
                                    <p>Cette opération sera validé via votre <strong>WhatsApp</strong>. Cliquez sur le bouton pour continuer</p>
                                    <button type = 'submit' className = 'btn'  ><a href ={`https://wa.me/237655733765?text=Nom%20Clien%20:%20M./Mme%20${content.customer};%20Voiture%20solicité%20:%20${data.marque}%20${data.modele}%20${data.ans};%20Ville%20:%20${content.ville};%20Durée%20:%20${content.eventType}jours;%20%20%20A%20compter%20du%20:%20${content.dayNbrs}`} >Valider</a></button>
                                    <div style = {bloc}></div>
                                </div>
                            </div>
                        </form>
                        
                    </div>
                    <div className = 'absolute' >
                            <div>
                                    <Link className = 'close' >
                                         <img src={close} alt='close'/>
                                    </Link>
                            </div>
                        </div>
                </motion.div>                
            </div>
        )
    }
}

const input = {height : 32, boxSizing : 'border-box', width : '100%', marginTop:'5px'}
const imgs = {width : 16}
let choice = 220
const CalPrix = {fontSize : 16, fontWeight : 400, color : 'red'}
if (window.screen.width <= 400){
    input.height = 60
    imgs.width = 36
    choice = 360
    CalPrix.fontSize = 32
} 
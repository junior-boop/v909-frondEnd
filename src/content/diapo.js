import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import data from '../db.json';
import left from '../design/Untitled-1.png'
import right from '../design/Untitled-2.png'
import {takeWithoutSell} from '../page/modal'
// css
import './content.css';
import Items from './items';



const landing  = {
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'start',
    width : '100%',
    height : 400,
    backgroundColor : 'rgba(22, 22, 22)' 
}

const title = {
    display : 'inline',
    fontSize : 28,
    fontWeight : 700,
    color : 'white',
}

const items = {
    display : 'inline-block',
    marginRight : 24
}

const imgs = {
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    width : 215,
    height : 120,
    backgroundColor : 'white',
    borderRadius : '12px',
    overflow : 'hidden',
    marginBottom : 10
}
const prix = {
    fontWeight : 500,
    marginBottom : 10,
    color : 'white'
}

const mark = {
    fontSize : 16,
    marginBottom : 10,
    fontWeight : 300,
    color : 'white'
}



const horizontalScroll = {
    display : 'flex',
    width : '100%',
    overflow : 'hidden'
}

if(data.achat.length < 20){
    landing.display = 'none'
}

export default class Diapo extends Component {

    constructor(props){
        super(props);
        this.state = {initial : 0};
        this.left = this.left.bind(this);
        this.right = this.right.bind(this);
    }

    componentDidMount(){
        if(this.state.initial < 0){
            return this.state.initial = 0
        }
    }

    left(n){
        const m = n + this.state.initial
        this.setState({initial : m})
        if(this.state.initial >= 0){
            this.setState({initial : 0})
        }
        return this.state.initial
    }

    right(n){
        const m = n + this.state.initial
        this.setState({initial : m})
        console.log(this.state.initial)
        if(this.state.initial <= -340){
            this.setState({initial : 0})
        }
        return this.state.initial
    }
    
    render(){
        const _ = this.props
        const history = _.history
        const match = _.match
        const location = _.location
        const db = data.achat.reverse()

        const btnLeft = {cursor : 'pointer', position : 'relative',  left : -15, zIndex : 10, boxShadow : '0 5px 5px 0px black', borderRadius : 25}
        const btnRight = {cursor : 'pointer', position : 'relative', right : -15, zIndex : 10, boxShadow : '0 5px 5px 0px black', borderRadius : 25}

        const content = {
            display : 'inline-flex',
            position : 'relative',
            left : this.state.initial,
            transition : 'all ease-in-out 0.3s'
        }

        if(this.state.initial >= 0){
            btnLeft.opacity = 0
        }

        console.log()

        return(
            <div style = {landing} >
                <div className ='container'>
                    <div style = {{margin : '20px 0px', height : 50}}>
                        <p style = {title}>Quelques Nouveautés</p>
                    </div>
                    <div style = {horizontalScroll} id = 'cove'>
                        <div style = {{
                            width : 1081
                        }} >
                                <div style = {{
                                position : 'absolute',
                                display : 'flex',
                                justifyContent : 'space-between',
                                alignItems : 'center',
                                width : 1081,
                                height : 200
                            }}>
                                <img height = '45px' src = {left} alt ='left' style = {btnLeft} onClick ={() => this.left(175)} />
                                <img height = '45px' src = {right} alt ='right' style = {btnRight} onClick ={() => this.right(-175)}/>
                            </div>
                                                
                            <div style = {content} id = 'cont'>
                                {
                                    takeWithoutSell(6, db).map((el) =>  <OtherItems history = {history} match = {match} location = {location} db = {el} />)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class OtherItems extends Component {
    render(){
        const _ = this.props
        const history = _.history
        const location = _.location
        const data = _.db
        const img = data.imgs[0].img

        const price = new Intl.NumberFormat('fr-FR', {style :'currency', currency : 'XAF'}).format(data.prix_vent)
        return(
            <Link
                to = {{
                    pathname : _.match.url,
                    search : `?modal=true `, 
                    state : data
                }}
            >
                <div style = {items} >
                    <div style = {imgs} >
                        <img height = '150px' src = {img} alt ={img} />
                    </div>
                    <div>
                        <p style = {mark} >{data.mark} {data.model} {data.ans} </p>
                        <p style = {prix} >{price} </p>
                        <p style = {mark} >{data.ville}</p>
                    </div>
                </div>
            </Link>
        )
    }
}
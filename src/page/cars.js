import React, { Component } from 'react';
import '../content/content.css';
import Items from '../content/items';
import SlidePub from '../content/slidePub';
import db from '../db.json'
import { motion } from 'framer-motion'
import Diapo from '../content/diapo';

export const pageTransition = {
    in : {
        opacity : 1,
        y : 0,
    },
    out : {
        opacity : 0,
        y : '150px'
    }
}

export const modalTransition = {
    in : {
        opacity : 1,
        y : 0,
    },
    out : {
        opacity : 0,
        y : '250px'
    }
}


const car = [
    {
        mark : 'Toyota',
        model : ['Corolla', 'Yaris', 'Avensis']
    },
    {
        mark : 'Peugeot',
        model : ['306', '305', '207']
    },
    {
        mark : 'Renauld',
        model : ['Clio', 'Zoe', 'jenesaispas']
    }

]


const Style = {
    display : 'flex'
}

if(db.achat.length <= 20){
    Style.display = 'none'
}

export default class Voiture extends Component{
    constructor(props){
        super(props)
        this.state = {value_1 : '', value_2 : ''}
        this.handleChange = this.handleChange.bind(this)
        this.handleChange_2 = this.handleChange_2.bind(this)
        this.handleContent = this.handleContent.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({value_1 : event.target.value})
    }

    handleChange_2(event){
        this.setState({value_2 : event.target.value})
    }

    handleContent(event){
        console.log(this.state.value_1, this.state.value_2)
        event.preventDefault()
    }

    handleSubmit(event){
        console.log(this.state.value_1, this.state.value_2)
        event.preventDefault()
    }

    componentDidMount(){
        if(this.state.value_1 === ''){
            return this.setState({value_2 : ''})
        }
    }

    render(){
        const _ = this.props;
        const history = _.history
        const match = _.match;
        const location =  _.location;
        const staticContext = _.staticContext
        const product = db.achat

        let value_1 = this.state.value_1;
        let value_2 = this.state.value_2;

        const element = () => {
            let Ar = []
            car.filter((el) => {
                if(el.mark === this.state.value_1){
                    let model = el.model
                    for (let a of model){Ar.push(a)}
                }
            })
            return Ar
        }

        const element_2 = () => {
            let Ar = []
            if (value_1 || value_2){
                product.map((el) => {
                    if(value_1 === el.marque && value_2 === el.modele){
                        Ar.push(el)
                    }
                })
            }
            if (!value_1 || !value_2){
                product.map((el) => {
                   Ar.push(el)
                })
            }
            return Ar 
        }
        const affiche_1 = () => {
            let Ar = [];
            product.map((el) => {
                if(value_1 === el.marque && value_2 !== el.modele){
                    
                    Ar.push(el)
                }
            })
            return Ar
        }


        const affiche_2 = () => {
            let Ar = [];
            product.map((el) => {
                if(value_1 !== el.marque && value_2 !== el.modele){
                    
                    Ar.push(el)
                }
            })
            return Ar
        }

        function section_1() {
            if(!value_1 && !value_2){
                return product.map((el, key) => <Items db = {el} route = {match} location = {location} id = {key} />) 
            } else if( !product ){
                return <p>Base de Donnée vide pour le moment</p>
            } else {
                return element_2().map((el, key) => <Items db = {el} route = {match} location = {location} id = {key} />)
            }
        }

        console.log(_)


        return(
            <motion.div className = "body" 
            exit = "out"
            initial = "out"
            animate = "in"
            variants = {pageTransition}
            >
                {
                    window.screen.width >= 1081
                    ? <Diapo history = {history} match = {match} location = {location} staticContext = {staticContext} />
                    : null
                }
                <div className ="container" >
                    <SlidePub />
                    <Marques />
                    {!value_1 || !value_2 ? (<Title title ='Toutes les Voitures'/>) : (<Title title ={`Toutes les ${value_1} ${value_2} (${element_2().length})`}  />)}
                    <div className = 'grid'>
                        <div id = 'items' className = 'items' style = {Style} >
                            <div className ='search'>
                                <form onChange = {this.handleContent}  onSubmit = {this.handleSubmit}>
                                    <label>Faites votre Recherche</label>
                                    <select
                                    value = {this.state.value_1} 
                                    onChange = {this.handleChange} 
                                    className = 'marque'
                                    style = {{fontFamily: 'Montserrat', fontWeight : 500}}
                                    >
                                        <option value = ''>Marques</option>
                                        {car.map((el, keys)=> <option value ={el.mark}>{el.mark}</option>)}
                                    </select>
                                    <select
                                    value = {this.state.value_2}
                                    onChange = {this.handleChange_2}
                                    className = 'model'
                                    style = {{fontFamily: 'Montserrat', fontWeight : 500}}
                                    >
                                        {element().length === 0 ? (<option value =''> Le Modèle</option>) : (<option value =''>{element().length} Modèles disponible</option>)}
                                        {element().map((el) => (<option value ={el}>{el}</option>))}
                                    </select>
                                    {/* <select className ='carburant'>
                                        <option value =''>Carburant</option>
                                    </select> */}
                                    <input type='submit' value= 'Recherche' />
                                </form>
                            </div>
                        </div>
                        
                        {/* {
                            !value_1 && !value_2 
                            ? product.map((el, key) => <Items db = {el} route = {match} location = {location} id = {key} />) 
                            : element_2().map((el, key) => <Items db = {el} route = {match} location = {location} id = {key} />)
                        } */}
                        {section_1()}
                    </div>
                    {value_1 && value_2 ? (<Title title ={`Autres Propositions de ${value_1}`}/>) : null}
                    <div className = 'grid'>
                        {
                            value_1 && value_2
                            ? affiche_1().map((el, key) => <Items db = {el} route = {match} location = {location} id = {key} />)
                            : null
                        }
                    </div>
                    {value_1 && value_2 ? (<Title title ={`Le reste de marque`}/>) : null}
                    <div className = 'grid'>
                        {
                            value_1 && value_2
                            ? affiche_2().map((el, key) => <Items db = {el} route = {match} location = {location} id = {key} />)
                            : null
                        }
                    </div>
                </div>
            </motion.div>
        )
    }
}


export function Title(props){
    return(
        <div className = "title">
            <p>{props.title}</p>
        </div>
    )
}


function Marques (props){
    let labels = props.label
    const elements = (m, index) => {
        return (
            <div className = 'elmt'>
                <img src = {m.img} alt = {index} />
            </div>
        )
    }
    const verifiaction = () => {
        if (labels){
            return(
                <div>
                    {labels.map((el, key) => elements(el, key))}
                </div>
            )        
        } else {
            return (
                <div>
                    <p>Aucune marques pour le moment</p>
                </div>
            )
        }
    }

    return(
        <div className = 'liste'>
            {verifiaction()}
        </div>
    )
}

const take = (n, arr) => {
    let NArr = []
    let i = 0;
    for(i; i < n; i++){ if (arr[i] !== undefined) {NArr.push(arr[i]) } }
    return NArr
}

const takeFrom = (n, arr) => {
    let Ar = []; let i = n;
    for(i; i < arr.lenght; i++){Ar.push(arr[i])}
    return Ar
}
import React, {Component} from 'react';
import Header from '../content/header';
import { Location } from '../content/items';
import { Title } from './cars';
import db from '../db.json'
import { motion } from 'framer-motion'


import { pageTransition } from './cars'


const car = ['Toyota', 'Renauld', 'Mercedes', 'Vols Wagen', 'Hyundai']

export default class Locat extends Component{
    constructor(props){
        super(props);
        this.state = {value_1 : ''};
        this.handleChange = this.handleChange.bind(this)
        this.handleContent = this.handleContent.bind(this)
    }

    handleChange(event){
        this.setState({value_1 : event.target.value})
    }

    handleContent(event){
        console.log(this.state.value_1)
        event.preventDefault()
    }

    render(){

        const _ = this.props
        const data = db.locations
        const value = this.state.value_1
        console.log(_)

        const match = _.match
        const location = _.location
        const history = _.history
        
        const element_2 = () => {
            let Ar = []
            if (value){
                data.map((el) => {
                    if(value === el.marque){
                        Ar.push(el)
                    }
                })
            }
            return Ar 
        }
        const affiche_1 = () => {
            let Ar = [];
            data.map((el) => {
                if( value !== el.modele){
                    Ar.push(el)
                }
            })
            return Ar
        }

        if (window.innerWidth === 720){
            console.log('nous y sommes')
        }
        return(
            <motion.div 
                className = "body"
                exit = "out"
                initial = "out"
                animate = "in"
                variants = {pageTransition}
                
            >
                <div className = 'container'>
                    <Header />
                    <div className='localSearch'>
                        <div className = 'locationSearch'>
                            <form onChange = {this.handleContent}>
                                <select 
                                value = {this.state.value_1}
                                style = {{fontFamily: 'Montserrat', fontWeight : 500, fontSize : '30px', textAlign : "center"}}
                                onChange = {this.handleChange}
                                >
                                    <option value ='' style = {{border : 'none'}}>Touts Les Marques</option>
                                    {car.map((el, keys)=> <option value ={el}>{el}</option>)}
                                </select>
                            </form>
                        </div>
                    </div>
                    {value ? (<Title title = {`Toutes Les ${value} disponibles (${element_2().length})`} />) : (<Title title = 'Toutes Les Voiture en locations'/>) }
                    <div className = 'grid-4'>
                    {
                            !value 
                            ? data.map((el, key) => <Location data = {el} route = {match} location = {location} id = {key} />) 
                            : element_2().map((el, key) => <Location data = {el} route = {match} location = {location} id = {key} />)
                        }
                    </div>
                    {value ? (<Title title ={`Le reste de marque disponible`}/>) : null}
                    <div className = 'grid-4'>
                        {
                            value
                            ? affiche_1().map((el, key) => <Location data = {el} route = {'match'} location = {'location'} id = {'key'} />)
                            : null
                        }
                    </div>
                    </div>
                    
            </motion.div>
            
        )
    }
}


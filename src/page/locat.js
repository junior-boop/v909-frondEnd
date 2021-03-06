import React, {Component} from 'react';
import Header from '../content/header';
import { Location } from '../content/items';
import { Title } from './cars';
import db from '../db.json'
import { motion } from 'framer-motion'

import locations from '../content/database/locations'

import copy from '../copy.json'

import { pageTransition } from './cars'

// const api = 'https://api.npoint.io/e909dbcf64f0a7193c8b'

// export default async function response(){
//     await fetch(db)
//     .then(response => response.json())
//     .then(dt => {
//         console.log(dt.length)
//     })
//     .catch((error) => {
//     console.error('Error:', error);
//     });
// }

console.log(locations)

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

        const match = _.match
        const location = _.location
        

        const element_2 = () => {
            let Ar = []
            if (value){
                data.map((el) => {
                    if(value === el.mark){
                        Ar.push(el)
                    }
                })
            }
            return Ar 
        }

        const element_test = () => {
            fetch(copy)
            .then(res => res.json())
            .then(data => console.log(data))
        }

        
        const affiche_1 = () => {
            let Ar = [];
            data.map((el) => {
                if( value !== el.model){
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
                        {element_test()}
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


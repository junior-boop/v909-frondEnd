import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import Footer from '../content/footer';
import NavBar from '../content/navbar';
import Contact from '../page/contact';
import Locat from '../page/locat';
import Modal, { LiteModal } from '../page/loginPage';
import Moto from '../page/moto';
import {AnimatePresence} from 'framer-motion'

import '../content/content.css'
import Voiture from '../page/cars';
import logo from '../content/v909.jpg'
import Admin from '../page/admin';
export default class Navigation extends Component {

  render() {
    return (
        <BrowserRouter>
            <NavBar />
            <div className ='vide'>
                <div className ="logo">
                    <img src={logo} alt ="logo"/>
                </div>
            </div>
                <AnimatePresence exitBeforeEnter>
                    <Switch>
                        <Route exact path = '/' component = {Voiture} />
                        <Route  path ='/moto' component = {Moto}/>
                        <Route  path ='/location' component = {Locat}/>
                        <Route  path ='/contact' component = {Us}/>
                    </Switch>
                </AnimatePresence>
            <Footer />
            <Route path ='/' component = {Modal} />
            <Route path = '/' component = { LiteModal } />
       </BrowserRouter>
    );
  }
}





function Loco(){
    return (
        <div className = "body">
            <div className ="container" >
                <Locat /> 
            </div>
        </div>
    )
}

function Us(){
    return (
        <div className = "body">
            <div className ="container" >
                <Contact /> 
            </div>
        </div>
    )
}

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from '../content/footer';
import NavBar from '../content/navbar';
import Contact from '../page/contact';
import Locat from '../page/locat';
import Modal, { LiteModal } from '../page/loginPage';
import {AnimatePresence} from 'framer-motion'

import '../content/content.css'
import Voiture from '../page/cars';
import logo from '../content/v909.jpg'
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
<<<<<<< HEAD
                        <Route exact path = '/' component = {Locat} />
                        <Route exact path ='/achat' component = {Voiture}/>
=======
                        <Route exact path = '/location' component = {Voiture} />
                        <Route exact path ='/' component = {Locat}/>
>>>>>>> 58b4ef0b9affbaa38df59eb8e78879e8766003ad
                        <Route exact path ='/contact' component = {Us}/>
                    </Switch>
                </AnimatePresence>
            <Footer />
            <Route path ='/' component = {Modal} />
            <Route path = '/' component = { LiteModal } />
       </BrowserRouter>
    );
  }
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

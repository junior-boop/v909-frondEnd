import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Route,BrowserRouter as Router, Switch} from 'react-router-dom';
import Footer from '../content/footer';
import NavBar from '../content/navbar';
import Car from './cars';
import Contact from './contact';
import Locat from './locat';
import Modal from './modal';
import Moto from './moto';



export default class Container extends React.Component{
    
    render(){


        return(
            <div> 
                <div>
                    <NavBar />
                    <div className ='vide'></div>
                        <Switch>
                            <Route exact path='/' component = {Home}>
                                <Home />
                            </Route>
                            <Route exact path='/moto' component = {Cycles}><Cycles /></Route>
                            <Route exact path='/location' component ={Loco}><Loco /> </Route>
                            <Route exact path='/contact' component = {Us}><Us /> </Route>
                            <Route> <Modal /> </Route>
                        </Switch>
                        {/* {isModal 
                        ? <Route exact path='/:id' component = {Modal}><Modal /> </Route>
                        : null } */}
                </div>
                <Footer />
               
            </div>
        )
    }
    
}



function Home(){
    return(
        <div className = "body">
            <div className ="container" >
                <Car /> 
            </div>
        </div>
    )
}

function Cycles(){
    return (
        <div className = "body">
            <div className ="container" >
                <Moto /> 
            </div>
        </div>
    )
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



export class Overlay extends Component {
    render(){
        console.log(this.props)
        return createPortal(
            <div style={modalStyle} onClick={this.props.onClick}>
                {this.props.children}
            </div>,
            document.getElementById("modal_root"),
        )
    }
}

const modalStyle = {
    position: "fixed",
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.2)",
    color: "#FFF",
    fontSize: "40px",
  };
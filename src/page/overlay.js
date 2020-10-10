import React, { Component } from 'react';
import { createPortal } from 'react-dom';

export default class Overlay extends Component {
    render(){
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
    width : '100%',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    zIndex : 1000 ,
    backgroundColor: "rgba(0,0,0,0.5)",
  };
import React, { Component } from 'react';
import Overlay from './overlay'
import Infos, { LittleModal } from './modal'
export default class Modal extends Component {

  render() {
    
    const _ = this.props
    const params = new URLSearchParams(_.location.search)
    const data = _.location.state
    return (
      params.get('modal') 
      && <Overlay><Infos db = {data} location = {_.location} route = {_.match} /></Overlay>
    );
  }
}

export class LiteModal extends Component {

  render() {
    
    const _ = this.props
    const params = new URLSearchParams(_.location.search)
    const data = _.location.state
    return (
      params.get('lite') 
      && <Overlay><LittleModal db = {data} location = {_.location} route = {_.match} /></Overlay>
    );
  }
}

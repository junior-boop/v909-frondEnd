import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/* initiation of Lowdb */

// fin lowdb


export default class Admin extends Component {

  render() {
    return (
      <div>
          <p><a href = "#">DB</a></p>
          <Link >Open modal</Link>
      </div>
    );
  }
}

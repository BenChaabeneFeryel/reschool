import React, { Component } from 'react'
import InterHeader from './InterHeader';
import Interfooter from './InterFooter';
import InterMain from './InterMain';

export default class Accueil extends Component {
  render() {
    return (
      <div>
        <InterHeader/> 
        <br/>
        <InterMain/>
        <Interfooter/>
      </div>
    )
  }
}

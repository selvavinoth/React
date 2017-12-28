import React, { Component } from 'react';
import './App.css';
import FOOTER from './footer';
import HEADER from './Header';
import NAV from './Nav';
import ARTICLE from './Article';
import FORM from './Form';

const Countries = ['India','SriLanka','Nepal','India']

class App extends Component {
  
  render() {
    return (
      <div>
        <HEADER/>
        <NAV Countries={Countries} number={'qwerty'}/>
        <ARTICLE/>
        <FORM/>
        <FOOTER/>
      </div>
    );
  }
}

export default App;

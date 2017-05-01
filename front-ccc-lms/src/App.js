import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Header} from './header.js';

const menu= [{'title':'Home','url':'#','icon':'	glyphicon glyphicon-home'},{'title':'Scoreboard','url':'#','icon':'	glyphicon glyphicon-sort-by-attributes-alt'},{'title':'News','url':'#','icon':'	glyphicon glyphicon-info-sign'}];

class App extends Component {
  render() {
    return (
      <Header menu={menu}></Header>
    );
  }
}

export default App;

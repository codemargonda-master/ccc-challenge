import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Navbar, Biodata} from './components/hello.js';

const menu = [
  {title:"Home", url:"/"},
  {title:"Code", url:"http://codemargonda.com"},
  {title:"Facebook", url:"http://facebook.com"}
]

class App extends Component {
  render() {
    return (
      <div>


    <Navbar judul="WEB " menu ={menu}></Navbar>
    <Biodata nama="Ravi" hobby="Secure the web"></Biodata>
    <Biodata nama="Ega" hobby="kepoin jessen"></Biodata>
    <Biodata nama="Jessen" hobby="Maiin sama bu Yanti"></Biodata>
    <Biodata nama="Gungde" hobby="kepoin orang"></Biodata>
    </div>
    );
  }
}

export default App;

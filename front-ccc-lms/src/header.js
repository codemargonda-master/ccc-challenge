import React, {Component} from 'react';

const Header = ({menu}) =>
<div>
<nav className="navbar navbar-inverse navbar-fixed-top">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">Quiz Challenge</a>
    </div>
    <ul className="nav navbar-nav">
    {menu.map(function(menu,index){
      return <li><a href={menu.url}><span className={menu.icon}></span> {menu.title}</a></li>
    })}
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <li><a href="#"><span className="glyphicon glyphicon-user"></span> Register</a></li>
      <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
    </ul>
  </div>
</nav>
<div className="jumbotron">
<div className="container">
<h1>Course Challenge</h1>
<p>Kerjakan semua challenge yang ada, dapatkan poin sebanyak-banyaknya</p>
</div>
</div>
</div>
export {Header};

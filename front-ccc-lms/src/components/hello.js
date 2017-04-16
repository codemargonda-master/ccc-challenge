import React, {Component, PropTypes} from 'react';




const Navbar = ({judul, menu})=>
<nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul className="nav navbar-nav">
    {menu.map(function(item, index){
      let classactive = "";
      if(index==0){
        classactive = "active";
      }
      return <li className={classactive}><a href={item.url}>{item.title}</a></li>
    })
    }
    </ul>

  </div>
</nav>


Navbar.propTypes = {
  menu : PropTypes.array,
}


const Biodata = ({nama, hobby})=>
<div>
  <h1>Nama : {nama}</h1>
  <h2>Hobby : {hobby}</h2>
  <br/>
</div>

export {Navbar, Biodata};

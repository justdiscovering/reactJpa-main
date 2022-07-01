import React from 'react';
import './NavBar.css';
import {Link } from 'react-router-dom';
let num = 1;



function NavBar(){

  function change(){
    if(num){
      document.getElementById("data").style = 'display: flex';
      num = 0;
    }else{
      document.getElementById("data").style = 'display: none';
      num= 1;
    }
  }
    (
      <div className='nav-container'>
        <div className='Logo'>
          <h1>Storian</h1>
          <h1 onClick={change} className="menu-bar">&#9776;</h1>
        </div>
        <div id="data" className="Links-NavBar">
          <Link className="hover" exact to="/" activeClassName="active">Home</Link>
          <Link className="hover" exact to="/Cadastro" activeClassName="active">Cadastre um livro</Link>
        </div>
      </div>
    )
 
};


export default NavBar;

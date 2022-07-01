import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import App from './App'
import Alterar from './Alterar';





ReactDOM.render(
  <BrowserRouter>
    <Routes >
      <Route exact path='/' element={<App />}/>
      <Route path="/Alterar" element={ <Alterar/> }/>
    </Routes >
  </BrowserRouter>
  ,
  document.getElementById('root'));

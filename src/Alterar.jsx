import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import AlterarLivro from './AlterarLivro';



const Alterar = () =>{
  return (
    <div className="Body">
      <NavBar />
      <AlterarLivro/>
      <Footer/>
    </div>
  )
}


export default Alterar;
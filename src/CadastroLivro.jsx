import React from 'react';
import './LoginAndRegister.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios';





  return (
    <>
      <div className="CadastroLivro">
        <h1>Registre o seu livro</h1>
        <form className="needs-validation" action='#' method="" novalidate>
            <div>
              <label className="form-label" for="titulo">Título</label>
              <input className="form-control" id="titulo" type="text" placeholder="Insira o título do livro" name="titulo" required></input>
            </div>
            
            <div>
              <label className="form-label" for="autor">Autor</label>
              <input className="form-control" id="autor" type="text" placeholder="Insira o nome do autor" name="autor" required></input>
            </div>

            <div>
              <label className="form-label" for="descricao">Descrição</label>
              <input className="form-control" id="descricao" type="text" placeholder="Insira a descrição do livro" name="descricao" required></input>
            </div>
            
            <button className="btn btn-md btn-warning" onClick={registrar}>Cadastrar livro</button>

        </form>

      </div>
    </>
  );



export default Cadastro;
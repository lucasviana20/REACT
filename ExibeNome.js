//Exibi o nome digitado na caixa após o OK.
import { useState } from 'react';
import React from 'react';
import './App.css';

function Exibe(){
  function handleChange(event) {
    setNome(event.target.value);//Armazena o valor digitado na variável nome
  }
  
  const [nome,setNome]=useState();
  const [submit,setSubmit]=useState();

  return (
    <div>
      <a>Digite seu nome:</a>
      <form>
        <input type='text' onChange={handleChange}/>///"onChange" Cada mudança realizada dentro da caixa atualiza o variável.
        <button onClick={e=>{
          e.preventDefault()
          setSubmit(nome)}}> Ok </button>
      </form>
      {submit}
    </div>
  );
}
export default Exibe;

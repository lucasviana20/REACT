import { useEffect, useState } from 'react';
import './App.css';

function Tempo(){
   const [num,setNum]=useState(0);

   return (
     <div>
        <a>A contagem está em:</a>
        {num} //As chaves permite que você escreva em JS no HTML
        <button onClick={e=>setNum(num+1)}> Aumentar </button> //O click no botão incrementa o contador 
      </div>
    );
}

export default Tempo;

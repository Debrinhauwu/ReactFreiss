import "./index.scss";
import Cabecalho from "../../components/cabecalho";
import TituloEnunciado from "../../components/tituloEnunciado";
import { useState } from "react";

function Exec02() {
    const [vlKg, setVlKg] = useState (0);
    const [vlG, setVlG] = useState (0);

function conversao(){
    let conversao = vlKg * 1000
    setVlG(conversao)
}


  return (
    <div className="pagina-exec02">
      <Cabecalho />

      <TituloEnunciado
        descExec={"02 - Converter Kg/gramas"}
        textoEnunciado={
          "Implementar um programa em Javascript para converter kilos em gramas."
        }
        corLinha={"#B3FF37"}
      />

      <div className="Exercicio">
        <div className="exercicio">
          <h3>Valor em kilos</h3>
          <input type="text" placeholder="1" onChange={e => setVlKg(e.target.value)} />
     
          <button onClick={conversao}>Executar</button>
        </div>
        <h3>Resultado: O total é {vlG} gramas</h3>
      </div>
    </div>
  );
}

export default Exec02;
